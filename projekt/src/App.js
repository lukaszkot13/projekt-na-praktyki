import "./App.css";
import React from "react";
import { BrowserRouter as Route } from "react-router-dom";

import Omnie from "./page/Omnie";
import Logowanie from "./page/Logowanie";
import MainPage from "./components/MainPage";
import Navi from "./components/Navi";

function App() {
	return (
		<div className="App">
			<Navi />

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
