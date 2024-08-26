import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Form4 = () => {
    const navigate = useNavigate();

    const handleApproval = () => {
        navigate("/Endors3");
        alert("Approved by Endors2 and forwarding to Endors3");
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
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Endors2 Dashboard</h2>
            
            <div style={formRowStyle}>
                <label style={labelStyle}>Endor02 Name:</label>
                <input type="text" style={inputStyle} />
            </div>
            
            <div style={formRowStyle}>
                <label style={labelStyle}>Endor02 Role:</label>
                <input type="text" style={inputStyle} />
            </div>
            
            <div style={formRowStyle}>
                <label style={labelStyle}>Endor02 percentage:</label>
                <input type="text" style={inputStyle} />
            </div>
            <div style={formRowStyle}>
                <label style={labelStyle}>Endors01 Comments:</label>
                <input type="text" style={inputStyle} />
            </div>
            <div style={formRowStyle}>
                <label style={labelStyle}>Approver1 Comments:</label>
                <input type="text" style={inputStyle} />
            </div>
            <div style={formRowStyle}>
                <label style={labelStyle}>Comments:</label>
                <input type="text" style={inputStyle} />
            </div>
            
            
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button onClick={handleApproval} style={buttonStyle('green')}>
                    ✅ Approve
                </button>
                <button onClick={handleReject} style={buttonStyle('red')}>
                    ❌ Reject
                </button>
            </div>
        </div>
    );
};

// Common styles for the form rows
const formRowStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px'
};

// Common styles for labels
const labelStyle = {
    width: '200px',
    fontWeight: 'bold',
    fontSize: '16px'
};

// Common styles for input fields
const inputStyle = {
    flex: '1',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px'
};

// Common styles for buttons
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
    transition: 'background-color 0.3s ease',
    fontWeight: 'bold'
});
