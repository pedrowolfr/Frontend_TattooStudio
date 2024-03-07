import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import "./MyAppointments.css";
import {
  DeleteAppointment,
  bringAppointments,
  updateAppointment,
} from "../../Services/apiCalls";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

export const MyAppointments = () => {
  const userRdxData = useSelector(userData);
  const token = userRdxData.credentials.token;
  const myId = userRdxData.credentials.userData.userId;
  const [MyAppointments, setMyAppointments] = useState([]);

  useEffect(() => {
    bringAppointments(token, myId)
      .then((appointments) => {
        setMyAppointments(appointments);
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  }, [token, myId]);

  const handleEditAppointment = (index) => {
    const appointmentsCopy = [...MyAppointments];
    appointmentsCopy[index].editable = true;
    setMyAppointments(appointmentsCopy);
  };

  const handleSaveAppointment = (index) => {
    const appointment = MyAppointments[index];
    const { id, date, time } = appointment;
    updateAppointment(token, id, { date, time })
      .then((updatedAppointment) => {
        const updatedAppointments = [...MyAppointments];
        updatedAppointments[index] = { ...updatedAppointment, editable: false };
        setMyAppointments(updatedAppointments);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating appointment:", error);
      });
  };

  const cancelButtonHandler = (id) => {
    DeleteAppointment(token, id)
      .then(() => {
        const updatedAppointments = MyAppointments.filter(
          (appointment) => appointment.id !== id
        );
        setMyAppointments(updatedAppointments);
      })
      .catch((error) => {
        console.error("Error deleting appointment:", error);
      });
  };

  return (
    <>
      <div className="body">
        {MyAppointments.length > 0 && (
          <Container className="mt-5">
            <h3 className="title-miappointments">Siguiente Sesión</h3>
            <Row xs={1} md={2} lg={3} className="g-4">
              {MyAppointments.map((appointment, index) => (
                <Col key={index}>
                  <Card className="h-100" id="custom-card-profile">
                    <Card.Body>
                      <Card.Title>
                        Artista: {appointment.artist.name}
                      </Card.Title>
                      <Card.Text>
                        <span className="font-weight-bold">Día:</span>{" "}
                        {appointment.editable ? (
                          <Form.Control
                            type="date"
                            value={appointment.date}
                            onChange={(e) => {
                              const value = e.target.value;
                              setMyAppointments((prevAppointments) =>
                                prevAppointments.map((app, i) =>
                                  i === index ? { ...app, date: value } : app
                                )
                              );
                            }}
                          />
                        ) : (
                          appointment.date
                        )}
                        <br />
                        <span className="font-weight-bold">Hora:</span>{" "}
                        {appointment.editable ? (
                          <Form.Control
                            type="time"
                            value={appointment.time}
                            onChange={(e) => {
                              const value = e.target.value;
                              setMyAppointments((prevAppointments) =>
                                prevAppointments.map((app, i) =>
                                  i === index ? { ...app, time: value } : app
                                )
                              );
                            }}
                          />
                        ) : (
                          appointment.time
                        )}
                      </Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => {
                          if (appointment.editable) {
                            handleSaveAppointment(index);
                          } else {
                            handleEditAppointment(index);
                          }
                        }}
                      >
                        {appointment.editable ? "Save" : "Reschedule"}
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => cancelButtonHandler(appointment.id)}
                      >
                        Cancelar
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        )}
      </div>
    </>
  );
};
