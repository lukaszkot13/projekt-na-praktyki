import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Paragraph = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => {
    console.log(props);
    return props.name % 2 ? "blue" : "red";
  }};
`;
const Karta = styled.div`
  display: flex;
  text-align: center;
  align-iteams: center;
  justify-content: center;
`;

function KartaPostaci({ name, image, species, gender }) {
  return (
    <Karta>
      <div className="card" data-name={name}>
        <img src={image} alt={name} />
        <div className="container">
          <Title>{name}</Title>
          <Title>{gender}</Title>
          <Paragraph name={name}>{species}</Paragraph>
        </div>
      </div>
    </Karta>
  );
}

export default KartaPostaci;
