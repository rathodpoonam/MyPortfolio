import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './component/Home';
import  Figma  from './component/Figma';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Router> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/figmadesign' element={<Figma/>}/>
      </Routes>
    {/* </Router> */}
    
    </>
  )
}

export default App
