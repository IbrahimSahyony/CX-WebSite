export default function Header(){
    return(
        <div>
        {/* Header */}
    <header className=" flex justify-between items-center p-5">
    <div className="text-2xl font-bold">CX</div>
    
    <nav className="flex space-x-4  ">
      <a href="#" className="hover:text-gray- p-5 ">Home</a>
      <a href="#" className="hover:text-gray- p-5">About Us</a>
      <a href="#" className="hover:text-gray- p-5">Services</a>
      <a href="#" className="hover:text-gray- p-5">Pricing</a>
      <a href="#" className="hover:text-gray- p-5">Contact Us</a>
      <button className="bg-white text-pink-600 px-4 py-2 rounded-full hover:bg-gray-200">
    Get quote
  </button>
    </nav>
    <div className="flex space-x-2 cursor-auto ">
    <button onClick={() => {}} >EN</button>
    <button onClick={() => {}} >AR</button>
    </div>
   
   
  </header>
        </div>
    )
}