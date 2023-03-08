import { Helmet } from "react-helmet"
import Navbar from "../componete/navbar"
import Sidebar from "../componete/sidebar"

export default function Product() {
  return (
    <>
      <Helmet>
        <title>Dashboard - Produto</title>
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
                <div className="col-xl-6">
                  <h1>Produto</h1>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
