import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TimerIcon from "@mui/icons-material/Timer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  makeStyles,
  Typography,
  TextField,
  Box,
  Button,
} from "@material-ui/core";

const Ikony = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 1%;
  margin-left: 5%;
  margin-right: 5%;
`;
const useStyles = makeStyles({
  podpis: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

function SixCard() {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div>
      <Ikony>
        <Typography
          className={classes.podpis}
          variant="h4"
          gutterBottom
          component="div"
          onClick={() => history.push(`/omnie`)}
        >
          <AccountCircleIcon fontSize="large" />O mnie
        </Typography>
        <Typography
          className={classes.podpis}
          variant="h4"
          gutterBottom
          component="div"
          onClick={() => history.push(`/stoper`)}
        >
          <TimerIcon fontSize="large" />
          Stoper
        </Typography>
        <Typography
          className={classes.podpis}
          variant="h4"
          gutterBottom
          component="div"
          onClick={() => history.push(`/licznik`)}
        >
          <AccessTimeIcon fontSize="large" />
          Licznik
        </Typography>
        <Typography
          className={classes.podpis}
          variant="h4"
          gutterBottom
          component="div"
          onClick={() => history.push(`/listapostaci`)}
        >
          <GroupIcon fontSize="large" />
          Lista Postaci
        </Typography>
        <Typography
          className={classes.podpis}
          variant="h4"
          gutterBottom
          component="div"
          onClick={() => history.push(`/rejestracja`)}
        >
          <AppRegistrationIcon fontSize="large" />
          Rejestracja
        </Typography>
        <Typography
          className={classes.podpis}
          variant="h4"
          gutterBottom
          component="div"
          onClick={() => history.push(`/logowanie`)}
        >
          <LoginIcon fontSize="large" />
          Logowanie
        </Typography>
      </Ikony>
    </div>
  );
}

export default SixCard;
