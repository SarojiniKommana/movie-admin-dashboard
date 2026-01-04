// src/context/MovieContext.jsx
import React, { createContext, useState } from "react";
import toast from "react-hot-toast";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    { id: 1, movie: "Inception", tickets: 120, revenue: 2400 },
    { id: 2, movie: "Interstellar", tickets: 90, revenue: 1800 },
    { id: 3, movie: "Avatar", tickets: 150, revenue: 3000 },
  ]);

  const addMovie = (movie) => {
    if (!movie.movie || !movie.tickets || !movie.revenue) {
      toast.error("All fields are required!");
      return;
    }
    setMovies([...movies, { ...movie, id: Date.now() }]);
    toast.success("Movie added successfully!");
  };

  const editMovie = (id, updatedMovie) => {
    if (!updatedMovie.movie || !updatedMovie.tickets || !updatedMovie.revenue) {
      toast.error("All fields are required!");
      return;
    }
    setMovies(movies.map(m => (m.id === id ? { ...m, ...updatedMovie } : m)));
    toast.success("Movie updated successfully!");
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter(m => m.id !== id));
    toast.success("Movie deleted!");
  };

  return (
    <MovieContext.Provider value={{ movies, addMovie, editMovie, deleteMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
