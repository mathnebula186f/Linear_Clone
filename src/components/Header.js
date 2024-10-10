import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify,faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function Header({groupingState,setGroupingState,orderingState,setOrderingState}) {
  const [isDropdownVisible, setDropdownVisible] = useState(false); // State to manage the main dropdown visibility
  const [isGroupingDropdownVisible, setGroupingDropdownVisible] = useState(true); // State for Grouping dropdown 
  const [isOrderingDropdownVisible, setOrderingDropdownVisible] = useState(false); // State for Ordering dropdown
  
  // Toggle functions
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
    if(isOrderingDropdownVisible)setOrderingDropdownVisible(false);
    if(isGroupingDropdownVisible)setGroupingDropdownVisible(false);
  };
  
  const toggleGroupingDropdown = () => {
    setGroupingDropdownVisible(!isGroupingDropdownVisible);
    if(isOrderingDropdownVisible)setOrderingDropdownVisible(false);
  };
  
  const toggleOrderingDropdown = () => {
    setOrderingDropdownVisible(!isOrderingDropdownVisible);
    if(isGroupingDropdownVisible)setGroupingDropdownVisible(false);
  };

  function changeGroupingState(value){
    setGroupingState(value);
    localStorage.setItem('groupingState',value);
    toggleDropdown();
  }
  function changeOrderingState(value){
    setOrderingState(value);
    localStorage.setItem('orderingState',value);
    toggleDropdown();
  }


  return (
    <div style={{display:"flex",padding:"5px"}}>
      <div onClick={toggleDropdown} style={{height:"fit-content",width:"fit-content",border:"1px solid grey",display:"flex",justifyContent:"space-between",padding:"0px 5px",borderRadius:"5px",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",transition: "box-shadow 0.3s",cursor:"pointer"}}>
        <div style={{display:"flex",padding:"2px",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{fontSize:"small"}}><FontAwesomeIcon icon={faAlignJustify}  /></div>
            <div style={{marginLeft:"3px",fontSize:"medium"}}>Display</div>
        </div>
        <div style={{fontSize:"x-small",alignItems:"center",display:"flex"}}><FontAwesomeIcon icon={faChevronDown} /></div>
      </div>
      {isDropdownVisible && (
        <div style={{position: "absolute",top: "100%",left:"10px",marginTop: "5px",backgroundColor: "#fff",padding: "10px",width: "25vw",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",zIndex: 1000,display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"5px"}}>
          <div style={{ margin:"2px",display:"flex",justifyContent:"space-between",padding:"5px",alignItems:"center",  }}>
            <div style={{color:"grey "}}>Grouping</div>
            <div onClick={toggleGroupingDropdown} style={{height:"fit-content",width:"fit-content",border:"1px solid grey",display:"flex",justifyContent:"space-between",padding:"0px 2px",borderRadius:"5px",cursor:"pointer"}}>
              <div style={{display:"flex",padding:"2px",justifyContent:"space-between",alignItems:"center"}}>
                  <div style={{margin:"0px 3px",fontSize:"medium"}}>{groupingState}</div>
              </div>
              <div style={{fontSize:"x-small",alignItems:"center",display:"flex"}}><FontAwesomeIcon icon={faChevronDown} /></div>
            </div>
          </div>
          {isGroupingDropdownVisible && (
            <div style={{position: "absolute",top: "100%",left:"0px",backgroundColor: "white",padding: "5px",marginTop: "5px",width:"100%",borderRadius:"5px",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"}}>
              <div onClick={()=>{changeGroupingState('Status')}} style={{margin: "2px",display:"flex",alignItems:"center",width:"100%",justifyContent:"center",cursor:"pointer"}}>Status</div>
              <div onClick={()=>{changeGroupingState('User')}} style={{margin: "2px",display:"flex",alignItems:"center",width:"100%",justifyContent:"center",cursor:"pointer"}}>User</div>
              <div onClick={()=>{changeGroupingState('Priority')}} style={{margin: "2px",display:"flex",alignItems:"center",width:"100%",justifyContent:"center",cursor:"pointer"}}>Priority</div>
            </div>
          )}
          <div style={{ margin:"2px",display:"flex",justifyContent:"space-between",padding:"5px",alignItems:"center",  }}>
            <div style={{color:"grey "}}>Ordering</div>
            <div onClick={toggleOrderingDropdown} style={{height:"fit-content",width:"fit-content",border:"1px solid grey",display:"flex",justifyContent:"space-between",padding:"0px 2px",borderRadius:"5px",cursor:"pointer"}}>
              <div style={{display:"flex",padding:"2px",justifyContent:"space-between",alignItems:"center"}}>
                  <div style={{margin:"0px 3px",fontSize:"medium"}}>{orderingState}</div>
              </div>
              <div style={{fontSize:"x-small",alignItems:"center",display:"flex"}}><FontAwesomeIcon icon={faChevronDown} /></div>
            </div>
          </div>
          {isOrderingDropdownVisible && (
            <div style={{position: "absolute",top: "100%",left:"0px",backgroundColor: "white",padding: "5px",marginTop: "5px",width:"100%",borderRadius:"5px",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"}}>
              <div onClick={()=>{changeOrderingState('Priority')}} style={{margin: "2px",display:"flex",alignItems:"center",width:"100%",justifyContent:"center",cursor:"pointer"}}>Priority</div>
              <div onClick={()=>{changeOrderingState('Title')}} style={{margin: "2px",display:"flex",alignItems:"center",width:"100%",justifyContent:"center",cursor:"pointer"}}>Title</div>
            </div>
          )}
          
        </div>

      )}
    </div>
  )
}

export default Header
