import { Container, Heading } from '@chakra-ui/react';
import { Modal, TextInput } from '..';
import { useGem } from './hooks/useGem';

export const Gem = () => {
  const { handlers, loading, newText, isOpen } = useGem();
  const { closeModal, generateText, onSave } = handlers;

  return (
    <>
      <Container maxW="3xl" centerContent>
        <Heading color="white">Enter Gem Text</Heading>
        <TextInput generateText={generateText} />
      </Container>
      <Modal
        text={newText}
        loading={loading}
        isOpen={isOpen}
        onSave={onSave}
        closeModal={closeModal}
      />
    </>
  );
};
