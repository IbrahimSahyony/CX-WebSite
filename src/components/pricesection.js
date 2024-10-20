import React from "react";
import "./components.css";

const pricingData = [
  {
    id: 1,
    logo: "logo 1",
    plan: "Premium",
    price: "$220.89",
    period: "Month",
    features: [
      "One-on-one consultations for advanced",
      "Comprehensive management",
      "Premium content updates",
      "Advanced analytics with detailed insights",
      "Email and phone support 24/7",
      "Advanced SEO services",
    ],
    button: "Choose Pricing",
  },
  {
    id: 2,
    logo: "logo 2",
    plan: "Standard",
    price: "$345.89",
    period: "Month",
    features: [
      "In-depth strategy development",
      "Increased presence and engagement",
      "Regular content updates",
      "High-quality content for social media",
      "Targeted and segmented email",
    ],
    button: "Choose Pricing",
  },
  {
    id: 3,
    logo: "logo 3",
    plan: "Basic",
    price: "$125.99",
    period: "Month",
    features: [
      "Meeting setup",
      "Basic content creation",
      "Limited social media management",
      "Basic analytics and reporting",
      "Basic SEO setup",
    ],
    button: "Choose Pricing",
  },
  {
    id: 4,
    logo: "logo 4",
    plan: "Basic",
    price: "$125.99",
    period: "Month",
    features: [
      "Meeting setup",
      "Basic content creation",
      "Limited social media management",
      "Basic analytics and reporting",
      "Basic SEO setup",
    ],
    button: "Choose Pricing",
  },
  {
    id: 5,
    logo: "logo 5",
    plan: "Basic",
    price: "$125.99",
    period: "Month",
    features: [
      "Meeting setup",
      "Basic content creation",
      "Limited social media management",
      "Basic analytics and reporting",
      "Basic SEO setup",
    ],
    button: "Choose Pricing",
  },
];

const PricingCard = ({ plan, logo, price, period, features, button }) => {
  return (
    <div className=" p-6 rounded-3xl shadow-lg flex flex-col justify-center h-fit  w-auto border-2 border-white">
      <div className="flex flex-row mb-3">
        <div className="w-1/2 ">
          <div className="bg-gradient-to-bl from-pink-500  to-purple-300 p-4 rounded-full text-white size-24">
            {/* هنا يمكنك استبدال النص باللوغو الحقيقي */}
            {logo}
          </div>
        </div>

        <div className="pt-6">
          <h2 className="w-1/2 text-3xl text-white font-bold text-center mb-4">
            {plan}
          </h2>
        </div>
      </div>

      <div className="text-center text-5xl font-bold mb-4">
        {price}
        <span className="text-lg">/{period}</span>
      </div>
      <ul className="mb-6">
      {features.map((feature, index) => (
        <li key={index} className="text-white mb-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <polygon points="0,0 10,10 0,20" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
      <button className="bg-purple-500 text-white mb-2 py-2 px-4 rounded-full w-full">
        {button}
      </button>
    </div>
  );
};

const PricingSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#1A1A9D] via-[#8B7EBE] to-[#FF6F91] min-h-screen py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-7xl font-semibold text-center mb-12 text-white">
          The Pricing Behind Our <br /> Marketing Solutions
        </h1>
        <div className="flex space-x-4 overflow-x-auto hide-scrollbar px-6">
          {pricingData.map((card) => (
            <PricingCard
              key={card.id}
              logo={card.logo}
              plan={card.plan}
              price={card.price}
              period={card.period}
              features={card.features}
              button={card.button}
            />
          ))}
        </div>

        <div className="text-black text-lg text-center font-light mt-7">
          You can customize whatever you want and get an instant quotation,pay
          and follow up your work progress{" "}
        </div>
        <div className=" flex justify-center pt-7">
          <button className="bg-pink-600   rounded-full size-11 w-1/2 ">
            customize Yours Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
