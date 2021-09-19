import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navi from "./components/Navi";
import Omnie from "./page/Omnie";
import Logowanie from "./page/Logowanie";
import Glowna from "./components/Glowna";

function App() {
	return (
		<div className="App">
			<Navi />
			<Route path="/" exact>
				<Glowna />
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
