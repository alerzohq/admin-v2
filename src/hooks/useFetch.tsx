import {useEffect, useState} from 'react'
import axios from 'axios'

const BASE_URL= process.env.REACT_APP_API_BASE_URL

const useFetch = ({pathUrl}:{pathUrl:string}) => {

const [data, setData] =useState<any>()
const [loading, setLoading] = useState(false);
const [error, setError] = useState<unknown>()



useEffect(() => {
  const getData = async() => {
    setLoading(true);
  
    try{
      const {data} = await axios.get(`${BASE_URL}/${pathUrl}`,
      { headers: { 'api-key': "secret" }})
        setData(data)
        setLoading(false)
      }catch(error) {
        setLoading(false);
        setError(error);
      }  
    }
    getData();
},[pathUrl])
 
  return {
    data,loading, error
  }
}
export default useFetch