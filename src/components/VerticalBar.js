import React from 'react'
import BarHeader from './BarHeader'
import Card from './Card'

function VerticalBar({data,key,heading,groupingState,count,orderingState}) {

  const getTickets = () => {
    const ticketsArray = [];
    
    if (groupingState === "Status" || groupingState === "Priority") {
      // Filter tickets by Status or Priority
      data.tickets.forEach(ticket => {
        if (groupingState === "Status" && ticket.status === heading) {
          ticketsArray.push(ticket); // Add the whole ticket object
        } else if (groupingState === "Priority" && ticket.priority === parseInt(heading)) {
          ticketsArray.push(ticket); // Add the whole ticket object
        }
      });
    } else if (groupingState === "User") {
      // Find user ID corresponding to heading (assuming heading matches user name)
      const user = data.users.find(user => user.name.startsWith(heading));
      if (user) {
        // Filter tickets by User ID
        data.tickets.forEach(ticket => {
          if (ticket.userId === user.id) {
            ticketsArray.push(ticket); // Add the whole ticket object
          }
        });
      }
    }
    
    if (orderingState === "Priority") {
      ticketsArray.sort((a, b) => a.priority - b.priority);
    } else if (orderingState === "Title") {
      ticketsArray.sort((a, b) => a.title.localeCompare(b.title));
    }
    // console.log(ticketsArray)
    return ticketsArray;
  };
  
  // Get ticket objects based on the grouping state and heading
  const tickets = getTickets();
//   console.log("Here are my tickets",tickets)
console.log("Here is datya=",data)
 
  return (
    <div style={{padding:"5px",margin:"10px",width:"25vw"}}>
      <BarHeader groupingState={groupingState} heading={heading} data={data} count={count}/>
      <div style={{}}>
      {tickets && tickets.map(ticket => (
          <Card key={ticket.id} ticket={ticket} groupingState={groupingState} data={data}/>
        ))}
      </div>
    </div>
  )
}

export default VerticalBar
