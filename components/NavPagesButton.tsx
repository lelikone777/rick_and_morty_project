import React from "react";
import { Button } from "@/components/ui/button";

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
    <Button
      onClick={onClick}
      disabled={disabled}
      variant={active ? "default" : "outline"}
    >
      {text}
    </Button>
  );
};

export default NavPagesButton;
