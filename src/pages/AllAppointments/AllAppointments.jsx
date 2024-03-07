import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import {
  DeleteAppointment,
  bringAllAppointments,
} from "../../Services/apiCalls";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./AllAppointments.css";

export const AllAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const userRdxData = useSelector(userData);
  const token = userRdxData.credentials.token;

  useEffect(() => {
    if (appointments.length === 0) {
      bringAllAppointments(token)
        .then((res) => {
          setAppointments(res.results);
        })
        .catch((error) => {
          console.error("Error fetching appointments:", error);
        });
    }
  }, [appointments, token]);

  const removeButtonHandler = (id) => {
    DeleteAppointment(token, id).then(() => {
      setAppointments(
        appointments.filter((appointment) => appointment.id !== id)
      );
    });
  };

  return (
    <div className="body-appointments">
      <Container>
        <h1 className="title-appointments">Citas</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {appointments && appointments.length > 0 ? (
            appointments.map((appointment) => (
              <Col key={`${appointment.id}`}>
                <Card className="shadow-sm appointment-card" id="custom-card">
                  <Card.Body>
                    <Card.Title className="text-center fs-5">
                      Artistas: {appointment.artist_name}
                    </Card.Title>
                    <hr />
                    <div className="text-center">
                      <p>
                        <strong>Dia:</strong> {appointment.date}
                      </p>
                      <p>
                        <strong>Hora:</strong> {appointment.time}
                      </p>
                      <p>
                        <strong>Clientes:</strong> {appointment.user_name}{" "}
                        {appointment.user_last_name}
                      </p>
                    </div>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeButtonHandler(appointment.id)}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col>
              <p className="text-center">No hay citas disponibles.</p>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};
