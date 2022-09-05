import logoHeader from "../assets/logo.svg";
import imageProfile from "../assets/profile.png";
import {BsFillCaretDownFill} from 'react-icons/bs'


const Navbar = () => {
  return (
    <section className="shadow-md bg-white">
      <div className="max-w-7xl m-auto">
        <nav className="flex items-center justify-between sticky top-0 z-10 p-5">
          <img src={logoHeader} alt="" className="w-40" />
          <div>
            <ul className="flex text-[#636363]">
              <li className="p-3">Beranda</li>
              <li className="flex items-center p-3">Layanan <span className="px-2"><BsFillCaretDownFill /></span></li>
              <li className="flex items-center p-3">Blog <span className="px-2"><BsFillCaretDownFill /></span></li>
              <li className="flex items-center p-3">Mitra <span className="px-2"><BsFillCaretDownFill /></span></li>
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
