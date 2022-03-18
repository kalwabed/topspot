import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'

import LoginForm from '~components/login/form'

const LoginPage: NextPage = () => {
  return (
    <Flex my={20} justify="center" w="full">
      <LoginForm />
    </Flex>
  )
}

export default LoginPage
