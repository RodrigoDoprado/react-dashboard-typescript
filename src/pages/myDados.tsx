/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react"
import { Helmet } from "react-helmet"
import { AuthContext } from "../contexts/AuthContexts"
import Footer from "../componete/footer"
import FormCreateUser from "../componete/formCreateUser"
import Navbar from "../componete/navbar"
import Sidebar from "../componete/sidebar"
import AvatarUser from "./auth/avatarUser"

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
                <div id="layoutAuthentication">
                  <div id="layoutAuthentication_content">
                    <main>
                      <div className="container">
                        <div className="row ">
                          <div className="mb-1">
                            <FormCreateUser />
                          </div>
                        </div>
                      </div>
                    </main>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}
