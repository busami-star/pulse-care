import { useContext } from "react";
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router"; 

const TopExperts = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div>
      <div className="flex flex-col items-center my-16">
        <h1 className="text-3xl mb-8 font-medium text-center">Top Doctors</h1>
        <p className="sm:w-2/3 text-sm md:text-base text-center">
          With each doctor having more than 7 years of experience, you can never go wrong with our practitioners.
        </p>
      </div>

     
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  gap-4">
        {doctors.slice(0, 3).map((doct, index) => (
          <div
            onClick={() => navigate(`/appointment/${doct.id}`)}
            className="border rounded-xl p-4 border-gray-300 cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <div className="w-full aspect-w-1 aspect-h-1 mb-4">
              <img
                className="rounded-xl object-cover w-full h-full"
                src={doct.image}
                alt={doct.name}
              />
            </div>
            
            <div className="py-2">
              <p className="font-medium text-lg text-gray-950">{doct.name}</p>
              <p className="text-sm text-gray-600">{doct.expartise}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopExperts;
