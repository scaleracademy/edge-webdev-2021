import React from "react";
import { Link } from "react-router-dom";

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
kebab-case

 */
export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie-list/${movie.imdbID}`}>
      <div className="movie-card">
        <img src={movie.Poster} alt={movie.Title} />
        <p>{movie.Title}</p>
        <p>Year: {movie.Year}</p>
      </div>
      {/* <a href="https://google.com">My link</a> */}
    </Link>
  );
}
