import { Home, Calendar, BarChart, Columns, Table } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 p-5 shadow-lg">
      <h1 className="text-2xl font-bold mb-8">🎬 MovieAdmin</h1>

      <nav className="space-y-2">
        <NavItem to="/" icon={<Home size={20} />} label="Dashboard" />
        <NavItem to="/calendar" icon={<Calendar size={20} />} label="Calendar" />
        <NavItem to="/analytics" icon={<BarChart size={20} />} label="Analytics" />
        <NavItem to="/kanban" icon={<Columns size={20} />} label="Kanban" />
        <NavItem to="/tables" icon={<Table size={20} />} label="Tables" />
      </nav>
    </aside>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 p-3 rounded-lg transition
         ${isActive
           ? "bg-blue-600 text-white shadow"
           : "hover:bg-gray-100 dark:hover:bg-gray-700"}`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}
