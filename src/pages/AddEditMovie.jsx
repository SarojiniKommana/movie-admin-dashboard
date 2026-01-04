// src/pages/AddEditMovie.jsx
import React, { useContext, useState, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";
import { useNavigate, useParams } from "react-router-dom";

export default function AddEditMovie({ edit = false }) {
  const { movies, addMovie, editMovie } = useContext(MovieContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({ title: "", genre: "", year: "" });

  useEffect(() => {
    if (edit) {
      const movie = movies.find((m) => m.id === parseInt(id));
      if (movie) setForm(movie);
    }
  }, [edit, id, movies]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) editMovie(parseInt(id), form);
    else addMovie(form);
    navigate("/tables");
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">
        {edit ? "Edit Movie" : "Add Movie"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={form.genre}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={form.year}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {edit ? "Update Movie" : "Add Movie"}
        </button>
      </form>
    </div>
  );
}
