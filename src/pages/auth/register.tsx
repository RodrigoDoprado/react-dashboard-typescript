/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from "react"
import { Helmet } from "react-helmet"
import { AuthContext } from "../../contexts/AuthContexts"
import { useApi } from "../../services/api"
// import {
//   AiFillFacebook,
//   AiOutlineTwitter,
//   AiOutlineGoogle,
// } from "react-icons/ai"

const userNull = {
  firstName: "Nome",
  lastName: "Sobre Nome",
  telephone: "(xx) x xxxx-xxxx",
  email: "exemplo@gmail.com",
  password: "",
  passwordConfirm: "",
}

export default function Register() {
  const { user } = useContext(AuthContext)
  const [state, setState] = useState(userNull)
  const { firstName, lastName, telephone, email, password, passwordConfirm } =
    state
  const [status, setStatus] = useState({ type: "", message: "" })

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const addUser = async (data: {
    firstName: string
    lastName: string
    telephone: string
    email: string
    password: string
    passwordConfirm: string
  }) => {
    await useApi()
      .createUser(data)
      .then((response: { data: { message: any } }) => {
        setStatus({ type: "success", message: response.data.message })
      })
      .catch((err: { response: { data: { message: any } } }) => {
        if (err.response) {
          setStatus({ type: "error", message: err.response.data.message })
        } else {
          setStatus({ type: "error", message: "Erro: Tente mais tarde!" })
        }
      })
  }

  const updateUser = async (
    data: {
      firstName: string
      lastName: string
      telephone: string
      email: string
      password: string
      passwordConfirm: string
    },
    id: string
  ) => {
    await useApi()
      .updateUser(data, id)
      .then((response: { data: { message: any } }) => {
        setStatus({ type: "success", message: response.data.message })
      })
      .catch((err: { response: { data: { message: any } } }) => {
        if (err.response) {
          setStatus({ type: "error", message: err.response.data.message })
        } else {
          setStatus({ type: "error", message: "Erro: Tente mais tarde!" })
        }
      })
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!firstName || !lastName || !telephone || !email || !password) {
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
      if (!user?.id) {
        addUser(state)
      } else {
        updateUser(state, user.id)
      }
    }
  }

  return (
    <>
      {!user?.id ? (
        <>
          <Helmet>
            <title>Register</title>
          </Helmet>
        </>
      ) : (
        <></>
      )}
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row ">
                {/* justify-content-center */}
                {/* <div className="col-lg-7"> */}
                <div className="card shadow-lg border-0 rounded-lg mt-5">
                  {!user?.id ? (
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">
                        Create Account
                      </h3>
                    </div>
                  ) : (
                    <></>
                  )}
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
                    <form onSubmit={handleSubmit}>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <div className="form-floating mb-3 mb-md-0">
                            <input
                              className="form-control"
                              name="firstName"
                              type="text"
                              placeholder="Nome"
                              required
                              value={firstName}
                              onChange={handleInputChange}
                            />
                            <label htmlFor="firstName">Nome</label>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              className="form-control"
                              name="lastName"
                              type="text"
                              placeholder="Sobre Nome"
                              required
                              value={lastName}
                              onChange={handleInputChange}
                            />
                            <label htmlFor="lastName">Sobre Nome</label>
                          </div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6">
                          <div className="form-floating mb-3">
                            <input
                              className="form-control"
                              name="telephone"
                              type="text"
                              placeholder="Telefone"
                              required
                              value={telephone}
                              onChange={handleInputChange}
                            />
                            <label htmlFor="telephone">Telefone</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating mb-3">
                            <input
                              className="form-control"
                              name="email"
                              type="email"
                              placeholder="Email"
                              required
                              value={email}
                              onChange={handleInputChange}
                            />
                            <label htmlFor="email">Email</label>
                          </div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6">
                          <div className="form-floating mb-3 mb-md-0">
                            <input
                              className="form-control"
                              name="password"
                              type="password"
                              placeholder="Senha"
                              required
                              value={password}
                              onChange={handleInputChange}
                            />
                            <label htmlFor="password">Senha</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating mb-3 mb-md-0">
                            <input
                              className="form-control"
                              name="passwordConfirm"
                              type="password"
                              placeholder="Confirma Senha"
                              required
                              value={passwordConfirm}
                              onChange={handleInputChange}
                            />
                            <label htmlFor="passwordConfirm">
                              Confirma Senha
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 mb-0">
                        <div className="d-grid">
                          <button type="submit" className="btn btn-primary">
                            {!user?.id ? <>Cadastar</> : <>Salvar</>}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {!user?.id ? (
                    <>
                      <div className="card-footer text-center py-3">
                        <div className="small">
                          <a href="/auth/login">Have an account? Go to login</a>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            {/* </div> */}
          </main>
        </div>
      </div>
    </>
  )
}
