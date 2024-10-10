import React, { useEffect,useState } from 'react'
import Card from './Card'
import VerticalBar from './VerticalBar'

function Main({data,orderingState,groupingState}) {
  const [headingArray, setHeadingArray] = useState([]);
  
  useEffect(() => {
    if(groupingState==="Status"){
        setHeadingArray(["Todo","In progress","Backlog","Cancelled","Done"])
    }
    else if(groupingState==="User"){
        const userNames = data.users.map(user => user.name);
        setHeadingArray(userNames);
    }
    else if(groupingState==="Priority"){
        setHeadingArray([0,1,2,3,4])
    }
  }, [groupingState,data,orderingState])

  function findCount(heading, groupingState, data) {
    const { tickets } = data;
  
    let count = 0;
  
    // Count based on the grouping state
    if (groupingState === "Status") {
      // Count tickets based on the status heading
      count = tickets.filter(ticket => ticket.status === heading).length;
    } else if (groupingState === "Priority") {
      // Count tickets based on the priority heading
      count = tickets.filter(ticket => ticket.priority === heading).length;
    } else if (groupingState === "User") {
      // Count tickets assigned to the user based on heading (user name)
      count = tickets.filter(ticket => {
        const user = data.users.find(user => user.name === heading);
        return user && ticket.userId === user.id;
      }).length;
    }
  
    return count;
  }
    
  return (
    <div style={{display:"flex",overflow:"auto"}} >
      {headingArray.map((heading, index) => (
        <VerticalBar data={data} key={index} heading={heading} groupingState={groupingState} count={findCount(heading,groupingState,data)} orderingState={orderingState} />
      ))}
    </div>
  )
}

export default Main
