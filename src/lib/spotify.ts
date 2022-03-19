import { getSession } from 'next-auth/react'
import { UserPlaylists } from '~types/playlists'

import { User } from '~types/user'

const BASE_API = 'https://api.spotify.com/v1'

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

export async function getCurrentUser(): Promise<{ user: User; status: number } | undefined> {
  try {
    const fetchUser = await fetcher('/me')

    return { user: await fetchUser.json(), status: fetchUser.status }
  } catch (error) {
    console.error(error)
  }
}

export async function getUserPlaylists(): Promise<{ userPlaylists: UserPlaylists; status: number } | undefined> {
  try {
    const fetchUserPlaylists = await fetcher('/me/playlists')

    return { userPlaylists: await fetchUserPlaylists.json(), status: fetchUserPlaylists.status }
  } catch (error) {
    console.error(error)
  }
}
