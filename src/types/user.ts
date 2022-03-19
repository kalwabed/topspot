export interface User {
  display_name: string
  email: string
  external_urls: { spotify: string }
  followers: { href: number; total: number }
  href: string
  id: string
  images: { height: number; width: number; url: string }[]
  type: string
  uri: string
}
