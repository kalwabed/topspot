import { atom } from 'jotai'

import { User } from '~types/user'

export const userState = atom<User | null>(null)
