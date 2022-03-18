import { Flex } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import React from 'react'

import LoginForm from '~components/login/form'

export const getServerSideProps: GetServerSideProps = async props => {
  const { req } = props

  const session = await getSession({ req })

  if (session) {
    return {
      props: {},
      redirect: {
        destination: '/'
      }
    }
  }

  return { props: {} }
}

const LoginPage: NextPage = () => {
  return (
    <Flex my={20} justify="center" w="full">
      <LoginForm />
    </Flex>
  )
}

export default LoginPage
