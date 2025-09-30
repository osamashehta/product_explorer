import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`container  my-10 mx-auto px-4 sm:px-10 md:px-10 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
