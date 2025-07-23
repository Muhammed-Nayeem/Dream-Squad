import { useState } from "react";
import toast from 'react-hot-toast';
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import AvailablePlayers from "../components/AvailablePlayers/AvailablePlayers";
import Footer from "../components/Footer/Footer";
import ButtonContainer from "../components/ButtonContainer/ButtonContainer";
import SelectedPlayers from "../components/SelectedPlayers/SelectedPlayers";

const Layout = () => {
  let totalPlayers = 6;
  let [coins, setCoins] = useState(0);
  let [isActive, setIsActive] = useState({
    status: true,
  });
  let [selectedPlayers, setSelectedPlayers] = useState([]);

  const freeCoinsCreditIncreaseHandler = () => {
    setCoins((coins) => coins + 8000000);
    toast.success("Wow!Coins credited to your account.");
  };

  const activeBtnStateHandler = (text) => {
    if (text === "available") {
      setIsActive({
        status: true,
      });
    } else {
      setIsActive({
        status: false,
      });
    }
  };

  const selectedPlayersHandler = (player) => {
    let isExist = selectedPlayers.find((singlePlayer) => singlePlayer.playerId === player.playerId);
    if (coins > player.biddingPrice) {
      if (isExist) {
        alert("You cannot buy same player twice!");
      } else {
        if (selectedPlayers.length >= totalPlayers) {
          alert("You cannot buy more then 6 players!");
        } else {
          setSelectedPlayers([...selectedPlayers, player]);
          setCoins((coins) => coins - player.biddingPrice);
          alert("Player buying successfully.");
        }
      }
    } else {
      alert("You don't have sufficient coins!");
    }
  };

  const removePlayerHandler = (playerId) => {
    let remainingPlayers = selectedPlayers.filter((player) => player.playerId !== playerId);
    setSelectedPlayers(remainingPlayers);
    alert("Player removed successfully!");
  };

  return (
    <>
      <Header coins={coins} />
      <main className="mb-60">
        <Hero creditIncreaseHandler={freeCoinsCreditIncreaseHandler} />
        <ButtonContainer
          activeBtnStateHandler={activeBtnStateHandler}
          isActive={isActive}
          playersCount={selectedPlayers.length}
        />
        {isActive.status ? (
          <AvailablePlayers selectedPlayersHandler={selectedPlayersHandler} />
        ) : (
          <SelectedPlayers
            totalPlayers={totalPlayers}
            selectedPlayers={selectedPlayers}
            activeBtnStateHandler={activeBtnStateHandler}
            removePlayerHandler={removePlayerHandler}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
