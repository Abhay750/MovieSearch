import React, { useState, useEffect } from "react";
import MovieBox from "./MovieBox";

const GENRES = [
  { id: null, label: "All" },
  { id: 28, label: "Action" },
  { id: 878, label: "Sci-Fi" },
  { id: 10749, label: "Romance" },
  { id: 12, label: "Adventure" },
  { id: 18, label: "Drama" },
];

const Filter = ({ theme }) => {
  const [movies, setMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(`https://api.themoviedb.org/3/movie/popular?page=${page}`, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzQ1Y2JjN2Y4NTBmMzA2OWNjOGVkMjgxYzhhNzg4YSIsIm5iZiI6MTc3Mzk4MzQyMC43NDQsInN1YiI6IjY5YmNkNmJjYTRhZmM4NDA1MmVhMzc0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kDA24DOPaSq7wieMN2qLmw0C_HlktWOeJyb8s5VvSFo",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results ?? []); // ✅ replace data
        setLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch(() => setLoading(false));
  }, [page]);

  const isDark = theme === "dark";

  const filtered = activeGenre
    ? movies.filter((m) => m.genre_ids.includes(activeGenre))
    : movies;

  return (
    <div
      className={`min-h-screen w-full px-10 py-8 ${
        isDark ? "bg-zinc-900" : "bg-black"
      }`}
    >
      {/* 🎯 Genre Buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        {GENRES.map(({ id, label }) => (
          <button
            key={label}
            onClick={() => {
              setActiveGenre(id);
              setPage(1); // 🔥 reset page when changing genre
            }}
            className={`px-5 py-1.5 rounded-full text-sm font-semibold border transition
              ${
                activeGenre === id
                  ? "bg-red-600 border-red-600 text-white"
                  : "bg-transparent border-zinc-600 text-zinc-300 hover:border-white hover:text-white"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 🎬 Movies */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[2/3] rounded-md bg-zinc-800 animate-pulse"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((movie) => (
            <MovieBox
              key={movie.id}
              a={movie}
              onClick={() => setSelectedMovie(movie)}
            />
          ))}
        </div>
      )}

      {/* 🔥 Pagination */}
      <div className="flex justify-center items-center gap-4 mt-10">
        {/* Prev */}
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 bg-zinc-800 text-white rounded disabled:opacity-40 hover:bg-zinc-700 transition"
        >
          Prev
        </button>

        {/* Page Numbers */}
        {[...Array(10)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded transition
              ${
                page === i + 1
                  ? "bg-red-600 text-white scale-110"
                  : "bg-zinc-700 text-gray-300 hover:bg-zinc-600"
              }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={page === 10}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-zinc-800 text-white rounded disabled:opacity-40 hover:bg-zinc-700 transition"
        >
          Next
        </button>
      </div>

      {/* 🎥 Modal */}
      {selectedMovie && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedMovie(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-zinc-900 text-white rounded-xl overflow-hidden shadow-2xl
                       w-[90%] sm:w-[60%] lg:w-[35%]
                       h-[80%] sm:h-[60%] lg:h-[55%]
                       relative flex flex-col"
          >
            {/* Close */}
            <button
              onClick={() => setSelectedMovie(null)}
              className="absolute top-3 right-3 text-xl hover:text-red-500"
            >
              ✖
            </button>

            {/* Image */}
            <img
              src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
              className="h-1/2 w-full object-cover"
            />

            {/* Content */}
            <div className="p-4 overflow-y-auto">
              <h2 className="text-lg font-bold mb-2">
                {selectedMovie.title}
              </h2>

              <p className="text-xs text-gray-400 mb-2">
                ⭐ {selectedMovie.vote_average} |{" "}
                {selectedMovie.release_date}
              </p>

              <p className="text-sm text-gray-300">
                {selectedMovie.overview}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;