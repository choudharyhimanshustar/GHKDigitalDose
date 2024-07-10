import React from 'react'
import ManagementCommitee from './assests/Management.png'
import ManagementDescription from './assests/ManagementDescription.png'
import table1 from './assests/ManagementTable1.png'
import table2 from './assests/ManagementTable2.png'
const Management = () => {
  return (
    <div>
    <img src={ManagementCommitee} class='responsiveImage'/>
    <img src={ManagementDescription} class='responsiveImage'/>
    <img src={table1} class='responsiveImage tableImage'/>
    <img src={table2} class='responsiveImage tableImage'/>
    </div>
  )
}

export default Management