import { screen, render } from "@testing-library/react";
import Search from "../components/Toolbar/Search";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
  useSearchParams: jest.fn().mockReturnValue({ toString: () => "" }),
}));
describe("Search Component", () => {
  it("should render the search component", () => {
    render(<Search />);
    const inputElement = screen.getByRole("button", {
      name: /search/i,
    });
    expect(inputElement).toBeInTheDocument();
  });
});
