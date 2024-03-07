import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { bringArtistAppointments } from "../../Services/apiCalls";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./ArtistAppointments.css";

export const ArtistAppointments = () => {
  const [myAppointments, setMyAppointments] = useState([]);
  const userRdxData = useSelector(userData);
  const token = userRdxData.credentials.token;
  const id = userRdxData.credentials.userData.userId;

  useEffect(() => {
    if (myAppointments.length === 0) {
      bringArtistAppointments(token, id).then((myAppointments) => {
        setMyAppointments(myAppointments);
      });
    }
  }, [token, id]);

  return (
    <div className="body-artistapp">
      <Container>
      <h1 className="title-artistapp">Mis Citas</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {myAppointments.map((appointment) => (
            <Col key={appointment.id}>
              <Card className="shadow-sm appointment-card" id="custom-card">
                <Card.Body>
                  <Card.Title className="text-center fs-5">
                    {appointment.user.name} {appointment.user.last_name}
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
                      <strong>Contacto:</strong> {appointment.user.phone_number}
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
