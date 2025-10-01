import Container from "@/components/shared/Container";
import { getProductDetails } from "@/lib/serverActions";
import { Product } from "@/types/types";
import Image from "next/image";
import React from "react";
interface pageProps {
  params: Promise<{ id: string }>;
}
export const revalidate = 60;
const page = async ({ params }: pageProps) => {
  const { id } = await params;
  const details: Product = await getProductDetails(id);
  return (
    <Container className="my-10 grid grid-cols-3  gap-6">
      <div className="col-span-3 sm:col-span-1 relative w-full h-[300px] border border-gray-100 rounded-[10px] shadow-[0px_0px_14px_#00000050] overflow-hidden ">
        <Image src={details.images[0]} alt={details.title} fill />
      </div>
      <div className="col-span-3 sm:col-span-2 flex flex-col justify-start items-start gap-3">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-lg md:text-2xl font-semibold">{details.title}</h1>
          <p className="text-sm text-gray-500">Price: ${details.price}</p>
        </div>
        <p className="text-gray-600 text-[16px]">{details.description}</p>
      </div>
    </Container>
  );
};

export default page;
