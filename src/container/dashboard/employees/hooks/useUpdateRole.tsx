import React from 'react'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { postRequest } from '../../../../utils/apiRequest'

type UpdateRoleProps = {
  id: string
  role: string
  setIsEditing: (value: boolean) => void
}

const useUpdateRole = ({ id, role, setIsEditing }: UpdateRoleProps) => {
  const updateUser = () => {
    return postRequest({
      pathUrl: `/members/${id}`,
      payload: {
        roleName: role,
      },
      methodType: 'patch',
    })
  }

  return useMutation(updateUser, {
    onSuccess: () => {
      setIsEditing(false)
      toast.success('Role updated succesfully')
    },
  })
}

export default useUpdateRole
