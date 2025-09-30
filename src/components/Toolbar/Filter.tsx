"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`/?${params.toString()}`);
  };
  return (
    <div className=" flex items-center gap-2">
      <Select onValueChange={(value) => handleSortChange(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Price" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Price</SelectLabel>
            <SelectItem value="asc">Price: Low to High</SelectItem>
            <SelectItem value="desc">Price: High to Low</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
