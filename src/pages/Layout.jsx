import { useState } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import AvailablePlayers from "../components/AvailablePlayers/AvailablePlayers";

const Layout = () => {
  let [coins, setCoins] = useState(0);

  const freeCoinsCreditIncreaseHandler = () => {
    setCoins((coins) => coins + 8000000);
  };

  return (
    <>
      <Header coins={coins} />
      <main>
        <Hero creditIncreaseHandler={freeCoinsCreditIncreaseHandler} />
        <AvailablePlayers />
      </main>
    </>
  ); 
};

export default Layout;
