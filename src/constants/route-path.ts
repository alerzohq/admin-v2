export enum Path {
  LOGIN = '/',
  VERIFY_OTP = 'verify-otp',
  DASHBOARD = 'dashboard',
  TRANSACTION = 'transactions',
  USERS = 'users',
  TRANSACTIONDETAIL = 'transactions/:transID/:slug',
  TERMINALS = 'terminals',
  TERMINALDETAIL = 'terminals/:terminalId',
  BUSINESSES = 'businesses',
  BUSINESSDETAIL = 'businesses/:businessId',
  DigitalBank = 'digitalbank',
  DIGITALBANKDETAIL = 'digital-bank/:dbId',
}
