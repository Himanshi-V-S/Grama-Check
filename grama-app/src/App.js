import React from 'react'
import Main from './pages/Main'
import Footer from './components/Footer'
import './App.css';
import Apply from './pages/Apply';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Signup from "./pages/Signup"
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/apply" element={<Apply />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
      <div className='footer'>
        <Footer/>
      </div>
      
    </div>
    
  )
}

export default App