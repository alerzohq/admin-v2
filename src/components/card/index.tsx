import {
  AddNoteContainer,
  Card,
  CardContent,
  CardImage,
  CardRowRapper,
  NotesPage,
} from './styles/card.styles'
import { CardContainerProps, CardRowProps } from './type'
import { Text } from '..'
import { Color } from '../../assets/theme'
import AddIcon from '../../assets/icons/add-icon'
import Modal from '../modal'
import { useState } from 'react'
import { TextArea } from '../modal/styles/modal.styles'

const CardRow = ({ children }: CardContainerProps) => {
  return <CardRowRapper>{children}</CardRowRapper>
}
export default CardRow

CardRow.Container = function CardContainer({ data }: CardRowProps) {
  const [isShown, setIsShown] = useState<boolean>(false)
  const [note, setNote] = useState<string>()
  const toggle = () => setIsShown(!isShown)
  return (
    <NotesPage>
      <Modal
        showModal={isShown}
        setShowModal={toggle}
        buttonText="Submit Note"
        headerText="Add New Note"
      >
        <Text
          as="p"
          padding="0"
          color={Color.alerzoBlack}
          size="14px"
          align="start"
        >
          Note
        </Text>
        <TextArea
          placeholder="Enter note here"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></TextArea>
      </Modal>
      <AddNoteContainer>
        <AddIcon onClick={toggle} />
        <Text
          as="p"
          padding="0"
          color={Color.alerzoGreyTint}
          size="14px"
          align="start"
        >
          Add New Note
        </Text>
      </AddNoteContainer>
      <CardRow>
        {data.map((detail, index) => {
          return (
            <Card key={index}>
              <CardImage bgImage={detail?.imageUrl} />
              <CardContent>
                <Text
                  as="p"
                  padding="0"
                  color={Color.alerzoBlueTint}
                  size="14px"
                  align="start"
                >
                  {detail?.name}
                </Text>
                <Text
                  as="p"
                  padding="0"
                  color={Color.alerzoBlack}
                  size="14px"
                  align="start"
                >
                  {detail?.review}
                </Text>
                <Text
                  as="p"
                  padding="0"
                  color={Color.alerzoGreyTint}
                  size="14px"
                  margin="1em 0 0 0"
                  align="start"
                >
                  {detail?.date}
                </Text>
              </CardContent>
            </Card>
          )
        })}
      </CardRow>
    </NotesPage>
  )
}
