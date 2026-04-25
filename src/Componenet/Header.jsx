import React, { useState, useEffect } from 'react'
import Bgforherd from './Bgforherd'
import Filtermovie from './Filtermovie'
import Footer from './Footer'

const Header = ({ theme, setTheme }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
      }
    })
      .then(res => res.json())
      .then(data => setMovies(data.results || []))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <Bgforherd 
        movies={movies} 
        theme={theme} 
        setTheme={setTheme} 
      />

      <div className="filters">
        <Filtermovie theme={theme} />
      </div>

      <Footer />
    </>
  )
}

export default Header