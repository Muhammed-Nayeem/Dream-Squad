import hero from "../../assets/banner-main.png";

const Hero = ({ creditIncreaseHandler }) => {
  return (
    <section className="py-4">
      <div className="container max-w-screen-xl mx-auto">
        <div className="bg-black py-20 rounded hero-content mx-10 xl:mx-0">
          <div className="flex flex-col justify-center items-center">
            <img src={hero} alt="banner-image" />
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-6 text-center">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="text-gray-400 text-lg mt-2">
              Beyond Boundaries Beyond Limits
            </p>
            <div className="border border-yellow-300 p-1 rounded-md mt-6">
              <button
                onClick={creditIncreaseHandler}
                className="bg-yellow-300 text-black px-4 py-1.5 rounded-md text-base cursor-pointer hover:bg-yellow-400"
              >
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
