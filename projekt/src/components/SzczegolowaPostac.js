import React from "react";
import { BrowserRouter as Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

import KartaPostaci from "./KartaPostaci";

function SzczegolowaPostac({ postaci }) {
  const history = useHistory();

  return (
    <div>
      {postaci?.results.map(({ name, species, image, status, gender, id }) => (
        <Route exact path={`/${id}`}>
          <KartaPostaci
            key={id}
            name={name}
            species={species}
            image={image}
            status={status}
            gender={gender}
          />
        </Route>
      ))}
      <div onClick={() => history.push(`/id`)}>${KartaPostaci}</div>
    </div>
  );
}

export default SzczegolowaPostac;
