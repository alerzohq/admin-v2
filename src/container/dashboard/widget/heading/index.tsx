import { Text } from '../../../../components'
import { Title } from '../styles/widget.styles'

const Heading = ({
  text,
  children,
}: {
  text: string
  children?: React.ReactNode
}) => {
  return (
    <Title>
      <Text as="h4">{text}</Text>
      {children}
    </Title>
  )
}

export default Heading
