import { Box } from '@chakra-ui/react';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children }) => {
  return (
    <Box bg="blackAlpha.900" color="white" minH="100vh">
      <Header />
      <Box padding={'100px 0'}>{children}</Box>
      <Footer />
    </Box>
  );
};
