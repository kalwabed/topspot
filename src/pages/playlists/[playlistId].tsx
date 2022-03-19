import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'
import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react'

import { getPlaylist } from '~lib/spotify'
import WithAuthorizedUser from '~components/hoc/with-authentication'
import TopMeta from '~components/playlist/top-meta'

const PlaylistsDetailPage = () => {
  const { query } = useRouter()
  const { data: playlist } = useSWR(`/playlists/${query.playlistId}`, () => getPlaylist(query.playlistId as string))

  console.log(playlist)
  if (!playlist) return <Text>Loading...</Text>

  return (
    <Flex flexDir="column" mt={4}>
      <TopMeta playlist={playlist?.data} />

      <VStack mt={4} alignItems="start">
        <Heading>Tracks</Heading>
        {playlist.data.tracks.items.map(item => (
          <Flex key={item.track.id} justify="space-between" alignItems="center" w="full">
            <Text>{item.track.name}</Text>
            <Text>{item.track.album.artists[0].name}</Text>
            <Button colorScheme="red" variant="ghost" size="sm">
              Remove
            </Button>
          </Flex>
        ))}
      </VStack>
    </Flex>
  )
}

export default WithAuthorizedUser(PlaylistsDetailPage)
