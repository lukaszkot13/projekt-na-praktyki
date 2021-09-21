import styled from "styled-components";
import { Typography } from "@material-ui/core";

import MyLogo from "../image/tlo_omnie.jpg";
import Dane from "../components/Dane";
import Milly from "../image/milly.jpg";

const Fotka = styled.div`
	background-position: center;
	background-size: cover;
	border-radius: 50%;
	background-image: url(${Milly});
	width: 300px;
	height: 300px;
	margin-top: 7%;
`;

const Container = styled.div`
	background-image: url(${MyLogo});
	background-position: center;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	height: 150vh;
	width: 100%;
	position: relative;
`;

function Omnie() {
	return (
		<Container>
			<Fotka />
			<br />
			<Typography variant={("button", "h2")} display="block" gutterBottom>
				{Dane.imie}
			</Typography>
			<Typography variant={("button", "h2")} display="block" gutterBottom>
				{Dane.nazwisko}
			</Typography>

			<Typography variant={("body1", "h3")} gutterBottom>
				{Dane.tekst}
			</Typography>
		</Container>
	);
}

export default Omnie;
