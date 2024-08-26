import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [division, setDivision] = useState('');
  const [endorsCount, setEndorsCount] = useState(0);
  const [appdivision, setAppDivision] = useState('');
  const [approversCount, setApproversCount] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/Endors1");
  };

  const handleDivisionChange = (e) => {
    const selectedDivision = e.target.value;
    setDivision(selectedDivision);

    // Assuming the division number corresponds to the number of endors
    setEndorsCount(Number(selectedDivision));
  };
  const handleApproverChange = (e) => {
    const ApproverDivision = e.target.value;
    setAppDivision(ApproverDivision);

    // Assuming the division number corresponds to the number of endors
    setApproversCount(Number(ApproverDivision));
  };

  // Function to render endorsement fields
  const renderEndorsFields = () => {
    let fields = [];
    for (let i = 1; i <= endorsCount; i++) {
      fields.push(
        <div key={i} style={{ marginBottom: "20px" }}>
          <h4>Endor {i}</h4>
          <label htmlFor={`endor${i}_name`}>Name</label>
          <input id={`endor${i}_name`} type='text' style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "4px" }} />
          <label htmlFor={`endor${i}_role`}>Role</label>
          <input id={`endor${i}_role`} type='text' style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "4px" }} />
          <label htmlFor={`endor${i}_place`}> Division</label>
          <input id={`endor${i}_place`} type='text' style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "4px" }} />
          <label htmlFor={`endor${i}_age`}> Department</label>
          <input id={`endor${i}_age`} type='text' style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "4px" }} />
        </div>
      );
    }
    return fields;
  };
  const renderApproverFields = () => {
    let field = [];
    for (let i = 1; i <= approversCount; i++) {
      field.push(
        <div key={i} style={{ marginBottom: "20px" }}>
          <h4>Approver {i}</h4>
          <label htmlFor={`approver${i}_name`}>Name</label>
          <input id={`approver${i}_name`} type='text' style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "4px" }} />
          <label htmlFor={`approver${i}_role`}>Role</label>
          <input id={`approver${i}_role`} type='text' style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "4px" }} />
          <label htmlFor={`approver${i}_place`}> Division</label>
          <input id={`approver${i}_place`} type='text' style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "4px" }} />
          <label htmlFor={`approver${i}_age`}> Department</label>
          <input id={`approver${i}_age`} type='text' style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "4px" }} />
        </div>
      );
    }
    return field;
  };

  return (
    <div style={{ marginTop: "100px", maxWidth: "600px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h3>Approvers Dashboard</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="title">Title</label>
          <input id="title" type='text' placeholder='Fill summary for eRFA purpose' style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "4px" }} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="vendor">Counterparty/Vendor</label>
          <input id="vendor" type='text' style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "4px" }} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="currency">RFA Currency</label>
          <input id="currency" type='text' style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "4px" }} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="amount">RFA Amount Before GST</label>
          <input id="amount" type='text' style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "4px" }} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="designation">Designation</label>
          <input id="designation" type='text' style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "4px" }} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="division">Endors</label>
          <select id="division" value={division} onChange={handleDivisionChange} style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "4px" }}>
            <option value="">--Please select--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        {renderEndorsFields()}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="appdivision">Approvers</label>
          <select id="appdivision" value={appdivision} onChange={handleApproverChange} style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "4px" }}>
            <option value="">--Please select--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        {renderApproverFields()}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="department">Requester Department</label>
          <input id="department" type='text' style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "4px" }} />
        </div>
        <input type="file" id="fileUpload" name="fileUpload" accept=".pdf, .doc, .docx, .txt"/>
       
        {/* <button onClick={handleSubmit} style={{ backgroundColor: "blueviolet", border: "none", color: "white", padding: "10px 20px", fontSize: "16px", cursor: "pointer", borderRadius: "4px" }}>
          Submit */}
        {/* </button> */}
          <br></br>
          <br></br>
        <input type="submit" value="Submit" style={{ backgroundColor: "navy", border: "none", color: "white", padding: "10px 20px", fontSize: "16px", cursor: "pointer", borderRadius: "4px" }}/>

      </form>
    </div>
  );
};

export default Form;
