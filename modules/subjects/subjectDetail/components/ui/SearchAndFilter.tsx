import { AvailableAcademicYears } from "@/config/AvailableAcademicYears";
import { MaterialCategoryLists } from "@/config/MaterialCategoryLists";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/modules/shadcn/ui/input-group";
import { NativeSelect, NativeSelectOption } from "@/modules/shadcn/ui/native-select";
import { Search } from "lucide-react";
import React from "react";

interface SearchAndFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  year: string;
  onYearChange: (value: string) => void;
}

const SearchAndFilter = ({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  year,
  onYearChange,
}: SearchAndFilterProps) => {
  return (
    <div className="h-11 flex *:h-full gap-2">
      <InputGroup className="px-2">
        <InputGroupInput
          className="mx-2"
          placeholder="Search materials..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>

      <NativeSelect value={category} onChange={(e) => onCategoryChange(e.target.value)} className="*:h-full w-50">
        <NativeSelectOption value="">All Categories</NativeSelectOption>
        {MaterialCategoryLists.map((cat) => (
          <NativeSelectOption className="h-full" key={cat.value} value={cat.value}>
            {cat.label}
          </NativeSelectOption>
        ))}
      </NativeSelect>

      <NativeSelect value={year} onChange={(e) => onYearChange(e.target.value)} className="*:h-full w-40">
        <NativeSelectOption value="">All Years</NativeSelectOption>
        {AvailableAcademicYears.map((yr) => (
          <NativeSelectOption className="h-full" key={yr} value={yr}>
            {yr}
          </NativeSelectOption>
        ))}
      </NativeSelect>
    </div>
  );
};

export default SearchAndFilter;
