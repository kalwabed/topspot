import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

import TopNavigation from './top-navigation'

const LayoutRoot: React.FC = ({ children }) => {
  return (
    <Flex flexDir="column" flex="1 1 auto" minH="full" width="full">
      <TopNavigation />
      <Box as="main" maxW="container.lg" w="full" mx="auto">
        {children}
      </Box>
    </Flex>
  )
}

export default LayoutRoot
