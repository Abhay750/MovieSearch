import React from 'react'
import Nevbar from '../Components/Nevbar'
import Header from '../Components/Header'

const Home = ({theme,setTheme}) => {
  return (
    <>
        <Nevbar theme={theme} setTheme={setTheme}/>
        <Header theme={theme}/>
    </>
  )
}

export default Home