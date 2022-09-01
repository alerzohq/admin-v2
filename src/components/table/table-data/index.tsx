import React,{useState} from "react";

// import { TableProps } from "../type";

type dataProps = {
  tableData: {}[];

};
type dataList = string[];

export type selectedDataType = {
    [key: string]: any;
}[];


const TableData = ({ tableData}: dataProps) => {

  const [tableD,] = useState<selectedDataType>(tableData) ;
 



  return (
    <tbody>
      {tableD?.map((item, i) => { 
        let dataList: dataList = item && Object.values(item);  
        return (
          <tr key={i}>
            
            {dataList.map((data, i) => (
              <td key={i}>
                  <div className={data==='Live'?'live-product':data==='Draft'?'draft-product':''}>
                  {data?.includes('/assets') ? <img src={data} alt={'product-images'}/>:data}
                  </div>
              </td>
            ))}
            
          </tr>
        );
      })} 
      
    </tbody>
  );
};

export default TableData;
