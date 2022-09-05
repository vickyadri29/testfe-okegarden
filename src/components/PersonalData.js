import { DataInformation } from "../data";

const PersonalData = () => {
  const { gardenLand, gardenTheme, estimate } = DataInformation;

  return (
    <section className="m-8 bg-white rounded-md drop-shadow-md text-gray-700">
      {/* Personal Data Information */}
      <div className="max-w-7xl m-auto p-20 ">
        <div className="m-5">
          <h2 className="font-bold text-3xl">Informasi Data Diri</h2>
          <div>
            <form action="" className="flex flex-col gap-10">
              <div className="flex gap-40">
                <div className="flex flex-col gap-2 my-5">
                  <label htmlFor="name" className="font-bold">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    placeholder="Yudha Wahyu"
                    className="py-2 px-3 bg-gray-200 w-[400px] rounded-lg placeholder-slate-500"
                  />
                </div>
                <div className="flex flex-col gap-2 my-5">
                  <label htmlFor="nohp" className="font-bold">
                    No HP
                  </label>
                  <input
                    type="text"
                    placeholder="+62 852 2324 4747"
                    className="py-2 px-3 bg-gray-200 w-[400px] rounded-lg placeholder-slate-500"
                  />
                </div>
              </div>
              <div className="">
                <div className="flex gap-4">
                  <label htmlFor="address">Alamat</label>
                  <textarea
                    className="border-2 m-2 p-5 rounded-lg border-green-800 w-[700px] h-[150px] placeholder-slate-600"
                    placeholder="jl. serangkai 1 Perum. Bumi Jaya blok A No. 12 Kelurahan samping, Kecamatan Baru, Kota Tanjungpinang, Kepulauan Riau 29125, Indonesia"
                  />
                  <p className="relative top-[110px] right-[200px] text-green-700 underline cursor-pointer">
                    Tambah Alamat Baru
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />

      {/* Personal Data Information */}
      <div className="max-w-7xl m-auto p-20">
        <div className="m-5">
          <h2 className="font-bold text-3xl">Informasi Konsultasi Taman</h2>
          <div className="">
            <div className="flex flex-col mt-5 mb-2 gap-1">
              <h3 className="font-bold text-[17px]">Lahan Taman</h3>
              <p>Pilih jumlah lahan taman yang akan dibuat</p>
            </div>
            <div className="flex gap-5 mt-2 my-8">
              {gardenLand.map((data, index) => {
                const { land } = data;
                return (
                  <div className="border-2 px-5 py-3 rounded-lg border-green-800">
                    <p className="text-green-800 font-bold">{land}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="flex flex-col mt-5 mb-2 gap-1">
              <h3 className="font-bold text-[17px]">Tema Taman</h3>
              <p>Pilih tema taman yang akan dibuat</p>
            </div>
            <div>
              <p className="bg-[#FFF2D1] p-5 font-bold rounded-lg my-5 w-[710px]">
                <span className="font-extrabold">Catatan : </span>Jika anda
                belum memiliki inspirasi tema taman maka anda bisa melewati
                tahapan ini, konsultan kami akan memberikan rekomendasi terbaik
                untuk taman anda.
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            {gardenTheme.map((data, index) => {
              const { img, title, desc, choose } = data;
              return (
                <div
                  key={index}
                  className="flex flex-col border gap-2 rounded-lg"
                >
                  <img src={img} alt="" className="w-full rounded-lg" />
                  <div className="p-5 flex flex-col gap-10">
                    <div className="">
                      <h3 className="font-bold text-[17px]">Taman Kering</h3>
                      <p>
                        Taman yang dirancang untuk menghasilkan suasana alam
                        didalam dan diluar rumah
                      </p>
                    </div>
                    <p className="flex justify-end text-green-800 underline underline-offset-4 cursor-pointer">Pilih</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="my-5">
            <h3 className="font-bold text-[17px] my-2">Estimasi Ukuran Taman</h3>
            <div className="flex gap-5">
              {estimate.map((data, index) => {
                const { size } = data;
                return (
                  <div key={index} className="border-2 border-green-700 px-3 py-2 rounded-lg">
                    <p className="text-green-700 font-bold">{size}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalData;
