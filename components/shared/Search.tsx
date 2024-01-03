import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";

const Search = () => {
  return (
    <div className="flex rounded-lg bg-light-850 px-3 py-1">
      <Image
        src="/assets/icons/search.svg"
        alt="search"
        width={20}
        height={20}
      />
      <Input
        type="text"
        placeholder="Search"
        className="ml-1 border-none bg-transparent text-light-400 placeholder:font-causten placeholder:text-base placeholder:text-light-500 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
};

export default Search;
