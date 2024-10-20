import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react';


const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <div className="w-full mb-4 bg-white rounded-3xl">
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="w-full text-left bg-white p-4 rounded-3xl size-20 flex justify-between items-center transition-all duration-300"
  >
    <span className="font-semibold">{question}</span>
    <span>
      {isOpen ? (
        <ChevronUpIcon className="w-5 h-5 transition-transform duration-300 transform -rotate-180" />
      ) : (
        <ChevronUpIcon className="w-5 h-5 transition-transform duration-300 transform" />
      )}
    </span>
  </button>

  {/* إجابة مع ترانزليت */}
  <div
    className={`overflow-hidden transition-all duration-500 ease-in-out ${
      isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
    }`}
  >
    <p className="mt-2 p-4 bg-white rounded-3xl">{answer}</p>
  </div>
</div>

  );
};

const CareersPage = () => {
  const faqs = [
    {
      question: "What services does CX offer?",
      answer: "We offer a range of services designed to improve customer experience.",
    },
    {
      question: "What industries do you specialize in?",
      answer: "We specialize in various industries including technology and retail.",
    },
    {
      question: "Do you specialize in specific industries?",
      answer: "Yes, we have a dedicated team for specific industries.",
    },
    {
      question: "How do you measure campaign success?",
      answer: "We use various metrics to assess campaign performance.",
    },
  ];
 
  return (
    <div className="flex flex-col items-center min-h-screen py-10 px-4">
      <h1 className="text-7xl text-black font-normal tracking-wide text-center mb-6">Careers</h1>
      <p className="text-3xl text-center text-black  tracking-wide mb-8">
        We don't have any job openings at the moment. What <br/> about following us to be updated about our opportunities!
      </p>
      <h2 className="text-5xl text-black tracking-wide font-semibold mb-4">Marketing Frequently Asked <br/> Questions</h2>
      <div className="w-full max-w-3xl   text-black">
        {faqs.map((faq, index) => (
          <FAQ key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <footer className="mt-10 text-center text-gray-700">
        <p>Contact Us</p>
        <p>+968 7713 5333</p>
        <p>info@domain.com</p>
        <p>123, Muscat-Oman</p>
      </footer>
    </div>
  );
};

export default CareersPage;