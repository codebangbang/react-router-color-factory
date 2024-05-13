import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar'
import ColorList from './ColorList'
import './App.css'



function App() {
  const [color, setColor] = useState(0)

 return (
    <BrowserRouter>
      <NavBar />
      <ColorList color={color} setColor={setColor} />
    </BrowserRouter>
  )
}

export default App;

