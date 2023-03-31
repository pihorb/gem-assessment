import { useAppContext } from '@/context/appContext';
import { useState } from 'react';

export const useGem = () => {
  const [newText, setNewText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setGemText, setPrevGemText } = useAppContext();

  const generateText = async (text: string) => {
    setLoading(true);
    setIsOpen(true);
    setPrevGemText(text);
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_OPENAI_API_URL ?? '',
        getOptions(text)
      );
      const json = await response.json();
      setNewText(json.choices[0].text.trim());
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
      prompt: 'Rewrite text below by explaining terminology:\n\n' + text + '',
      temperature: 0.5,
      max_tokens: 500,
      top_p: 1.0,
      frequency_penalty: 0.8,
      presence_penalty: 0.0,
    }),
  };
}

// prompt: 'Explain text below including terminology:\n\n' + text + '',
