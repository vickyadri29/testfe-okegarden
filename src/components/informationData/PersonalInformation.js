const PersonalInformation = () => {
  return (
    <section className="md:p-20 p-3">
      <div className="m-5">
        <h2 className="font-bold md:text-3xl text-md md:text-left text-center">Informasi Data Diri</h2>
        <div>
          <form action="" className="flex flex-col md:gap-10">
            <div className="flex md:gap-40 flex-wrap">
              <div className="flex flex-col gap-2 my-5">
                <label htmlFor="name" className="md:text-base text-sm font-bold">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  placeholder="Yudha Wahyu"
                  className="py-2 px-3 bg-gray-200 md:w-[400px] rounded-lg placeholder-slate-500 placeholder:text-sm"
                />
              </div>
              <div className="flex flex-col gap-2 my-5">
                <label htmlFor="nohp" className="md:text-base text-sm font-bold">
                  No HP
                </label>
                <input
                  type="text"
                  placeholder="+62 852 2324 4747"
                  className="py-2 px-3 bg-gray-200 md:w-[400px] rounded-lg placeholder-slate-500 placeholder:text-sm"
                />
              </div>
            </div>
            <div className="">
              <div className="flex md:flex-row flex-col gap-4">
                <label htmlFor="address">Alamat</label>
                <textarea
                  className="border-2 m-2 p-5 rounded-lg border-green-800 md:w-[700px] md:h-[150px] h-[200px] placeholder-slate-600 placeholder:text-sm"
                  placeholder="jl. serangkai 1 Perum. Bumi Jaya blok A No. 12 Kelurahan samping, Kecamatan Baru, Kota Tanjungpinang, Kepulauan Riau 29125, Indonesia"
                />
                <p className="md:flex hidden relative top-[110px] bottom-16 right-[200px] text-green-700 underline cursor-pointer md:text-base text-xs">
                  Tambah Alamat Baru
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PersonalInformation;
