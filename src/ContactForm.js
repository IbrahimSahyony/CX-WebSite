import React from 'react';
import'./components/components.css';

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center  min-h-screen ">
      <h1 className="text-5xl text-center text tracking-wider font-semibold mt-4 mb-2 ">Partner with Us for </h1>
      <h1 className="text-5xl text-center text tracking-wider font-semibold mt-2 mb-6 "> Digital Success</h1>
      <h2 className="text-4xl text-center text-black font-bold mb-8">Grow Your <br/> Business Now</h2>
      <form className="w-full max-w-2xl p-8 rounded-lg ">
        <div className="mb-4 ">
          <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="first-name">
            First name*
          </label>
          <input
            type="text"
            id="first-name"
            placeholder="Enter first name"
            className=" appearance-none  bg-inherit rounded w-full py-2 px-3 text-gray-700 placeholder:text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          <div className='border-b-[1px] border-black'></div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700  text-xl font-bold mb-2" htmlFor="last-name">
            Last name*
          </label>
          <input
            type="text"
            id="last-name"
            placeholder="Enter last name"
            className="appearance-none  bg-inherit rounded w-full py-2 px-3 text-gray-700 placeholder:text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          <div className='border-b-[1px] border-black'></div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="phone">
            Your phone*
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="+968 4323 xxxx"
            className="appearance-none  bg-inherit rounded w-full py-2 px-3 text-gray-700 placeholder:text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          <div className='border-b-[1px] border-black'></div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="email">
            Your email*
          </label>
          <input
            type="email"
            id="email"
            placeholder="yourmail@domain.com"
            className="appearance-none  bg-inherit rounded w-full py-2 px-3 text-gray-700 placeholder:text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          <div className='border-b-[1px] border-black'></div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="message">
            Message (optional)
          </label>
          <textarea
            id="message"
            placeholder="Enter message"
            className="appearance-none hide-scrollbar  bg-inherit rounded w-full  px-3 text-gray-700 placeholder:text-gray-700 placeholder:pointer-events-auto placeholder:pt-4 leading-tight focus:outline-none focus:shadow-outline"
          />
          <div className='border-b-[1px] border-black'></div>
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm  font-semibold py-3 px-10 rounded-3xl focus:outline-none focus:shadow-outline">
          Send Message
        </button>
      </form>   
      <footer className=" w-1/2 my-10 text-center text-gray-200">
        <div className=' flex flex-row justify-between text-gray-800 font-semibold'>
        <p>+968 7713 5333</p>
        <p>Info@domain.com</p>
        <p>123, Muscat-Oman</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactForm;