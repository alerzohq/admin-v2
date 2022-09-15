import { NotificationContainer } from './styles/notification.styles'
import { NotificationProps } from './type.d'
import Text from '../text'

const Notification = ({ label, color, bgColor }: NotificationProps) => {
  return (
    <NotificationContainer bgColor={bgColor}>
      <Text as={'p'} padding={'0 2rem'} color={color} align={'center'}>
        {label}
      </Text>
    </NotificationContainer>
  )
}

export default Notification
