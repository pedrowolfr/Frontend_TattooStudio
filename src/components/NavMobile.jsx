import React from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { logout, userData } from "../Pages/userSlice";

export default function NavMobile() {
  const dispatch = useDispatch();
  const userRdxData = useSelector(userData);
  const token = userRdxData.credentials ? userRdxData.credentials.token : null;
  const decoded = userRdxData.credentials?.userData;

  const logMeOut = () => {
    dispatch(logout({ credentials: {} }));
    setTimeout(() => {
      navigate();
    });
  };

  return (
    <nav className="flex flex-col w-full h-full overflow-hidden justify-evenly">
      <ul className="flex flex-col items-center justify-center gap-y-3">
        <li>
          <Link className="text-2xl uppercase font-primary" to="/">
            Home
          </Link>
        </li>
        <li>
        <Link
            className="text-2xl uppercase font-primary"
            to="/artists"
          >
            Artists
          </Link>
        </li>
        <li>
          <Link className="text-2xl uppercase font-primary" to="/about">
          Nosotros
          </Link>
        </li>
        <li>
          <Link className="text-2xl uppercase font-primary" to="/GallerySection">
          Galería
          </Link>
        </li>
        <li>
          <Link className="text-2xl uppercase font-primary" to="/Skills">
          Habilidades
          </Link>
        </li>
        <li>
          <Link className="text-2xl uppercase font-primary" to="/contact">
          Contacto
          </Link>
        </li>
        <NavDropdown
          className="text-2xl uppercase font-primary"
          title="TATUATE"
          id="basic-nav-dropdown"
        >
          {!token ? (
            <>
              <NavDropdown.Item href="login">Login</NavDropdown.Item>
              <NavDropdown.Item href="register">Registrate</NavDropdown.Item>
            </>
          ) : decoded.userRoles === "super_admin" ? (
            <>
              <NavDropdown.Item href="profile">Perfil</NavDropdown.Item>
              <NavDropdown.Item href="users">Usuarios</NavDropdown.Item>
              <NavDropdown.Item href="allappointments">Citas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" onClick={() => logMeOut()}>
                Salir
              </NavDropdown.Item>
            </>
          ) : decoded.userRoles === "artist" ? (
            <>
              <NavDropdown.Item href="profile">Perfil</NavDropdown.Item>
              <NavDropdown.Item href="myappointments">
                Mis Citas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" onClick={() => logMeOut()}>
                Salir
              </NavDropdown.Item>
            </>
          ) : (
            <>
              <NavDropdown.Item href="profile">Perfil</NavDropdown.Item>
              <NavDropdown.Item href="appointments">
                Agendar una cita
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" onClick={() => logMeOut()}>
                Salir
              </NavDropdown.Item>
            </>
          )}
        </NavDropdown>
      </ul>
      <div className="text-2xl mb-40">
        <Socials />
      </div>
    </nav>
  );
}
