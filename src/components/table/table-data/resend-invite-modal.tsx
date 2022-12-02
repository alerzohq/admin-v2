import React, { Dispatch, SetStateAction, useState } from 'react'
import { InviteSent } from '../../../assets/icons'
import Modal from '../../modal'
import { axiosInstance } from '../../../configs/axios-instance'
import { AxiosError, AxiosResponse } from 'axios'
import { useMutation, useQueryClient } from 'react-query'

const ConfirmResendInvite = ({
  email,
  showConfirmModal,
  role,
  id,
  handleShow,
}: {
  email?: string
  role?: string
  showConfirmModal: boolean
  id?: string
  handleShow: Dispatch<SetStateAction<boolean>>
}) => {
  const queryClient = useQueryClient()

  const [showStatus, setShowStatus] = useState(false)
  const mutation = useMutation<
    AxiosResponse<any, any>,
    any,
    any,
    AxiosError<any, any>
  >(
    () => {
      return axiosInstance.post(`members/invites/${id}/resend`)
    },
    {
      onSuccess: () => {
        handleShow(false)
        setShowStatus(true)
        queryClient.invalidateQueries('invites')
      },
    }
  )
  return (
    <>
      <Modal
        showModal={showConfirmModal}
        setShowModal={() => {
          handleShow(false)
        }}
        title="Resend Invite"
        contentPadding={'0'}
        icon={<InviteSent />}
        subTitleSize={'16'}
        subTitle={`
       Do you want to resend this invite to
       ${email}
       `}
        subTitleWhiteSpace={'pre-line'}
        handleSubmit={() => {
          mutation.mutate({ email, role })
        }}
        cancelBtnText="Cancel"
        buttonText="Resend Invite"
      />
      <Modal
        showModal={showStatus}
        setShowModal={() => {
          setShowStatus(false)
        }}
        title="Employee Invite Sent"
        contentPadding={'0'}
        icon={<InviteSent />}
        subTitleSize={'16'}
        subTitle={`
        You have invited 
        ${email}
     `}
        subTitleWhiteSpace={'pre-line'}
        handleSubmit={() => {
          setShowStatus(false)
        }}
        cancelBtnText="Back To Employees"
      />
    </>
  )
}

export default ConfirmResendInvite
