import React from "react";
import "./Header.css";

function Header({name, imageSrc, birthday}) {
  return (
    <header>
      <img src={imageSrc} />
      <div>
        <h1>{name}</h1>
        <h2>{birthday}</h2>
      </div>
    </header>
  );
}

export default Header;
