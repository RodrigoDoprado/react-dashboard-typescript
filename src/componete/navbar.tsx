/* eslint-disable no-self-assign */
import { useContext } from "react"
import {
  BsBoxArrowDown,
  BsFillPersonLinesFill,
  BsGrid3X3GapFill,
  BsSearch,
} from "react-icons/bs"
import { AuthContext } from "../contexts/AuthContexts"
// import "./navbar.css"

export default function Navbar() {
  const auth = useContext(AuthContext)

  const handleLogout = async () => {
    await auth.signout()
    window.location.href = window.location.href
  }

  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      {/* <!-- Navbar Brand--> */}
      <a className="navbar-brand ps-3" href="/">
        Start Bootstrap
      </a>
      {/* <!-- Sidebar Toggle--> */}
      <button
        className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
      >
        <BsGrid3X3GapFill />
      </button>
      {/* <!-- Navbar Search--> */}
      <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Search for..."
            aria-label="Search for..."
            aria-describedby="btnNavbarSearch"
          />
          <button
            className="btn btn-primary"
            id="btnNavbarSearch"
            type="button"
          >
            <BsSearch />
          </button>
        </div>
      </form>
      {/* <!-- Navbar--> */}
      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <BsFillPersonLinesFill />
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            {/* <li>
              <a className="dropdown-item" href="#!">
                Settings
              </a>
            </li> */}
            <li>
              <a className="dropdown-item" href="/dashboard/meusdados">
                Configurações
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a href="/" className="dropdown-item" onClick={handleLogout}>
                <span className="icons">
                  <BsBoxArrowDown className="icon" />
                </span>
                <span className="title">Sign Out</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
