
import React from 'react'

 type HeaderProps ={
  headers?: string[];
 }

const TableHeader = ({headers}:HeaderProps) => {
  return (
        <thead>
           <tr> 
            {headers?.map((header, i) => (
            <th key={i}>{header}</th>
            ))}
           
        </tr>
    </thead>
  )
}

export default TableHeader