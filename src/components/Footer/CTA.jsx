const CTA = () => {
  return (
    <div className="absolute -translate-y-1/2 top-0 left-0 right-0 container mx-auto p-3 border border-white rounded-md">
      <div className="bg-white p-16 rounded-md cta flex flex-col items-center">
        <h1 className="text-3xl text-gray-800 font-bold">
          Subscribe To Our Newsletter
        </h1>
        <p className="text-base text-gray-600 font-medium mt-2">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex gap-2 mt-6">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="border border-gray-300 outline-0 px-4 py-1.5 rounded-md"
          />
          <input
            type="submit"
            value="Subscribe"
            className="bg-gradient-to-br from-blue-400 via-purple-300 to-transparent px-4 py-1.5 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
