import Empty from "@/components/Empty/Empty";
import ProductsList from "@/components/ProductsList/ProductsList";
import Container from "@/components/shared/Container";
import { getProducts } from "@/lib/serverActions";
interface HomeProps {
  searchParams: Promise<{ q: string; sort: string }>;
}
export default async function Home({ searchParams }: HomeProps) {
  const { q, sort } = await searchParams;
  const data = await getProducts(q, sort);

  return (
    <Container className="my-10">
      {data?.products?.length === 0 && <Empty />}
      <ProductsList products={data?.products} />
    </Container>
  );
}
