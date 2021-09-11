/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import CartWidget from "./Carrito/cartWidget";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            
              <Link className="navbar-brand" to="/">Pc Importaciones</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav d-flex justify-content-between align-items-center">
                <Link className="nav-link active" to="/">Inicio</Link>
                <Link className="nav-link" to="/componentes">Componentes</Link>
                <CartWidget/>
            </div>
          </div>
        </nav>
    )
}

export default NavBar

