import React, { useEffect, useState } from "react";
import "./Appointments.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createAppointment, bringAllArtists } from "../../Services/apiCalls";
import { userData } from "../userSlice";
import { jwtDecode } from "jwt-decode";
import { Form, Button } from "react-bootstrap";

export const Appointments = () => {
  const userRdxData = useSelector(userData);
  const myId = userRdxData.credentials.userData.userId;
  const [newAppointment, setNewAppointment] = useState({
    user_id: myId,
    artist_id: "",
    date: "",
    time: "",
  });
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    if (artists.length === 0) {
      bringAllArtists().then((arts) => {
        setArtists(arts);
      });
    }
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputHandler = (event) => {
    setNewAppointment((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

  };
  console.log (event.target.value)

  const buttonHandler = () => {
    const token = userRdxData.credentials.token;
    if (!token) {
      navigate("/login");
      return;
    }

    createAppointment(token, newAppointment)
      .then((res) => {
        console.log(res);
        const decodedToken = jwtDecode(token);
        const data = {
          token: token,
          userData: decodedToken,
        };
        setTimeout(() => {
          navigate("/profile");
        });
      })
      .catch((err) => {
        console.error("Ha ocurrido un error", err);
      });
  };

  return (
    <div className="body">
      <div className="row justify-content-center">
        <div className="appoiment-Box">
          <Form className="mt-5">
            <Form.Group controlId="artist_id" id="artists">
              <Form.Label>Artistas: </Form.Label>
              <Form.Control
                as="select"
                name="artist_id"
                value={newAppointment.artist_id}
                onChange={inputHandler}
              >
                <option value="">Selecciona Artista</option>
                {artists.map((artist) => (
                  <option key={artist.id} value={artist.id}>
                    {artist.first_name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="date" id="dates">
              <Form.Label>Día: </Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={newAppointment.date}
                onChange={inputHandler}
              />
            </Form.Group>
            <Form.Group controlId="time" id="times">
              <Form.Label>Hora: </Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={newAppointment.time}
                onChange={inputHandler}
              />
            </Form.Group>

            <Button variant="primary" onClick={buttonHandler}>
              Confirmar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
