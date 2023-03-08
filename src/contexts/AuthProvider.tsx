import { useEffect, useState } from "react"
import { useApi } from "../services/api"
import { User } from "../types/User"
import { AuthContext } from "./AuthContexts"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null)
  const api = useApi()

  useEffect(() => {
    validateToken()
  }, [])

  const validateToken = async () => {
    const storageData = localStorage.getItem("authToken")
    if (storageData) {
      await useApi()
        .getUser(storageData)
        .then((p) => {
          setUser(p.user)
        })
        .catch(() => {
          alert("Session Expirou!")
          signout()
        })
    }
  }

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password)
    if (data.token) {
      // setUser(data.user);
      setToken(data.token)
      return true
    }
    return false
  }

  const signout = async () => {
    console.log("signout está sendo executada.")
    setUser(null)
    setToken("")
    await api.logout()
  }

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token)
  }

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}
