import styled from "styled-components";
import * as React from "react";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";

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
  const DodajOsobe = () => {
    const example = {
      id: "{}",
      Name: "{}",
      Surname: "{}",
      email: "{}",
      password: "{}",
    };
    axios.post(`http://localhost:3000/dane`, example);
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
            <TextField Name id="Name" label="Name" />
            <TextField Surname id="Surname" label="Surname" />
            <TextField
              id="password"
              label="Password"
              type="password"
              autoComplete="password"
            />
            <TextField id="email" label="e-mail" />
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
