import Container from "@/components/shared/Container";
import { getProductDetails } from "@/lib/serverActions";
import { Product } from "@/types/types";
import Image from "next/image";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
const DynamicPriceBadge = dynamic(
  () => import("@/components/PriceBadge/PriceBadge")
);
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
        <Image src={details.images[0]} alt={details.title} fill priority />
      </div>
      <div className="col-span-3 sm:col-span-2 flex flex-col justify-start items-start gap-3">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-lg md:text-2xl font-semibold">{details.title}</h1>
          <Suspense
            fallback={
              <div className="bg-green-100 text-green-800 text-sm font-semibold py-1 px-2 rounded animate-pulse">
                Loading...
              </div>
            }
          >
            <DynamicPriceBadge price={details.price} />
          </Suspense>
        </div>
        <p className="text-gray-600 text-[16px]">{details.description}</p>
      </div>
    </Container>
  );
};

export default page;
