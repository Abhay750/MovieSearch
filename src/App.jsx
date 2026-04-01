import React, { useState } from 'react'
import Home from './Pages/Home'

const App = () => {
  const[theme,setTheme]=useState('dark')
  return (
    <>
      <Home theme={theme} setTheme={setTheme}/>
    </>
  )
}

export default App