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
  const { assessment, handlers, gemText, loading } = useResults();

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
            Text
          </Heading>
          <Text>{gemText}</Text>
        </Box>
        <Box flex={1} border={'1px solid white'} borderRadius="5px" p={5}>
          <Heading as="h4" size="md" color="white" pb={3}>
            Assessment form
          </Heading>
          {loading ? (
            <CircularProgress isIndeterminate color="blue.300" />
          ) : (
            <Text>{assessment}</Text>
          )}
        </Box>
      </Box>
      <Button
        disabled
        bg="blue.500"
        color="white"
        width="100%"
        _hover={{ bg: 'blue.700' }}
        onClick={handlers.submit}
      >
        Create assessment
      </Button>
    </Container>
  );
};
