// import { Suspense } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom'
import ScrollToTop from '../utils/ScrollTo'
import Login from '../pages/login'
import Transactions from '../pages/dashboard/transactions'
import Dashboard from '../pages/dashboard'
import Overview from '../pages/dashboard/overview'
import { Path } from '../constants/route-path'
import Users from '../pages/dashboard/employees'
import { IsUserRedirect, ProtectedRoutes } from '../configs/private-route'

import TransactionDetails from '../pages/dashboard/transactions/transaction-details'
import { useAppContext } from '../context'
import { getStorageItem } from '../utils/session-storage'
import Verification from '../pages/verification'
import Terminals from '../pages/dashboard/terminals'
import TerminalDetails from '../pages/dashboard/terminals/details'
import Businesses from '../pages/dashboard/businessess'
import BusinessDetails from '../pages/dashboard/businessess/business-detail'
import DigitalBank from '../pages/dashboard/digitalBank'
import DigitalBankDetails from '../pages/dashboard/digitalBank/details'
import Products from '../pages/dashboard/products'
import ProductDetails from '../pages/dashboard/products/details'
import RegisterInvitation from '../pages/invitation'
import NotFound from '../pages/404'
import Audit from '../pages/dashboard/audit'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '../components/error-boundary'
import TerminalRequestDetails from '../container/dashboard/terminals/details/request-detail'
import KYC from '../pages/dashboard/KYC'
import KYCDetails from '../pages/dashboard/KYC/details'
import BusinessProductDetails from '../pages/dashboard/businessess/business-detail/business-product-details'
import Biller from '../pages/dashboard/biller'
import BillerDetail from '../pages/dashboard/biller/biller-detail'
import PasswordReset from '../pages/password-reset'

function App() {
  const navigate = useNavigate()
  const { state } = useAppContext()
  const user = getStorageItem('user') || state.user

  let routes = (
    <>
      <ScrollToTop />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
          navigate('dashboard', { replace: true })
        }}
      >
        <Routes>
          <Route element={<IsUserRedirect user={user} />}>
            <Route path={Path.LOGIN} element={<Login />} />
          </Route>
          <Route element={<IsUserRedirect user={user} />}>
            <Route path={Path.VERIFY_OTP} element={<Verification />} />
          </Route>
          <Route
            path={Path.INVITATIONREGISTER}
            element={<RegisterInvitation />}
          />
          <Route path={Path.PASSWORD_RESET} element={<PasswordReset />} />

          <Route element={<ProtectedRoutes user={user} />}>
            <Route path={Path.DASHBOARD} element={<Dashboard />}>
              <Route index element={<Overview />} />
              <Route path={Path.USERS} element={<Users />} />
              <Route path={Path.USERSDETAILS} element={<Users />} />
              <Route path={Path.TRANSACTION} element={<Transactions />} />
              <Route
                path={Path.TRANSACTIONDETAIL}
                element={<TransactionDetails />}
              />
              <Route path={Path.TERMINALS} element={<Terminals />} />
              <Route path={Path.TERMINALDETAIL} element={<TerminalDetails />} />
              <Route
                path={Path.TERMINALREQUESTDETAIL}
                element={<TerminalRequestDetails />}
              />
              <Route path={Path.BUSINESSES} element={<Businesses />} />
              <Route path={Path.BUSINESSDETAIL} element={<BusinessDetails />} />
              <Route
                path={Path.BUSINESSPRODUCTDETAIL}
                element={<BusinessProductDetails />}
              />
              <Route path={Path.DIGITALBANK} element={<DigitalBank />} />
              <Route
                path={Path.DIGITALBANKDETAIL}
                element={<DigitalBankDetails />}
              />
              <Route path={Path.PRODUCTS} element={<Products />} />
              <Route path={Path.PRODUCTDETAIL} element={<ProductDetails />} />
              <Route path={Path.AUDIT} element={<Audit />} />
              <Route path={Path.KYC} element={<KYC />} />
              <Route path={Path.KYCDETAIL} element={<KYCDetails />} />
              <Route path={Path.BILLER} element={<Biller />} />
              <Route path={Path.BILLERDETAIL} element={<BillerDetail />} />
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
