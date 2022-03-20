import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import { BsSpotify } from 'react-icons/bs'
import React from 'react'
import { signIn } from 'next-auth/react'

const LoginForm = () => {
  return (
    <Flex flexDir="column" align="center" justify="center">
      <Heading fontSize="4xl" mb={8}>
        Welcome to TopSpot!
      </Heading>
      <Box maxW="lg" w="full" rounded="lg" p={8}>
        <Button isFullWidth colorScheme="whatsapp" leftIcon={<BsSpotify />} onClick={() => signIn('spotify')}>
          Sign In with Spotify
        </Button>
      </Box>
    </Flex>
  )
}

export default LoginForm
