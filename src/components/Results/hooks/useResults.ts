import { useAppContext } from '@/context/appContext';
import { useState } from 'react';
import { useToast } from '@chakra-ui/react';

export const useResults = () => {
  const toast = useToast();
  const { gemText, prevGemText } = useAppContext();
  const [assessment, setAssessment] = useState('');
  const [loading, setLoading] = useState(false);

  const generateText = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_OPENAI_API_URL ?? '',
        getOptions(gemText)
      );
      const json = await response.json();
      setAssessment(json.choices[0].text.trim());
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const submit = () => {
    if (gemText === '') {
      toast({
        title: 'Text field is empty.',
        description: 'Please open home page.',
        status: 'error',
        duration: 5000,
        isClosable: false,
      });
      return;
    }

    generateText();
  };

  return {
    prevGemText,
    assessment,
    loading,
    gemText,
    handlers: {
      submit,
    },
  };
};

function getOptions(text: string) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt:
        'Create assessment form 5 to 10 questions max based on text below:\n\n' +
        text +
        '',
      temperature: 0.5,
      frequency_penalty: 0.8,
      presence_penalty: 0.0,
      max_tokens: 200,
    }),
  };
}
