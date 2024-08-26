import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Form3 = () => {

    const navigate = useNavigate();

    const handleApproval = () => {
        navigate("/Endors2");
        alert("Approved by Approver1 and forwarding to Endors2");
    };

    const handleReject = () => {
        alert('Approval Rejected');
    };

    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            maxWidth: '800px',
            margin: '0 auto',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9'
        }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Approver1 Dashboard</h2>
            
            <div style={{ marginBottom: '20px' }}>
                <div style={formGroupStyle}>
                    <label style={labelStyle}>Approver1 Name:</label>
                    <input style={inputStyle} />
                </div>
                <div style={formGroupStyle}>
                    <label style={labelStyle}>Approver1 Role:</label>
                    <input style={inputStyle} />
                </div>
                <div style={formGroupStyle}>
                    <label style={labelStyle}>Approval percentage:</label>
                    <input style={inputStyle} />
                </div>
                <div style={formGroupStyle}>
                    <label style={labelStyle}>Previous Comments:</label>
                    <input style={inputStyle} />
                </div>
                <div style={formGroupStyle}>
                    <label style={labelStyle}>Comments:</label>
                    <input style={inputStyle} />
                </div>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px'
            }}>
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

// Common styles for the buttons
const buttonStyle = (color) => ({
    backgroundColor: color,
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 24px',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
    fontWeight: 'bold'
});

// Common styles for form groups and inputs
const formGroupStyle = {
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center'
};

const labelStyle = {
    width: '200px',
    fontSize: '16px',
    fontWeight: 'bold',
    marginRight: '10px'
};

const inputStyle = {
    flex: 1,
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px'
};
