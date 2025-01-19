import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start">
        {/* Text and Description Section */}
        <div className="py-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            <span className="text-primary">Find a doctor,</span> schedule an appointment
            <br /> and experience the difference.
          </h1>
          <p className="pb-6 text-sm sm:text-base md:text-lg">
            Healing is not just a destination—it’s a journey that unfolds one
            step at a time.
            <br /> Every small improvement, no matter how insignificant it may
            seem,
            <br /> is a sign of progress and a reason to hold onto hope.
          </p>

          <div className="flex items-center gap-2">
            
            <img src={assets.group_profiles} alt="group profiles" />
            <a className="hover:scale-105 transition-all duration-200 rounded-full bg-primary py-3 px-6 text-sm sm:text-base" href="">
              Schedule Appointment
            </a>
          </div>
        </div>

        
        <div className="w-full md:w-[60%] mt-6 md:mt-0">
          <img className="w-full h-auto rounded-xl" src={assets.header_image} alt="Header Image" />
        </div>
      </div>
    </div>
  );
};

export default Header;

