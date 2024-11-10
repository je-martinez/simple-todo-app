import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallback.jsx";
import { Footer } from "./Footer.jsx";
import { Header } from "./Header.jsx";

export const Layout = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Header />
      {children}
      <Footer />
    </ErrorBoundary>
  );
};
