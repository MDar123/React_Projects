/* eslint-disable react/prop-types */
import { serviveItems } from "../../Constants";

export default function zService() {
  return (
    <>
      <div className="w-full h-[auto] my-5">
            <h1 className="text-4xl sm:text-5xl text-center text-orange-500 font-bold mb-2 sm:mb-8">Our Services</h1>
            <div className="service-section grid grid-cols-1 sm:grid-cols-2 items-center place-items-center gap-6 mx-7">
                {
                    serviveItems.map( (item,index) => (
                        <ServiceCart key={index} {...item} />
                    ) )
                }
        </div>
      </div>
    </>
  );
}
function ServiceCart(props){
    return(
        <>
            <div className="rounded-xl border text-card-foreground shadow bg-zinc-900 border-zinc-800">
          <div className="logo space-y-1.5 p-6 flex flex-row items-center space-x-4">
          <img className="text-orange-500" src={props.icon} alt="" style={{fill:"orange"}}/>
            <h3 className="font-semibold leading-none tracking-tight text-white">
              {props.title}
            </h3>
          </div>
          <div className="p-6 pt-0">
            <p className="text-zinc-400">
              {props.p}
            </p>
            <button className="shadow rounded-xl h-9 px-4 py-2 mt-4 bg-orange-500 text-black">
              View Details
            </button>
          </div>
        </div>
        </>
    )
}