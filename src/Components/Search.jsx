import React from 'react'

const Search = ({theme,setTheme}) => {
  return (
    <>
        <input type="text" placeholder='Search here...' className={`h-9 w-70 p-3 rounded-3xl ${theme!=="dark"?'bg-[#595E6F] text-white':'bg-[#FFDEAC] text-black'} border-1 outline-0`}/>
    </>
  )
}

export default Search