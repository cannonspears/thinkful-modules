import React from "react";

function Header({ loggedIn, handleLoggedInClick, handleFontSizeIncrease }) {
  return (
    <header>
      <button onClick={handleLoggedInClick}>{loggedIn ? "Log Out" : "Log In"}</button>
      <button onClick={handleFontSizeIncrease}>Increase Font Size</button>
    </header>
  );
}

export default Header;
