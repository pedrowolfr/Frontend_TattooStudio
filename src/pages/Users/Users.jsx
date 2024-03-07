import { useEffect, useState } from "react";
import { bringAllUsers, removeUser } from "../../Services/apiCalls";
import { useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { userData } from "../userSlice";
import "./Users.css";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const userRdxData = useSelector(userData);
  const token = userRdxData.credentials.token;

  useEffect(() => {
    if (users.length === 0) {
      bringAllUsers(token).then((res) => {
        setUsers(res.results);
      });
    }
  }, []);

  const removeButtonHandler = (id) => {
    removeUser(token, id).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  console.log(users);
  return (
    <div className="body-users">
      <div className="container">
        <h1 className="title-users">Usuarios</h1>
        <div className="row">
          {users && users.length > 0 ? (
            users.map((user) => (
              <div className="col-md-4 mb-4" key={user.id}>
                <Card className="shadow-sm appointment-card" id="custom-card">
                  <Card.Body>
                    <Card.Title>
                      {user.first_name} {user.last_name}
                    </Card.Title>
                    <Card.Text>{user.email}</Card.Text>
                    <Card.Text>{user.phone}</Card.Text>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeButtonHandler(user.id)}
                    >
                      Eliminar
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <p>No hay usuarios.</p>
          )}
        </div>
      </div>
    </div>
  );
};
