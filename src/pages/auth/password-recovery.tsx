import { ChangeEvent, useState } from "react"
import { Helmet } from "react-helmet"
import { useApi } from "../../services/api"

export default function PasswordRecovery() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState({ type: "", message: "" })

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!email) {
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
      await useApi()
        .passwordrecovery(email)
        .then((response) => {
          setStatus({ type: "success", message: response.data.message })
        })
        .catch((err) => {
          if (err.response) {
            setStatus({ type: "error", message: err.response.data.message })
          } else {
            setStatus({ type: "error", message: "Erro: Tente mais tarde!" })
          }
        })
    }
  }

  return (
    <>
      <Helmet>
        <title>Recuperação de Conta</title>
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
                        Recuperar Login
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

                      <form onSubmit={handleSubmit}>
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
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary">
                            Enviar
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center py-3">
                      <div className="small">
                        <a href="/auth/login">Need an account? Sign!</a>
                      </div>
                    </div>
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
