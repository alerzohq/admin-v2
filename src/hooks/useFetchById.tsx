import { useQuery, useQueryClient } from 'react-query'


type QueryProps={
    querykey:string, id:string, queryFn:(id:string | number)=>void, parentKey:string
}
type QueryData={[key: string]:any}




const useFetchById = ({querykey,id, queryFn, parentKey}:QueryProps) => {

  const queryClient = useQueryClient();
  return useQuery([`${querykey}`, id], ()=>queryFn(id),{
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
