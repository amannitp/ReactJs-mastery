import React, { useState } from 'react'

function Counter() {
    let[counter,setcounter] =useState(0);

    function increment(){
        if(counter<20){
            setcounter(counter+1);
        }
       
    }

    function decrement(){
        if(counter>0){
            setcounter(counter-1);
        }
      
    }
    const buttonStyle = {
        marginLeft: '20px', // Apply margin to the left
        padding: '10px',    // Apply padding
        backgroundColor: 'blue', // Set background color
        color: 'white',     // Set text color
        border: 'none',     // Remove border
        cursor: 'pointer',  // Add pointer cursor on hover
      };

  return (
   <>
    <h1>Counter:{counter}</h1>
    <button onClick={increment} style={buttonStyle}>Increment</button>
    <button onClick={decrement} style={buttonStyle}>Decrement</button>
   </>
  )
}

export default Counter;