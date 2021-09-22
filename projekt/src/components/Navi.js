import * as React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Mylogo from "../image/tlo.jpg";

const Logo = styled.div`
  width: 15px;
  height: 20px;
`;

const useStyles = makeStyles({
  title: {
    flexGrow: 10,
  },
});

function Navi() {
  const classes = useStyles();

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Logo>
              <Link to="/">
                <img src={Mylogo} className="logo" alt="logo" />
              </Link>
            </Logo>
          </Typography>

          <Link to="/omnie">
            <Button color="inherit">O mnie</Button>
          </Link>
          <Link to="/stoper">
            <Button color="inherit">stoper</Button>
          </Link>
          <Link to="/licznik">
            <Button color="inherit">licznik</Button>
          </Link>
          <Link to="/listapostaci">
            <Button color="inherit">lista postaci</Button>
          </Link>
          <Link to="/rejestracja">
            <Button color="inherit">rejestrecja</Button>
          </Link>
          <Link to="/logowanie">
            <Button color="inherit">logowanie</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navi;
