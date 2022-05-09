import { useState } from "react";
import type { NextPage } from "next";

import { TABS } from "../lib/constants";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const [tab, setTab] = useState(TABS.Buy);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleConnectWallet = () => setIsWalletConnected(true);
  const handleDisconnectWallet = () => setIsWalletConnected(false);

  const handleTabChange = (tab: TABS) => {
    setTab(tab);
  };

  return (
    <Layout
      currTab={tab}
      handleTabChange={handleTabChange}
      isWalletConnected={isWalletConnected}
      handleConnectWallet={handleConnectWallet}
      handleDisconnectWallet={handleDisconnectWallet}
    >
      {tab === TABS.Buy && <p>Buy</p>}
      {tab === TABS.Stake && <p>Stake</p>}
      {tab === TABS.Offset && <p>Offset</p>}
    </Layout>
  );
};

export default Home;
