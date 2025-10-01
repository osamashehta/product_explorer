import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full h-16 bg-blue-100 flex items-center justify-center text-black font-semibold text-lg underline">
      <Link href="/">Product Explorer</Link>
    </nav>
  );
};

export default NavBar;
