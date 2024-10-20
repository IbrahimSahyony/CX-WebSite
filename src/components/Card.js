import React from 'react';

const RestaurantCard = ({ logo, name, category, description, rating }) => {
    return (
        <div className="bg-white rounded-3xl  p-4 max-w-xs mx-4   ">
            <div className="flex flex-col   mb-5">
                <div className=" left-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full h-16 w-16 flex items-center justify-center text-white">
                    <span>{logo}</span>
                </div>
            </div>
            <h2 className="text-4xl text-gray-600 font-bold mb-1">{name}</h2>
            <h3 className="text-gray-600 font-bold mb-2">{category}</h3>
            <p className="text-gray-600 text-start mb-4">{description}</p>
            <div className="flex justify-start ">
                {Array.from({ length: rating }).map((_, index) => (
                    <span key={index} className="text-2xl text-yellow-500">&#9733;</span>
                ))}
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div className=" min-h-screen flex items-center justify-center">
            <div className="flex flex-row">
                <RestaurantCard
                    logo="Logo"
                    name="Good Meal"
                    category="Restaurant"
                    description="Lorem ipsum dolor sit amet consectetur. Tellus congue et libero purus tincidunt. Aenean turpis vel cras elementum."
                    rating={5}
                />
                <RestaurantCard
                    logo="Logo"
                    name="Good Meal"
                    category="Restaurant"
                    description="Lorem ipsum dolor sit amet consectetur. Tellus congue et libero purus tincidunt. Aenean turpis vel cras elementum."
                    rating={5}
                />
                <RestaurantCard
                    logo="Logo"
                    name="Good Meal"
                    category="Restaurant"
                    description="Lorem ipsum dolor sit amet consectetur. Tellus congue et libero purus tincidunt. Aenean turpis vel cras elementum."
                    rating={5}
                />
            </div>
        </div>
    );
};

export default App;