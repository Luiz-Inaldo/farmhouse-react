import { NavLink, Link } from "react-router-dom"
import './Header.css'

export const Header = () => {
  return (
    <header>
      <nav className="max-w940">
        <div className="logo">
          <Link to='/'>
            <img src="/public/logo.webp" alt="logo.webp" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to='/'
            className={({isActive}) => isActive ? "active-nav-link" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/servicos'
            className={({isActive}) => isActive ? "active-nav-link" : ""}>Serviços</NavLink>
          </li>
          <li>
            <NavLink to='/sobre'
            className={({isActive}) => isActive ? "active-nav-link" : ""}>Sobre</NavLink>
          </li>
          <li>
            <NavLink to='/contato'
            className={({isActive}) => isActive ? "active-nav-link" : ""}>Contato</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
