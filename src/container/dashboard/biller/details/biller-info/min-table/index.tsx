import React from 'react'
import { MinTable } from './styles/min-table.styles'

const MinDataTable = () => {
  return (
    <MinTable><thead > <tr>
    <th>Biller Name</th>
    <th>Email Address</th>
    <th>Phone Number</th>
    <th>Status</th>
    <th>Date Added</th>
    <th>Date Updated</th>
  </tr></thead>

  <tbody>
    <tr>
        <td>NIBBS</td>
        <td>info@nibbs.gov.ng</td>
        <td>08164020859</td>
        <td><div className='success'>Active</div></td>
        <td>2022-01-19 03:14:07</td>
        <td>2023-03-19 03:14:07</td>
   </tr>
 </tbody>
</MinTable>
  )
}

export default MinDataTable