import { useNavigate } from "react-router";
import { fetchToken, setToken } from "./Auth";
import { useState } from "react";
import axios from "axios";
import { Form, Input, Label, Button } from "reactstrap";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //check to see if the fields are not empty
  const login = () => {
    if ((username === "") & (password === "")) {
      return;
    } else {
      // make api call to our backend. we'll leave thisfor later
      axios
        .post("http://localhost:8000/login", {
          username: username,
          password: password,
        })
        .then(function (response) {
          console.log(response.data.token, "response.data.token");
          if (response.data.token) {
            setToken(response.data.token);
            navigate("/profile");
          }
        })
        .catch(function (error) {
          console.log(error, "error");
        });
    }
  };

  return (
    <div className="container">
      <div style={{ minHeight: 800, marginTop: 30 }}>
        <h1 className="">Giriş Sayfası</h1> <hr></hr>
        <div style={{ marginTop: 30 }}>
          {fetchToken() ? (
            <h2>Giriş Yaptınız</h2>
          ) : (
            <div>
              <Form>
                <Label style={{ marginTop: "3px" }}>
                  Kullanici Adi Giriniz
                </Label>
                <Input
                  type="text"
                  placeholder="Kullanici Adi Giriniz"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Label style={{ marginTop: "3px" }}>
                  Kullanici Sifresi Giriniz
                </Label>
                <Input
                  type="password"
                  placeholder="Kullanici Sifresi Giriniz"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button type="button" color="primary" onClick={login}>
                  Login
                </Button>
              </Form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
