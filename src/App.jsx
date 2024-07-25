import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Style.css'

import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<About/>} path='/about'/>
    </Routes>
    </BrowserRouter>
      </div>
     
    
  )
}

export default App
