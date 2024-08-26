import React from 'react'

export const Administration = () => {
  return (
    <div>
            <table className="milestones-table" style={{fontFamily: "Calibri", fontSize: "17px"}}>
                <thead>
                    <tr>
                        <th>Roles</th>
                        <th>Users</th>
                        <th>Group</th>
                    </tr>
                </thead>
                <tbody>
                   <tr>
                    <td>Endors</td>
                    <td><input type='checkbox'/>Endors1</td>
                    <td><input type='checkbox'/>GRP_ENDRS_Users</td>
                   </tr>
                   <tr>
                    <td>Approvers</td>
                    <td><input type='checkbox'/>Approvers1</td>
                    <td><input type='checkbox'/>GRP_APPRVRS_Users</td>
                   </tr>
                </tbody>

            </table>

    </div>
  )
}
