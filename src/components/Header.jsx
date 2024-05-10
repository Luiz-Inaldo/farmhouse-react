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
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/servicos'>Serviços</Link>
          </li>
          <li>
            <Link to='/sobre'>Sobre</Link>
          </li>
          <li>
            <Link to='/contato'>Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
