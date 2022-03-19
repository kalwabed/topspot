import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'
import { Flex, Text } from '@chakra-ui/react'

import { getPlaylist } from '~lib/spotify'
import WithAuthorizedUser from '~components/hoc/with-authentication'
import TopMeta from '~components/playlist/top-meta'
import TrackList from '~components/playlist/tracks'

const PlaylistsDetailPage = () => {
  const { query } = useRouter()
  const { data: playlist } = useSWR(`/playlists/${query.playlistId}`, () => getPlaylist(query.playlistId as string))

  console.log(playlist)
  if (!playlist) return <Text>Loading...</Text>

  return (
    <Flex flexDir="column" mt={4}>
      <TopMeta playlist={playlist?.data} />
      <TrackList playlist={playlist?.data} />
    </Flex>
  )
}

export default WithAuthorizedUser(PlaylistsDetailPage)
