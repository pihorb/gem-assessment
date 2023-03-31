import { Box, Text, Image, Flex } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent="center" alignItems="center">
        <Image src="/openai.png" marginRight={1} alt="Open AI" />
        <Text>Powered By Open AI</Text>
      </Flex>
    </Box>
  );
};
