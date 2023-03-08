import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"
import { AuthProvider } from "./contexts/AuthProvider"
import App from "./App"
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)
reportWebVitals()
