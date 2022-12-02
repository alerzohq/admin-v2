import React, { Dispatch, SetStateAction } from 'react'
import { InviteSent } from '../../../assets/icons'
import Modal from '../../modal'
import { axiosInstance } from '../../../configs/axios-instance'
import { AxiosError, AxiosResponse } from 'axios'
import { useMutation } from 'react-query'

const ResendInvite = ({
  email,
  showConfirmModal,
  role,
  handleShow,
}: {
  email?: string
  role?: string
  showConfirmModal: boolean
  handleShow: Dispatch<SetStateAction<boolean>>
}) => {
  const mutation = useMutation<
    AxiosResponse<any, any>,
    any,
    any,
    AxiosError<any, any>
  >(
    (inviteData: { email: string; role: string }) => {
      return axiosInstance.post('/members/invites', inviteData)
    },
    {
      onSuccess: () => {},
    }
  )
  return (
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
  )
}

export default ResendInvite
