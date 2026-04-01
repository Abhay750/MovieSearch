import React from 'react'
const MovieBox = ({ a }) => {
  return (
    <div className="bg-gray-900 w-[260px] h-115 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
      
      <img
        src={`https://image.tmdb.org/t/p/w500${a.poster_path}`}
        alt={a.title}
        className="w-full h-[360px] object-cover"
      />

      <div className="p-3">
        <h2 className="text-md font-semibold text-white line-clamp-2">
          {a.title}
        </h2>

        <div className="flex justify-between items-center mt-2 text-sm text-gray-300">
          <span>⭐ {a.vote_average?.toFixed(1)}</span>
          <span>{a.release_date}</span>
        </div>
      </div>

    </div>
  );
};

export default MovieBox