import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import ColorDetail from './ColorDetail'
import AddColorForm from './AddColorForm'
import NavBar from './NavBar'
import Colors from './Colors'
import './App.css'

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

