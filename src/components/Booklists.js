import React from 'react'
// import Badge from './Badge';
import excl1 from "./elements/excl1.png";
import excl2 from "./elements/excl2.png";
import excl5 from "./elements/excl5.png";
function Booklists() {
  return (
    <>
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 block relative ">
        <div className="ribbon"><span           className="ribbon__content">min 20% off</span></div>
          <img alt="content" className="object-cover object-center h-full w-full" src={excl1}/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <div className="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 block relative ">
        <div className="ribbon"><span           className="ribbon__content">upto 30% off</span></div>
          <img alt="content" className="object-cover object-center h-full w-full" src={excl2}/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <div className="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 block relative ">
        <div className="ribbon"><span           className="ribbon__content">upto 60% off</span></div>
          <img alt="content" className="object-cover object-center h-full w-full" src={excl5}/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <div className="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
      </>
  )
}
export default Booklists