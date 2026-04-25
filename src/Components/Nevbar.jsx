import React from 'react'
import { User } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = ({ theme, setTheme, user }) => {
  return (
    <nav className="z-50 h-20 flex items-center px-8 justify-between w-full absolute top-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
      
      <span className="font-black text-5xl text-red-600">
        NETFLIX
      </span>

      <Link to="/login">
        <div className="w-10 h-10 rounded-md bg-red-600 flex items-center justify-center text-white font-bold">
          {user?.name
            ? user.name.charAt(0).toUpperCase()
            : <User className="w-5 h-5" />}
        </div>
      </Link>
    </nav>
  )
}

export default Navbar