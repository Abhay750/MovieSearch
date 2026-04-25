import { Info, Play, Star, User } from 'lucide-react'
import Nevbar from '../Components/Nevbar'
import { useState, useEffect } from 'react'

const HeaderBg = ({ movies, theme, setTheme }) => {
  const movie = movies?.[0]
  const [user, setUser] = useState(null)

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    setUser(currentUser)
  }, [])

  if (!movie) return null

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      
      <Nevbar theme={theme} setTheme={setTheme} user={user} />

      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="absolute bottom-[20%] left-[5%] max-w-xl text-white">
        
        <div className="inline-flex items-center gap-1.5 bg-red-600 text-xs font-bold px-3 py-1 rounded mb-4">
          <Star className="w-3.5 h-3.5 fill-white" />
          {movie.vote_average?.toFixed(1)}
        </div>

        <h1 className="uppercase text-7xl font-black mb-4">
          {movie.title}
        </h1>

        <p className="text-sm text-white/75 mb-7">
          {movie.overview}
        </p>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded">
            <Play className="w-4 h-4 fill-black" />
            Watch Trailer
          </button>

          <button className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/25 rounded">
            <Info className="w-4 h-4" />
            Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeaderBg