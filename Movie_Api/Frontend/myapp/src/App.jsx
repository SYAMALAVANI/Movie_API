import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/movieapi/");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) { // Prevent negative count
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="card">
        <div className="counter-container">
          <button onClick={handleDecrement}>-</button>
          <span>{count}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        {movies.map((movie) => (
          <div key={movie.id}>
            {/* <img src={movie.image} alt={movie.name} />  Uncomment if you have image URLs */}
            <h1>{movie.name}</h1>
            <p>{movie.description}</p>
            <h3>Rating: {movie.rating}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
