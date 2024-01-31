import React from "react";

interface MoreCharsButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const MoreCharsButton: React.FC<MoreCharsButtonProps> = ({
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded border bg-blue-500 px-4 py-2 text-white ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
      disabled={disabled}
    >
      More Characters
    </button>
  );
};

export default MoreCharsButton;
