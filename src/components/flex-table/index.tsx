import { useNavigate } from 'react-router-dom'
import { Text } from '..'
import { Color } from '../../assets/theme'
import { capitalizeFirstLetterInSentence } from '../../utils/formatValue'
import { resolveTableColor } from '../../utils/resolveColors'
import {
  CardItem,
  CardWrapper,
  CardContainer,
  CardBorderWrapper,
} from './styles/flex-table.styles'
import { classesKeys, FlexTableProps, FlexTableRowProps } from './type'

const FlexTableWrapper = ({ children }: FlexTableProps) => {
  return <CardWrapper>{children}</CardWrapper>
}
export default FlexTableWrapper

FlexTableWrapper.Row = function CardRow({
  data,
  header,
  bgBottomColor,
  clickable,
  classes,
}: FlexTableRowProps) {
  const navigate = useNavigate()
  const renderSwitch = (param: string) => {
    switch (param) {
      case 'large':
        return '2'
      case 'extraLarge':
        return '4'
      default:
        return '1'
    }
  }
  const handleClick = () => {
    if (clickable?.shouldFetch) {
      return clickable.setFetch(true)
    }
  }

  return (
    <CardWrapper>
      {header.map((detail, index) => {
        const field = header[index]?.value as classesKeys
        const amt =
          (field as keyof typeof data) !== 'email'
            ? capitalizeFirstLetterInSentence(data[field as keyof typeof data])
            : data[field as keyof typeof data]
        let color: string = ''
        let bgColor: string = ''
        if (field.toLowerCase().includes('status')) {
          const resolveData = resolveTableColor(
            data[field as keyof typeof data]
          )
          color = resolveData.textColor
          bgColor = resolveData.bgColor
        }
        return (
          <CardContainer
            key={index}
            flex={renderSwitch(detail.columnWidth || 'small')}
          >
            <CardItem
              padding={'.7em 1.2em'}
              flex={'0'}
              topLeftRadius={index === 0 ? '12px' : '0'}
              topRightRadius={header.length - 1 === index ? '12px' : '0'}
            >
              <Text
                as={'p'}
                padding={'0'}
                color={Color.alerzoBlack}
                size="14px"
                textAlign="left"
                whiteSpace="nowrap"
                weight="600"
                align={'center'}
                visibility={field === 'empty' ? 'hidden' : 'visible'}
              >
                {detail.label}
              </Text>
            </CardItem>
            <CardBorderWrapper
              showLeftBorder={index === 0}
              showBorder={header.length - 1 === index}
              bottomLeftRadius={index === 0 ? '12px' : '0'}
              bottomRightRadius={header.length - 1 === index ? '12px' : '0'}
            >
              <CardItem
                margin="2em 0"
                showBorder={header.length - 1 !== index}
                padding="0 1em"
                flex={'3'}
                clickable={clickable?.index === index}
                bgColor={bgBottomColor}
              >
                <Text
                  cursor={clickable?.index === index ? 'pointer' : ''}
                  onClick={
                    clickable?.index === index
                      ? clickable?.shouldFetch === false
                        ? () => navigate(clickable?.url)
                        : () => handleClick()
                      : () => null
                  }
                  as={'p'}
                  padding={'0 .1em'}
                  color={
                    field.toLowerCase().includes('status')
                      ? color
                      : clickable?.index === index
                      ? Color.alerzoBlue
                      : Color.alerzoBlack
                  }
                  bgColor={
                    field.toLowerCase().includes('status')
                      ? bgColor
                      : 'transparent'
                  }
                  justifyContent={
                    field.toLowerCase().includes('status') ? 'center' : 'left'
                  }
                  textAlign="left"
                  weight={
                    clickable?.index === index ||
                    field.toLowerCase().includes('status')
                      ? '600'
                      : '400'
                  }
                  width={
                    field.toLowerCase().includes('status') ? '100%' : 'auto'
                  }
                  size="14px"
                  align={'center'}
                  className={
                    amt === 'Session Ongoing'
                      ? 'pendingText'
                      : classes?.[field]?.class
                  }
                >
                  {data[field as keyof typeof data] ? amt : ''}
                </Text>
              </CardItem>
            </CardBorderWrapper>
          </CardContainer>
        )
      })}
    </CardWrapper>
  )
}
