import { expertData } from "../assets/assets";
import { Link } from "react-router-dom";

const Experts = () => {
  return (
    <div>
      <h1 className="text-3xl font-medium">Our Services</h1>
      <p>Navigate our complete listing of skilled and trusted doctors.</p>
      <div className="flex justify-center text-sm gap-4 pt-5 w-full overflow-scroll flex-wrap md:space-x-4 space-x-3 ">
        {expertData.map((expert, index) => (
          <Link className="text-xs cursor-pointer hover:translate-y-[-10px] flex-shrink-0 transition-all duration-500" onClick={()=>{scrollTo(0,0)}} to={`/doctors/${expert.expartise}`} key={index}>
            <img className="w-36 h-36 mx-auto rounded-2xl object-cover" src={expert.image} alt={expert.expartise} />
            <p className="text-center">{expert.expartise}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Experts;
