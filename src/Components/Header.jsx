import React, { useState, useEffect } from 'react'
import Bgforherd from './Bgforherd'
import Filtermovie from './Filtermovie'
import Footer from './Footer'

const Header = ({ theme, setTheme }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzQ1Y2JjN2Y4NTBmMzA2OWNjOGVkMjgxYzhhNzg4YSIsIm5iZiI6MTc3Mzk4MzQyMC43NDQsInN1YiI6IjY5YmNkNmJjYTRhZmM4NDA1MmVhMzc0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kDA24DOPaSq7wieMN2qLmw0C_HlktWOeJyb8s5VvSFo`
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
