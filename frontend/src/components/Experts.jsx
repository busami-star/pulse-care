import { expertData } from "../assets/assets";
import { Link } from "react-router-dom";

const Experts = () => {
  return (
    <div>
      <h1 className="text-3xl font-medium sm:text-4xl md:text-4xl text-center mb-6">Explore Our Expert Doctors</h1>
      <p className="mb-6 text-center text-sm md:text-base">
        Navigate through our complete listing of skilled and trusted doctors, categorized by expertise.
      </p>
      <div className="flex justify-center text-xs gap-4 pt-5 w-full overflow-x-auto flex-wrap md:space-x-6 space-x-4">
        {expertData.map((expert, index) => (
          <Link
            className="text-xs cursor-pointer hover:translate-y-[-10px] flex-shrink-0 transition-all duration-500"
            onClick={() => scrollTo(0, 0)}
            to={`/doctors?expertise=${encodeURIComponent(expert.expartise)}`}
            key={index}
          >
            <img
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto rounded-2xl object-cover"
              src={expert.image}
              alt={expert.expartise}
            />
            <p className="text-center mt-2">{expert.expartise}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Experts;
