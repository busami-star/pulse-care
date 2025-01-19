import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between md:mx-10 py-8">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="text-4xl md:text-3xl font-bold flex items-center">
            <h1>PulseCare</h1>
            <div className="w-24 md:w-24 ml-3">
              <img src={assets.logo} alt="PulseCare Logo" className="w-full h-auto" />
            </div>
          </span>
        </div>

        
        <div className="mt-6 md:mt-0 text-center md:text-left">
          <h1 className="text-xl font-medium">Contact Us</h1>
          <ul className="text-sm">
            <li>+254 101 457 598</li>
            <li>victorbusami1@gmail.com</li>
          </ul>
        </div>
      </div>

      
      <div>
        <hr className="border-gray-400" />
        <p className="text-center text-sm py-5">
          Copyright © 2024 victorbusami1@gmail.com - All Right Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
