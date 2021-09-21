import axios from "axios";
import React, { useState, useEffect } from "react";
import KartaPostaci from "../components/KartaPostaci";

function ListaPostaci() {
	const [postaci, setPostaci] = useState(null);

	useEffect(() => {
		axios
			.get(`https://rickandmortyapi.com/api/character`)
			.then((result) => {
				setPostaci(result.data);
			});
	}, []);

	if (!postaci) {
		return <div>brak danych</div>;
	}

	return (
		<KartaPostaci />
		// <div>
		// 	<h2>Lista postaci ({postaci.lenght})</h2>
		// 	{postaci.map(({ name, image, species }) => (
		// 		<KartaPostaci name={name} species={species} image={image} />
		// 	))}
		// </div>
	);
}

export default ListaPostaci;
