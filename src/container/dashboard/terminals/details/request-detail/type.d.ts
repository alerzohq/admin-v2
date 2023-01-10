interface IRequestItem {
  imgSrc: string
  text: string
  amount: string
  number: string
}
interface TerminalReqDetails {
  detail: any
}
interface ITerminalReqDetails {
  terminalId?: string
  data: { [key: string]: any }
}
interface ITerminalReqProcess {
  data: { [key: string]: any }[]
}