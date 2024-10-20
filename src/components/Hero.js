export default function Hero(){
    return(
        <section className="  flex flex-col  text-white">
        <div className="container  flex flex-col md:flex-row justify-between ">
          {/* Left Section: Title and Emoji */}
          <div className="md:w-1/2 md:text-left  ">
            <h3 className="text-5xl font-light  mb-4  leading-tight tracking-wide pl-10 ">
              Elevate Your Brand <br /> With CX <span className="inline-block">🎉</span>
            </h3>
          </div>
  
          {/* Right Section: Tabs and Shapes */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col items-center p-24">
            {/* Tab Navigation */}
            <div className="flex space-x-4 text-lg mb-6">
              <button className="text-white hover:text-gray-300">
                Restaurants
              </button>
              <button className="text-white hover:text-gray-300">Cafes</button>
              <button className="text-white hover:text-gray-300">Fashion</button>
              <button className="text-white hover:text-gray-300">Products</button>
            </div>
  
            {/* Placeholder for the shapes */}
            <div className="relative flex items-center justify-center ">
              <div className="w-40 h-52 bg-white bg-opacity-40 rounded-2xl border border-white items-end"></div>
              <div className="w-32 h-44 bg-white bg-opacity-50 mt-8 rounded-2xl border border-white items-end"></div>
              <div className="w-24 h-36 bg-white bg-opacity-40 mt-16 rounded-2xl border border-white "></div>
            </div>
          </div>
        </div>
  
        {/* Help button on the side */}
        <div className="absolute p-0 top-3/4 ">
        <div className="flex items-center  -rotate-90  bg-pink-400 rounded-lg ">
        <div className="flex items-center  rounded-lg   m-1">
            <div className="mr-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h1m4 0h-1v4h1m-5 4h6m-6 0H6m6 0c0-1 .16-1.77.45-2.5M21 12a9 9 0 10-18 0 9 9 0 0018 0z"
                    />
                </svg>
            </div>
            <div className="text-purple-700 font-semibold">
                Need help?
            </div>
        </div>
        </div>
        </div>
      </section>
    );
  };
    
