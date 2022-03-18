import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const WithAuthorizedUser = Component => {
  return function WithAuth(props) {
    const [userSession, setUserSession] = useState({})
    const [isReady, setIsReady] = useState(false)
    const router = useRouter()

    useEffect(() => {
      async function checkSession() {
        return await getSession()
      }

      checkSession().then(session => {
        setUserSession(session)
        setIsReady(true)
      })
    }, [])

    if (isReady) {
      if (userSession) {
        return <Component {...props} />
      }
      router.push('/login')

      return <div>Loading...</div>
    }

    return <div>Loading...</div>
  }
}

export default WithAuthorizedUser
