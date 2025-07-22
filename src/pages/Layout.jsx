import { useState } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import AvailablePlayers from "../components/AvailablePlayers/AvailablePlayers";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  let [coins, setCoins] = useState(0);

  const freeCoinsCreditIncreaseHandler = () => {
    setCoins((coins) => coins + 8000000);
  };

  return (
    <>
      <Header coins={coins} />
      <main className="mb-60">
        <Hero creditIncreaseHandler={freeCoinsCreditIncreaseHandler} />
        <AvailablePlayers />
      </main>
      <Footer />
    </>
  ); 
};

export default Layout;
