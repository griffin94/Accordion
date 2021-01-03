import React, { useState } from "react";
import Tile from "./Tile.js";
import "./../css/accordion.css";

const Accordion = ({ accounts }) => {
  const [active, setActive] = useState(0);
  return (
    <div className='accordion'>
      {accounts.map((tile, index) => (
        <Tile
          key={index}
          id={index}
          data={tile}
          setActive={setActive}
          active={active}
        />
      ))}
    </div>
  );
};

export default Accordion;
