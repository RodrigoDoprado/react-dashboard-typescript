import { Helmet } from "react-helmet"
import Footer from "../componet/footer"
import Navbar from "../componet/navbar"
import Sidebar from "../componet/sidebar"

export default function ExemploPage() {
  return (
    <>
      <Helmet>
        <title>Exemplo Page</title>
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
                  <div className="card mb-4">
                    <div className="card-header">
                      <i className="fas fa-chart-area me-1"></i>
                      Area Chart Example
                    </div>
                    <div className="card-body">
                      <canvas
                        id="myAreaChart"
                        width="100%"
                        height="40"
                      ></canvas>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="card mb-4">
                    <div className="card-header">
                      <i className="fas fa-chart-bar me-1"></i>
                      Bar Chart Example
                    </div>
                    <div className="card-body">
                      <canvas id="myBarChart" width="100%" height="40"></canvas>
                    </div>
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
