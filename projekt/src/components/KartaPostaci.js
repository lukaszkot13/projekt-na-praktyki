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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

function KartaPostaci({ name, image, species, gender, id, status }) {
  return (
    <Karta>
      <div className="card" data-name={name}>
        <img src={image} alt={name} />

        <div className="container">
          <Title>{name}</Title>
          <Title>{gender}</Title>
          <Title>{status}</Title>
          <Paragraph name={name}>{species}</Paragraph>
        </div>
      </div>
    </Karta>
  );
}

export default KartaPostaci;
