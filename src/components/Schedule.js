import CalendarComponents from "./cardSchedule/Calendar";
import DateAndTime from "./cardSchedule/DateAndTime";

const Schedule = () => {
  return (
    <section className="mx-10">
      <div className="max-w-6xl m-auto">
        <div>
          <div className="flex md:flex-row flex-col lg:justify-between justify-center items-center flex-wrap gap-10">
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
