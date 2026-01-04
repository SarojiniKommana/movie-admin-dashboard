import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function CalendarPage() {
  const events = [
    { title: "Avengers Premiere", start: new Date(), end: new Date() }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <Calendar
        localizer={localizer}
        events={events}
        style={{ height: 500 }}
      />
    </div>
  );
}
