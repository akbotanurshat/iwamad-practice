import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';

type HeaderProps = {
  name: string;
  role: string;
};

function Header({ name, role }: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header>
      <h1>{name}</h1>
      <p>{role}</p>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <p>❤️ {likes}</p>
    </header>
  );
}

export default Header;