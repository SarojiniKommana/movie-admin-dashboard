export default function Dashboard() {
  return (
    <div className="space-y-6">

      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Users" value="12,540" />
        <Card title="Tickets" value="8,320" />
        <Card title="Revenue" value="₹ 2.4M" />
      </div>

    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
