// Searchbar.js
import React from "react";

const Searchbar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      name="search"
      id="search"
      className="my-2 border-slate-300 p-2.5 text-black placeholder:text-slate-400"
      placeholder="Search"
      onChange={handleChange}
    />
  );
};

export default Searchbar;
