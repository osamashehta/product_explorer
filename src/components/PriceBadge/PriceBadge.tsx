"use client";

const PriceBadge = ({ price }: { price: number }) => {
  return (
    <div className="bg-green-100 text-green-800 text-sm font-semibold py-1 px-2 rounded">
      ${price.toFixed(2)}
    </div>
  );
};

export default PriceBadge;
