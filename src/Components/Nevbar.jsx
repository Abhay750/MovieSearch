import React from 'react'
import Search from './Search'
import Theme from './Theme'

const Nevbar = ({theme,setTheme}) => {
  return (
    <>
        <div className={`navbar w-full h-20 ${ theme === "dark" ? "bg-[#47464C] text-white" : "bg-[#6A8EE6] text-black"} flex items-center justify-around`}>
          <div id="logo" className={`font-bold ${ theme === "dark" ? " text-[#E9C400]" : "text-black"} text-3xl `}>
            MovieVerse
          </div>
          <div id="search">
            <Search theme={theme}/>
          </div>
          <div id="theme">
            <Theme theme={theme} setTheme={setTheme}/>
          </div>
        
        </div>
    </>
  )
}

export default Nevbar