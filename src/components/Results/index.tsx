import {
  Box,
  Button,
  CircularProgress,
  Container,
  Heading,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useResults } from './hooks/useResults';

export const Results = () => {
  const { assessment, handlers, gemText, loading, prevGemText } = useResults();

  return (
    <Container maxW="80%" centerContent>
      <Box display="flex" mb={10} w={'100%'}>
        <Box
          flex={1}
          border={'1px solid white'}
          borderRadius="5px"
          p={5}
          mr={10}
        >
          <Heading as="h4" size="md" color="white" pb={3}>
            Before:
          </Heading>
          <Text>{prevGemText}</Text>
        </Box>
        <Box flex={1} border={'1px solid white'} borderRadius="5px" p={5}>
          <Heading as="h4" size="md" color="white" pb={3}>
            Now:
          </Heading>
          <Text>{gemText}</Text>
        </Box>
      </Box>
      <Button
        disabled
        bg="#6002EE"
        _hover={{ bg: '#7E3FF2' }}
        color="white"
        width="100%"
        onClick={handlers.submit}
      >
        Create assessment
      </Button>
      {(assessment || loading) && (
        <Box
          display="flex"
          flexDirection="column"
          mt={10}
          w={'100%'}
          border={'1px solid white'}
          borderRadius="5px"
          p={5}
        >
          <Heading as="h4" size="md" color="white" pb={3}>
            Assessment:
          </Heading>
          {loading ? (
            <CircularProgress isIndeterminate color="blue.300" />
          ) : (
            <Text>{assessment}</Text>
          )}
        </Box>
      )}
    </Container>
  );
};
