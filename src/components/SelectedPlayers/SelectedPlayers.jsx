import SinglePlayer from "../SinglePlayer/SinglePlayer";

const SelectedPlayers = ({
  totalPlayers,
  selectedPlayers,
  activeBtnStateHandler,
  removePlayerHandler,
}) => {
  return (
    <section className="bg-white pt-8 pb-16">
      <div className="container max-w-screen-xl mx-auto">
        <article className="mx-10 xl:mx-0">
          <h2 className="text-2xl text-gray-900 font-bold">
            Selected Players({selectedPlayers.length}/{totalPlayers})
          </h2>
        </article>
        <div className="mx-10 xl:mx-0 mt-4 grid grid-cols-1 gap-y-4">
          {selectedPlayers.map((player) => (
            <SinglePlayer
              key={player.playerId}
              player={player}
              removePlayerHandler={removePlayerHandler}
            />
          ))}
        </div>
        {selectedPlayers.length > 0 && (
          <button
            onClick={() => activeBtnStateHandler("available")}
            className="mt-16 bg-yellow-400 text-black hover:bg-yellow-500 cursor-pointer px-4 py-1.5 rounded-md"
          >
            Add More Player
          </button>
        )}
      </div>
    </section>
  );
};

export default SelectedPlayers;
