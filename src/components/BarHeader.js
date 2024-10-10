import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPlus, faEllipsisH, faClipboardCheck, faExclamationTriangle, faClock, faCheckCircle, faTimesCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
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

// Function to get the appropriate icon based on groupingState and heading
const getIcon = (groupingState, heading) => {
    if (groupingState === "Status") {
      switch (heading) {
        case "Todo":
          return TodoIcon;  // Example icon for "Todo"
        case "In progress":
          return InProgress;            // Example icon for "In progress"
        case "Backlog":
          return Backlog; // Example icon for "Backlog"
        case "Cancelled":
            return Cancelled
        default:
          return Done;          // Default icon for other statuses
      }
    } else if (groupingState === "Priority") {
      const priorityIcons = {
        0: NoPriority, // Icon for priority 0
        1: LowPriority, // Icon for priority 1
        2: MediumPriority, // Icon for priority 2
        3: HighPriority,      // Icon for priority 3
        4: UrgentPriority       // Icon for priority 4
      };
      return priorityIcons[heading] || faCircle; // Default icon if not matched
    } else if (groupingState === "User") {
      return null; // No specific icon for users
    }
    return faCircle; // Default icon for any other case
  };


function BarHeader({groupingState,heading,data,count}) {
  const icon = getIcon(groupingState, heading);
  function getHeading(heading){
      if(groupingState==="Priority"){
            if(heading===0)return "No Priority"
            else if(heading===1)return "Low";
            else if(heading===2)return "Medium";
            else if(heading===3) return "High";
            else if(heading===4)return "Urgent";
      }
      else return heading;
  }
//   const user = data.users.find(user => user.id === ticket.userId); 

  // Extract initials from the user's name
  console.log("This is the heading",heading)
  const initials = groupingState ==="User" ? heading.toString().split(' ').map(name => name.charAt(0)).join('').toUpperCase() : '??' ; // Fallback to '??' if user not found
  return (
    <div style={{marginBottom:"10px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"2px"}} >
        <div style={{display:"flex",}}>
            {groupingState!=="User" &&  <div style={{margin:"0px 4px",color:"grey"}}><img src={getIcon(groupingState,heading)} alt="Status Icon" /></div>}
            {groupingState==="User" && <div style={{border:"1px solid grey", borderRadius:"50%",margin:"2px",padding:"1px",backgroundColor:"orange",height:"1.5vw",width:"1.5vw",alignItems:"center",display:"flex",justifyContent:"center"}} >{initials}</div>}
            <div style={{margin:"0px 4px"}}>{getHeading(heading)}</div>
            <div style={{margin:"0px 4px",color:"grey"}}>{count} </div>
        </div>
        <div style={{display:"flex",padding:"2px"}}>
            <div style={{margin:"0px 3px"}}><FontAwesomeIcon icon={faPlus} /></div>
            <div style={{margin:"0px 3px"}}><FontAwesomeIcon icon={faEllipsisH}/></div>
        </div>
      </div>
    </div>
  )
}

export default BarHeader
