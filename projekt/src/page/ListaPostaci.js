import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import KartaPostaci from "../components/KartaPostaci";

const ContainerCard = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin-top: 2%;
`;
const Header = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin-top: 6%;
`;

function ListaPostaci() {
	const [postaci, setPostaci] = useState(null);

	useEffect(() => {
		axios
			.get(`https://rickandmortyapi.com/api/character/`)
			.then((result) => {
				console.log("dane", result);
				setPostaci(result.data);
			});
	}, []);

	if (!postaci) {
		return <div>brak danych</div>;
	}

	return (
		<div>
			<Header>
				<h2>Lista postaci ({postaci.info.count})</h2>
				<Button>Poprzednia</Button>
				<Button>Następna</Button>
				<ContainerCard>
					{postaci.results
						.filter((item, index) => index < 12)
						.map(({ name, image, species, gender }, index) => (
							<KartaPostaci
								name={name}
								species={species}
								image={image}
								gender={gender}
							/>
						))}
				</ContainerCard>
			</Header>
		</div>
	);
}

export default ListaPostaci;
