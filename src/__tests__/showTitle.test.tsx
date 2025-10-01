import ProductDetails from "@/app/products/[id]/page";
import { screen, render } from "@testing-library/react";
jest.mock("@/lib/serverActions", () => ({
  getProductDetails: jest.fn().mockResolvedValue({
    id: "1",
    title: "Essence Mascara Lash Princess",
    description: "Some description",
    price: 20,
    images: ["https://via.placeholder.com/300"],
  }),
}));
describe("Show Title", () => {
  it("should show title on the screen", async () => {
    const ui = await ProductDetails({ params: Promise.resolve({ id: "1" }) });
    render(ui);
    const titleElement = await screen.findByText(
      /Essence Mascara Lash Princess/i
    );
    expect(titleElement).toBeInTheDocument();
  });
  it("should show price on the screen", async () => {
    const ui = await ProductDetails({ params: Promise.resolve({ id: "1" }) });
    render(ui);
    const priceElement = await screen.findByText(
      /20/
    );
    expect(priceElement).toBeInTheDocument();
  });
});
