import { useState } from "react";
import { toast } from 'react-toastify';
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
    toast.success("Wow! Free coins added to your account.", {
      position: "top-center",
      autoClose: 3000,
    });
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
        toast.warning("Sorry! You can't buy same player twice!", {
          position: "top-left",
          autoClose: 3000,
        });
      } else {
        if (selectedPlayers.length >= totalPlayers) {
          toast.info("No! You can't buy more then 6 players!", {
            position: "top-left",
            autoClose: 3000,
          });
        } else {
          setSelectedPlayers([...selectedPlayers, player]);
          setCoins((coins) => coins - player.biddingPrice);
          toast.success("Excellent! Player buying successfully.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      }
    } else {
      toast.error("OPPS! You don't have enough coins!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const removePlayerHandler = (playerId) => {
    let remainingPlayers = selectedPlayers.filter((player) => player.playerId !== playerId);
    setSelectedPlayers(remainingPlayers);
    toast.info("Good! Player removed successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
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
