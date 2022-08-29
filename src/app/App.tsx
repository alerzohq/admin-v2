import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// css import
import { Container } from "./App.styled";

// components
import { Sidebar } from "../components/common/sidebar/Sidebar";
import ErrorBoundary from "../components/common/ErrorBoundary";
import ScrollToTop from "../utils/ScrollTo";

const TransactionHistory = React.lazy(
  () => import("../pages/transaction-history-page/index")
);
const Dashboard = React.lazy(() => import("../pages/dashboard-page/index"));

function App() {
  let routes = (
    <Container>
      <Sidebar />
      <ScrollToTop />
      <ErrorBoundary fallback="Sorry.. there was an error">
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<h1>Loading dashboard</h1>}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/history"
            element={
              <Suspense fallback={<h1>Loading History</h1>}>
                <TransactionHistory />
              </Suspense>
            }
          />
          {/* replace with not found component */}
          <Route
            path="*"
            element={
              <Suspense fallback={<h1>Loading dashboard</h1>}>
                <Dashboard />
              </Suspense>
            }
          />
        </Routes>
      </ErrorBoundary>
    </Container>
  );

  return routes;
}

export default App;
