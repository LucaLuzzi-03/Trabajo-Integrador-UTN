import { NavLink } from "react-router-dom"
import "./styles/navbar.css"


export const Navbar = () => {


  return (
    <>
<<<<<<< HEAD
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">TiendaX</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
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
=======
      <div className="envio d-flex justify-content-center">
        <p>
          <i className="fa-solid fa-truck"></i>Free shipping on orders over $100
        </p>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top" >
        <div className="container-fluid">
          <h3>
            <NavLink className="navbar-brand" to="/">
              TiendaX
            </NavLink>
          </h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse elementos" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="navbar-collapse collapse iconosxd" id="navbarNav">
            <li className="iconoslol">
              <i className="fa-solid fa-cart-shopping"></i>
            </li>
            <li className="iconoslol">
              <i className="fa-solid fa-user"></i>
            </li>
          </ul>
        </div>
      </nav>
>>>>>>> 4b55a6094765a580417eb6c8f6ba3a8a61d72991
    </>
  );
};
