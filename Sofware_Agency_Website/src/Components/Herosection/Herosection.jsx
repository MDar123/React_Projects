import { Link } from "react-router-dom";
export default function Herosection() {
  return (
    <>
      <div className="hero h-[90vh] bg-cover">
        <div className=" content w-2/3 h-[89vh] flex flex-col gap-10 justify-center mx-auto">
          <h1 className="text:3xl s sm:text-5xl text-black font-bold">
            Elevating Your <span className="text-orange-500">Digital Presence</span> 
          </h1>
          <p className="text-sm sm:text-xl text-neutral-300">
            Elevate your business with our cutting-edge software solutions. We
            specialize in crafting innovative digital experiences tailored to
            your unique needs. From web and mobile app development to
            data-driven strategies, we are your trusted partner in the digital
            age.
          </p>
          <div className="buttons flex gap-2">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
              Get Started
            </Link>
            <Link to="/services" className="py-2 px-3 border rounded-md">
              See Our Work
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
