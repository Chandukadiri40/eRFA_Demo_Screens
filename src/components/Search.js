import React from 'react'
import BuildIcon from '@mui/icons-material/Build';
import LoopIcon from '@mui/icons-material/Loop';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BackupIcon from '@mui/icons-material/Backup';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import { SearchContent } from './SearchContent';

export const Search = () => {
  return (
    <div style={{fontFamily: "Calibri", fontSize: "15px",display:"flex",justifyContent:"center"}}>
             <pre>
         <h2>My Approval                                                                          <button style={{backgroundColor:"navy",color:"white"}}><BuildIcon/></button></h2>

                   <pre> Approval contains<input/>               Type contains<input/>         process is one of<input type='text' placeholder='--please select--'/></pre>
          <pre>                                                                                                                 <button style={{backgroundColor:"navy",color:"white"}}>    Clear    </button>  <button style={{backgroundColor:"navy",color:"white"}}>  Search  </button></pre> 

                <pre><button>  <LoopIcon/> </button>   <button> <AutoStoriesIcon/> </button>  <button style={{fontFamily: "Calibri", fontSize: "15px",paddingTop:"10px"}}> All pendings </button><button style={{backgroundColor:"navy",border:"none",color:"white"}}><ArrowDropDownIcon/></button>     <AddHomeWorkIcon/>                                                                                        <BackupIcon/></pre>
            <SearchContent/>
        </pre>
    </div>
  )
}
