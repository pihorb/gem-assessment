import { Box } from '@chakra-ui/react';
import { Header } from './Header';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box bg="blackAlpha.900" color="white" minH="100vh" padding={'100px 0'}>
        {children}
      </Box>
    </>
  );
};
