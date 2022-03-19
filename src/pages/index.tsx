import type { GetServerSideProps, NextPage } from 'next'
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { getSession, useSession } from 'next-auth/react'
import useSWR from 'swr'

import WithAuthorizedUser from '~components/hoc/with-authentication'
import { getUserPlaylists } from '~lib/spotify'
import Playlists from '~components/profile/playlists'

export const getServerSideProps: GetServerSideProps = async props => {
  const { req } = props

  const session = await getSession({ req })

  if (!session) {
    return {
      props: {},
      redirect: {
        destination: '/login'
      }
    }
  }

  return { props: {} }
}

const HomePage: NextPage = () => {
  const { data: session } = useSession()
  const { data: playlists } = useSWR(`/me/playlists/${session.user.email}`, getUserPlaylists)

  return (
    <VStack align="start" w="full" spacing={8} mt={8}>
      <Flex
        flexDir={['column', 'row']}
        w="full"
        alignItems="center"
        p={8}
        bgColor="gray.50"
        rounded="lg"
        shadow="base"
        border="1px solid"
        borderColor="gray.200"
      >
        <Image
          src={session?.user?.image || ''}
          alt="User profile"
          objectFit="cover"
          width={70}
          height={70}
          className="rounded-full"
        />

        <Heading ml={8}>{session?.user?.name}</Heading>
      </Flex>

      <Box w="full" p={8} bgColor="gray.50" rounded="lg" shadow="base" border="1px solid" borderColor="gray.200">
        <Heading fontSize="2xl" mb={8}>
          Playlists
        </Heading>

        {playlists ? <Playlists playlists={playlists?.data} /> : <Text textAlign="center">Belum ada playlists</Text>}
      </Box>

      <style jsx global>{`
        .rounded-full {
          border-radius: 50%;
        }

        .rounded-md {
          border-radius: 5px;
        }
      `}</style>
    </VStack>
  )
}

export default WithAuthorizedUser(HomePage)
