import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { userSignUp, userLogin } from "../../Services/apiCalls";
import "./Register.css";

export const Register = () => {
  const [signUpData, setSignUpData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputHandler = (event) => {
    setSignUpData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !signUpData.first_name ||
      !signUpData.last_name ||
      !signUpData.email ||
      !signUpData.password ||
      !signUpData.phone
    ) {
      setShowError(true);
      return;
    }
    try {
      await userSignUp(signUpData);
      const credentials = {
        email: signUpData.email,
        password: signUpData.password,
      };
      const token = await userLogin(credentials);
      if (!token) {
        navigate("/login");
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
    } catch (error) {
      console.error("Ha ocurrido un error", error);
    }
  };

  return (
    <section
      id="login"
      className="bg-center bg-cover bg-hero min-h-[40vh] lg:h-[848px] bg-no-repeat relative mt-[120px] lg:mt-[-50px] body"
    >
      <Container>
        <div className="signUpBox bg-light p-4 rounded ">
          <h1 className="mb-4">Registro</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escribe nombre"
                name="first_name"
                value={signUpData.first_name}
                onChange={inputHandler}
                required
              />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escribe apellido"
                name="last_name"
                value={signUpData.last_name}
                onChange={inputHandler}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                name="email"
                value={signUpData.email}
                onChange={inputHandler}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={signUpData.password}
                onChange={inputHandler}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type="text"
                placeholder="Telefono"
                name="phone"
                value={signUpData.phone}
                onChange={inputHandler}
                required
              />
            </Form.Group>
            {showError && (
              <Alert
                variant="danger"
                onClose={() => setShowError(false)}
                dismissible
              >
                Por favor rellena todos los campos
              </Alert>
            )}

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Tatuate
            </Button>
          </Form>

          <p className="mt-3">
            ¿Ya tienes cuenta? <a href="/login">login</a>
          </p>
        </div>
      </Container>
    </section>
  );
};
