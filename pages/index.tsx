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

  const handleConnectWallet = () => setIsWalletConnected(true);
  const handleDisconnectWallet = () => setIsWalletConnected(false);

  const handleTabChange = (tab: TABS) => setTab(tab);

  return (
    <Layout
      currTab={tab}
      handleTabChange={handleTabChange}
      isWalletConnected={isWalletConnected}
      handleConnectWallet={handleConnectWallet}
      handleDisconnectWallet={handleDisconnectWallet}
    >
      {tab === TABS.Buy && <Buy handleTabChange={handleTabChange} />}
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
