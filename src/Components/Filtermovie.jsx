import React, { useState, useEffect } from 'react'
import MovieBox from './MovieBox'

const Filter = ({ theme }) => {
  const [movies, setMovies] = useState([])
  const [genre_idsnum, setgenre_ids] = useState(null)

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        Authorization: "Bearer YOUR_TOKEN"
      }
    })
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }, [])
  const filteredMovies = genre_idsnum
    ? movies.filter(a => a.genre_ids.includes(genre_idsnum))
    : movies

  return (
    <>
      <div className={`w-full ${theme !== 'dark' ? "bg-black" : "bg-gray-500"} flex justify-center h-2xscreen relative font-bold`}>

        <div className={`filterbox ${theme === 'dark' ? "bg-black text-black" : "bg-gray-500 text-black"} w-[80%] h-20 rounded-full absolute top-10 flex justify-around items-center`}>
          <button onClick={() => setgenre_ids(null)} className='w-20 h-8 bg-amber-100'>All</button>
          <button onClick={() => setgenre_ids(28)} className='w-20 h-8 bg-amber-100'>Action</button>
          <button onClick={() => setgenre_ids(878)} className='w-20 h-8 bg-amber-100'>Sci-Fi</button>
          <button onClick={() => setgenre_ids(10749)} className='w-20 h-8 bg-amber-100'>Romance</button>
          <button onClick={() => setgenre_ids(12)} className='w-20 h-8 bg-amber-100'>Adventure</button>
          <button onClick={() => setgenre_ids(18)} className='w-20 h-8 bg-amber-100'>Drama</button>
        </div>

        <div className='Movies mt-40 grid grid-cols-4 gap-8'>
          {filteredMovies.map((a, i) => (
            <MovieBox key={i} a={a} />
          ))}
        </div>

      </div>
    </>
  )
}

export default Filter