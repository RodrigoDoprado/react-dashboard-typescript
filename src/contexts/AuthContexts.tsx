/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext } from "react"
import { User } from "../types/User"

export type AuthContextType = {
  user: User | null
  signin: (email: string, password: string) => Promise<void>
  signout: () => void
}

export const AuthContext = createContext<AuthContextType>(null!)
