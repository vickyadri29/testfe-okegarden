import PersonalInformation from "./informationData/PersonalInformation";
import GardenConsulting from "./informationData/GardenConsulting";

const PersonalData = () => {
  return (
    <section className="m-10">
      <div className="bg-white rounded-md drop-shadow-md text-gray-700 max-w-6xl m-auto">
        {/* Personal Data Information */}
        <PersonalInformation />
        <hr />
        {/* Garden Consult Information */}
        <GardenConsulting />
        {/* Button */}
        <div className="flex md:justify-end justify-center md:p-10 p-3 mx-14 gap-5">
          <button className="md:px-4 px-4 py-2 bg-gray-100 text-green-700 font-semibold md:text-base text-xs rounded-lg transition-all duration-200 hover:bg-green-700 hover:text-white active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300">Batal</button>
          <button className="md:px-4 px-4 py-2 bg-green-800 text-white font-semibold md:text-base text-xs rounded-lg active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300">OKE</button>
        </div>
      </div>
    </section>
  );
};

export default PersonalData;
