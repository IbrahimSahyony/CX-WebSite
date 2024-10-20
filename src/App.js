
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Card from "./components/Card";
import Legends from "./components/Legends";
import Form from "./components/Form";
import MarketingPage from "./components/MarketingPage";
import PricingSection from "./components/pricesection";
import ContactForm from "./ContactForm";
import CareersPage from "./CareersPage";
import ContactCareersPage from "./ContactCareersPage";

function App() {
  return (
    <div className="bg-gradient-to-b from-pink-500 to-purple-600 min-h-screen text-white">
  <Header/>

  <Hero/>
  
  <Services/>

  <section className="py-10 bg-gradient-to-b from-purple-800 to-gray-900">
 <Legends/>
  <Card/>
 </section>
 
 <Form/>  

 <MarketingPage/>
 <PricingSection/>
 <ContactCareersPage/>
    </div>
  );
}

export default App;