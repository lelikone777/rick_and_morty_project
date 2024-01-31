"use client";
import { useState, useEffect } from "react";
import { getChars } from "@/actions/chars.action";
import { CharsModel } from "@/models/chars.model";
import Link from "next/link";
import Searchbar from "@/components/Searchbar";
import NavPagesButton from "@/components/NavPagesButton";

export default function Page() {
  const [searchText, setSearchText] = useState("");
  const [chars, setChars] = useState([]);
  const [perPage, setPerPage] = useState(20); // Default per page
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredChars, setFilteredChars] = useState([]); // Filtered characters
  const [totalPages, setTotalPages] = useState(0); // Total pages

  useEffect(() => {
    const fetchData = async () => {
      const charsData = await getChars();
      setChars(charsData || []);
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Update filtered characters and total pages when searchText or chars change
    const filtered = chars.filter((char: CharsModel) =>
      char.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredChars(filtered);

    const totalPages = Math.ceil(filtered.length / perPage);
    setTotalPages(totalPages);
    setCurrentPage(1); // Reset current page when filtered characters change
  }, [searchText, chars, perPage]);

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(event.target.value);
    if (value === -1) {
      // Show all characters
      setPerPage(chars.length);
    } else {
      setPerPage(value);
    }
  };

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
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
      <h1>Characters List</h1>

      <Searchbar onSearch={handleSearch} />

      {/* Dropdown for selecting number of characters per page */}
      <select value={perPage} onChange={handlePerPageChange}>
        <option value={20}>20 per page</option>
        <option value={40}>40 per page</option>
        <option value={80}>80 per page</option>
        <option value={-1}>Show all characters</option>
      </select>

      <ul>
        {visibleCharsOnPage.map((char: CharsModel) => (
          <li key={char.id}>
            <Link href={`/char/${char.id}`}>{char.name}</Link>
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <div className="my-3 flex gap-x-3">
          <NavPagesButton
            text="<<"
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          />
          <NavPagesButton
            text="<"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          />
          {renderPageButtons()}
          <NavPagesButton
            text=">"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          />
          <NavPagesButton
            text=">>"
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
          />
        </div>
      )}
    </div>
  );
}
