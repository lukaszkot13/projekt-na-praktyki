import React from "react";
import MyLogo from "../image/tlo.jpg";
import styled from "styled-components";

const Tlo = styled.div`
	background-image: url(${MyLogo});
	height: 120vh;
	background-position: center;
	background-size: cover;
`;

const Glowna = () => {
	return (
		<div>
			<Tlo>
				<h1>Tytuł strony</h1>
				<h3>opis strony</h3>
				<input type="text">Wyszukiwarka</input> <button>Szukaj</button>
			</Tlo>
		</div>
	);
};

export default Glowna;
