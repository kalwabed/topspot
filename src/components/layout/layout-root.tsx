import { Flex } from '@chakra-ui/react'
import React from 'react'

import TopNavigation from './top-navigation'

const LayoutRoot: React.FC = ({ children }) => {
  return (
    <Flex flexDir="column" flex="1 1 auto" minH="full" width="full">
      <TopNavigation />
      <Flex as="main" flexDir="column" maxW="container.lg" w="full" mx="auto" mb={12}>
        {children}
      </Flex>
    </Flex>
  )
}

export default LayoutRoot
