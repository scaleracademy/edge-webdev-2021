import React from "react";

import "../styles/navbar.css";

export default function NavBar({ setInputValue, inputValue, search }) {
  return (
    <div className="navbar">
      <span className="heading">MOVIE DB</span>
      <input
        onChange={(e) => {
          // inputValue = e.target.value; // wrong
          setInputValue(e.target.value);
        }}
        onKeyPress={search}
        type="text"
        placeholder="Search..."
        className="search-bar"
      />
    </div>
  );
}
