import { useState } from "react";

const data = [
  { id: 1, movie: "Inception", tickets: 120, revenue: 2400 },
  { id: 2, movie: "Interstellar", tickets: 90, revenue: 1800 },
  { id: 3, movie: "Avatar", tickets: 150, revenue: 3000 },
];

export default function TablesPage() {
  const [rows, setRows] = useState(data);
  const [search, setSearch] = useState("");

  const filtered = rows.filter(r =>
    r.movie.toLowerCase().includes(search.toLowerCase())
  );

  function deleteRow(id) {
    setRows(rows.filter(r => r.id !== id));
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Bookings</h2>

      <input
        placeholder="Search movie..."
        className="border p-2 rounded mb-4 w-full"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th>Movie</th><th>Tickets</th><th>Revenue</th><th></th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(row => (
            <tr key={row.id} className="border-b text-center">
              <td>{row.movie}</td>
              <td>{row.tickets}</td>
              <td>${row.revenue}</td>
              <td>
                <button
                  onClick={() => deleteRow(row.id)}
                  className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
