import axios from "axios";
import React, { useState, useEffect } from "react";

import KartaPostaci from "../components/KartaPostaci";

function ListaPostaci() {
  const [postaci, setPostaci] = useState(null);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`).then((result) => {
      console.log("dane", result);
      setPostaci(result.data);
    });
  }, []);

  if (!postaci) {
    return <div>brak danych</div>;
  }

  return (
    <div>
      <h2>Lista postaci ({postaci.info.count})</h2>
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
    </div>
  );
}

export default ListaPostaci;
