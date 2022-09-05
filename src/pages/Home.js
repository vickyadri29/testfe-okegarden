import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Schedule from "../components/Schedule";
import PersonalData from "../components/PersonalData";

const Home = () => {
  return (
    <div className="font-lato bg-[#F8F8F8] h-full">
      <Navbar />
      <Header />
      <Schedule />
      <PersonalData />
    </div>
  );
};

export default Home;
