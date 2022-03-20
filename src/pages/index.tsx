import type { GetServerSideProps, NextPage } from 'next'
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { getSession, useSession } from 'next-auth/react'
import useSWR from 'swr'

import WithAuthorizedUser from '~components/hoc/with-authentication'
import { getUserPlaylists } from '~lib/spotify'
import Playlists from '~components/profile/playlists'
import { useUserContext } from '~contexts/user-context'

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
  const { user } = useUserContext()

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
          src={session?.user?.image}
          alt="User profile"
          objectFit="cover"
          width={120}
          height={120}
          className="rounded-full"
        />

        <Flex flexDir="column" align={['center', 'start']} ml={[0, 8]}>
          <Heading as="h1" fontSize={['4xl', '6xl']}>
            {session?.user?.name}
          </Heading>

          <Text>{user.followers.total} Followers</Text>
        </Flex>
      </Flex>

      <Box w="full" p={8} bgColor="gray.50" rounded="lg" shadow="base" border="1px solid" borderColor="gray.200">
        <Heading fontSize="2xl" mb={8}>
          Playlists
        </Heading>

        {playlists ? <Playlists playlists={playlists?.data} /> : <Text textAlign="center">Belum ada playlists</Text>}
      </Box>
    </VStack>
  )
}

export default WithAuthorizedUser(HomePage)
