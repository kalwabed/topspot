export interface UserPlaylists {
  href: string
  items: {
    collaborative: boolean
    external_urls: { spotify: string }
    href: string
    id: string
    images: { height: number; width: number; url: string }[]
    name: string
    owner: { display_name: string; external_urls: { spotify: string } }
    public: boolean
    snapshot_id: string
    tracks: { href: string; total: number }
    type: string
    uri: string
  }[]
  limit: number
  next: string
  offset: number
  previous: string
  total: number
}

interface Artist {
  external_urls: { spotify: string }
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export interface Playlist {
  collaborative: boolean
  external_urls: { spotify: string }
  href: string
  description: string
  id: string
  images: { height: number; width: number; url: string }[]
  name: string
  owner: { display_name: string; external_urls: { spotify: string } }
  public: boolean
  snapshot_id: string

  tracks: {
    href: string
    total: number
    items: {
      track: {
        id: string
        name: string
        artists: Artist[]
        album: {
          album_type: string
          artists: Artist[]
          available_markets: string[]
          id: string
        }
      }
    }[]
  }
  type: string
  uri: string
}
