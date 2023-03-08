/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react"
import { Helmet } from "react-helmet"
import Footer from "../componete/footer"
import Navbar from "../componete/navbar"
import Sidebar from "../componete/sidebar"
import { AuthContext } from "../contexts/AuthContexts"
import AvatarUser from "./auth/avatarUser"
import Register from "./auth/register"

export default function MyData() {
  const { user } = useContext(AuthContext)

  return (
    <>
      <Helmet>
        <title>
          Dashboard - {user?.firstName} {user?.lastName}
        </title>
      </Helmet>

      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <div className="row">
                <div className="my-5">
                  <AvatarUser />
                </div>
                <hr />
                <Register />
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}
