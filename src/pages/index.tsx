import type { NextPage } from 'next'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const HomePage: NextPage = () => {
  return (
    <Flex flexDir="column" mx="auto">
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto numquam in non?</Text>

      <Box>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, dignissimos.</Box>
    </Flex>
  )
}

export default HomePage
