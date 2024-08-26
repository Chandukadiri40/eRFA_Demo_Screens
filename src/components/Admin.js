import React from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import BuildIcon from '@mui/icons-material/Build';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';

const Admin = () => {
  const navigate=useNavigate()
  const handleChange=()=>{
    navigate('/rules')

    }
    const handleNew=()=>{
      navigate('/new')
    }
  return (
    <div style={{marginLeft:"150px"}}>
            <pre><button style={{padding:"7px",backgroundColor:"navy",color:"white"}}>Process</button> <button style={{padding:"7px",backgroundColor:"navy",color:"white"}} onClick={handleChange}>Administration</button> <button style={{padding:"7px",backgroundColor:"navy",color:"white"}}>Process Configuration</button> <button style={{padding:"7px",backgroundColor:"white",color:"black",fontWeight:"bold"}}>Rules Management</button>                                                                                <button onClick={handleNew} style={{backgroundColor:"navy",color:"white",padding:"10px"}}>CreateNew</button></pre>

       <div style={{width:"90%",fontFamily: "Calibri", fontSize: "20px"}}>
        <pre><h3>New Approval Rule                                                         <button style={{backgroundColor:"navy",color:"white"}}><CloseIcon /></button> <button style={{backgroundColor:"navy",color:"white"}}><BookmarkIcon/></button> <button style={{backgroundColor:"navy",color:"white"}}><FileDownloadDoneIcon/></button> <button style={{backgroundColor:"navy",color:"white"}}><BuildIcon/></button></h3></pre>     
        <pre><button style={{paddingTop:"4px",fontSize:"15px",backgroundColor:"navy",color:"white"}}>                                                                                                                         Approval Rule Details                                                                                                                        </button></pre>
        <pre><h3><p style={{fontSize:"15px"}}>   Approval Rule Name     <input placeholder='    Approve Theshholder'/></p></h3></pre>
        <h3><pre style={{fontSize:"15px"}}>    select source object  <input placeholder='ap-approval                                                                          '/></pre></h3>

       <h3><pre style={{fontSize:"15px"}}>           Active☑️                 </pre></h3>

   
    </div>
      <h2>
      <pre><button style={{padding:"4px",backgroundColor:"navy",color:"white"}}>                                                     DEFINE OR CHANGE CRITERIA                                                      </button>   <button style={{padding:"4px",backgroundColor:"navy",color:"white"}}>                                                     CURRENT RULE CRITERIA                                         </button></pre>
      </h2>
      <div style={{width:"1200px",display:"flex",justifyContent:"space-between"}}>
    <div style={{width:"550px"}}>
      <div>
      </div>
      <pre><button style={{backgroundColor:"navy",color:"white"}}>Reset</button></pre>
      <h3><pre><button style={{background:"none"}}>NOT</button><button style={{background:"navy",color:"white"}}>AND</button><button style={{background:"navy",color:"white"}}>OR</button>                                 <button style={{backgroundColor:"greenyellow",border:"none"}}>+Add rule</button><button style={{backgroundColor:"greenyellow",border:"none"}}>+Add group</button></pre></h3>
      <table className="milestones-table">
          <tbody>
            <tr>
              <td>Approval</td>
              <td>equal</td>
              <td>5000</td>
              <td>      </td>
              <td style={{backgroundColor:"red",color:"white"}}>-delete</td>
              
            </tr>
            <tr>
              <td>Approval</td>
              <td>AND</td>
              <td>5000</td>
              <td>      </td>
              <td style={{backgroundColor:"red",color:"white"}}>-delete</td>
              
            </tr>
            <tr>
              <td>Approval</td>
              <td>OR</td>
              <td>5000</td>
              <td>      </td>
              <td style={{backgroundColor:"red",color:"white"}}>-delete</td>
              
            </tr>
            </tbody>
            </table>
            </div>
            <div style={{width:"560px",fontFamily: "Calibri", fontSize: "7px"}}>
              <pre>
            <pre> <h1> Select id from               ap_approval</h1></pre>
            <pre> <h1>                               WHERE</h1></pre>
            <pre> <h1>                            name="MD" OR   approval ru;e=50000  OR</h1></pre>
            <pre> <h1>                              ap_approval</h1></pre>

            </pre>
            </div>
    </div>
    </div>
  );
};

export default Admin;
