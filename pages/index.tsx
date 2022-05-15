import { useState } from "react";
import type { NextPage } from "next";

import { TABS } from "../lib/constants";
import Layout from "../components/Layout";
import Offset from "../components/Offset";
import Buy from "../components/Buy";
import Stake from "../components/Stake";
import Exchange from "../components/Exchange";

const Home: NextPage = () => {
  const [tab, setTab] = useState(TABS.Buy);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const [plotBalance, setPlotBalance] = useState(2);
  const [tokenBalance, setTokenBalance] = useState(18.17);

  const handleConnectWallet = () => setIsWalletConnected(true);
  const handleDisconnectWallet = () => setIsWalletConnected(false);

  const handleTabChange = (tab: TABS) => setTab(tab);
  const addPlotBalance = () => setPlotBalance(plotBalance + 1);

  return (
    <Layout
      currTab={tab}
      handleTabChange={handleTabChange}
      isWalletConnected={isWalletConnected}
      handleConnectWallet={handleConnectWallet}
      handleDisconnectWallet={handleDisconnectWallet}
      plotBalance={plotBalance}
      tokenBalance={tokenBalance}
    >
      {tab === TABS.Buy && (
        <Buy
          handleTabChange={handleTabChange}
          isWalletConnected={isWalletConnected}
          handleConnectWallet={handleConnectWallet}
          addPlotBalance={addPlotBalance}
        />
      )}
      {tab === TABS.Stake && (
        <Stake
          isWalletConnected={isWalletConnected}
          handleConnectWallet={handleConnectWallet}
        />
      )}
      {tab === TABS.Offset && (
        <Offset
          isWalletConnected={isWalletConnected}
          handleConnectWallet={handleConnectWallet}
        />
      )}
      {tab === TABS.Exchange && <Exchange />}
    </Layout>
  );
};

export default Home;
