import CountUp from "react-countup";
import { aboutItems } from "../../Constants";

export default function About() {
  return (
    <>
      <div className="aboutsection w-full h-[auto] my-4 px-2 py-10">
        <div className="w-fit sm:w-1/2 sm:ml-10 flex-col gap-20">
          <h1 className="text-sm sm:text-3xl lg:text-4xl font-bold">
            Code Crafts helps start-ups, SMEs and enterprises grow their
            business
          </h1>
          <p className="py-10 text-md text-gray-500 font-bold">
            We have been helping customers since 2009 and take pride in
            delivering high-quality custom services designed to help you build,
            grow, and revolutionize your business.
          </p>
        </div>
        <div className="w-full flex flex-col mb-10 lg:flex-row justify-evenly gap-3 mx-0">
          <img
            src="https://cdn.prod.website-files.com/65e9d802e7334ec910a26e59/65e9d803e7334ec910a26f2c_Who%20we%20are%20(1).webp"
            alt=""
          />
          <div className="flex flex-col gap-10 justify-between items-center text-center">
            {aboutItems.map((item, index) => (
              <div key={index}>
                <li className="text-5xl text-orange-500">
                  <CountUp start={0} end={item.no} duration={2}/>+  
                </li>
                <p>{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
