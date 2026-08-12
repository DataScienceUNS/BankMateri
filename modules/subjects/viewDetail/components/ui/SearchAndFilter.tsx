import { AvailableAcademicYears } from "@/config/AvailableAcademicYears";
import { MaterialCategoryLists } from "@/config/MaterialCategoryLists";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/modules/shadcn/ui/input-group";
import { NativeSelect, NativeSelectOption } from "@/modules/shadcn/ui/native-select";
import { Search } from "lucide-react";
import React from "react";

const SearchAndFilter = () => {
  return (
    <div className="h-11 flex *:h-full gap-2">
      <InputGroup className="px-2">
        <InputGroupInput className="mx-2" placeholder="Search materials..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end"></InputGroupAddon>
      </InputGroup>

      <NativeSelect className="*:h-full w-50">
        <NativeSelectOption value="">All Categories</NativeSelectOption>
        {MaterialCategoryLists.map((category) => (
          <NativeSelectOption className="h-full" key={category.value} value={category.value}>
            {category.label}
          </NativeSelectOption>
        ))}
      </NativeSelect>

      <NativeSelect className="*:h-full w-40">
        <NativeSelectOption value="">All Years</NativeSelectOption>
        {AvailableAcademicYears.map((year) => (
          <NativeSelectOption className="h-full" key={year} value={year}>
            {year.toString()}
          </NativeSelectOption>
        ))}
      </NativeSelect>
    </div>
  );
};

export default SearchAndFilter;
