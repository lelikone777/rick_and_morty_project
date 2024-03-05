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
      <div className="my-3 flex flex-wrap justify-center gap-x-3 gap-y-4">
        <div className="flex gap-x-3 max-2xs:order-1">
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
        </div>
        <div className="flex gap-x-3 max-2xs:order-3">
          {renderPageButtons()}
        </div>
        <div className="flex gap-x-3 max-2xs:order-2">
          <NavPagesButton
            text=">"
            onClick={() =>
              setCurrentPage(Math.min(currentPage + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          />
          <NavPagesButton
            text=">>"
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
          />
        </div>
      </div>
    )
  );
};

export default NavPages;
