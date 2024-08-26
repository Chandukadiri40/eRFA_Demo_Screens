import React from 'react';
import "./Content.css";

const Content = () => {
  return (
    <div className="content-container">
      <div className="details-header">
        <button className="details-button">Approval Details</button>
      </div>

      <div className="details-info">
        <div><strong>Type:</strong> Approval Type</div>
        <div><strong>Step:</strong> 4 - Final Steps</div>
        <div><strong>Status:</strong> Pending Approval</div>
        <div><strong>Process:</strong> Process</div>
        <div><strong>Current Approver:</strong> Endors3</div>
      </div>

      <div className="milestones-section">
        <h4 className="milestones-header">Approval Milestones</h4>
        <table className="milestones-table">
          <thead>
            <tr>
              <th>Step</th>
              <th>Status</th>
              <th>Action</th>
              <th>Comments</th>
              <th>Date/Time</th>
              <th>User</th>
              <th>Document_Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Step1</td>
              <td>Approved</td>
              <td>Approved</td>
              <td>Approved By Endors1</td>
              <td>20/08/4024</td>
              <td>User1</td>
              <td>file-example.pdf</td>
            </tr>
            <tr>
              <td>Step2</td>
              <td>Approved</td>
              <td>Approved</td>
              <td>Approved By Approver 1</td>
              <td>21/08/2024</td>
              <td>User2</td>
              <td>file-example.pdf</td>
            </tr>
            <tr>
              <td>Step3</td>
              <td>Approved</td>
              <td>Approved</td>
              <td>Approved by Endors2</td>
              <td>22/08/2024</td>
              <td>User3</td>
              <td>file-example.pdf</td>
            </tr>
            <tr>
              <td>Step4</td>
              <td>Pending Approval</td>
              <td>Processing</td>
              <td>Processing by Endors3</td>
              <td>22/08/2024</td>
              <td>User4</td>
              <td>file-example.pdf</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Content;


