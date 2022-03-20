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

      <Text textAlign="center" fontSize="lg" fontWeight="medium">
        Let&apos;s find something for your playlist.
      </Text>
      {playlist?.tracks?.items?.map(({ track }) => (
        <Grid
          key={track.id}
          gridTemplateColumns={['none', '2fr 1fr 1fr']}
          gridTemplateRows={['repeat(2,1fr)', 'none']}
          alignItems="center"
          w="full"
          rounded="sm"
          p={[4, 0]}
          _hover={{ bgColor: 'gray.100' }}
        >
          <Flex alignItems="center">
            <Image src={track.album.images[2].url} alt={`${track.album.name} album image`} width={50} height={50} />
            <Flex flexDir="column" ml={4}>
              <Text as="b" fontWeight="semibold">
                {track.name}
              </Text>
              <Text fontWeight="light">{track.artists[0].name}</Text>
            </Flex>
          </Flex>
          <Text textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap" title={track.album.name}>
            {track.album.name}
          </Text>
          <Button
            ml="auto"
            mr={1}
            colorScheme="red"
            variant="ghost"
            size="sm"
            onClick={() => handleOpenModal(track.uri)}
          >
            Remove
          </Button>
        </Grid>
      ))}
    </VStack>
  )
}

export default TrackList
