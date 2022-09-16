// import { Suspense } from "react";
import { Routes, Route } from 'react-router-dom'

// import { Sidebar } from "../components/common/sidebar/Sidebar";
import ErrorBoundary from '../components/common/ErrorBoundary'
import ScrollToTop from '../utils/ScrollTo'
import Login from '../pages/login'
import Transactions from '../pages/dashboard/transactions'
import Dashboard from '../pages/dashboard'
import Overview from '../pages/dashboard/overview'
import { Path } from '../constants/route-path'
import Users from '../pages/dashboard/users'
import { IsUserRedirect, ProtectedRoutes } from '../configs/private-route'
import NotFound from '../pages/404'
import TransactionDetails from '../pages/dashboard/transactions/transaction-details'
import { useAppContext } from '../context'
import { getStorageItem } from '../utils/session-storage'
import Verification from '../pages/verification'
import Terminals from '../pages/dashboard/terminals'
import TerminalDetails from '../pages/dashboard/terminals/details'

// const Dashboard = React.lazy(() => import("../pages/dashboard"));

function App() {
  const { state } = useAppContext()
  const user = getStorageItem('user') || state.user

  let routes = (
    <>
      <ScrollToTop />
      <ErrorBoundary fallback="Sorry.. something went wrong">
        <Routes>
          <Route element={<IsUserRedirect user={user} />}>
            <Route path={Path.LOGIN} element={<Login />} />
          </Route>
          <Route element={<IsUserRedirect user={user} />}>
            <Route path={Path.VERIFY_OTP} element={<Verification />} />
          </Route>

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

          <Route element={<ProtectedRoutes user={user} />}>
            <Route path={Path.DASHBOARD} element={<Dashboard />}>
              <Route index element={<Overview />} />
              <Route path={Path.USERS} element={<Users />} />
              <Route path={Path.TRANSACTION} element={<Transactions />} />
              <Route
                path={Path.TRANSACTIONDETAIL}
                element={<TransactionDetails />}
              />
                <Route path={Path.TERMINALS} element={<Terminals /> }/>
              <Route path={Path.TERMINALDETAIL} element={<TerminalDetails />} />
            </Route>
          </Route>

          {/* replace with not found component */}
          <Route path="*" element={<NotFound user={user} />} />
        </Routes>
      </ErrorBoundary>
    </>
  )

  return routes
}

export default App
