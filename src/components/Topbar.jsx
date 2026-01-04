import { Search, Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function Topbar() {
  const [dark, setDark] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Search />
        <input
          className="bg-transparent outline-none"
          placeholder="Search..."
        />
      </div>

      <button
        onClick={() => {
          document.documentElement.classList.toggle("dark");
          setDark(!dark);
        }}
      >
        {dark ? <Sun /> : <Moon />}
      </button>
    </header>
  );
}
