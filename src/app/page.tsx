import Empty from "@/components/Empty/Empty";
import ProductsList from "@/components/ProductsList/ProductsList";
import Container from "@/components/shared/Container";
import { getProducts } from "@/lib/serverActions";
import { Product } from "@/types/types";
interface HomeProps {
  searchParams: Promise<{q: string}>;
}
export default async function Home({ searchParams }: HomeProps) {
  const data = await getProducts();
  const { q } = await searchParams;
  console.log("q", q);
  const filteredProducts = data?.products.filter((product: Product) =>
    product.title.toLowerCase().includes(q?.toLowerCase() || "")
  );


  return (
    <Container>
      {filteredProducts.length === 0 && <Empty />}
      <ProductsList products={filteredProducts} />
    </Container>
  );
}
