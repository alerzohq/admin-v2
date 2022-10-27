import { JumbotronItem } from './styles/jumbotron.styes'

export type JumbotronProps = {
  direction?: string
  gap?: string
} & React.ComponentProps<typeof JumbotronItem>
