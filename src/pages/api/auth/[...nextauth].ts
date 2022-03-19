import NextAuth from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'

const scope = 'user-read-email playlist-modify-public'

export default NextAuth({
  secret: 'FW/cWaffZBPD3Vsh8CzBTBujLdiXyzaIKvb24My071Q=',
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_ID,
      clientSecret: process.env.SPOTIFY_SECRET,
      authorization: `https://accounts.spotify.com/authorize?scope=${encodeURIComponent(scope)}`
    })
  ],
  callbacks: {
    async signIn({ user }) {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {
        // Return false to display a default error message
        return false
      }
    },
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      return session
    },
    redirect({ baseUrl }) {
      // return to home page
      return baseUrl
    }
  }
})
