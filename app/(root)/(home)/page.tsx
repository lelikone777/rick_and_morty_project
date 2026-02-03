"use client";
import React, { useState, useEffect } from "react";
import { getChars } from "@/actions/chars.action";
import { CharsModel } from "@/models/chars.model";
import CharsSearchbar from "@/components/chars/CharsSearchbar";
import { Button } from "@/components/ui/button";
import NavPages from "@/components/NavPages";
import NavPagesButton from "@/components/NavPagesButton";
import CharCard from "@/components/CharCard";
import CharsPerPageFilter from "@/components/chars/CharsPerPageFilter";

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
        <div className="flex flex-col items-center gap-x-6 gap-y-3 py-6 max-xs:gap-x-0 xs:flex-row [&>*]:rounded [&>*]:bg-accent">
          <CharsSearchbar onSearch={handleSearch} />
          <CharsPerPageFilter
            perPage={perPage}
            handlePerPageChange={handlePerPageChange}
          />
        </div>
      </div>

      <div
        className={`sm:container ${typeof window !== "undefined" && window.innerWidth >= 480 ? "container" : ""}`}
      >
        <ul className="3xl:grid-cols-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {visibleCharsOnPage.map((char: CharsModel) => (
            <li
              key={char.id}
              className="hover-duration hover:border-input hover:shadow-xl dark:hover:bg-accent dark:hover:text-foreground"
            >
              <CharCard char={char} />
            </li>
          ))}
        </ul>
      </div>

      <div className="container my-8 flex flex-col justify-center gap-y-6">
        <NavPages
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          renderPageButtons={renderPageButtons}
        />

        {filteredChars.length > charactersPerPage && (
          <Button
            onClick={handleShowMore}
            className="w-full self-center 2xs:w-fit"
          >
            Show More
          </Button>
        )}
      </div>
    </div>
  );
}
