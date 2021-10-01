/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import CartWidget from "./Carrito/cartWidget";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
              <Link className="navbar-brand" to="/"><img className="me-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABu0lEQVRIie3WPYwNURjG8d9l9u6Ku/ZusuI7NhIRHYkCkaxSqCQUIsENlUqtotEJnVJnk1WJaERB0OEmCoIEhY+ISCiwJD6Kc0bGcW92kp1Zzf6bmfc575znvHM+ZphnjmjEawtbkFXQ52s8LmPcwEO8wHQFxptxEpdnShzBywoMczo4N1NSJlT8q0Lju3hexrhqvuMrFuIwlibt19FdUIPxThzAERxK2jJcQ1ZHxTlr0MS6RG+hVacxPMGNRNtLPXNcZDtWJ9rwXBhfxWQPrXbjV7ifaN+gjlVdikzYd4uxLN7PllViVQlN/Cwaf8EF3BY2fS9W4kPscDk+CYdEL94JB8fBRD+D9+XGHmjgDdoxPovjSc4QNmFtQTuFE4V4BcaEj1G7zBxvxFt8jPEtTBTaM9zDedz0b6U5HewrPjQiHHPNPg9MCK95f4zbMT+Px7AEp7EVR4W1sh6LhO8zPMNAzB9o4AEe4XO/kitmGBsyjOKp3itxNlzBIHYl+hC2ZdiDY8LcXKzQeFB41aMFrYNL2J0L4+hWaNqPbvT6vycX/IgjmarZbzx6/fm9hR3CxNfJNO7U7DHP3/wGQ/ZGyXhyjzEAAAAASUVORK5CYII="/>Pc Importaciones</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav d-flex justify-content-between align-items-center">
                <Link className="nav-link active" to="/">Inicio</Link>
                <Link className="nav-link" to="/componentes">Catalogo</Link>
                <CartWidget/>
            </div>
          </div>
        </nav>
    )
}

export default NavBar

