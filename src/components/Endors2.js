
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


export const Endors2 = () => {
    const navigate = useNavigate();

    const handleApprove = () => {
        navigate("/Form4");
    };

    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            maxWidth: '900px',
            margin: '0 auto',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                marginBottom: '20px'
            }}>
                <button style={buttonStyle('yellowgreen')}>
                    <AddIcon />
                    Intiate Approval
                </button>
                <DoubleArrowIcon style={{marginTop:"18px",fontSize:"30px"}}/>

                <button style={buttonStyle('yellowgreen')}>
                    <CheckCircleIcon />
                    Step1
                </button>
                <DoubleArrowIcon style={{marginTop:"18px",fontSize:"30px"}}/>

                <button style={buttonStyle('yellowgreen')}>
                    <CheckCircleIcon />
                    Step2
                </button>
                <DoubleArrowIcon style={{marginTop:"18px",fontSize:"30px"}}/>

                <button onClick={handleApprove} style={buttonStyle('skyblue')}>
                    <ScheduleIcon />
                    Step3
                </button>
            </div>

            <div style={{
                display: 'flex',
                // justifyContent: 'space-between',
                fontSize: '14px',
                fontWeight: 'bold',
                marginBottom: '10px',
                gap:"100px",
                marginLeft:"30px"
            }}>
                <span>Intiated By User1</span>
                <span>Approved by Endors1</span>
                <span>Approved By Approver1</span>
                <span>Approval By Endors2</span>
            </div>

            <div style={{
                display: 'flex',
                // justifyContent: 'space-between',
                fontSize: '14px',
                fontWeight:"bold",
                gap:"80px",
                marginLeft:"2px"

                // color: '#666'
            }}>
                <span>🗓️ 19-08-2024  09:00 AM</span>
                <span>🗓️ 20-08-2024  12:00 PM</span>
                <span>🗓️ 21-08-2024  03:00 PM</span>
                <span>🗓️ 21-08-2024  03:00 PM</span>
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
    fontWeight: 'bold',
    flex: '1',
    margin: '0 5px'
});
