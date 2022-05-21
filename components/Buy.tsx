import { useEffect, useState } from "react";

import { TABS } from "../lib/constants";
import Modal from "./Modal";
import SuccessModal from "./Modal/SuccessModal";

interface BuyProps {
  handleTabChange: (tab: TABS) => void;
  isWalletConnected: boolean;
  handleConnectWallet: () => void;
  addPlotBalance: () => void;
}

const Buy = ({
  handleTabChange,
  isWalletConnected,
  handleConnectWallet,
  addPlotBalance,
}: BuyProps) => {
  const [purchasedLand, setPurchasedLand] = useState([88, 100, 235]);
  const [landId, setLandId] = useState<number>();
  const [hasBuy, setHasBuy] = useState(false);

  const handleBuyTreeTokens = () => {
    if (landId !== undefined) {
      addPlotBalance();
      setLandId(undefined);
      setHasBuy(true);
      setPurchasedLand([...purchasedLand, landId]);
    }
  };

  const isLandAvailable = (landId: number) => !purchasedLand.includes(landId);

  useEffect(() => {
    setTimeout(() => {
      setHasBuy(false);
    }, 1000);
  }, [hasBuy]);

  return (
    <>
      <div className="flex h-full flex-col">
        <p className="mb-4 text-sm">
          Buy TREE tokens directly on our platform.
        </p>
        <div className="flex h-full items-start justify-center gap-6">
          <div className="grid-rows-20 grid w-full grid-cols-20 divide-x divide-y divide-white/20 border-r border-b border-white/30  bg-island bg-contain bg-left bg-no-repeat">
            {Array(400)
              .fill(0)
              .map((_, index) => (
                <div
                  onClick={() =>
                    isLandAvailable(index) ? setLandId(index) : null
                  }
                  className={`
                  aspect-square 
                  ${
                    isLandAvailable(index)
                      ? "cursor-pointer hover:bg-white/30"
                      : "cursor-not-allowed bg-red-500/50"
                  }
                  ${landId === index ? "bg-white/50" : ""}
                  ${index === 0 ? "border-t border-l border-white/20" : ""}
                `}
                  key={index}
                />
              ))}
          </div>
          <div className="w-1/2">
            <div className="flex flex-col gap-4">
              {/* STEP 1 */}
              <div className="flex items-center gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-white">
                  <span className="text-white">1</span>
                </span>
                <p>Select TREE token</p>
              </div>
              {/* STEP 2 */}
              <div className="flex items-center gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-white">
                  <span className="text-white">2</span>
                </span>
                <p>Buy TREE token {landId && "#" + landId}</p>
              </div>
              <div className="pl-12">
                <button
                  onClick={() =>
                    isWalletConnected
                      ? handleBuyTreeTokens()
                      : handleConnectWallet()
                  }
                  className="w-full self-end rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white"
                >
                  {isWalletConnected ? "Buy" : "Connect Wallet"}
                </button>
              </div>
              {/* STEP 3 */}
              <div className="flex items-center gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-white">
                  <span className="text-white">3</span>
                </span>
                <p>Stake TREE token {landId && "#" + landId}</p>
              </div>
              <div className="pl-12">
                <button
                  onClick={() => handleTabChange(TABS.Stake)}
                  className="w-full self-end rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white"
                >
                  Stake
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={hasBuy} closeModal={() => setHasBuy(false)}>
        <SuccessModal message="TREE tokens bought successfully!" />
      </Modal>
    </>
  );
};

export default Buy;
