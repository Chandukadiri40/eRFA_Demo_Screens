import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import Content from './Content';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


export const Endors3 = () => {
    const navigate = useNavigate();
    const handleChange = () => {
        navigate("/Search");
    };
    const handleApprove=()=>{
      alert('Approvel Pending')
     
    }
    
    return (
        <div style={containerStyle}>
           

<div style={{
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            maxWidth: '3000px',
            margin: '0 auto',
            // border: '1px solid #ddd',
            // borderRadius: '8px',
            // backgroundColor: '#f9f9f9'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '20px',
                marginBottom: '20px'
            }}>
                <button style={buttonStyle('yellowgreen')}>
                    <AddIcon />
                    Intiate Approval
                </button>
                <DoubleArrowIcon style={{marginTop:"18px"}}/>
                <button style={buttonStyle('yellowgreen')}>
                    <CheckCircleIcon />
                    Step1
                </button>
                <DoubleArrowIcon style={{marginTop:"18px"}}/>
                <button style={buttonStyle('yellowgreen')}>
                    <CheckCircleIcon />
                    Step2
                </button>
                <DoubleArrowIcon style={{marginTop:"18px"}}/>
                <button style={buttonStyle('yellowgreen')}>
                <CheckCircleIcon />
                    Step3
                </button>
                <DoubleArrowIcon style={{marginTop:"18px"}}/>
                <button style={buttonStyle('skyblue')} onClick={handleApprove}>
                    <ScheduleIcon />
                    Step4
                </button>
                
                <button onClick={handleChange}>
                <SearchIcon />
                    
                </button>
            </div>

           
            <div style={{
                display: 'flex',
                // justifyContent: 'space-between',
                fontWeight:"bold",
                gap: "90px",
                fontSize:"14px",
                marginLeft:"15px"
                // marginBottom: '20px'
            }}>
                <span>Initiated By User1</span>
                <span>Approved by Approver1</span>
                <span>Approved By Endors1</span>
                <span>Approved By Endors2</span>
                <span>Approval Pending</span>
            </div><br></br>
            <div style={dateStyle}>
                <span>🗓️ 19-08-2024 09:00 AM</span>
                <span>🗓️ 20-08-2024  12:00PM</span>
                <span>🗓️ 21-08-2024  03:00PM</span>
                <span>🗓️ 21-08-2024  03:00PM</span>
            </div>
            <Content />
        </div>
        </div>
    );
};

// Styles
const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    // border: '1px solid #ddd',
    // borderRadius: '8px',
    // backgroundColor: '#f9f9f9'
};

const headerStyle = {
    marginBottom: '20px'
};

const titleStyle = {
    fontSize: '24px',
    marginBottom: '10px'
};

const actionButtonsStyle = {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap'
};

const iconButtonStyle = {
    backgroundColor: '#f0f0f0',
    color: '#333',
    border: 'none',
    borderRadius: '50%',
    padding: '10px',
    fontSize: '10px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
    margin: '2px'
};

const actionButtonStyle = {
    backgroundColor: '#4CAF50',
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
    fontWeight: 'bold',
    margin: '2px'
};

const stepsStyle = {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    marginBottom: '20px'
};

const stepButtonStyle = {
    backgroundColor: '#f0f0f0',
    color: '#333',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    margin: '2px'
};

const statusStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap:'90px',
    marginBottom: '10px',
    fontSize: '12px',
    fontWeight: 'bold'
};

const dateStyle = {
    display: 'flex',
    // flex-direction:'row',
    // justifyContent: 'space',
    gap:'75px',
    fontSize: '14px',
    fontWeight: 'bold'
};
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
  fontWeight: 'bold',
  flex: '1',
  margin: '0 5px'
});
