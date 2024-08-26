import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


const Approver1 = () => {
  const navigate = useNavigate();

  const handleApprove = () => {
    navigate("/Form3");
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
        <DoubleArrowIcon style={{marginTop:"18px",fontSize:"30px"}}/>

        <div style={buttonColumnStyle}>

          <button style={buttonStyle('yellowgreen')}>
            <CheckCircleIcon /> Step1
          </button>

          <div style={textBelowButtonStyle}>Approved by Endors1</div>
        </div>
        <DoubleArrowIcon style={{marginTop:"18px",fontSize:"30px"}}/>

        <div style={buttonColumnStyle}>
          <button onClick={handleApprove} style={buttonStyle('skyblue')}>
            <ScheduleIcon /> Step2
          </button>
          <div style={textBelowButtonStyle}>Approval by Approver1</div>
        </div>
      </div>
      <div style={dateContainerStyle}>
        <div>🗓️19-08-2024  09:00 AM</div>
        <div>🗓️20-08-2024  12:00 PM</div>
        <div>🗓️20-08-2024  12:00 PM</div>
      </div>
    </div>
  );
};

const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
  maxWidth: '800px',
  margin: '0 auto',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9'
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
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
  justifyContent: 'space-between',
  fontSize: '15px',
  gap:"150px",
  color: '#555'
};

export default Approver1;
