import React from 'react'
import "./SearchContent.css"

export const SearchContent = () => {
  return (
    <div style={{width:"1100px"}}>
            <table className="milestones-table">
          <thead>
            <tr>
              <th>Steps</th>
              <th>Type of Approval</th>
              <th>Process</th>
              <th>Comments</th>
              <th>Date/Time</th>
              <th>Updated By</th>
              <th>Document_Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Step1</td>
              <td>Endors 1</td>
              <td>Approved</td>
              <td>Approved By Endors1</td>
              <td>19/08/4024 12:00 PM</td>
              <td>Endors 01</td>
              <td>file-example.pdf</td>
            </tr>
            <tr>
              <td>Step2</td>
              <td>Approver 1</td>
              <td>Approved</td>
              <td>Approved By Approver 1</td>
              <td>20/08/2024 03:00 PM</td>
              <td>Approver 01</td>
              <td>file-example.pdf</td>
            </tr>
            <tr>
              <td>Step3</td>
              <td>Endors 2</td>
              <td>Approved</td>
              <td>Approved by Endors2</td>
              <td>21/08/2024 03:00 PM</td>
              <td>Endors2</td>
              <td>file-example.pdf</td>
            </tr>
            <tr>
              <td>Step4</td>
              <td>Endors 03</td>
              <td>Intiated</td>
              <td>Approved by Endors3</td>
              <td>22/08/2024 03:00 PM</td>
              <td>Endors 03</td>
              <td>file-example.pdf</td>
            </tr>
          </tbody>
        </table>



    </div>
  )
}
