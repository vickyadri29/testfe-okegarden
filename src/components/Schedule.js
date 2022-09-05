import CalendarComponents from "./card/Calendar";
import DateAndTime from "./card/DateAndTime";

const Schedule = () => {
  return (
    <section>
      <div className="max-w-7xl m-auto">
        <div>
          <div className="flex justify-between">
            <div className="basis-1/3">
              <CalendarComponents />
            </div>
            <div className="basis-1/2">
              <DateAndTime />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
