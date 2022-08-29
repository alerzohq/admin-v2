import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// import { Sidebar } from "../components/common/sidebar/Sidebar";
import ErrorBoundary from "../components/common/ErrorBoundary";
import ScrollToTop from "../utils/ScrollTo";
import Login from "../pages/login";
import Transactions from "../pages/dashboard/transactions";
import Dashboard from "../pages/dashboard";
import Overview from "../pages/dashboard/overview";
import { Path } from "../constants/route-path";
import Users from "../pages/dashboard/users";

// const Dashboard = React.lazy(() => import("../pages/dashboard"));

function App() {
  let routes = (
    <>
      <ScrollToTop />
      <ErrorBoundary fallback="Sorry.. there was an error">

        <Routes>
        <Route
            path="/"
          element={
                <Login />
            }
          />
          {/* <Route
            path="dashboard"
            element={
              <Suspense fallback={<h1>Loading dashboard</h1>}>
                <Dashboard />
              </Suspense>
            }
          >
             <Route path="transactions" element={<Transactions /> }
          />
          </Route> */}

          <Route path={Path.DASHBOARD} element={<Dashboard />} >
             <Route index element={<Overview /> }/>
             <Route path={Path.USERS} element={<Users /> }/>
             <Route path={Path.TRANSACTION} element={<Transactions /> }/>
          </Route>

         
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
    </>
  );

  return routes;
}

export default App;
