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
const Navi = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Next = "Nastęspna";
const Prev = "Poprzednia";

function ListaPostaci() {
  const [postaci, setPostaci] = useState(null);
  const [page, setPage] = useState(1);

  const next = () => {
    if (page === 34) {
      alert("jesteś na ostatniej stronie");
    }
    {
      setPage(page);
    }
    setPage(page + 1);
  };

  const prev = () => {
    if (page === 1) {
      alert("jesteś na 1 stronie");
    }
    {
      setPage(page);
    }
    setPage(page - 1);
  };

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((result) => {
        console.log("dane", result);
        setPostaci(result.data);
      });
  }, [page]);

  if (!postaci) {
    return <div>brak danych</div>;
  }

  <input type="select" id="status">
    <option value="alive">alive</option>
    <option value="dead">dead</option>
    <option value="unknow">unknow</option>
    <option value="All" selected="selected">
      All
    </option>
  </input>;

  return (
    <div>
      <Header>
        <Navi>
          <h2>Lista postaci ({postaci.info.count})</h2>
          <h2>
            <Button onClick={prev}>{Prev}</Button>Aktualna strona to (
            {postaci.info.pages}) na
            {postaci.info.pages} <Button onClick={next}>{Next}</Button>
          </h2>
        </Navi>
        <ContainerCard>
          {postaci.results
            .filter((item, index) => index < 12)
            .map(({ name, image, species, gender, status, id }, index) => (
              <KartaPostaci
                name={name}
                species={species}
                image={image}
                gender={gender}
                status={status}
              />
            ))}
        </ContainerCard>
      </Header>
    </div>
  );
}

export default ListaPostaci;
