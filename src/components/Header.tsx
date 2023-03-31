import { Box, Heading, Image } from '@chakra-ui/react';
import Link from 'next/link';

export const Header = () => {
  return (
    <Box
      bg="blackAlpha.900"
      color="white"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="0.5rem 2rem"
    >
      <Link href="/">
        <Image
          src="https://static.gsstaging.net/images/logo/shelf_icon_ukraine.svg"
          alt="logo"
          boxSize="50px"
        />
      </Link>
      <Heading as="h3" size="lg" color="white">
        AI Gem
      </Heading>
    </Box>
  );
};
