import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useUserContext } from '~contexts/user-context'

import { getCurrentUser } from '~lib/spotify'

const WithAuthorizedUser = (Component: React.ElementType) => {
  return function WithAuth(props: any) {
    const [appSession, setAppSession] = useState({})
    const [isReady, setIsReady] = useState(false)
    const router = useRouter()
    const { data: userSession } = useSession()
    const { setUser } = useUserContext()

    useEffect(() => {
      async function checkSession() {
        const currentUser = await getCurrentUser()

        if (currentUser?.status === 401) {
          signOut({ redirect: false })
          setUser(null)
          return false
        }

        setUser(currentUser.data)
        return true
      }

      checkSession().then(session => {
        setAppSession(session)
        setIsReady(true)
      })
    }, [userSession])

    if (isReady) {
      if (appSession && userSession) {
        return <Component {...props} />
      } else {
        router.push('/login')
      }

      return <div>Loading...</div>
    }

    return <div>Loading...</div>
  }
}

export default WithAuthorizedUser
