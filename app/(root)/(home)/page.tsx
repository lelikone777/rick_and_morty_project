"use client";
import React, { useState, useEffect } from "react";
import { getChars } from "@/actions/chars.action";
import { CharsModel } from "@/models/chars.model";
import Link from "next/link";
import Searchbar from "@/components/Searchbar";
import { Button } from "@/components/ui/button";
import NavPages from "@/components/NavPages";
import NavPagesButton from "@/components/NavPagesButton";
import CharCard from "@/components/CharCard";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Page() {
  const [searchText, setSearchText] = useState("");
  const [chars, setChars] = useState([]);
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage, setCharactersPerPage] = useState(20);
  const [filteredChars, setFilteredChars] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const charsData = await getChars();
      setChars(charsData || []);
    };

    fetchData().then();
  }, []);

  useEffect(() => {
    const filtered = chars.filter((char: CharsModel) =>
      char.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredChars(filtered);

    const totalPages = Math.ceil(filtered.length / charactersPerPage);
    setTotalPages(totalPages);
    setCurrentPage(1);
  }, [searchText, chars, charactersPerPage]);

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const handlePerPageChange = (value: string) => {
    const numericValue = Number(value);
    if (numericValue === -1) {
      // Show all characters
      setPerPage(chars.length);
      setCharactersPerPage(chars.length);
    } else {
      setPerPage(numericValue);
      setCharactersPerPage(numericValue);
    }
  };

  const handleShowMore = () => {
    setCharactersPerPage((prev) => prev + perPage);
  };

  const startIndex = (currentPage - 1) * charactersPerPage;
  const endIndex = startIndex + charactersPerPage;
  const visibleCharsOnPage = filteredChars.slice(startIndex, endIndex);

  const renderPageButtons = () => {
    const pageButtons = [];
    const maxPagesToShow = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <NavPagesButton
          key={i}
          text={String(i)}
          onClick={() => setCurrentPage(i)}
          active={i === currentPage}
        />,
      );
    }
    return pageButtons;
  };

  return (
    <div>
      <div className="container">
        <div className="flex flex-col items-center gap-y-3 space-x-6 py-6 xs:flex-row [&>*]:rounded [&>*]:bg-accent">
          <Searchbar onSearch={handleSearch} />

          <Select onValueChange={handlePerPageChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={perPage + " per page"} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="20">20 per page</SelectItem>
                <SelectItem value="40">40 per page</SelectItem>
                <SelectItem value="80">80 per page</SelectItem>
                <SelectItem value="-1">Show all characters</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <ul className="3xl:grid-cols-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {visibleCharsOnPage.map((char: CharsModel) => (
            <li key={char.id}>
              <Link href={`/char/${char.id}`}>
                <CharCard char={char} />
              </Link>
            </li>
          ))}
        </ul>

        <NavPages
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          renderPageButtons={renderPageButtons}
        />

        {filteredChars.length > charactersPerPage && (
          <Button onClick={handleShowMore}>Show More</Button>
        )}
      </div>
    </div>
  );
}
