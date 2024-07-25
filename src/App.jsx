import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Style.css'

import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Teacher from './pages/Teachers';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Classes from './pages/Classes';

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<About/>} path='/about'/>
      <Route element={<Teacher/>} path='/teacher'/>
      <Route element={<Gallery/>} path='/gallery'/>  
      <Route element={<Contact/>} path='/contact'/>
      <Route element={<Classes/>} path='/class'/>


    </Routes>
    </BrowserRouter>
      </div>
     
    
  )
}

export default App
