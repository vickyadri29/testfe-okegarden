import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Schedule from "../components/Schedule";
import Information from "../components/Information";

const Home = () => {
  return (
    <div className="font-lato bg-[#F8F8F8] h-full">
      <Navbar />
      <Header />
      <Schedule />
      <Information />
    </div>
  );
};

export default Home;
