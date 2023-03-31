import { Box } from '@chakra-ui/react';
import { Footer } from './Footer';
import { Header } from './Header';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <Box bg="blackAlpha.900" color="white" minH="100vh">
      <Header />
      <Box padding={'100px 0'}>{children}</Box>
      <Footer />
    </Box>
  );
};
