import { Helmet } from "react-helmet"
import FormCreateUser from "../../componet/formCreateUser"

export default function Register() {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <FormCreateUser />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
