import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logoHeader from "../assets/logo.svg";
import imageProfile from "../assets/profile.png";
import { BsFillCaretDownFill } from "react-icons/bs";
import { CgMenuRight, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [bg, setBg] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  }, []);

  return (
    <section className="shadow-md bg-white sticky top-0 z-10">
      <div className="max-w-7xl m-auto">
        <nav className=" flex items-center justify-between flex-wrap p-5 cursor-pointer">
          <img
            src={logoHeader}
            alt=""
            name="home"
            className="home md:w-40 w-[130px]"
          />
          <div>
            <ul className="md:flex hidden text-[#636363]">
              <Link to={"/"} smooth={true} duration={500}>
                <li className="p-3 hover:underline hover:underline-offset-4">
                  Beranda
                </li>
              </Link>
              <Link to={"information"} smooth={true} duration={500}>
                <li className="flex items-center p-3 hover:underline hover:underline-offset-4">
                  Layanan{" "}
                  <span className="px-2">
                    <BsFillCaretDownFill />
                  </span>
                </li>
              </Link>
              <Link to={"/"} smooth={true} duration={500}>
                <li className="flex items-center p-3 hover:underline hover:underline-offset-4">
                  Blog{" "}
                  <span className="px-2">
                    <BsFillCaretDownFill />
                  </span>
                </li>
              </Link>
              <Link to={"/"} smooth={true} duration={500}>
                <li className="flex items-center p-3 hover:underline hover:underline-offset-4">
                  Mitra{" "}
                  <span className="px-2">
                    <BsFillCaretDownFill />
                  </span>
                </li>
              </Link>
            </ul>
            <div
              className={`${
                navOpen ? "left-0" : "left-full"
              } fixed bottom-0 w-full max-w-xs h-screen transition-all`}
            >
              <nav className="bg-white shadow-xl w-full h-full">
                <Link to={"/"} smooth={true} duration={500}>
                  <li className="p-3 hover:underline hover:underline-offset-4 list-none">
                    Beranda
                  </li>
                </Link>
                <Link to={"information"} smooth={true} duration={500}>
                  <li className="flex items-center p-3 hover:underline hover:underline-offset-4">
                    Layanan{" "}
                    <span className="px-2">
                      <BsFillCaretDownFill />
                    </span>
                  </li>
                </Link>
                <li className="flex items-center p-3 hover:underline hover:underline-offset-4">
                  Blog{" "}
                  <span className="px-2">
                    <BsFillCaretDownFill />
                  </span>
                </li>
                <li className="flex items-center p-3 hover:underline hover:underline-offset-4">
                  Mitra{" "}
                  <span className="px-2">
                    <BsFillCaretDownFill />
                  </span>
                </li>
              </nav>
            </div>
          </div>
          <div className="md:flex hidden">
            <img src={imageProfile} alt="" className="w-12 rounded-full" />
          </div>
          <div className="md:hidden flex">
            <button type="submit" onClick={() => setNavOpen(!navOpen)}>
              {navOpen ? <CgClose /> : <CgMenuRight />}
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
