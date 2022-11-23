
import { useQuery, useQueryClient } from 'react-query'


type QueryProps={
    querykey:string, id:string, mutationFn:(id:string | number)=>void, parentKey:string
}
type QueryData={[key: string]:any}

const useFetchById = ({querykey,id, mutationFn, parentKey}:QueryProps) => {

  const queryClient = useQueryClient();
  return useQuery([`${querykey}`, id], ()=>mutationFn(id),{
     initialData:()=>{
        const result = queryClient.getQueryData<QueryData>(`${parentKey}`)
        if(result) {      
            return result?.data?.data?.find((data: QueryData)=>data?.id ===parseInt(id));
        }else{
            return undefined
        }
     },    
  })
}

export default useFetchById