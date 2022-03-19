import type { NextPage } from 'next'
import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

import WithAuthorizedUser from '~components/hoc/with-authentication'

const HomePage: NextPage = () => {
  const { data: session } = useSession()

  return (
    <Flex flexDir="column" w="full" mt={8}>
      <Flex flexDir={['column', 'row']} alignItems="center" p={8} bgColor="blue.50" rounded="lg" shadow="base">
        <Image
          src={session?.user?.image}
          alt="User profile"
          objectFit="cover"
          width={70}
          height={70}
          className="rounded"
        />

        <Heading ml={8}>{session.user.name}</Heading>
      </Flex>

      <style jsx global>{`
        .rounded {
          border-radius: 50%;
        }
      `}</style>
    </Flex>
  )
}

export default WithAuthorizedUser(HomePage)
