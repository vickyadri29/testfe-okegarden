const PersonalInformation = () => {
  return (
    <section className="md:p-20 p-3">
      <div className="m-5">
        <h2 className="font-bold md:text-3xl text-md md:text-left text-center">Informasi Data Diri</h2>
        <div>
          <form action="" className="flex flex-col md:gap-10">
            <div className="flex md:gap-5 flex-wrap">
              <div className="flex flex-col gap-2 my-5">
                <label htmlFor="name" className="md:text-base text-sm font-bold">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  placeholder="Masukan Nama Kamu..."
                  className="py-3 px-4 bg-gray-200 md:w-[400px] rounded-lg placeholder-slate-500 placeholder:text-sm text-sm focus:outline-none focus:ring focus:ring-gray-300"
                />
              </div>
              <div className="flex flex-col gap-2 my-5">
                <label htmlFor="nohp" className="md:text-base text-sm font-bold">
                  No HP
                </label>
                <input
                  type="text"
                  placeholder="Masukan No Hp Kamu..."
                  className="py-3 px-4 bg-gray-200 md:w-[400px] rounded-lg placeholder-slate-500 placeholder:text-sm text-sm focus:outline-none focus:ring focus:ring-gray-300"
                />
              </div>
            </div>
            <div className="">
              <div className="flex md:flex-row flex-col gap-4">
                <label htmlFor="address">Alamat</label>
                <textarea
                  className="border-2 m-2 p-5 rounded-lg border-green-800 md:w-[700px] md:h-[120px] h-[200px] placeholder-slate-600 placeholder:text-sm text-sm focus:border-gray-300"
                  placeholder="Masukan Alamat lengkap Kamu..."
                />
                <p className="md:flex hidden relative top-[90px] right-[190px] text-green-700 underline cursor-pointer md:text-sm text-xs">
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
