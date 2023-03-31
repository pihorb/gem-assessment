import { useState } from 'react';
import { Button, Textarea } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

type Props = {
  generateText: (text: string) => void;
};

export const TextInput = ({ generateText }: Props) => {
  const toast = useToast();
  const [text, setText] = useState('');

  const submitText = () => {
    if (text === '') {
      toast({
        title: 'Text field is empty.',
        description: 'Please enter some text .',
        status: 'error',
        duration: 5000,
        isClosable: false,
      });
      return;
    }

    generateText(text);
  };

  return (
    <>
      <Textarea
        bg="white.300"
        padding={4}
        marginTop={6}
        height={200}
        color="black"
        value={text}
        borderColor="white.300"
        onChange={(e) => setText(e.target.value)}
      />

      <Button
        bg="blue.500"
        color="white"
        marginTop={4}
        width="100%"
        _hover={{ bg: 'blue.700' }}
        onClick={submitText}
      >
        Generate
      </Button>
    </>
  );
};
