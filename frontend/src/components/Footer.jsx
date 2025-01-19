import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
        <div className="flex flex-col md:flex-row md:mx-10">
      <div className="flex items-center">
        <div className="flex flex-col">
          <span className="md:text-2xl text-4xl flex items-center font-bold">
            <h1>PulseCare</h1>
            <div className="size-[22%] md:size-[15%]">
            <img src={assets.logo} alt="" />
          </div>
          </span>
          
          
        </div>
       
      </div>
      <div>
        <h1 className="text-xl mt-2 font-medium">Contact Us</h1>
        <ul>
          <li>+254 101 457 598</li>
          <li>victorbusami1@gmail.com</li>
        </ul>
      </div>
    </div>
    <div>
      <hr className="border-gray-400" />
      <p className="text-center text-sm py-5">Copyright © 2024 victorbusami1@gmail.com - All Right Reserved.</p>
    </div>
    </>

    
  );
};

export default Footer;
