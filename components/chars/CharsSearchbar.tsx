import React, { ChangeEvent } from "react";
import { Input } from "@/components/ui/input";

interface SearchbarProps {
  onSearch: (value: string) => void;
}

const CharsSearchbar: React.FC<SearchbarProps> = ({ onSearch }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <Input
      type="text"
      name="search"
      id="search"
      className=""
      placeholder="Search character"
      autoComplete="off"
      onChange={handleChange}
    />
  );
};

export default CharsSearchbar;
