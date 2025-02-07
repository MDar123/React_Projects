/* eslint-disable react/prop-types */
import { useState } from "react"
import { Pricingdetails } from "../../Constants"

export default function Pricing(){
    const [selectedPlan, setSelectedPlan] = useState('Basic')

    function changestate(value){
        setSelectedPlan(value)
    }
    return(
        <>
        <div className="pricing h-[110vh] w-full flex-col justify-center items-center bg-orange-400 px-3">
            <h1 className="text-4xl sm:text-5xl text-center text-white font-bold m-2 sm:mb-8">Our Pricing</h1>
    <div className="max-w-md mx-auto  p-4 border rounded-md shadow-md bg-white mb-20 sm:mb-10">
  <div className="flex justify-between border-b pb-2 mb-2">
    <div className="flex space-x-4">
        <Button isselected={selectedPlan === 'Basic'} clickme={ () => {changestate('Basic')} }>Basic</Button>
        <Button isselected={selectedPlan === 'Standard'} clickme={ () => {changestate('Standard')} }>Standard</Button>
        <Button isselected={selectedPlan === 'Premium'} clickme={ () => {changestate('Premium')} }>Premium</Button>
    </div>
  </div>
  
  <h2 className="text-xl font-semibold mb-1"> {Pricingdetails[selectedPlan].title} </h2>
  <p className="text-gray-500 text-lg mb-2">{Pricingdetails[selectedPlan].price}</p>

  <p className="text-gray-700 mb-4">{Pricingdetails[selectedPlan].p}</p>

  <div className="flex items-center text-sm text-gray-600 mb-2">
    <span className="flex items-center mr-4">
      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17l3-3m0 0l3-3m-3 3h12m-6 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      {Pricingdetails[selectedPlan].dt}
    </span>
    <span className="flex items-center">
      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m4-4H9m2 8H9m8 8H7a2 2 0 01-2-2V7a2 2 0 012-2h4a1 1 0 011-1h4a2 2 0 012 2v11a2 2 0 01-2 2z"></path></svg>
      5 Revisions
    </span>
  </div>

  <ul className="space-y-1 mb-4 text-sm text-gray-700">
    <li className="flex items-center">
      <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"></path></svg>
      1 page
    </li>
    <li className="flex items-center">
      <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"></path></svg>
      Design customization
    </li>
    <li className="flex items-center text-gray-400">
      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"></path></svg>
      Content upload
    </li>
    <li className="flex items-center">
      <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"></path></svg>
      Responsive design
    </li>
    <li className="flex items-center">
      <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"></path></svg>
      Source code
    </li>
  </ul>

  <button className="w-full bg-black text-white py-2 rounded-md flex items-center justify-center">
    Continue
    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
  </button>

  <p className="text-center text-sm text-gray-500 mt-2">Compare packages</p>
</div>

        </div>
        </>
    
  )
}
function Button(props){
return(
    <>
    <button className={props.isselected ? 'active':null} onClick={props.clickme}>{props.children}</button>
    </>
)
}