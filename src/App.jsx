import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import KanbanPage from "./pages/KanbanPage";
import TablesPage from "./pages/TablesPage";

import Dashboard from "./pages/Dashboard";
import CalendarPage from "./pages/CalendarPage";
import AnalyticsPage from "./pages/AnalyticsPage";

export default function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="p-6 flex-1 bg-gray-100 dark:bg-gray-900">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/kanban" element={<KanbanPage />} />
            <Route path="/tables" element={<TablesPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
