import { Text, Button } from '..'
import signoutlogout from '../../assets/images/pngs/receipt.svg'
import { AlerzoLogo } from '../../assets/icons'
import { Color } from '../../assets/theme'
import {
  Body,
  ButtonWrapper,
  Header,
  Item,
  ReceiptItem,
  ReceiptWrapper,
} from './styles/centered-card.styles'
import { ButtonRowProps, CenteredCardProps } from './type'

const CenteredCardItem = ({
  leftTitle,
  rightTitle,
  leftText,
  rightText,
  weight,
  color,
}: CenteredCardProps) => {
  return (
    <>
      <Item>
        <Text
          as="p"
          padding="0"
          color={Color.alerzoGray4}
          size="14px"
          align="start"
        >
          {leftTitle}
        </Text>
        <Text
          as="p"
          padding="0"
          color={color ? color : Color.alerzoBlack}
          size="14px"
          weight={weight ? weight : '600'}
          align="start"
        >
          {leftText}
        </Text>
      </Item>
      <Item>
        <Text
          as="p"
          padding="0"
          color={Color.alerzoGray4}
          size="14px"
          align="start"
        >
          {rightTitle}
        </Text>
        <Text
          as="p"
          padding="0"
          color={Color.alerzoBlack}
          size="14px"
          weight="600"
          align="start"
        >
          {rightText}
        </Text>
      </Item>
    </>
  )
}

const CenteredCard = () => {
  return (
    <ReceiptWrapper>
      <ReceiptItem bgImage={signoutlogout}>
        <Header>
          <AlerzoLogo
            className={'logo'}
            onClick={() => {}}
            height={'25'}
            width={'150'}
            color={Color.alerzoBlue}
          />
        </Header>

        <Body>
          <CenteredCardItem
            leftTitle="Transaction Amount"
            rightTitle="Transaction Date"
            leftText="₦16,130"
            rightText="02/08/2022, 03:33 am"
            weight="700"
          />
          <CenteredCardItem
            leftTitle="Transaction Type"
            rightTitle="Transaction ID"
            leftText="Bank Transfer"
            rightText="1656260364438198"
          />
          <CenteredCardItem
            leftTitle="Transaction Status"
            rightTitle="Reference Number"
            leftText={`Successfully Saved & Authorized`}
            rightText="ALP_TTBR2HX3JNOPSYR"
          />
          <CenteredCardItem
            leftTitle="Sender’s Name"
            rightTitle="Sender’s Account No."
            leftText="Amina Nuhu"
            rightText="0128102910"
          />
          <CenteredCardItem
            leftTitle="Receiver’s Name"
            rightTitle="Receiver’s Account No."
            leftText="Fatimah Idowu"
            rightText="0128102910"
          />
        </Body>

        <CenteredCard.ButtonRow
          leftButtonClick={() => {}}
          rightButtonClick={() => {}}
        />
      </ReceiptItem>
    </ReceiptWrapper>
  )
}

export default CenteredCard

CenteredCard.ButtonRow = function CardRow({
  leftButtonClick,
  rightButtonClick,
}: ButtonRowProps) {
  return (
    <ButtonWrapper>
      <Button height="2.5rem" onClick={leftButtonClick}>
        Download Receipt
      </Button>
      <Button
        height="2.5rem"
        color={Color.alerzoBlueTint}
        borderSize="1px"
        borderColor={Color.alerzoBlueTint}
        variant="transparent"
        onClick={rightButtonClick}
      >
        Send to Customer
      </Button>
    </ButtonWrapper>
  )
}
