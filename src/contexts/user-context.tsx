import { createContext, useContext, useState } from 'react'

import { User } from '~types/user'

interface UserContext {
  user?: User
  setUser: (user: User) => void
}

const UserContext = createContext<UserContext>(undefined)

const Provider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export const useUserContext = (): UserContext => {
  return useContext(UserContext)
}

export default { Provider, Consumer: UserContext.Consumer }
