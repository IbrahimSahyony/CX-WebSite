import React from 'react';
import CardData from './CardData';

const MarketingPage = () => {
  return (
    <div className="bg-gradient-to-r from-pink-300 via-purple-200 to-blue-100 min-h-screen p-6">
      <div className="text-center text-gray-800">
      <h4 className='font-bold text-lg'>About Us</h4>
        <h2 className="text-4xl font-bold mb-4">Elevating Your Brand with CX</h2>
        <p className="text-lg mb-10 px-52 ">
          At Customer Experience, we are a full-service media studio and marketing agency
          dedicated to bringing your vision to life. Specializing in professional photography,
          video production, and strategic marketing, we offer comprehensive solutions that capture 
          your brand's essence and elevate its presence.
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-7xl font-bold mb-6 text-black tracking-wider ">Why Choose Our Digital </h2>
        <h2 className="text-7xl font-bold mb-6 text-black tracking-wider ">Marketing Expertise? </h2>

        
          


 <CardData/>
   <div className='flex flex-row'>
   
   <h2 className="text-6xl text-black font-semibold mb-4 w-1/2">Amazing Services <br/> Ready To You</h2>
   <p className="text-lg text-black pt-5 w-1/2 ">
     At Customer Experience, we pride ourselves on offering a comprehensive suite of cutting-edge solutions
     designed to elevate your brand and drive unparalleled success.
   </p>

   </div>
      </div>
    </div>
  );
};

export default MarketingPage;