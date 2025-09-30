"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Search = () => {
  const [term, setTerm] = React.useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  const handleClick = () => {
    if (term === "") return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("q", term);
    router.push(`/?${params.toString()}`);
    setTerm("");
  };
  return (
    <div className=" flex items-center gap-2">
      <input
        type="text"
        placeholder="Search Product"
        className="w-full border border-gray-300 rounded-[10px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        onKeyDown={handleEnter}
      />
      <button
        className=" px-2 py-2 bg-blue-500 text-white rounded-[10px] hover:bg-blue-600"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
