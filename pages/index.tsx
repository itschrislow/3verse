import { useState } from "react";
import type { NextPage } from "next";

import { TABS } from "../lib/constants";
import Layout from "../components/Layout";
import Offset from "../components/Offset";
import Buy from "../components/Buy";
import Stake from "../components/Stake";
import Exchange from "../components/Exchange";
import Modal from "../components/Modal";
import ConnectWalletModal from "../components/Modal/ConnectWalletModal";

const Home: NextPage = () => {
  const [tab, setTab] = useState(TABS.Buy);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [showConnectWalletModal, setShowConnectWalletModal] = useState(false);

  const [plotBalance, setPlotBalance] = useState(2);
  const [o2TokenBalance, setO2TokenBalance] = useState(18.17);

  const handleOpenConnectWalletModal = () => setShowConnectWalletModal(true);
  const handleCloseConnectWalletModal = () => setShowConnectWalletModal(false);

  const handleConnectWallet = () => {
    setIsWalletConnected(true);
    handleOpenConnectWalletModal();
  };

  const handleDisconnectWallet = () => setIsWalletConnected(false);

  const handleTabChange = (tab: TABS) => setTab(tab);
  const addPlotBalance = () => setPlotBalance(plotBalance + 1);

  return (
    <>
      <Layout
        currTab={tab}
        handleTabChange={handleTabChange}
        isWalletConnected={isWalletConnected}
        handleConnectWallet={handleConnectWallet}
        handleDisconnectWallet={handleDisconnectWallet}
        plotBalance={plotBalance}
        o2TokenBalance={o2TokenBalance}
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
            o2TokenBalance={o2TokenBalance}
            setO2TokenBalance={setO2TokenBalance}
          />
        )}
        {tab === TABS.Exchange && <Exchange />}
      </Layout>
      <Modal
        isOpen={showConnectWalletModal}
        closeModal={handleCloseConnectWalletModal}
      >
        <ConnectWalletModal
          handleCloseConnectWalletModal={handleCloseConnectWalletModal}
        />
      </Modal>
    </>
  );
};

export default Home;
