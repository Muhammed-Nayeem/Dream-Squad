const ButtonContainer = ({ activeBtnStateHandler, isActive, playersCount }) => {
  return (
    <section className="pt-10">
      <div className="container max-w-screen-xl mx-auto">
        <div className="text-right mx-10 xl:mx-0">
          <button
            onClick={() => activeBtnStateHandler("available")}
            className={`${
              isActive.status ? "bg-yellow-400" : ""
            } border border-r-0 border-gray-200 px-4 py-1.5 cursor-pointer`}
          >
            Available
          </button>
          <button
            onClick={() => activeBtnStateHandler("selected")}
            className={`${
              isActive.status ? "" : "bg-yellow-400"
            } border border-gray-200 px-4 py-1.5 cursor-pointer`}
          >
            Selected ({playersCount})
          </button>
        </div>
      </div>
    </section>
  );
};

export default ButtonContainer;
