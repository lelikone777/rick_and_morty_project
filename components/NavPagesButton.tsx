import React from "react";

interface NavPagesButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
}

const NavPagesButton: React.FC<NavPagesButtonProps> = ({
  text,
  onClick,
  disabled = false,
  active = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded border px-4 py-2 ${
        active ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
      }`}
    >
      {text}
    </button>
  );
};

export default NavPagesButton;
