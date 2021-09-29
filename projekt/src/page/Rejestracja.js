import styled from "styled-components";
import * as React from "react";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState, useEffect } from "react";

const Header = styled.form`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;
const ButtonClick = styled.form`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

function Rejestracja() {
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      setUsers(res.data);
    });
  }, []);
  const [users, setUsers] = useState();
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeName = (event) => setName(event.target.value);
  const changeSecondName = (event) => setSecondName(event.target.value);
  const changeEmail = (event) => setEmail(event.target.value);
  const changePassword = (event) => setPassword(event.target.value);

  const DodajOsobe = () => {
    axios.post(`http://localhost:3000/users`, {
      name: name,
      secondName: secondName,
      email: email,
      password: password,
    });
  };

  return (
    <from>
      <Header>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField name id="Name" label="Name" onChange={changeName} />
            <TextField
              secondName
              id="secondName"
              label="secondName"
              onChange={changeSecondName}
            />
            <TextField
              password
              id="password"
              label="Password"
              type="password"
              onChange={changePassword}
            />
            <TextField email id="email" label="e-mail" onChange={changeEmail} />
          </div>
        </Box>
      </Header>
      <ButtonClick>
        <Button onClick={DodajOsobe} variant="contained" disableElevation>
          Zarejestruj
        </Button>
      </ButtonClick>
    </from>
  );
}

export default Rejestracja;
