import { Box, Container, Flex, Text, Button, Link as ChakraLink } from '@chakra-ui/react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { HiOutlineLogout } from 'react-icons/hi'

const TopNavigation = () => {
  const { data: session } = useSession()

  return (
    <Box w="full" bgColor="gray.200" shadow="sm" p={4}>
      <Container maxW="container.lg" mx="auto" p={0}>
        <Flex flexDir={['column', 'row']} gap={[2, 0]} justify="space-between" alignItems="center">
          <Link href="/" passHref>
            <ChakraLink fontWeight="black">TopSpot</ChakraLink>
          </Link>

          {session?.user ? (
            <Flex alignItems="center">
              <Text>Hi, {session?.user?.name}</Text>
              <Box as="span" mx={4}>
                |
              </Box>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => signOut({ callbackUrl: '/login' })}
                rightIcon={<HiOutlineLogout />}
              >
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
