import { useState } from 'react'
import { Color } from '../../../../../assets/theme'
import { Button, Form, Text } from '../../../../../components'
import Modal from '../../../../../components/modal'
import { TextArea } from '../../../../../components/modal/styles/modal.styles'
import { terminalHelper } from '../../../../../data/terminal-data'
import DetailsContentWidget from '../../../widget/tabs/tab-content-details'
import {
  ButtonWrapper,
  TerminalDetailWrapper,
} from './styles/tab-content.styles'

const TerminalDetails = (data: any) => {
  const [enabled, setIsEnabled] = useState<boolean>(false)
  const [assigned, setIsAssigned] = useState<boolean>(false)
  const [value, setValue] = useState({ reason: '' })
  const toggleEnable = () => setIsEnabled(!enabled)
  const toggleAssigned = () => setIsAssigned(!assigned)
  console.log(data?.data?.data)
  const buttonEnabledText = data?.data?.data?.active
    ? 'Disable Terminal'
    : 'Enable Terminal'
  const enabledSubTitle = data?.data?.data?.active
    ? 'Disable this terminal'
    : 'Enable this terminal'
  const enabledPlaceholder = data?.data?.data?.active
    ? 'Enter reason for disabling terminal'
    : 'Enter reason for enabling terminal'
  return (
    <TerminalDetailWrapper>
      <Modal
        subTitle={
          assigned
            ? 'Reassign this terminal to a new merchant'
            : enabledSubTitle
        }
        contentPadding="1rem 1rem 2.5rem 1rem"
        modalHeight="auto"
        modalWidth="30%"
        modalPadding="1.2rem"
        showModal={assigned || enabled}
        setShowModal={assigned ? toggleAssigned : toggleEnable}
        buttonText={assigned ? 'Reassign Terminal' : buttonEnabledText}
        headerText={assigned ? 'Reassign Terminal' : buttonEnabledText}
      >
        {assigned && (
          <>
            <Text
              as="p"
              padding="0"
              color={Color.alerzoBlack}
              size="14px"
              margin="0 0 .5rem 0"
              align="start"
            >
              Select New Merchant
            </Text>
            <Form.Input
              type="text"
              onChange={() => {}}
              placeholder="Enter to search for merchant"
            />
          </>
        )}
        <Text
          as="p"
          padding="0"
          color={Color.alerzoBlack}
          size="14px"
          margin="1rem 0 .5rem 0"
          align="start"
        >
          {assigned ? 'Reason for Reassigning' : 'Reason'}
        </Text>
        <TextArea
          textAreaTopMargin="0"
          placeholder={assigned ? 'Enter message' : enabledPlaceholder}
          textAreaHeight="190px"
          value={value.reason}
          onChange={(e) => setValue({ ...value, reason: e.target.value })}
        ></TextArea>
      </Modal>
      <DetailsContentWidget resolvedData={terminalHelper(data?.data?.[0])!} />
      <ButtonWrapper>
        <Button
          height="3.2rem"
          radius="10px"
          borderSize="1px"
          width="14%"
          onClick={toggleEnable}
          color={Color.alerzoBlueTint}
          borderColor={Color.alerzoBlueTint}
          variant="transparent"
        >
          {buttonEnabledText}
        </Button>
        <Button
          height="3.2rem"
          width="14%"
          radius="10px"
          onClick={toggleAssigned}
        >
          Reassign Terminal
        </Button>
      </ButtonWrapper>
    </TerminalDetailWrapper>
  )
}

export default TerminalDetails
