import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-x-[38px]">
        <li>
          <a
            className="transition duration-300 link hover:border-b-[3px] hover:border-dark"
            href="#home"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="transition duration-300 link hover:border-b-[3px] hover:border-dark"
            href="#about"
          >
            Nosotros
          </a>
        </li>
        <li>
          <a
            className="transition duration-300 link hover:border-b-[3px] hover:border-dark"
            href="#galery"
          >
            Galería
          </a>
        </li>
        <li>
          <a
            className="transition duration-300 link hover:border-b-[3px] hover:border-dark"
            href="#artist"
          >
            Artistas
          </a>
        </li>
        <li>
          <a
            className="transition duration-300 link hover:border-b-[3px] hover:border-dark"
            href="#special"
          >
            Especialidades
          </a>
        </li>
        <li>
          <a
            className="transition duration-300 link hover:border-b-[3px] hover:border-dark"
            href="#contact"
          >
            Contacto
          </a>
        </li>
        <li>
          <Link
            className="transition duration-300 link hover:border-b-[3px] hover:border-dark"
            to="/login"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
