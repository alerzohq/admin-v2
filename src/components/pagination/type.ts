export type PaginationProps={
    data:{[key: string]:any}
    setPageNumber:React.Dispatch<React.SetStateAction<number>>
    pageNumber:number;
    isPreviousData:boolean; 
} 