import React from 'react';
import './Main.css';

function Main() {
    return (
      <div>
        <Heading/>

        <div className='menu'>
          <div className="center">
            <button className='applybtn btn'>Apply for Grama Certificate</button>
          </div>
          
          <div className='center'>
            <button className='statusbtn btn' onClick = {console.log('hello')}>Check Status</button>
          </div>
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
      <h1 className = 'mainHeading'>Grama Check</h1>
    );
  }

  function Status(){
    
  }

  
export default Main;