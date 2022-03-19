import { Button, Flex, Grid, Text, useDisclosure, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useState } from 'react'

import { Playlist } from '~types/playlists'
import RemoveTrackModal from './remove-track-modal'

const TrackList = ({ playlist }: { playlist: Playlist }) => {
  const [trackUri, setTrackUri] = useState('')
  const { onOpen, onClose, isOpen } = useDisclosure()

  const handleOpenModal = trackUri => {
    setTrackUri(trackUri)
    onOpen()
  }

  return (
    <VStack mt={8} spacing={4} alignItems="start">
      <RemoveTrackModal isOpen={isOpen} onClose={onClose} playlistId={playlist.id} trackUri={trackUri} />

      {playlist?.tracks?.items?.map(item => (
        <Grid
          key={item.track.id}
          gridTemplateColumns="2fr 1fr 1fr"
          alignItems="center"
          w="full"
          rounded="sm"
          _hover={{ bgColor: 'gray.50' }}
        >
          <Flex alignItems="center">
            <Image src={item.track.album.images[2].url} width={50} height={50} />
            <Flex flexDir="column" ml={4}>
              <Text as="b" fontWeight="semibold">
                {item.track.name}
              </Text>
              <Text fontWeight="light">{item.track.artists[0].name}</Text>
            </Flex>
          </Flex>
          <Text textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap" title={item.track.album.name}>
            {item.track.album.name}
          </Text>
          <Button
            ml="auto"
            mr={1}
            colorScheme="red"
            variant="ghost"
            size="sm"
            onClick={() => handleOpenModal(item.track.uri)}
          >
            Remove
          </Button>
        </Grid>
      ))}
    </VStack>
  )
}

export default TrackList
