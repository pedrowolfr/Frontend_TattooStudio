import { FaInstagram, FaTwitter, FaUser } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { logout, userData } from "../pages/userSlice";

export default function Socials() {
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
    <ul className="flex items-center justify-center gap-x-[30px]">
      <div>
        {" "}
        <NavDropdown
          className="transition duration-300 link hover:border-b-[3px] hover:border-dark"
          title={<FaUser />}
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
      </div>{" "}
      <li>
        <a href="http://www.facebook.com/?locale=es_ES/">
          <GrFacebookOption />
        </a>
      </li>
      <li>
        <a href="http://www.instagram.com/consent/?flow=confirmaccounts&source=pft_confirmaccounts&surface=instagram_web/">
          <FaInstagram />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/">
          <FaTwitter />
        </a>
      </li>
    </ul>
  );
}
