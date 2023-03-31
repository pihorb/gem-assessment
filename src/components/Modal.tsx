import {
  Text,
  Button,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  CircularProgress,
} from '@chakra-ui/react';
import Link from 'next/link';

type Props = {
  isOpen: boolean;
  loading: boolean;
  text: string;
  closeModal: () => void;
  onSave: () => void;
};

export const Modal = ({ text, loading, isOpen, closeModal, onSave }: Props) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={closeModal}>
      <ModalOverlay background={'rgba(0, 0, 0, 0.8)'} />
      <ModalContent minW={700}>
        <ModalHeader>Result</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" alignItems="center" justifyContent="center">
          {loading ? (
            <CircularProgress isIndeterminate color="blue.300" />
          ) : (
            <Text>{text}</Text>
          )}
        </ModalBody>
        <ModalFooter>
          <Link href="/results">
            <Button
              bg="#6002EE"
              _hover={{ bg: '#7E3FF2' }}
              color="white"
              mr={3}
              onClick={onSave}
            >
              Save
            </Button>
          </Link>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};
