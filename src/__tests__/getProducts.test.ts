import apiServiceCall from "@/lib/apiServerCall";
import { getProducts } from "@/lib/serverActions";

jest.mock("@/lib/apiServerCall");
const mockedApiServiceCall = apiServiceCall as jest.MockedFunction<
  typeof apiServiceCall
>;
describe("getProducts", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("gets products without query and sort", async () => {
    mockedApiServiceCall.mockResolvedValue({
      products: [{ id: 1, price: "9.99" }],
    });
    const data = await getProducts();
    expect(mockedApiServiceCall).toHaveBeenCalledWith({
      url: "products/search",
    });
    expect(data).toEqual({ products: [{ id: 1, price: "9.99" }] });
    expect(data.products).toHaveLength(1);
  });
  it("gets products with query", async () => {
    mockedApiServiceCall.mockResolvedValue({
      products: [{ id: 101, price: "549.99" }],
    });
    const data = await getProducts("phone");
    expect(mockedApiServiceCall).toHaveBeenCalledWith({
      url: "products/search?q=phone",
    });
    expect(data).toEqual({ products: [{ id: 101, price: "549.99" }] });
    expect(data.products[0].price).toBe("549.99");
  });
});
