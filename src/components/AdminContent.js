import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import BuildIcon from '@mui/icons-material/Build';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
export const AdminContent = () => {
  return (
    <div style={{width:"90%",fontFamily: "Calibri", fontSize: "20px"}}>
        <pre><h3>New Approval Rule                                                         <button style={{backgroundColor:"navy",color:"white"}}><CloseIcon /></button> <button style={{backgroundColor:"navy",color:"white"}}><BookmarkIcon/></button> <button style={{backgroundColor:"navy",color:"white"}}><FileDownloadDoneIcon/></button> <button style={{backgroundColor:"navy",color:"white"}}><BuildIcon/></button></h3></pre>     
        <pre><button style={{paddingTop:"15px",fontSize:"15px",backgroundColor:"navy",color:"white"}}>                                                                                                                         Approval Rule Details                                                                                                                        </button></pre>
        <pre><p style={{fontSize:"15px"}}>   Approval Rule Name     <input placeholder='    Approve Theshholder'/></p></pre>
        <pre style={{fontSize:"15px"}}>    select source object  <input placeholder='ap-approval                                                                          '/></pre>

        <pre style={{fontSize:"15px"}}>           Active☑️                 </pre>

   
    </div>
  )
}
