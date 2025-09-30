import ProductsList from "@/components/ProductsList/ProductsList";
import Container from "@/components/shared/Container";
import { getProducts } from "@/lib/serverActions";

export default async function Home() {
  const data = await getProducts();
  console.log("data from server action", data);

  return (
    <Container>
      <ProductsList products={data?.products} />
    </Container>
  );
}
