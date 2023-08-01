import { Button, Jumbotron } from '../../../../../components'
import Heading from '../../../widget/heading'
import { Color } from '../../../../../assets/theme'
import MinDataTable from './min-table'
import { billerTableHeaders } from '../../../../../data/biller-data'
import UpdateBiller from '../../modal/update-biller'
import { useState } from 'react'
import { unauthorizedMessage } from '../../../../../utils/message'
import toast from 'react-hot-toast'
import AllPermissions from '../../../../../configs/access-control'

const BillerInfo = ({ data ,slug}: { data: Record<string, string>,slug?:string }) => {

const[showModal,setShowModal] = useState(false)
const { updateBillerAccess } = AllPermissions()

const handleBillerUpdate = ()=>{
  if(!updateBillerAccess){
    return toast.error(unauthorizedMessage)
  }else{
    setShowModal(true)
  }

}

  return (
    <>
      <Heading text="Biller Details">
          <Button
            onClick={handleBillerUpdate}
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
