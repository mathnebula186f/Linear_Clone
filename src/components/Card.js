import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH,faCircle} from '@fortawesome/free-solid-svg-icons';

function Card({key,ticket,groupingState,data}) {

  // Find the user corresponding to the ticket's userId
//   console.log("here is the data=",data)
  const user = data.users.find(user => user.id === ticket.userId);

  // Extract initials from the user's name
  const initials = user ? user.name.split(' ').map(name => name.charAt(0)).join('').toUpperCase() : '??'; // Fallback to '??' if user not found

//   console.log("Here is a ticket=",ticket) 
  return (
    <div style={{backgroundColor:"white",width:"fit-content",width:"25vw",marginTop:"10px",borderRadius:"5px",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",padding:"5px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"2px",margin:"2px"}}>
        <div style={{margin:"2px",color:"grey"}}>{ticket.id}</div>
        {groupingState!=="User"&&<div style={{border:"1px solid grey", borderRadius:"50%",margin:"2px",padding:"1px",backgroundColor:"orange",height:"1.5vw",width:"1.5vw",alignItems:"center",display:"flex",justifyContent:"center"}} >{initials}</div>}
      </div>
      <div style={{margin:"2px",overflow:"hidden",maxWidth:"200px",fontSize:"small",fontWeight:"bold"}}>{ticket.title}</div>
      <div style={{display:"flex",justifyContent:"flex-start",padding:"2px"}}>
        <div style={{margin:"0px 3px"}}> <FontAwesomeIcon icon={faEllipsisH} /></div>
        <div style={{border:"1px solid grey",display:"flex",justifyContent:"space-between",alignContent:"center",margin:"2px",padding:"0px 2px",color:"grey",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",borderRadius:"5px"}}>
            <div style={{fontSize:"x-small",justifyContent:"center",display:"flex",alignItems:"center",margin:"0px 2px"}}><FontAwesomeIcon icon={faCircle} /></div>
            <div style={{fontSize:"small"}}>Feature Request</div>
        </div>
      </div>
    </div>
  )
}

export default Card
