// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import MyApprovals from './components/MyApprovals';
import AllApprovals from './components/AllApprovals';
import Admin from './components/Admin';
import Approver1 from './components/Approver1.js';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Form from './components/Form';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Form2 from './components/Form2.js';
import { Endors1 } from './components/Endors1.js';
import { Form3 } from './components/Form3.js';
import { Endors2 } from './components/Endors2.js';
import { Form4 } from './components/Form4.js';
import { Endors3 } from './components/Endors3.js';
import Content from './components/Content.js';
import { Search } from './components/Search.js';
import ApprovalIcon from '@mui/icons-material/Approval';
import UserRequest from './components/UserRequest.js';
import { Administration } from './components/Administration.js';
import { useEffect } from 'react';
import { DashBoard } from './components/DashBoard.js';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import { AdminContent } from './components/AdminContent.js';
import { NewRequest } from './components/NewRequest.js';
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  
  // const navigate=useNavigate()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
    const handleClick = (buttonId) => {
      setActiveButton(buttonId);
    };
const handleUser=()=>{
  alert('User1')
}
useEffect(()=>{
  document.title="eRFA"
})
  return (
    <Router>
      <div className="app">
        <header className="header">
          <button className="menu-button" onClick={toggleMenu}>
            ☰
          </button>
          <h1 style={{fontFamily: "Calibri", fontSize: "24px"}}><pre>  eRequest for Approval                                                                               <AppsIcon/> <SearchIcon/> <QuestionMarkIcon/> <button onClick={handleUser} style={{background:"none",color:'white'}}> <AccountCircleIcon/></button></pre></h1><br></br>
       
        </header>
        <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
          <div className="sidebar-menu">
 
<ul>
<li>
        <Link to="/">
          <button
            style={{
              backgroundColor: activeButton === 'dashboard' ? 'white' : 'navy',
              color: activeButton === 'dashboard' ? 'black' : 'white',
              border: 'solid black 2px',
              // padding: '7px',
              paddingTop:"20px",
              cursor: 'pointer',
            }}
            onClick={() => handleClick('dashboard')}
          className='btn'>
            <SpaceDashboardIcon/><br></br> DashBoard
          </button>
        </Link>
      </li>
<li>
        <Link to="/My approvals">
          <button
            style={{
              backgroundColor: activeButton === 'myApprovals' ? 'white' : 'navy',
              color: activeButton === 'myApprovals' ? 'black' : 'white',
              border: 'solid black 2px',
              padding: '5px',
              cursor: 'pointer',
            }}
            onClick={() => handleClick('myApprovals')}
          className='btn'>
            <ApprovalIcon /><br></br> My Approvals
          </button>
        </Link>
      </li>
      
      <li>
        <Link to="/AllApprovals">
          <button
            style={{
              backgroundColor: activeButton === 'allApprovals' ? 'white' : 'navy',
              color: activeButton === 'allApprovals' ? 'black' : 'white',
              border: 'solid black 2px',
              padding: '5px',
              cursor: 'pointer',
            }}
            onClick={() => handleClick('allApprovals')}
            className='btn1'>
            <FileCopyIcon /><br></br> All Approvals
          </button>
        </Link>
      </li>
      <li>
        <Link to="/Admin">
          <button
            style={{
              backgroundColor: activeButton === 'admin' ? 'white' : 'navy',
              color: activeButton === 'admin' ? 'black' : 'white',
              border: 'solid black 2px',
              padding: '20px',
              cursor: 'pointer',
             
            }}
            onClick={() => handleClick('admin')}
            className='btn2'>
            <ManageAccountsIcon /><br></br> Admin
          </button>
        </Link>
      </li>
    </ul>
          </div>
        </aside>
        <main className="main-content">
          <Routes>
            <Route path='/' element={<DashBoard/>}/>
            <Route path="/My approvals" element={<MyApprovals />} />
            <Route path="/AllApprovals" element={<AllApprovals />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path='/form'  element={<Form/>}/> 
            <Route path='/approver1' element={<Approver1/>}/>
            <Route path='/form2' element={<Form2/>}/>
            <Route path='/Endors1' element={<Endors1/>}/>
            <Route path='/Endors2' element={<Endors2/>}/>
            <Route path='/form3'  element={<Form3/>}/>
            <Route path='/form4'  element={<Form4/>}/>
            <Route path='/endors3' element={<Endors3/>}/>
            <Route path='/content' element={<Content/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/user' element={<UserRequest/>}/>
            <Route path='/rules' element={<Administration/>}/>
            <Route path='/adminContent' element={<AdminContent/>}/>
            <Route path='/new' element={<NewRequest/>}/>

            </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
