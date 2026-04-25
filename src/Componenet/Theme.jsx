import React from 'react'
import { Sun, Moon } from 'lucide-react'

const Theme = ({ theme, setTheme }) => {
  return (
    <>
      <button
        onClick={() =>
          setTheme(theme === 'dark' ? 'light' : 'dark')
        }
      className={`bg-[#787776] w-10 h-8 flex items-center justify-center rounded-2xl`}>
        {theme === 'dark' ? <Sun className='text-yellow-200'/> : <Moon className='text-black'/>}
      </button>
    </>
  )
}

export default Theme