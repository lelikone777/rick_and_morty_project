import React, { ChangeEvent } from "react";

interface SearchbarProps {
  onSearch: (value: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSearch }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      name="search"
      id="search"
      className="my-2 border-slate-300 p-2.5 text-black placeholder:text-slate-400"
      placeholder="Search character"
      autoComplete="off"
      onChange={handleChange}
    />
  );
};

export default Searchbar;
