import PersonalInformation from "./informationData/PersonalInformation";
import GardenConsulting from "./informationData/GardenConsulting";

const PersonalData = () => {
  return (
    <section className="m-10">
      <div className="bg-white rounded-md drop-shadow-md text-gray-700 max-w-7xl m-auto">
        {/* Personal Data Information */}
        <PersonalInformation />
        <hr />
        {/* Garden Consult Information */}
        <GardenConsulting />
        {/* Button */}
        <div className="flex justify-end md:p-20 p-3 m-5 gap-5">
          <button className="md:px-4 px-4 py-2 bg-gray-100 text-green-700 font-semibold md:text-base text-xs rounded-lg">Batal</button>
          <button className="md:px-4 px-4 py-2 bg-green-800 text-white font-semibold md:text-base text-xs rounded-lg">OKE</button>
        </div>
      </div>
    </section>
  );
};

export default PersonalData;
