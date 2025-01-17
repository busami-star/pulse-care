import { assets } from "../assets/assets";
const Header = () => {
  return (
    <div>
      <div className="flex md:items-center lg:items-start flex-col-reverse md:flex-row justify-between">
        <div className="py-8 pl-0">
          <h1 className="text-3xl pb-4 md:text-4xl lg:text-5xl font-semibold">
            Find a doctor, schedule an appointment
            <br /> and experience the difference.
          </h1>
          <p className="pb-6">
            Healing is not just a destination—it’s a journey that unfolds one
            step at a time.
            <br /> Every small improvement, no matter how insignificant it may
            seem,
            <br /> is a sign of progress and a reason to hold onto hope.{" "}
          </p>

          <div className="flex   gap-2">
            <img src={assets.group_profiles} alt="" />
            <a className="hover:scale-105 transition-all duration-200 rounded-full bg-primary py-4 px-3" href="">
              schedule appointment
            </a>
          </div>
        </div>

        <div className="w-[60%] ">
          <img className="w-full" src={assets.header_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
