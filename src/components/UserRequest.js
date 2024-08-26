import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const UserRequest = () => {
  const navigate = useNavigate();

  const handleRequest = () => {
    navigate("/Form");
  };
 
  // Inline styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: '20px auto'
  };

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#2196f3',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s',
    marginBottom: '10px'
  };

  const buttonHoverStyle = {
    backgroundColor: '#1976d2'
  };

  const iconStyle = {
    marginRight: '8px'
  };

  const buttonTextStyle = {
    fontWeight: 'bold'
  };

  const initiatedByStyle = {
    fontSize: '14px',
    color: '#555'
  };

  return (
    <div>
     <pre> <h2 >Approval Type: Create Request</h2></pre>
    <div style={containerStyle}>
      
      <button 
        onClick={handleRequest} 
        style={buttonStyle}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
      >
        <AddIcon style={iconStyle} />
        <span style={buttonTextStyle}>Initiate Approval</span>
      </button>
      <div style={initiatedByStyle}>
        Initiation By User1
      </div>
    </div>
    </div>
  );
};

export default UserRequest;
