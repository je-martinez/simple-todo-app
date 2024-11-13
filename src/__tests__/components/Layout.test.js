import { render } from "@testing-library/react";
import { Layout } from "../../components/Layout";
import { AppStoreProvider } from "../../providers/Store";

describe("<Layout />", () => {
  it("should render children", () => {
    jest.doMock("../../components/ErrorFallback.jsx", () => {
      const MockedComponent = (props) => (
        <div data-testid="mocked-child">{`Mocked Child with prop: ${props.someProp}`}</div>
      );
      MockedComponent.displayName = "MockedComponent";
      return MockedComponent;
    });
    const { container } = render(
      <AppStoreProvider>
        <Layout />
      </AppStoreProvider>
    );
    expect(container.children.length).toBeGreaterThan(0);
  });
});
