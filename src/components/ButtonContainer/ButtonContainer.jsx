const ButtonContainer = ({ activeBtnStateHandler, isActive }) => {
  return (
    <section className="pt-10">
      <div className="container max-w-screen-xl mx-auto">
        <div className="text-right">
          <button
            onClick={() => activeBtnStateHandler("available")}
            className={`${isActive.status ? "bg-yellow-400":""} border border-r-0 border-gray-200 px-4 py-1.5 cursor-pointer`}
          >
            Available
          </button>
          <button
            onClick={() => activeBtnStateHandler("selected")}
            className={`${isActive.status ? "":"bg-yellow-400"} border border-gray-200 px-4 py-1.5 cursor-pointer`}
          >
            Selected(0)
          </button>
        </div>
      </div>
    </section>
  );
};

export default ButtonContainer;
