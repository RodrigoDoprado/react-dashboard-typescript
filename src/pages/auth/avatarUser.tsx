import { useState } from "react"
import { useApi } from "../../services/api"

export default function AvatarUser() {
  const [avatar, setAvatar] = useState<File>()
  const [status, setStatus] = useState({ type: "", message: "" })

  const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    const selectedFiles = files as FileList
    setAvatar(selectedFiles?.[0])
  }

  const upload = async () => {
    await useApi()
      .avatarUser(avatar)
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
  return (
    <>
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

      <div className="row">
        <div className="col-8">
          <label className="btn btn-default p-0">
            <input type="file" onChange={selectFile} />
          </label>
        </div>

        <div className="col-4">
          <button
            className="btn btn-success btn-sm"
            disabled={!avatar}
            onClick={upload}
          >
            Upload
          </button>
        </div>
      </div>
    </>
  )
}
