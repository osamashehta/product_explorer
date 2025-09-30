import { Product } from "@/types/types";
import Image from "next/image";
import React from "react";
interface ProductsListProps {
  products: Product[];
}
const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border border-gray-300 p-4 flex flex-col items-center justify-center rounded-[10px] shadow-[0px_0px_14px_#00000025]"
        >
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={200}
            height={200}
            className="object-cover mb-4"
          />
          <div className="flex items-center justify-between w-full gap-2">
            <h2 className="text-[16px] font-semibold mb-2">{product.title}</h2>
            <p className="text-lg font-semibold text-green-600">
              ${product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
