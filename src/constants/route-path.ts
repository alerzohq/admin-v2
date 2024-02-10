export enum Path {
  LOGIN = '/',
  VERIFY_OTP = 'verify-otp',
  DASHBOARD = 'dashboard',
  TRANSACTION = 'transactions',
  USERS = 'users',
  USERSDETAILS = 'users/:userid',
  TRANSACTIONDETAIL = 'transactions/:transID/:slug',
  TERMINALS = 'terminals',
  TERMINALDETAIL = 'terminals/:terminalId',
  BUSINESSES = 'businesses',
  BUSINESSDETAIL = 'businesses/:businessId',
  BUSINESSPRODUCTDETAIL = 'businesses/:businessId/:slug',
  DIGITALBANK = 'digital-bank',
  DIGITALBANKDETAIL = 'digital-bank/:dbId',
  PRODUCTS = 'products',
  PRODUCTDETAIL = 'products/:productId',
  INVITATIONREGISTER = 'invites/:inviteId',
  AUDIT = 'audit',
  AUDITLOGS = 'audit/:id',
  TERMINALREQUESTDETAIL = 'terminals/requests/:requestId',
  KYC = 'kyc',
  KYCDETAIL = 'kyc/:id',
  BILLER = 'biller',
  BILLERDETAIL = 'biller/:slug',
  PASSWORD_RESET='password-reset'
}
