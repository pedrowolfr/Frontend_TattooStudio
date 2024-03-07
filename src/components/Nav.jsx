import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-x-[38px]">
        <li>
          <Link
            className="transition duration-300 link hover:border-b-[3px] hover:border-dark"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="transition duration-300 link hover:border-b-[3px] hover:border-dark"
            to="/artists"
          >
            Artists
          </Link>
        </li>
         <li>
         <Link
            className="transition duration-300 link hover:border-b-[3px] hover:border-dark"
            to="/about"
          >
            Nosotros
            </Link>
        </li>
        <li>
         <Link
            className="transition duration-300 link hover:border-b-[3px] hover:border-dark"
            to="/GallerySection"
          >
            Galería
          </Link>
        </li>
        <li>
         <Link
            className="transition duration-300 link hover:border-b-[3px] hover:border-dark"
            to="/Skills"
          >
            Habilidades
          </Link>
        </li>
        <li>
         <Link
            className="transition duration-300 link hover:border-b-[3px] hover:border-dark"
            to="/contact"
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
