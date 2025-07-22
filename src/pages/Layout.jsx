import { useState } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

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
      </main>
    </>
  );
};

export default Layout;
