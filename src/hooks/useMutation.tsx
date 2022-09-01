import { useState} from 'react'
import axios from 'axios'

type Methods = "put" | "post" | "patch" | "delete";

type useMutationProps={
     pathUrl:string;
     methodType:Methods;
     payload:{};
    }

const BASE_URL = process.env.REACT_APP_API_BASE_URL

const useMutation = ({pathUrl,payload,methodType}:useMutationProps) => {

let token='';

const [data, setData] =useState<any>()
const [loading, setLoading] = useState<boolean>(false);
const [error, setError] = useState<unknown>();

const postData = async() => {
  setLoading(true);

  try{
    const {data} = await axios[methodType](`${BASE_URL}/${pathUrl}`,payload,{...token &&
      {
        headers: {
          'Authorization' : `Bearer ${token}`
        }
      }
    }
      
  )
      setData(data)
      setLoading(false)
    }catch(error) {
        setLoading(false);
        setError(error);
    }
  }

  return  (
    [postData,{data,loading, error}]  as const
  )
}
export default useMutation