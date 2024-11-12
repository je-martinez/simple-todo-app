import { render } from "@testing-library/react";

import { Footer } from "../../components/Footer";

describe("Footer", () => {
  it("should be able to render", () => {
    const { getByRole } = render(<Footer />);
    expect(getByRole("heading")).toBeTruthy();
    expect(getByRole("paragraph")).toBeTruthy();
    expect(document.querySelector("span")).toBeTruthy();
  });
});
