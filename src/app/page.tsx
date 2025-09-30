import Empty from "@/components/Empty/Empty";
import ProductsList from "@/components/ProductsList/ProductsList";
import Container from "@/components/shared/Container";
import { getProducts } from "@/lib/serverActions";
import { Product } from "@/types/types";
interface HomeProps {
  searchParams: Promise<{ q: string,sort: string }>;
}
export default async function Home({ searchParams }: HomeProps) {
  const data = await getProducts();
  const { q,sort } = await searchParams;
  const filteredProducts = data?.products.filter((product: Product) =>
    product.title.toLowerCase().includes(q?.toLowerCase() || "")
  );
  const sortedData = filteredProducts?.sort((a:Product,b:Product)=> {
    if(sort === "price_asc"){
      return a.price - b.price;
    }else if(sort === "price_desc"){
      return b.price - a.price;
    }
    return 0;
  })

  return (
    <Container className="my-10">
      {sortedData?.length === 0 && <Empty />}
      <ProductsList products={sortedData} />
    </Container>
  );
}
