// import "./sidebar.css"

export default function Sidebar() {
  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <div className="sb-sidenav-menu-heading">Core</div>
          <a className="nav-link" href="/">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Dashboard
          </a>
          <div className="sb-sidenav-menu-heading">Interface</div>
          <a
            className="nav-link collapsed"
            href="#"
            data-bs-toggle="collapse"
            data-bs-target="#collapseLayouts"
            aria-expanded="false"
            aria-controls="collapseLayouts"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-columns"></i>
            </div>
            Produto
            <div className="sb-sidenav-collapse-arrow">
              <i className="fas fa-angle-down"></i>
            </div>
          </a>
          <div
            className="collapse"
            id="collapseLayouts"
            aria-labelledby="headingOne"
            data-bs-parent="#sidenavAccordion"
          >
            <nav className="sb-sidenav-menu-nested nav">
              <a className="nav-link" href="/dashboard/produto">
                Todos
              </a>
              <a className="nav-link" href="/dashboard/produto/cadastrar">
                Cadastrar
              </a>
            </nav>
          </div>
          <a
            className="nav-link collapsed"
            href="#"
            data-bs-toggle="collapse"
            data-bs-target="#collapsePages"
            aria-expanded="false"
            aria-controls="collapsePages"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-book-open"></i>
            </div>
            Funcionario
            <div className="sb-sidenav-collapse-arrow">
              <i className="fas fa-angle-down"></i>
            </div>
          </a>
          <div
            className="collapse"
            id="collapsePages"
            aria-labelledby="headingTwo"
            data-bs-parent="#sidenavAccordion"
          >
            <nav className="sb-sidenav-menu-nested nav">
              <a className="nav-link" href="/dashboard/funcionario">
                Todos
              </a>
              <a className="nav-link" href="/dashboard/funcionario/cadastrar">
                Cadastrar
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        Start Bootstrap
      </div>
    </nav>
  )
}
