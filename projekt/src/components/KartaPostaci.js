import React from "react";
import styled from "styled-components";

const Title = styled.h3`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;

const Paragraph = styled.p`
	color: ${(props) => {
		console.log(props);
		return props.name % 2 ? "blue" : "red";
	}};
`;

function KartaPostaci({ name, image, species }) {
	return (
		<div className="card" data-name={name}>
			<img src={image} alt={name} />
			<div className="container">
				<Title>{name}</Title>
				<Paragraph name={name}>{species}</Paragraph>
			</div>
		</div>
	);
}

export default KartaPostaci;
