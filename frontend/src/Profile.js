import React from "react";
import { Button, Row, Col, Card, CardTitle, CardText } from "reactstrap";
import { useNavigate } from "react-router";
export default function Profile() {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("temitope");
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <Row>
          <Col className="text-center" sm="6">
            <Card body>
              <CardTitle tag="h1">Profile Page</CardTitle>
              <CardText>Merhaba profil sayfanıza hoş geldiniz</CardText>
              <Button onClick={signOut} color="danger">
                Oturumu Kapat
              </Button>
            </Card>
          </Col>
        </Row>
      </div>

      {/* <div className="container ">
        <h1>Profile page</h1>
        <h2>Merhaba profil sayfanıza hoş geldiniz</h2>

        <Button color="danger" onClick={signOut}>
          Sign out
        </Button>
      </div> */}
    </>
  );
}
