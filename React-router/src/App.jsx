import React from 'react'
import Menu from "./Menu";
import About from './About';
import Contact from './Contact';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}

const Home=()=>{
    return(
        <div className="contactstyle">
            <h2>Welcome to Home Page</h2>
        </div>
    )
}

export default App