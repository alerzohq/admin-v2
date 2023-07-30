import { Button, Jumbotron } from '../../../../../components'
import Heading from '../../../widget/heading'
import { Color } from '../../../../../assets/theme'
import MinDataTable from './min-table'
import { billerTableHeaders } from '../../../../../data/biller-data'
import UpdateBiller from '../../modal/update-biller'
import { useState } from 'react'

const BillerInfo = ({ data ,slug}: { data: Record<string, string>,slug?:string }) => {
const[showModal,setShowModal] = useState(false)

  return (
    <>
      <Heading text="Biller Details">
          <Button
            onClick={() => setShowModal(true)}
            width="140px"
           borderColor={Color.alerzoBlueTint}
            variant={
              Color.alerzoWhite
            }
            color={ Color.alerzoBlueTint}
            weight="600"
          >
            Update
          </Button>
      </Heading>
      <Jumbotron padding="0" mt="1rem" mb="2rem" minHeight="150px">
        <MinDataTable data={data} tableHeaders={billerTableHeaders} />
      </Jumbotron>

      <UpdateBiller
       data={data}
       slug={slug!}
       showModal={showModal}
       setShowModal={setShowModal}
       />
    </>
  )
}

export default BillerInfo
