import React, { useState } from "react";
import { CustomInput } from "../../Components/CustomInput/CustomInput";
import { userLogin } from "../../Services/apiCalls";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { login } from "../userSlice";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import "./Login.css";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputHandler = (event) => {
    setCredentials((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const buttonHandler = () => {
    userLogin(credentials)
      .then((token) => {
        if (!token) {
          setLoginError(true);
          return;
        }
        const decodedToken = jwtDecode(token);
        const data = {
          token: token,
          userData: decodedToken,
        };
        dispatch(login({ credentials: data }));
        setTimeout(() => {
          navigate("/profile");
        });
      })
      .catch((err) => {
        console.error("Ha ocurrido un error", err);
        setLoginError(true);
      });
  };

  return (
    <section
      id="login"
      className="bg-center bg-cover bg-hero min-h-[40vh] lg:h-[848px] bg-no-repeat relative mt-[120px] lg:mt-[-50px] body"
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="logInBox">
              <h1>Bienvenido a INK-ON</h1>
              <h2>Log In</h2>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <CustomInput
                    type={"email"}
                    name={"email"}
                    handler={inputHandler}
                    placeholder={"Email"}
                    iconClass={"bi bi-envelope"}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <CustomInput
                    type={"password"}
                    name={"password"}
                    handler={inputHandler}
                    placeholder={"Contraseña"}
                    iconClass={"bi bi-lock"}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  onClick={buttonHandler}
                  className="btn-block"
                >
                  Iniciar sesión
                </Button>
              </Form>
              {loginError && (
                <Alert variant="danger" className="mt-3">
                  Correo electrónico o contraseña no válidos. Inténtalo de
                  nuevo.
                </Alert>
              )}
              <p className="mt-3">
                ¿No tienes una cuenta? <a href="/register">Registrate</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
