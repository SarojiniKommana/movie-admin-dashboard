export default function StatCards() {
  const stats = [
    { title: "Users", value: "12,450" },
    { title: "Tickets", value: "3,200" },
    { title: "Revenue", value: "$98,500" }
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((s, i) => (
        <div key={i} className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
          <p className="text-sm text-gray-400">{s.title}</p>
          <h2 className="text-2xl font-bold">{s.value}</h2>
        </div>
      ))}
    </div>
  );
}
