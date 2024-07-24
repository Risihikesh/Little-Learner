import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Style.css'

import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path='/'/>
    </Routes>
    </BrowserRouter>
      </div>
     
    
  )
}

export default App
