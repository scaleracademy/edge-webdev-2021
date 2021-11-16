import "./App.css";
import { useState } from "react";
import { NavBar } from "./components";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import About from "./pages/About";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieDetails from "./pages/MovieDetails";

const API_BASE_URL = "https://www.omdbapi.com";
// &apikey=aa660442

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");

  /**
   *
   * function search(){
   * }
   */
  const search = async (e) => {
    if (e.code === "Enter") {
      // https://www.omdbapi.com/?s=avatar&apikey=aa660442
      setIsLoading(true);
      const response = await axios.get(
        API_BASE_URL + "/?s=" + inputValue + "&apikey=aa660442"
      );
      // set datay
      setMovies(response.data.Search);
      setIsLoading(false);
    }
  };

  return (
    <div className="main">
      <NavBar
        search={search}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Router>
        <Routes>
          <Route
            path="/movie-list"
            element={<Movie isLoading={isLoading} movieList={movies} />}
          />
          <Route path="/:search/:id" element={<MovieDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
