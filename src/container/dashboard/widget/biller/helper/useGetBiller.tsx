import  { useEffect, useState } from 'react'
import { IBillerProp } from '../type'

const useGetBiller = (biller:IBillerProp) => {
    const [values, setValues] = useState({
        minimumBalance: '',
        averageBalance: '',
      })

      useEffect(() => {
        setValues({
          ...values,
          minimumBalance: biller?.minBalance,
          averageBalance: biller?.averageBalance,
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [biller?.minBalance, biller?.averageBalance])

  return {values, setValues}
}

export default useGetBiller