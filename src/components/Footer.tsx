import { Box, Text, Image, Flex } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box p={5} display="flex" justifyContent="center">
      <Flex justifyContent="center" alignItems="center">
        <Image src="/openai.png" marginRight={1} alt="Open AI" />
        <Text>Powered By Open AI</Text>
      </Flex>
    </Box>
  );
};
