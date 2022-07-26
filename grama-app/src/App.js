import React from 'react'
import Main from './pages/Main'
import Footer from './components/Footer'
import './App.css';
import Apply from './pages/Apply';

function App() {
  return (
    <div>
      {/* <Main/> */}

      <Apply/>
      
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  
  )
}

export default App