import MyLogo from "../image/tlo.jpg";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

const Header = styled.form`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

function Logowanie() {
  return (
    <div>
      <Header>
        <TextField e-mail id="email" label="email" />{" "}
        <TextField password id="password" label="password" />
        <Button variant="contained">Zaloguj</Button>
      </Header>
    </div>
  );
}

export default Logowanie;
