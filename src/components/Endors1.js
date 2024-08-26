import React from 'react';
import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ScheduleIcon from '@mui/icons-material/Schedule';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export const Endors1 = () => {

    const navigate = useNavigate();
    const handleApprove = () => {
        navigate("/Form2");
    };

    return (
      <div style={containerStyle}>
        <div style={buttonContainerStyle}>
          <div style={buttonColumnStyle}>
            <button style={buttonStyle('yellowgreen')}>
              <CheckCircleIcon /> Initiate Approval
            </button>
            <div style={textBelowButtonStyle}>Intiated By User</div>

          </div>
          <DoubleArrowIcon style={{marginTop:"10px",fontSize:"40px"}}/>
          <div style={buttonColumnStyle}>
            <button style={buttonStyle('skyblue')} onClick={handleApprove}>
              <ScheduleIcon/> Step1
            </button>
            <div style={textBelowButtonStyle}>Approval by Endors1</div>
          </div>
        </div>
        <div style={dateContainerStyle}>
          <div>🗓️19-08-2024  09:00 AM</div>
          <div>🗓️19-08-2024  09:00 AM</div>
        </div>
      </div>
    );
  };
  
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  };
  
  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px'
  };
  
  const buttonColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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
    outline: 'none',
    margin: '5px 0'
  });
  
  const textBelowButtonStyle = {
    marginTop: '8px',
    fontSize: '15px',
    color: '#555'
  };
  
  const dateContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: '15px',
    gap:'100px',
    color: '#555',
  };