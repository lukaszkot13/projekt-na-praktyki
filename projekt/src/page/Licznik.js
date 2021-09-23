import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Box, ButtonGroup, Typography } from "@material-ui/core";

import TloLicznik from "../image/tlo_licznik.jpg";

const Header = styled.div`
  background-image: url(${TloLicznik});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 6%;
  height: 100vh;
  width: 100%;
  position: relative;
`;

function Licznik({ defultValue = 0, step = 1 }) {
  const [value, setValue] = useState(defultValue);

  useEffect(() => {
    console.log("useEffect");
  });
  const onMinus = () => {
    setValue(value - step);
  };

  const onAdd = () => {
    setValue(value + step);
  };
  const reset = () => {
    setValue(0);
  };
  const razy = () => {
    setValue(value * 2);
    if (value === 0) alert("0 * 2 = 0  :)");
  };
  const podzielic = () => {
    setValue(value / 2);
    if (value === 0) alert("0 / 2 = 0  :))");
  };
  const buttons = [
    <Button key="podzielic" onClick={podzielic}>
      / 2
    </Button>,
    <Button key="minus" onClick={onMinus}>
      -
    </Button>,
    <Button key="reset" onClick={reset}>
      Reset
    </Button>,
    <Button key="plus" onClick={onAdd}>
      +
    </Button>,
    <Button key="razy" onClick={razy}>
      * 2
    </Button>,
  ];
  return (
    <div>
      {
        <Header>
          <h1>Licznik</h1>
          <Typography variant={("button", "h2")} display="block" gutterBottom>
            {value}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "& > *": {
                m: 2,
              },
            }}
          >
            <ButtonGroup size="large" aria-label="large button group">
              {buttons}
            </ButtonGroup>
          </Box>
        </Header>
      }
    </div>
  );
}

export default Licznik;
