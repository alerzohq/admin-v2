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
  DIGITALBANK = 'digital-bank',
  DIGITALBANKDETAIL = 'digital-bank/:dbId',
  PRODUCTS = 'products',
  PRODUCTDETAIL = 'products/:productId',
  INVITATIONREGISTER = 'invites/:inviteId',
  AUDIT = 'audit',
}
