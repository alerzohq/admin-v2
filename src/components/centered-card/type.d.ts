export type CenteredCardProps = {
  leftTitle: string
  rightTitle: string
  rightText: string
  leftText: string
  weight?: string
  color?: string
}

export type ButtonRowProps = {
  rightButtonClick: () => void
  leftButtonClick: () => void
}
