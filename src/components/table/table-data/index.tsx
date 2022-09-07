import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import { transformData } from "../../../helper/table.helper";
import { formatDate } from "../../../utils/formatValue";

// import { TableProps } from "../type";
export type selectedDataType = {
  [key: string]: any;
};

type dataProps = {
  tableData: selectedDataType[];
  name:string;

};
type dataList = string[] | undefined;

// export type selectedDataType = {
//     [key: string]: any;
// }[];


const TableData = ({ tableData, name}: dataProps) => {
const navigate = useNavigate();



  return (
    <tbody>
      {tableData?.map((item, i) => { 

        

        let newObj = transformData({item, name});
        let dataList: dataList = newObj && Object.values(newObj);  
        return (
          <tr key={i}>        
            {dataList?.map((data, i) => ( 
              <td key={i}>
                  <div onClick={()=>{i===0 && navigate(`${item?.product?.slug}`,{state:{ detail:item }})}}  className={data==='successful'?'success':data==='pending'?'pending':data==='failed'?'failed':'' + (i===0 && 'tableLink') }>
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
