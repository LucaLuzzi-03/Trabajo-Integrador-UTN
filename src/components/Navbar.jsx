import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">TiendaX</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/"> Products </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact"> Contact </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
