import { getSession } from 'next-auth/react'

import { Playlist, UserPlaylists } from '~types/playlists'
import { User } from '~types/user'

const BASE_API = 'https://api.spotify.com/v1'

interface ApiResponse<T> {
  status: number
  data: T
}

const getAccessToken = async (): Promise<string> => {
  const session = await getSession({})
  if (!session) {
    return null
  }

  return session.accessToken as string
}

async function fetcher(url: string, options?: RequestInit): Promise<Response> {
  const token = await getAccessToken()
  const response = await fetch(`${BASE_API.concat(url)}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    ...options
  })

  return response
}

export async function getCurrentUser(): Promise<ApiResponse<User> | undefined> {
  try {
    const fetchUser = await fetcher('/me')

    return { data: await fetchUser.json(), status: fetchUser.status }
  } catch (error) {
    console.error(error)
  }
}

export async function getUserPlaylists(): Promise<ApiResponse<UserPlaylists> | undefined> {
  try {
    const fetchUserPlaylists = await fetcher('/me/playlists')

    return { data: await fetchUserPlaylists.json(), status: fetchUserPlaylists.status }
  } catch (error) {
    console.error(error)
  }
}

export async function getPlaylist(playlistId: string): Promise<ApiResponse<Playlist> | undefined> {
  try {
    const fetchPlaylist = await fetcher(`/playlists/${playlistId}`)

    return { data: await fetchPlaylist.json(), status: fetchPlaylist.status }
  } catch (error) {
    console.error(error)
  }
}

export async function removePlaylistItem(playlistId: string, trackUri: string): Promise<ApiResponse<null> | undefined> {
  try {
    const fetchRemovePlaylistItem = await fetcher(`/playlists/${playlistId}/tracks`, {
      method: 'DELETE',
      body: JSON.stringify({
        tracks: [{ uri: trackUri }]
      })
    })

    return { data: null, status: fetchRemovePlaylistItem.status }
  } catch (error) {
    console.error(error)
  }
}
