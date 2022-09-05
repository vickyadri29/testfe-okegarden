import logoHeader from "../assets/logo.svg";
import imageProfile from "../assets/profile.png";
import {BsFillCaretDownFill} from 'react-icons/bs'


const Navbar = () => {
  return (
    <section className="shadow-md bg-white sticky top-0 z-10">
      <div className="max-w-7xl m-auto">
        <nav className="flex items-center justify-between flex-wrap p-5 cursor-pointer">
          <img src={logoHeader} alt="" className="md:w-40 w-[130px]" />
          <div>
            <ul className="md:flex hidden text-[#636363]">
              <li className="p-3 hover:underline hover:underline-offset-4">Beranda</li>
              <li className="flex items-center p-3 hover:underline hover:underline-offset-4">Layanan <span className="px-2"><BsFillCaretDownFill /></span></li>
              <li className="flex items-center p-3 hover:underline hover:underline-offset-4">Blog <span className="px-2"><BsFillCaretDownFill /></span></li>
              <li className="flex items-center p-3 hover:underline hover:underline-offset-4">Mitra <span className="px-2"><BsFillCaretDownFill /></span></li>
            </ul>
          </div>
          <div>
            <img src={imageProfile} alt="" className="w-12 rounded-full" />
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
