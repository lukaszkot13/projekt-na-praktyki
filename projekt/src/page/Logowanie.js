import MyLogo from "../image/tlo.jpg";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Tlo = styled.div`
  background-image: url(${MyLogo});
  height: 120vh;
  background-position: center;
  background-size: cover;
  margin-top: 5%;
`;

function Logowanie() {
  return (
    <div>
      <Tlo>
        <button>Logowanie </button>
        <Button variant="contained">Szukaj</Button>
      </Tlo>
    </div>
  );
}

export default Logowanie;
