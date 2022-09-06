import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useState } from "react";

const CalendarComponents = () => {
  const [date, setDate] = useState(new Date());

  return (
    <section>
      <div className="bg-white rounded-md p-8 drop-shadow-md md:w-full w-[300px] md:h-[400px]">
        {/* Title */}
        <Calendar
          onChange={setDate}
          value={date}
          next2Label={null}
          prev2Label={null}
        />
      </div>
    </section>
  );
};

export default CalendarComponents;
