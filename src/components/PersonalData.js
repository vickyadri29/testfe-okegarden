const PersonalData = () => {
  return (
    <section className="m-8 bg-white rounded-md drop-shadow-md">
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
          <h2>Informasi Konsultasi Taman</h2>
          <div>
            <div>
              <h3>Lahan Taman</h3>
              <p>Pilih jumlah lahan taman yang akan dibuat</p>
            </div>
            <div>
              <div>
                <p>1 Lahan Taman</p>
              </div>
              <div>
                <p>2 Lahan Taman</p>
              </div>
              <div>
                <p>Lebih dari 2 Lahan Taman</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h3>Tema Taman</h3>
              <p>Pilih tema taman yang akan dibuat</p>
            </div>
            <div>
              <p><span>Catatan : </span>Jika anda belum memiliki inspirasi tema taman maka anda bisa melewati tahapan ini, konsultan kami akan memberikan rekomendasi terbaik untuk taman anda.</p>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="" />
              <div>
                <h3>Taman Minimalis</h3>
                <p>Taman yang indah dilahan yang sempit</p>
              </div>
              <p>Pilih</p>
            </div>
            <div>
              <img src="" alt="" />
              <div>
                <h3>Taman Kering</h3>
                <p>Taman yang dirancang untuk menghasilkan suasana alam didalam dan diluar rumah</p>
              </div>
              <p>Pilih</p>
            </div>
            <div>
              <img src="" alt="" />
              <div>
                <h3>Taman Tropis</h3>
                <p>Taman yang paling sesuai dengan iklim di Indonesia</p>
              </div>
              <p>Pilih</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalData;
