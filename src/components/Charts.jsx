import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {month:"Jan", revenue:4000},
  {month:"Feb", revenue:3000},
  {month:"Mar", revenue:5000},
];

export default function AnalyticsChart(){
  return(
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow h-64">
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="month"/>
          <YAxis/>
          <Tooltip/>
          <Line dataKey="revenue" stroke="#6366f1"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
