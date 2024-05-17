import { NavLink, Link } from "react-router-dom"
import { HamburguerMenu } from "./HamburguerMenu"

// imgURL import
import headerLogo from '../assets/logo.webp'

// css
import './Header.css'

export const Header = () => {

  return (
    <header>
      <nav className="max-w940">
        <div className="logo">
          <Link to='/'>
            <img src={headerLogo} alt="logo.webp" />
          </Link>
        </div>
        <ul className={`nav-links`}>
          <li>
            <NavLink to='/'
              className={({ isActive }) => isActive ? "active-nav-link" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/servicos'
              className={({ isActive }) => isActive ? "active-nav-link" : ""}>Serviços</NavLink>
          </li>
          <li>
            <NavLink to='/sobre'
              className={({ isActive }) => isActive ? "active-nav-link" : ""}>Sobre</NavLink>
          </li>
          <li>
            <NavLink to='/contato'
              className={({ isActive }) => isActive ? "active-nav-link" : ""}>Contato</NavLink>
          </li>
        </ul>
      </nav>
      <HamburguerMenu />
    </header>
  )
}
