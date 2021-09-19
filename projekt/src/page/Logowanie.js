import MyLogo from "../image/tlo.jpg";
import styled from "styled-components";

const Tlo = styled.div`
	background-image: url(${MyLogo});
	height: 120vh;
	background-position: center;
	background-size: cover;
`;

function Logowanie() {
	return (
		<div>
			<Tlo>
				<button>Logowanie </button>
			</Tlo>
		</div>
	);
}

export default Logowanie;
