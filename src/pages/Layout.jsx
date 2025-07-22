import { useState } from "react";
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

  const freeCoinsCreditIncreaseHandler = () => {
    setCoins((coins) => coins + 8000000);
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

  return (
    <>
      <Header coins={coins} />
      <main className="mb-60">
        <Hero creditIncreaseHandler={freeCoinsCreditIncreaseHandler} />
        <ButtonContainer
          activeBtnStateHandler={activeBtnStateHandler}
          isActive={isActive}
        />
        {isActive.status ? (
          <AvailablePlayers />
        ) : (
          <SelectedPlayers totalPlayers={totalPlayers} />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
