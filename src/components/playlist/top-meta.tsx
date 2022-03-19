import { Box, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

import { Playlist } from '~types/playlists'

const TopMeta = ({ playlist }: { playlist: Playlist }) => {
  return (
    <Flex
      flexDir={['column', 'row']}
      alignItems="center"
      w="full"
      shadow="md"
      rounded="lg"
      bgGradient="linear(to-b, green.300, gray.700)"
      p={8}
      gap={4}
    >
      <Box minW="250px">
        <Image src={playlist.images[0].url} width={250} height={250} />
      </Box>
      <Heading fontSize={['3xl', '5xl']} color="white">
        {playlist.name}
      </Heading>
    </Flex>
  )
}

export default TopMeta
