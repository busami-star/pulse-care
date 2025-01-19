import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/Context";
import { useNavigate, useLocation } from "react-router-dom";

const Doctors = () => {
  const { doctors } = useContext(AppContext);
  const [doc, setDoc] = useState([]);
  const [selectedExpertise, setSelectedExpertise] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Function to get all doctors or filter based on expertise
  const getAllDoctors = () => {
    let filteredDoctors = doctors;
    if (selectedExpertise) {
      filteredDoctors = doctors.filter((doct) =>
        doct.expartise.toLowerCase().includes(selectedExpertise.toLowerCase())
      );
    }
    setDoc(filteredDoctors);
  };

  // Get `expertise` from URL query and set the filter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const expertise = params.get("expertise") || "";
    setSelectedExpertise(expertise);
  }, [location.search]);

  // Update doctors list when filter changes
  useEffect(() => {
    getAllDoctors();
  }, [doctors, selectedExpertise]);

  return (
    <div>
      <h1 className="text-3xl font-medium">Browse Our Doctors</h1>

      {/* Expertise filter buttons */}
      <div className="mt-4 mb-4">
        <span className="font-medium text-lg">Filter by Expertise: </span>
        <div className="flex space-x-4">
          <button
            onClick={() => setSelectedExpertise("")}
            className={`p-2 border rounded-md ${
              !selectedExpertise ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            All
          </button>
          {doctors.length > 0 &&
            [...new Set(doctors.map((doc) => doc.expartise))].map(
              (expertise, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedExpertise(expertise)}
                  className={`p-2 border rounded-md ${
                    selectedExpertise === expertise
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {expertise}
                </button>
              )
            )}
        </div>
      </div>

      <div className="mt-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {doc.length > 0 ? (
            doc.map((doct, index) => (
              <div
                onClick={() => navigate(`/appointment/${doct.id}`)}
                className="border rounded-xl p-4 border-gray-300 cursor-pointer hover:translate-y-[10px] transition-all duration-500"
                key={index}
              >
                <img
                  className="rounded-xl"
                  src={doct.image}
                  alt={doct.name}
                />
                <div className="py-2">
                  <p className="font-medium text-lg text-gray-950">{doct.name}</p>
                  <p className="text-sm text-gray-600">{doct.expartise}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No doctors found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
