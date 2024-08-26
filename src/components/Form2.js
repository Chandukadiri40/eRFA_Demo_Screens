import React from 'react';
import { useNavigate } from 'react-router-dom';

const Form2 = () => {
  const navigate = useNavigate();

  const handleApproval = () => {
    navigate("/Approver1");
    alert("Approved by Endors1 and forwarding to Approver1");
  };

  const handleReject = () => {
    alert('Approval Rejected');
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Endors1 Dashboard</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Endors1 Name:</label>
          <input type="text" placeholder="Enter name" style={inputStyle} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Endors1 Role:</label>
          <input type="text" placeholder="Enter role" style={inputStyle} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Approval Percentage:</label>
          <input type="text" placeholder="Enter percentage" style={inputStyle} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Comments:</label>
          <input type="text" style={inputStyle}   />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={handleApproval}
          style={buttonStyle('green')}
        >
          ✅ Approve
        </button>
        <button
          onClick={handleReject}
          style={buttonStyle('red')}
        >
          ❌ Reject
        </button>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  fontSize: '16px',
  boxSizing: 'border-box'
};

const buttonStyle = (color) => ({
  backgroundColor: color,
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  outline: 'none'
});

export default Form2;
