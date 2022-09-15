import CardRow from '../../../../../components/card'
import { noteDAta } from '../../../../../data/note-data'

const NotesContent = () => {
  return <CardRow.Container data={noteDAta} />
}

export default NotesContent
