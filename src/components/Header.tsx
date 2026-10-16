import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'
import logo from '../assets/logo.svg'

type HeaderProps = {
  name: string
  role: string
}

function Header({ name, role }: HeaderProps) {
  const { likes } = useLikes()

  return (
    <header className="header">
      <div className="header-brand">
        <img src={logo} alt="" width={32} height={32} />
        <div>
          <h1>{name}</h1>
          <p>{role}</p>
        </div>
      </div>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
      <p className="header-likes">❤️ {likes}</p>
    </header>
  )
}

export default Header