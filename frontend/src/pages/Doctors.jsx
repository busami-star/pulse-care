import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/Context";
import { useNavigate, useLocation } from "react-router-dom";

const Doctors = () => {
  const { doctors } = useContext(AppContext);
  const [doc, setDoc] = useState([]);
  const [selectedExpertise, setSelectedExpertise] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const getAllDoctors = () => {
    let filteredDoctors = doctors;
    if (selectedExpertise) {
      filteredDoctors = doctors.filter((doct) =>
        doct.expartise.toLowerCase().includes(selectedExpertise.toLowerCase())
      );
    }
    setDoc(filteredDoctors);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const expertise = params.get("expertise") || "";
    setSelectedExpertise(expertise);
  }, [location.search]);

  useEffect(() => {
    getAllDoctors();
  }, [doctors, selectedExpertise]);

  return (
    <div>
      <h1 className="text-3xl font-medium text-center">Browse Our Doctors</h1>

      {/* Expertise filter buttons */}
      <div className="mt-4 mb-6">
        <span className="font-medium text-lg">Filter by Expertise: </span>
        <div className="flex flex-wrap gap-2 justify-center mt-2">
          <button
            onClick={() => setSelectedExpertise("")}
            className={`p-2 border rounded-md transition-colors duration-300 ${
              !selectedExpertise
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-blue-200"
            }`}
            aria-label="Show all doctors"
          >
            All
          </button>
          {doctors.length > 0 &&
            [...new Set(doctors.map((doc) => doc.expartise))].map(
              (expertise, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedExpertise(expertise)}
                  className={`p-2 border rounded-md transition-colors duration-300 ${
                    selectedExpertise === expertise
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-blue-200"
                  }`}
                  aria-label={`Filter by ${expertise}`}
                >
                  {expertise}
                </button>
              )
            )}
        </div>
      </div>

      <div className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {doc.length > 0 ? (
            doc.map((doct, index) => (
              <div
                onClick={() => navigate(`/appointment/${doct.id}`)}
                className="border rounded-xl p-4 border-gray-300 cursor-pointer hover:shadow-lg hover:translate-y-[-4px] transition-transform duration-300"
                key={index}
              >
                <div className="w-full aspect-w-1 aspect-h-1">
                  <img
                    className="rounded-xl object-cover"
                    src={doct.image}
                    alt={doct.name}
                  />
                </div>
                <div className="py-2 text-center">
                  <p className="font-medium text-lg text-gray-900">
                    {doct.name}
                  </p>
                  <p className="text-sm text-gray-600">{doct.expartise}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No doctors found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
