import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  perPage: number;
  handlePerPageChange: (value: string) => void;
}

const CharsPerPageFilter: React.FC<Props> = ({
  perPage,
  handlePerPageChange,
}) => {
  return (
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
  );
};

export default CharsPerPageFilter;
