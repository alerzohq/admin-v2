import { useQuery } from "react-query"
import { getResource } from "../../../../../utils/apiRequest"

const useFetchBillers = () => {

    const getBillers = () => {
        return getResource('billers')
      }
    return useQuery('billers', getBillers)
   
}

export default useFetchBillers


