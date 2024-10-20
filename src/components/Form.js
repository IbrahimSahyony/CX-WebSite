export default function Form() {
  return (
    <div>
      {/* Form Section */}
      <section className="py-10 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-8">
          Become one of them
        </h2>
        <form className="max-w-lg mx-auto space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="w-1/2 p-2 rounded-lg"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded-lg"
          />
          <input
            type="text"
            placeholder="Industry"
            className="w-full p-2 rounded-lg"
          />
          <input
            type="text"
            placeholder="Location of service"
            className="w-full p-2 rounded-lg"
          />
          <div className="flex flex-row justify-end space-x-4">
            <button
              type="submit"
              className="w-28 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:bg-pink-600"
            >
              Already User
            </button>
            <button
              type="submit"
              className="w-28 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:bg-pink-600"
            >
              Proceed
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
