import moment from "moment";
import React,{useState} from "react";

import { transformData } from "../../../helper/table.helper";
import { formatDate } from "../../../utils/formatValue";

// import { TableProps } from "../type";

type dataProps = {
  tableData: {}[];
  name:string;

};
type dataList = string[] | undefined;

export type selectedDataType = {
    [key: string]: any;
}[];


const TableData = ({ tableData, name}: dataProps) => {

const [tableD,] = useState<selectedDataType>(tableData) ;
 


  return (
    <tbody>
      {tableD?.map((item, i) => { 

        let newObj = transformData({item, name});
        let dataList: dataList = newObj && Object.values(newObj);  
        return (
          <tr key={i}>        
            {dataList?.map((data, i) => ( 
              <td key={i}>
                  <div   className={data==='successful'?'success':data==='pending'?'pending':data==='failed'?'failed':'' + (i===0 && 'tableLink') }>
                  {moment(data, true).isValid()?
                  formatDate(data, 'lll'):
                   data}
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
