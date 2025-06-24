import { Link } from "react-router-dom"
import './GuestNavbar.css'
import { MdLogin, MdOutlineCreate } from "react-icons/md"

function GuestNavbar(){
  return(
    <>
      <nav className="navbar">
        <h1 className="navbar__title">
          <Link className="navbar__title__link" to={'/'}>
            My Pet House
          </Link>
        </h1>
        <ul className="navbar__sections-menu">
          <Link className="navbar__sections-menu__link" to={'/services'}>Servicios</Link>
          <Link className="navbar__sections-menu__link" to={'/aboutme'}>Sobre nosotros</Link>
          <Link className="navbar__sections-menu__link" to={'/contact'}>Contacto</Link>
        </ul>
        <ul className="navbar__auth-menu">
          <Link className="navbar__auth-menu__link" to={'/login'}>
            <MdLogin className="navbar__auth-menu__link__icon"/>
            <small className="navbar__auth-menu__link__text">Login</small>
          </Link>
          <Link className="navbar__auth-menu__link" to={'/register'}>
            <MdOutlineCreate className="navbar__auth-menu__link__icon"/>
            <small className="navbar__auth-menu__link__text">Registrarse</small>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export { GuestNavbar }
