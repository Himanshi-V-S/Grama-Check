import React from 'react';
import '../css/Main.css';

function Main() {
    return (
      <div>
        <Heading/>

        <div className='menu'>
            <button className='applybtn btn'>Apply for Grama Certificate</button>

            <br/>

            <button className='statusbtn btn'>Check Status</button>
        </div>
        
        
        <Status/>
      </div>
    );
  }

  function showStatus(){
    console.log("hey");
  }

  function Heading(){
    return(
      <h1 className = 'mainHeading'>Welcome to Grama Check</h1>
    );
  }

  function Status(){
    
  }

  
export default Main;