import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container my-6 md:my-10 lg:py-[100px] mx-auto px-4 sm:px-10 md:px-10 lg:px-12">
      {children}
    </div>
  );
};

export default Container;
