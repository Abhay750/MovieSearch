import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Signpage from "./Pages/Signpage"

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
        <Route path="/login" element={<Signpage />} />
      </Routes>
    </Router>
  )
}
export default App