// src/pages/TablesPage.jsx
import { useContext, useState, useMemo } from "react";
import { MovieContext } from "../context/MovieContext";

export default function TablesPage() {
  const { movies, addMovie, editMovie, deleteMovie } = useContext(MovieContext);

  // local state
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [editingRow, setEditingRow] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const perPage = 5;

  const filtered = useMemo(() => 
    movies.filter(m => m.movie.toLowerCase().includes(search.toLowerCase()))
  , [movies, search]);

  const paginated = useMemo(() =>
    filtered.slice((page - 1) * perPage, page * perPage)
  , [filtered, page]);

  const totalPages = Math.ceil(filtered.length / perPage);

  const openAddForm = () => { setEditingRow(null); setShowForm(true); };
  const openEditForm = (row) => { setEditingRow(row); setShowForm(true); };

  const handleSubmit = (form) => {
    if (editingRow) editMovie(editingRow.id, form);
    else addMovie(form);
    setShowForm(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Bookings</h2>

      <div className="flex gap-4 mb-4">
        <input
          placeholder="Search movie..."
          className="border p-2 rounded flex-1"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button
          className="bg-green-600 text-white px-4 rounded"
          onClick={openAddForm}
        >
          Add Movie
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th>Movie</th><th>Tickets</th><th>Revenue</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map(row => (
            <tr key={row.id} className="border-b text-center">
              <td>{row.movie}</td>
              <td>{row.tickets}</td>
              <td>${row.revenue}</td>
              <td className="space-x-2">
                <button onClick={() => openEditForm(row)} className="text-blue-500">Edit</button>
                <button onClick={() => deleteMovie(row.id)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded ${page === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Add/Edit Modal */}
      {showForm && (
        <FormModal
          row={editingRow}
          onClose={() => setShowForm(false)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

// ----------------- FormModal -----------------
function FormModal({ row, onClose, onSubmit }) {
  const [form, setForm] = useState(row || { movie: "", tickets: "", revenue: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.movie || !form.tickets || !form.revenue) return alert("All fields required!");
    onSubmit({ ...form, tickets: Number(form.tickets), revenue: Number(form.revenue) });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96">
        <h2 className="text-xl font-semibold mb-4">{row ? "Edit Movie" : "Add Movie"}</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="movie" placeholder="Movie Name" value={form.movie} onChange={handleChange} className="w-full border p-2 rounded"/>
          <input type="number" name="tickets" placeholder="Tickets Sold" value={form.tickets} onChange={handleChange} className="w-full border p-2 rounded"/>
          <input type="number" name="revenue" placeholder="Revenue" value={form.revenue} onChange={handleChange} className="w-full border p-2 rounded"/>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded bg-gray-300">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">{row ? "Update" : "Add"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
