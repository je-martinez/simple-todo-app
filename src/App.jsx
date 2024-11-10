import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router.jsx";
import { Loading } from "./components/Loading.jsx";
import { AppStoreProvider } from "./providers/Store.jsx";

export const PageWithHeader = ({ children }) => (
  <div className="flex h-full flex-col">{children}</div>
);

export const App = () => (
  <AppStoreProvider>
    <BrowserRouter>
      <Suspense
        fallback={
          <PageWithHeader>
            <Loading name="suspense" />
          </PageWithHeader>
        }
      >
        <div className="h-full bg-white-50 p-4">
          <Router />
        </div>
      </Suspense>
    </BrowserRouter>
  </AppStoreProvider>
);
