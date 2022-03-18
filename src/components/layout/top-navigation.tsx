import { Box, Container, Flex, Text, Button } from '@chakra-ui/react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const TopNavigation = () => {
  const { data: session } = useSession()

  return (
    <Box w="full" bgColor="gray.200" p={4}>
      <Container maxW="container.lg" mx="auto" p={0}>
        <Flex justify="space-between">
          <Text>Top Navigation</Text>

          {session?.user ? (
            <Flex alignItems="center">
              <Text>Hi, {session?.user?.name}</Text>
              <Button ml={4} onClick={() => signOut({ callbackUrl: '/login' })}>
                Logout
              </Button>
            </Flex>
          ) : (
            <Link href="/login" passHref>
              <Button as="a" colorScheme="yellow" size="sm">
                Login
              </Button>
            </Link>
          )}
        </Flex>
      </Container>
    </Box>
  )
}

export default TopNavigation
