import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPlus, faEllipsisH, faClipboardCheck, faExclamationTriangle, faClock, faCheckCircle, faTimesCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

// Function to get the appropriate icon based on groupingState and heading
const getIcon = (groupingState, heading) => {
    if (groupingState === "Status") {
      switch (heading) {
        case "Todo":
          return faCircle;  // Example icon for "Todo"
        case "In progress":
          return faClock;            // Example icon for "In progress"
        case "Backlog":
          return faExclamationTriangle; // Example icon for "Backlog"
        case "Cancelled":
            return faTimesCircle
        case "Done":
            return faCheckCircle
        default:
          return faCircle;          // Default icon for other statuses
      }
    } else if (groupingState === "Priority") {
      const priorityIcons = {
        0: faEllipsisH, // Icon for priority 0
        1: faCheckCircle, // Icon for priority 1
        2: faExclamationTriangle, // Icon for priority 2
        3: faCircle,      // Icon for priority 3
        4: faExclamationCircle       // Icon for priority 4
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
            {icon && <div style={{margin:"0px 4px",color:"grey"}}><FontAwesomeIcon icon={icon} /></div>}
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
