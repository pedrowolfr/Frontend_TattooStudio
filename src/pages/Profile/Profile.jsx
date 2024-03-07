import "./Profile.css";
import { bringProfile, updateProfile } from "../../Services/apiCalls";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

export const Profile = () => {
  const [profileData, setProfileData] = useState({});
  const userRdxData = useSelector(userData);
  const token = userRdxData.credentials.token;
  const myId = userRdxData.credentials.userData.userId;

  const [editMode, setEditMode] = useState(false);
  const [editableData, setEditableData] = useState({});
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    bringProfile(token, myId).then((res) => {
      setProfileData(res);
      setEditableData(res);
    });
  }, [token, myId]);

  const inputHandler = (event) => {
    setEditableData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const buttonHandler = () => {
    if (editMode) {
      updateProfile(token, myId, editableData)
        .then((updatedProfile) => {
          setProfileData(updatedProfile);
          setEditMode(false);
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
        });
    } else {
      setEditMode(true);
    }
  };

  const toggleDetails = () => {
    setDetailsOpen(!detailsOpen);
  };

  return (
    <div className="body">
      {!!profileData.email ? (
        <Container className="profile-box">
          <Card.Title className="profile-card-title">
            Bienvenido {profileData.first_name} {profileData.last_name}
          </Card.Title>{" "}
          <Row className="justify-content-center">
            <Col md={7} className="mt-md-4">
              <Card className="profile-card">
                {" "}
                <Card.Body>
                  <Button
                    variant="primary"
                    className="view-details-button"
                    onClick={toggleDetails}
                  >
                    {detailsOpen ? "ocultar" : "Info"}
                  </Button>
                  {detailsOpen && (
                    <>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Nombre:{" "}
                          {editMode ? (
                            <Form.Control
                            type="text"
                            name="first_name"
                            value={editableData.first_name || ""}
                            onChange={inputHandler}
                          />
                          ) : (
                            profileData.first_name
                          )}
                        </li>
                        <li className="list-group-item">
                          Apellido:{" "}
                          {editMode ? (
                            <Form.Control
                              type="text"
                              name="last_name"
                              value={editableData.last_name || ""}
                              onChange={inputHandler}
                            />
                          ) : (
                            profileData.last_name
                          )}
                        </li>
                        <li className="list-group-item">
                          Email: {profileData.email}
                        </li>
                        <li className="list-group-item">
                          Telefono:{" "}
                          {editMode ? (
                            <Form.Control
                              type="text"
                              name="phone"
                              value={editableData.phone || ""}
                              onChange={inputHandler}
                            />
                          ) : (
                            profileData.phone
                          )}
                        </li>
                      </ul>
                      <Button
                        variant="primary"
                        className="mt-3"
                        onClick={buttonHandler}
                      >
                        {editMode ? "Guardar" : "Actualizar Perfil"}
                      </Button>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <p>Cargando datos de perfil...</p>
      )}{" "}
    </div>
  );
};
