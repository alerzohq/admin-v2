import React, { memo, useEffect, useState } from 'react'
import { InviteSent } from '../../../../../assets/icons'
import Modal from '../../../../../components/modal'
import BillerForm from '../biller-form'
import { isBillerValid } from '../helper'
import useGetBiller from '../helper/useGetBiller'
import useSetBiller from '../helper/useSetBiller'
import { BillerSettings } from '../type'

const SetBiller = ({ show, setShow, biller }: BillerSettings) => {
  const [isTriggerSubmit, setIsTriggerSubmit] = useState(true)
  const [showSuccess, setShowSuccess] = useState(false)

  const { values, setValues } = useGetBiller(biller)

  const { mutate, isLoading, isSuccess } = useSetBiller(biller?.slug, setShow)

  const handleBiller = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsTriggerSubmit(true)
    if (isBillerValid(values)) {
      setIsTriggerSubmit(false)
      mutate(values)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      setShowSuccess(true)
    }
  }, [isSuccess])

  return (
    <>
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

      <Modal
        showModal={showSuccess}
        setShowModal={() => setShowSuccess(!showSuccess)}
        title="Biller Threshold Updated"
        modalWidth="320px"
        contentPadding={'0'}
        icon={<InviteSent />}
        subTitle={
          <>
            You have successfully updated the threshold for{' '}
            <strong>{biller?.displayName}</strong>
          </>
        }
        buttonText="Back to Billers"
      />
    </>
  )
}

export default memo(SetBiller)
