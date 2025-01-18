import { useContext } from "react";
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router"; 

const TopExperts = () => {
    const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div>
      <div className="flex flex-col items-center my-16  ">
        <h1 className="text-3xl font-medium">Top doctors</h1>
        <p className="sm:w-1/3 text-sm">
          With each doctor having more than 7 years of experience in the
          field,you can never go wrong with our practitioners
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {doctors.slice(0, 3).map((doct, index) => (
          <div onClick={()=>navigate(`/appointment/${doct.id}`)} className="border rounded-xl p-4 border-gray-300 cursor-pointer hover:translate-y-[10px] transition-all duration-500" key={index}>
            <img className="rounded-xl" src={doct.image} alt="" />
            
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
