import React from "react";

const MovieBox = ({ a, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-110"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${a.poster_path}`}
        alt={a.title}
        className="w-full h-full object-cover"
      />
      <div
        className="absolute bottom-0 left-0 w-full h-2/3 
                   bg-gradient-to-t from-black/95 via-black/80 to-transparent
                   translate-y-full group-hover:translate-y-0
                   transition-transform duration-500 ease-in-out"
      >
        <div className="p-4 flex flex-col justify-end h-full">
          
          <h2 className="text-white text-sm font-semibold line-clamp-2">
            {a.title}
          </h2>

          <div className="flex justify-between text-xs text-gray-300 mt-2 mb-5">
            <span>⭐ {a.vote_average?.toFixed(1)}</span>
            <span>{a.release_date}</span>
          </div>

        </div>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 ring-2 ring-red-600 rounded-lg" />
    </div>
  );
};

export default MovieBox;