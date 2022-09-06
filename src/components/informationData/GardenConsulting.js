import { DataInformation } from "../../data";

const GardenConsulting = () => {
  const { gardenLand, gardenTheme, estimate } = DataInformation;
  
  return (
    <section className="md:p-20 p-3">
      <div className="m-5">
        <h2 className="font-bold md:text-3xl text-md md:text-left text-center">Informasi Konsultasi Taman</h2>
        <div className="">
          <div className="flex flex-col mt-5 mb-2 gap-1">
            <h3 className="font-bold md:text-[17px] text-sm md:text-left text-center">Lahan Taman</h3>
            <p className="md:text-base text-[12px] md:text-left text-center">Pilih jumlah lahan taman yang akan dibuat</p>
          </div>
          <div className="flex flex-wrap md:justify-start justify-center md:gap-5 gap-2 md:mt-2 md:my-8 ">
            {gardenLand.map((data, index) => {
              const { land } = data;
              return (
                <div key={index} className="md:border-2 border md:px-5 px-2 md:py-3 py-1 rounded-lg border-green-800 hover:bg-green-200 cursor-pointer">
                  <p className="text-green-800 md:font-bold font-semibold md:text-base text-[8px]">{land}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="flex flex-col mt-5 mb-2 gap-1">
            <h3 className="font-bold md:text-[17px] text-sm  md:text-left text-center">Tema Taman</h3>
            <p className="md:text-base text-[12px] md:text-left text-center">Pilih tema taman yang akan dibuat</p>
          </div>
          <div>
            <p className="bg-[#FFF2D1] p-5 md:font-bold md:text-base text-[12px] rounded-lg my-5 lg:[710px] w-full">
              <span className="font-extrabold">Catatan : </span>Jika anda belum
              memiliki inspirasi tema taman maka anda bisa melewati tahapan ini,
              konsultan kami akan memberikan rekomendasi terbaik untuk taman
              anda.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-5">
          {gardenTheme.map((data, index) => {
            const { img, title, desc, choose } = data;
            return (
              <div
                key={index}
                className="flex flex-col justify-between border gap-2 rounded-lg basis-1/3"
              >
                <img src={img} alt="" className="w-full lg:h-[250px] rounded-lg " />
                <div className="p-5 flex flex-col gap-10">
                  <div className="flex flex-col md:gap-0 gap-2">
                    <h3 className="font-bold md:text-[17px] text-[15px]">{title}</h3>
                    <p className="md:text-base text-xs">
                      {desc}
                    </p>
                  </div>
                  <p className="flex justify-end md:text-base text-sm text-green-800 underline underline-offset-4 cursor-pointer">
                    {choose}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="my-5">
          <h3 className="font-bold text-[17px] my-2">Estimasi Ukuran Taman</h3>
          <div className="md:flex grid grid-cols-3 flex-wrap md:gap-5 gap-2">
            {estimate.map((data, index) => {
              const { size } = data;
              return (
                <div
                  key={index}
                  className="md:px-4 py-1 md:border-2 border rounded-lg border-green-800 hover:bg-green-200 cursor-pointer"
                >
                  <p className="text-green-800 text-center md:font-bold font-semibold md:text-base text-[8px]">{size}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GardenConsulting;
