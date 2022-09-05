import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { DateTime } from "../../data";

const DateAndTime = () => {
  const { times } = DateTime;

  return (
    <section>
      <div className="text-gray-700 bg-white rounded-md p-8 drop-shadow-md">
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-xl">Thursday</h3>
          <p>October 8, 2022</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-extrabold text-lg">Pilih Waktu</h3>
          <p className="mt-1 mb-4">Durasi Konsultasi 30 Menit</p>
        </div>
        <div className="grid grid-cols-2 gap-4 flex-row-reverse">
          {times.map((data, index) => {
            const { time } = data;
            return (
              <div key={index}>
                <div className="border border-gray-400 rounded-xl p-2 hover:bg-blue-300 cursor-pointer">
                  <p className="text-center font-bold text-blue-500">{time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DateAndTime;
