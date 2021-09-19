import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navi from "./components/Navi";
import Omnie from "./page/Omnie";
import Logowanie from "./page/Logowanie";
import MPage from "./components/MPage";
import SixCard from "./components/SixCard";




function App() {
	return (
		<div className="App">
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
		</div>
	);
}

export default App;
