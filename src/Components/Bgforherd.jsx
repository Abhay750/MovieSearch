import { Info } from 'lucide-react'
import React from 'react'

const HeaderBg = ({ movies }) => {
  if (!movies || movies.length === 0) return null
  const movie = movies[0]
  // for (i=0; i<=20;i++){
  //   movies[i]
  // }

  return (
    <>
      <div className="bgs relative flex">
        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title}/>
        <div className="dark bg-black opacity-40 w-screen h-212.5 absolute top-0"></div>
        <div className="detail absolute top-70 left-10 text-white gap-4">
          <div className="vote w-20 h-7 flex justify-center items-center text-black rounded-sm absolute left-0 top-[-40px] bg-yellow-300">{movie.vote_average?.toFixed(1)}</div>
          <h1 className='uppercase text-8xl text-white font-bold'>{movie.title}</h1>
          <p className='absolute left-2 top-[100px] text-amber-100'>{movie.overview}</p>
          <div className="btns absolute w-70 h-10 flex justify-around items-center left- top-[200px] gap-5">
          <button className='uppercase text-[13px] font-bold w-50 h-13 bg-yellow-300 text-black'>Watch Trailer</button>
          <button className='uppercase text-[13px] font-bold w-50 h-13 bg-gray-800 text-white items-center flex justify-center'><Info className='w-4 h-4 font-bold'/><span>Details</span></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderBg