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
