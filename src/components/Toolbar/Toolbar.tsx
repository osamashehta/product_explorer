"use client";
import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import Container from "../shared/Container";
import { useRouter } from "next/navigation";

const Toolbar = () => {
  const router = useRouter();
  return (
    <Container className="my-10 flex flex-wrap   items-center justify-center gap-4">
      <Search />
      <Filter />
      <button
        onClick={() => router.push("/")}
        className=" px-2 py-1 bg-red-500 text-white rounded-[10px] hover:bg-red-600"
      >
        clear All
      </button>
    </Container>
  );
};

export default Toolbar;
