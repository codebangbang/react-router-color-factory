import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import ColorDetail from './ColorDetail'
import AddColorForm from './AddColorForm'
import NavBar from './NavBar'
import Colors from './Colors'
import './App.css'

// The App function is the main component of the application. It includes the BrowserRouter component, which provides the routing functionality for the application. Inside the BrowserRouter component, there are Route components that define the different routes of the application. The Routes component is used to render the appropriate component based on the current route. The Navigate component is used to redirect the user to a specific route. The App component also includes state to manage the list of colors and a function to add a new color to the list. The NavBar component is used to display the navigation bar at the top of the page.
function App() {
  const [colors, setColors] = useState([
    { name: 'Red', value: "#FF0000"},
    { name: 'Green', value: "#00FF00"},
    { name: 'Blue', value: "#0000FF"},
  ]);

  function addColor(newColor) {
    setColors([...colors, newColor]);
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/colors" element={<Colors colors={colors} />} />
        <Route path="/colors/new" element={<AddColorForm addColor={addColor} />} />
        <Route path="/colors/:color" element={<ColorDetail colors={colors} />} />
        <Route path="/" element={<Navigate to="/" />} />
        <Route path="/*" element={<p>Hmmm. I can't seem to find what you want.</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

