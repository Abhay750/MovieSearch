import React from 'react'
import Header from '../Components/Header'

const Home = ({ theme, setTheme }) => {
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
    </>
  )
}

export default Home