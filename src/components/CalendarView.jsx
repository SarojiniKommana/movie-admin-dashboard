import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function CalendarView() {
  const events = [{ title: "Dune 2", start: new Date(), end: new Date() }];

  return (
    <Calendar
      localizer={localizer}
      events={events}
      style={{ height: 300 }}
    />
  );
}
