import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { AuthContext } from "./contexts/AuthContexts"
import { Login } from "./pages/auth/login"
import PasswordRecovery from "./pages/auth/password-recovery"
import Register from "./pages/auth/register"
import Dashboard from "./pages/dashboard"
import Employee from "./pages/employee"
import MyData from "./pages/myDados"
import Product from "./pages/product"

export default function RouterPage() {
  const auth = useContext(AuthContext)

  const Private = ({ children }: { children: JSX.Element }) => {
    if (!auth.user) {
      return <Login />
    }
    return children
  }

  const Notprivate = ({ children }: { children: JSX.Element }) => {
    if (auth.user) {
      return <Dashboard />
    }
    return children
  }

  return (
    <Routes>
      {/* rota public */}
      <Route
        path="/auth/login"
        element={
          <Notprivate>
            <Login />
          </Notprivate>
        }
      />
      <Route
        path="/auth/register"
        element={
          <Notprivate>
            <Register />
          </Notprivate>
        }
      />
      <Route
        path="/auth/password-recovery"
        element={
          <Notprivate>
            <PasswordRecovery />
          </Notprivate>
        }
      />
      {/* rota Privada */}
      <Route
        path="*"
        element={
          <Private>
            <Dashboard />
          </Private>
        }
      />
      <Route
        path="/"
        element={
          <Private>
            <Dashboard />
          </Private>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Private>
            <Dashboard />
          </Private>
        }
      />
      <Route
        path="/dashboard/meusdados"
        element={
          <Private>
            <MyData />
          </Private>
        }
      />
      <Route
        path="/dashboard/funcionario"
        element={
          <Private>
            <Employee />
          </Private>
        }
      />
      <Route
        path="/dashboard/produto"
        element={
          <Private>
            <Product />
          </Private>
        }
      />
    </Routes>
  )
}
