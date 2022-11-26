import React, { memo, useState } from 'react'
import Modal from '../../../../../components/modal'
import BillerForm from '../biller-form'
import { isBillerValid } from '../helper'
import useSetBiller from '../helper/useSetBiller'
import { BillerSettings } from '../type'

const SetBiller = ({ show, setShow, biller }: BillerSettings) => {

  const [isTriggerSubmit, setIsTriggerSubmit] = useState(false)
  const [values, setValues] = useState({
    minimumBalance: '',
    averageBalance: '',
  })

  const {mutate, isLoading }=useSetBiller(biller?.slug,setShow)
 
  const handleBiller = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsTriggerSubmit(true)
   if(isBillerValid(values)){
    setIsTriggerSubmit(false)
    mutate(values);
   }
  }

  return (
    <Modal
      showModal={show}
      title={'Set Biller Threshold'}
      setShowModal={setShow}
      withoutFooter
      contentPadding={'1rem'}
    >
      <BillerForm 
      isTriggerSubmit={isTriggerSubmit}
      biller={biller}
      isLoading={isLoading}
      setValues={setValues}
      setIsTriggerSubmit={setIsTriggerSubmit}
      values={values}
      handleBiller={handleBiller}
      />
    </Modal>
  )
}

export default memo(SetBiller)
