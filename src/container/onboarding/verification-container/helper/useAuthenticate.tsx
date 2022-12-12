import  { Dispatch, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Path } from '../../../../constants/route-path'
import { Action } from '../../../../context/actions'
import { ActionTypes } from '../../../../context/types/type'
import { useMutation } from '../../../../hooks'
import { setStorage } from '../../../../utils/session-storage'

const useAuthenticate = ({payload, dispatch}:{ payload:{},dispatch:Dispatch<ActionTypes>}) => {

    const navigate = useNavigate()

    const [authenticateUser, { data, error, loading }] = useMutation({
        pathUrl: 'login/complete',
        payload,
        methodType: 'post',
      })

    useEffect(() => {
    if (data) {
        dispatch({ type: Action.LOGIN, payload: data })
        setStorage('user', data, () => {
        navigate(`/${Path.DASHBOARD}`, { replace: true })
        })
    } else if (error) {
        toast.error(`Invalid or expired token `)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error, data])
    
  return {authenticateUser, data, error, loading}
}

export default useAuthenticate