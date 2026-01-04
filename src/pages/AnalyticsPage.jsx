import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", sales: 400 },
  { name: "Tue", sales: 700 },
  { name: "Wed", sales: 200 },
  { name: "Thu", sales: 900 },
  { name: "Fri", sales: 600 },
];

export default function AnalyticsPage() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow h-[400px]">
      <h2 className="text-xl font-bold mb-4">Weekly Sales</h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
