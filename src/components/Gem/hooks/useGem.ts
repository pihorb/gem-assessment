import { useAppContext } from '@/context/appContext';
import { useState } from 'react';

export const useGem = () => {
  const [newText, setNewText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setGemText } = useAppContext();

  const generateText = async (text: string) => {
    setLoading(true);
    setIsOpen(true);

    try {
      // const response = await fetch(
      //   process.env.NEXT_PUBLIC_OPENAI_API_URL ?? '',
      //   getOptions(text)
      // );
      // const json = await response.json();
      // setNewText(json.choices[0].text.trim());
      setNewText(
        "Recursion is a way of solving problems by breaking them down into smaller and simpler sub-problems. It's a method of repeating a process, in which each iteration is based on the results of the previous one. This process continues until the problem is solved. To keep track of each"
      );
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSave = () => {
    setGemText(newText);
  };

  return {
    newText,
    isOpen,
    loading,
    handlers: {
      closeModal,
      generateText,
      onSave,
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
      prompt: 'Explain text in simple way:\n\n' + text + '',
      temperature: 0.5,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.8,
      presence_penalty: 0.0,
    }),
  };
}
