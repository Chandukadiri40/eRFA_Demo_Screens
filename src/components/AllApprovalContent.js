import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LoopIcon from '@mui/icons-material/Loop';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import BackupIcon from '@mui/icons-material/Backup';

 const AllApprovalContent = () => {
  return (
    <div style={{fontFamily: "Calibri", fontSize: "14px"}}>
     <pre><h3 style={{fontFamily: "Calibri", fontSize: "20px",backgroundColor:"navy",color:"white",padding:"5px"}}>                                                                                                                                                    Approval Steps </h3></pre>
      <pre> <button><LoopIcon/></button> <button><MenuBookIcon/> </button>                                                                                                                                                           <button><AddIcon/></button> <button><DeleteIcon/></button> <button><BackupIcon/></button> <button><MoreHorizIcon/></button></pre>
        
           <table className="milestones-table" style={{fontFamily: "Calibri", fontSize: "17px"}}>
          <thead>
            <tr>
              <th>Actions</th>
              <th>Approvalsteps</th>
              <th>Approvers</th>
              <th>Comments</th>
              <th>Sequence</th>
              <th>Date/Time</th>
              <th>Document_Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>🖋️</td>
              <td>Step1</td>
              <td>Endors 01</td>
              <td>Approved By Endors1</td>
              <td>1</td>
              <td>20-08-2024 09:00 AM</td>
              <td>file-example.pdf</td>
            </tr>
            <tr>
              <td>🖋️</td>
              <td>Step2</td>
              <td>Approver 01</td>
              <td>Approved By Approver 1</td>
              <td>2</td>
              <td>20/08/2024 12:00 PM</td>
              <td>file-example.pdf</td>
            </tr>
            <tr>
              <td>🖋️</td>
              <td>Step3</td>
              <td>Endors 02</td>
              <td>Approved by Endors2</td>
              <td>3</td>
              <td>21/08/2024 03:00 PM</td>
              <td>file-example.pdf</td>
            </tr>
            <tr>
              <td> 🖋️</td>
              <td>tep4</td>
              <td>Endors 03</td>
              <td>Approved by Endors3</td>
              <td>4</td>
              <td>22/08/2024 03:00 PM</td>
              <td>file-example.pdf</td>
            </tr>
          </tbody>
        </table>
     
     
     
     
     
      </div>


  )
}
export default AllApprovalContent