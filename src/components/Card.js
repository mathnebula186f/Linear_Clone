import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH,faCircle} from '@fortawesome/free-solid-svg-icons';
import TodoIcon from '../UI_ss/Assets/icons_FEtask/To-do.svg'; 
import Backlog from '../UI_ss/Assets/icons_FEtask/Backlog.svg';
import InProgress from '../UI_ss/Assets/icons_FEtask/in-progress.svg'
import Done from '../UI_ss/Assets/icons_FEtask/Done.svg';
import Cancelled from '../UI_ss/Assets/icons_FEtask/Cancelled.svg';
import NoPriority from '../UI_ss/Assets/icons_FEtask/3 dot menu.svg';
import LowPriority from '../UI_ss/Assets/icons_FEtask/Img - Low Priority.svg';
import HighPriority from '../UI_ss/Assets/icons_FEtask/Img - High Priority.svg';
import MediumPriority from '../UI_ss/Assets/icons_FEtask/Img - Medium Priority.svg'
import UrgentPriority from '../UI_ss/Assets/icons_FEtask/SVG - Urgent Priority grey.svg';


function Card({key,ticket,groupingState,data}) {

  // Find the user corresponding to the ticket's userId
//   console.log("here is the data=",data)
  const user = data.users.find(user => user.id === ticket.userId);

  // Extract initials from the user's name
  const initials = user ? user.name.split(' ').map(name => name.charAt(0)).join('').toUpperCase() : '??'; // Fallback to '??' if user not found

  function getIcon(status){
    if(status==="Todo")return TodoIcon;
    else if(status==="Backlog")return Backlog;
    else if(status==="In progress")return InProgress;
    else if(status === "Done")return Done;
    else return Cancelled;
  }
  function getPriorityIcon(priority){
    if(priority===0)return NoPriority;
    else if(priority===1)return LowPriority;
    else if(priority===2)return MediumPriority;
    else if(priority=== 3)return HighPriority;
    else return UrgentPriority;
  }
//   console.log("Here is a ticket=",ticket) 
  return (
    <div style={{backgroundColor:"white",width:"25vw",marginTop:"10px",borderRadius:"5px",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",padding:"5px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"2px",margin:"2px"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          {groupingState!=="Status"&&<div><img src={getIcon(ticket.status)} alt="Status Icon" /></div>}
          <div style={{margin:"2px",color:"grey"}}>{ticket.id}</div>
        </div>
        
        {groupingState!=="User"&&<div style={{border:"1px solid grey", borderRadius:"50%",margin:"2px",padding:"1px",backgroundColor:"orange",height:"1.5vw",width:"1.5vw",alignItems:"center",display:"flex",justifyContent:"center"}} >{initials}</div>}
      </div>
      <div style={{margin:"2px",overflow:"hidden",maxWidth:"200px",fontSize:"small",fontWeight:"bold"}}>{ticket.title}</div>
      <div style={{display:"flex",justifyContent:"flex-start",padding:"2px"}}>
        {groupingState!== "Priority" && <div style={{margin:"0px 3px"}}><img src={getPriorityIcon(ticket.priority)} alt="Priority Icon" /> </div>}
        <div style={{border:"1px solid grey",display:"flex",justifyContent:"space-between",alignContent:"center",margin:"2px",padding:"0px 2px",color:"grey",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",borderRadius:"5px"}}>
            <div style={{fontSize:"x-small",justifyContent:"center",display:"flex",alignItems:"center",margin:"0px 2px"}}><FontAwesomeIcon icon={faCircle} /></div>
            <div style={{fontSize:"small"}}>Feature Request</div>
        </div>
      </div>
    </div>
  )
}

export default Card
