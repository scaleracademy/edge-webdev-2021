import React from "react";

import "../styles/movie-card.css";
/**
 * 
 * {
"Title": "Avatar",
"Year": "2009",
"imdbID": "tt0499549",
"Type": "movie",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg"
},

 */
export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Title}</p>
      <p>Year: {movie.Year}</p>
    </div>
  );
}
