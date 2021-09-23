import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navi from "./components/Navi";
import Omnie from "./page/Omnie";
import Logowanie from "./page/Logowanie";
import MPage from "./components/MPage";
import SixCard from "./components/SixCard";
import ListaPostaci from "./page/ListaPostaci";
import Licznik from "./page/Licznik";
import Stoper from "./page/Stoper";
import Rejestracja from "./page/Rejestracja";

function App() {
  return (
    <div className="App">
      <Router>
        <Navi />
        <Route path="/" exact>
          <MPage />
          <SixCard />
        </Route>

        <Route path="/omnie">
          <Omnie />
        </Route>
        <Route path="/logowanie">
          <Logowanie />
        </Route>
        <Route path="/listapostaci">
          <ListaPostaci />
        </Route>
        <Route path="/licznik">
          <Licznik />
        </Route>
        <Route path="/stoper">
          <Stoper />
        </Route>
        <Route path="/rejestracja">
          <Rejestracja />
        </Route>
      </Router>
    </div>
  );
}

export default App;
