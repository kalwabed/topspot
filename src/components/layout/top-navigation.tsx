import {
  Box,
  Container,
  Flex,
  Text,
  Button,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiChevronDown } from 'react-icons/hi'

const TopNavigation = () => {
  const { data: session } = useSession()

  return (
    <Box w="full" bgColor="gray.200" shadow="sm" p={4}>
      <Container maxW="container.lg" mx="auto" p={0}>
        <Flex flexDir={['column', 'row']} gap={[2, 0]} justify="space-between" alignItems="center">
          <Link href="/" passHref>
            <ChakraLink fontWeight="black" fontSize="xl">
              TopSpot
            </ChakraLink>
          </Link>

          {session?.user ? (
            <Menu>
              <MenuButton as={Button} rightIcon={<HiChevronDown />} variant="ghost">
                <Flex alignItems="center">
                  <Image
                    src={session.user.image}
                    alt={`${session.user.name} profile image`}
                    width={32}
                    height={32}
                    objectFit="cover"
                    className="rounded-full"
                  />
                  <Text ml={4}>{session?.user?.name}</Text>
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => signOut({ callbackUrl: '/login' })}>Log out</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Link href="/login" passHref>
              <Button as="a" colorScheme="yellow" size="sm">
                Login
              </Button>
            </Link>
          )}
        </Flex>
      </Container>

      <style jsx global>{`
        .rounded-full {
          border-radius: 50%;
        }

        .rounded-md {
          border-radius: 5px;
        }
      `}</style>
    </Box>
  )
}

export default TopNavigation
