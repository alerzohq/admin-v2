import { filterProps } from "../../@types"

export type PaginationProps={
    data:{[key: string]:any}
    setPageNumber: React.Dispatch<React.SetStateAction<{
        count: number;
        pageNumber: number;
        status: string;
        query: string;
        from: number;
        to: number;
    }>>

} 

// React.Dispatch<React.SetStateAction<{
//     count: number;
//     pageNumber: number;
//     status: string;
//     query: string;
//     from: number;
//     to: number;
// }>>