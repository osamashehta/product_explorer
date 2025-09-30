"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Container from "../shared/Container";

const Search = () => {
  const [term, setTerm] = React.useState("");
  const router = useRouter();
  const handleClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/?q=${term}`);
      setTerm("");
    }
  };
  return (
    <Container className="w-full mt-10 max-w-[400px] mx-auto flex items-center gap-2">
      <input
        type="text"
        placeholder="Search Product"
        className="w-full border border-gray-300 rounded-[10px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        onKeyDown={handleClick}
      />
      <button
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-[10px] hover:bg-blue-600"
        onClick={() => {
          router.push(`/?q=${term}`);
          setTerm("");
        }}
      >
        Search
      </button>
    </Container>
  );
};

export default Search;
