import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Login } from "@mui/icons-material";

const Header = styled.form`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

function Logowanie() {
  const [users, setUsers] = useState("null");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const correctEmail = (event) => setEmail(event.target.value);
  const correctPassword = (event) => setPassword(event.target.value);

  const correctLogin = () => {
    const poprawneDane = {
      email: email,
      password: password,
    };
    let login = true;

    users.map((correctLogin) =>
      correctLogin.password === poprawneDane.password &&
      correctLogin.email === poprawneDane.email
        ? (login = true)
        : (login = false)
    );
    if (login === false) alert("podany adres E-mail nie istnieje");
    if (login === true) {
      history.push("/success-login");
    }
  };

  return (
    <div>
      <Header>
        <TextField e-mail id="email" label="email" onChange={correctEmail} />
        <TextField
          password
          id="password"
          label="password"
          type="password"
          onChange={correctPassword}
        />
        <Button onClick={correctLogin} variant="contained">
          Zaloguj
        </Button>
      </Header>
    </div>
  );
}

export default Logowanie;
