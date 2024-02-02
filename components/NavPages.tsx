import React from "react";
import NavPagesButton from "@/components/NavPagesButton";

interface NavPagesProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  renderPageButtons: () => React.ReactNode;
}

const NavPages: React.FC<NavPagesProps> = ({
  totalPages,
  currentPage,
  setCurrentPage,
  renderPageButtons,
}) => {
  return (
    totalPages > 1 && (
      <div className="my-3 flex gap-x-3">
        <NavPagesButton
          text="<<"
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        />
        <NavPagesButton
          text="<"
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        />
        {renderPageButtons()}
        <NavPagesButton
          text=">"
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        />
        <NavPagesButton
          text=">>"
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
        />
      </div>
    )
  );
};

export default NavPages;
