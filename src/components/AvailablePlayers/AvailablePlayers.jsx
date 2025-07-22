import { useEffect, useState } from "react";
import Player from "../Player/Player";

const AvailablePlayers = ({ selectedPlayersHandler }) => {
  let [allPlayers, setAllPlayers] = useState([]);

  useEffect(() => {
    fetch("players-data.json")
      .then((res) => res.json())
      .then((data) => {
        setAllPlayers(data);
      });
  }, []);

  return (
    <section className="bg-white pt-8 pb-16">
      <div className="container max-w-screen-xl mx-auto">
        <article className="mx-10 xl:mx-0">
          <h2 className="text-2xl text-gray-900 font-bold">
            Available Players
          </h2>
        </article>
        <div className="mx-10 xl:mx-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {allPlayers.map((player) => (
            <Player
              key={player.playerId}
              player={player}
              selectedPlayersHandler={selectedPlayersHandler}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailablePlayers;
