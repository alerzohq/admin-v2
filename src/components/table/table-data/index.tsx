
import React from "react";
import { useNavigate } from "react-router-dom";
import { transformData } from "../../../helper/table.helper";
import { formatDate, numberWithCommas } from "../../../utils/formatValue";
import moment from "moment";

export type selectedDataType = {
  [key: string]: any;
};

type dataProps = {
  tableData: selectedDataType[];
  name:string;
  amountIndex?:number

};
type dataList = string[] | undefined;




const TableData = ({ tableData, name,amountIndex}: dataProps) => {
const navigate = useNavigate();


  return (
    <tbody>
      {tableData?.map((item, i) => { 
        let newObj = transformData({item, name});
        let dataList: dataList = newObj && Object.values(newObj);  
    
        return (
          <tr key={i}>        
            {dataList?.map((data, i) => ( 
              <td key={i} id='td-hover'>             
                  <div onClick={()=>{navigate(`${item?.id}/${item?.product?.slug}`,{state:{ detail:item }})}}  className={data==='successful'?'success':data==='pending'?'pending':data==='failed'?'failed':'' + (i===0 && 'tableLink') }>
                  {moment(data, true).isValid() ?
                  formatDate(data, 'lll'): i===amountIndex ? `₦${numberWithCommas(data)}`
                    : data}
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
