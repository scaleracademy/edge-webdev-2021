import React from "react";
import { MovieList } from "../components";

export default function Movie({ movieList, isLoading }) {
  return (
    <div>
      Movie List page
      <MovieList isLoading={isLoading} movieList={movieList} />
    </div>
  );
}
