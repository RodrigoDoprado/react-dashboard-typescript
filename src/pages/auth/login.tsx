/* eslint-disable no-self-assign */
import { ChangeEvent, useContext, useState } from "react"
import { Helmet } from "react-helmet"
import { AuthContext } from "../../contexts/AuthContexts"
// import {
//   AiFillFacebook,
//   AiOutlineGoogle,
//   AiOutlineTwitter,
// } from "react-icons/ai"

export const Login = () => {
  const auth = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState({ type: "", message: "" })

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!email || !password) {
      // Example starter JavaScript for disabling form submissions if there are invalid fields
      ;(function () {
        "use strict"

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        // eslint-disable-next-line no-var
        var forms = document.querySelectorAll(".needs-validation")

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms).forEach(function (form) {
          form.addEventListener(
            "submit",
            function (event: {
              preventDefault: () => void
              stopPropagation: () => void
            }) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                setStatus({
                  type: "error",
                  message: "Preencha todos os campos!",
                })
              }

              form.classList.add("was-validated")
            },
            false
          )
        })
      })()
    } else {
      await auth
        .signin(email, password)
        .then(() => {
          window.location.href = window.location.href
        })
        .catch(() => {
          setStatus({ type: "error", message: "E-mail ou Senha Inválido!" })
        })
    }
  }
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">
                        Login
                      </h3>
                    </div>
                    <div className="card-body">
                      {status.type === "success" ? (
                        <p style={{ color: "green" }}>{status.message}</p>
                      ) : (
                        ""
                      )}
                      {status.type === "error" ? (
                        <p style={{ color: "#ff0000" }}>{status.message}</p>
                      ) : (
                        ""
                      )}

                      <form onSubmit={handleLogin}>
                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            name="email"
                            type="email"
                            placeholder="name@example.com"
                            onChange={handleEmailInput}
                          />
                          <label htmlFor="inputEmail">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={handlePasswordInput}
                          />
                          <label htmlFor="inputPassword">Password</label>
                        </div>
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            id="inputRememberPassword"
                            type="checkbox"
                            value=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inputRememberPassword"
                          >
                            Remember Password
                          </label>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                          <a className="small" href="/auth/password-recovery">
                            Forgot Password?
                          </a>
                          <button type="submit" className="btn btn-primary">
                            login
                          </button>
                        </div>
                      </form>
                    </div>
                    {/* <div className="card-footer text-center py-3">
                      <div className="small">
                        <a href="/auth/register">Need an account? Sign up!</a>
                      </div>
                    </div> */}

                    {/* 
                  <div className="d-flex justify-content-center my-5">
                    <a href="#!" className="text-white btn btn-outline-light">
                      <AiFillFacebook className="fs-3" />
                    </a>
                    &nbsp;&nbsp;
                    <a href="#!" className="text-white btn btn-outline-light">
                      <AiOutlineTwitter className="fs-3" />
                    </a>
                    &nbsp;&nbsp;
                    <a href="#!" className="text-white btn btn-outline-light">
                      <AiOutlineGoogle className="fs-3" />
                    </a>
                    &nbsp;&nbsp;
                  </div> */}

                    {/* <div>
                    <p className="my-0">
                      Cadastre Agora!&nbsp;
                      <a href="/register" className="text-white-50 fw-bold">
                        Aqui
                      </a>
                    </p>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
