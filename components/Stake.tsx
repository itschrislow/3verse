import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import SuccessModal from "./Modal/SuccessModal";
import Modal from "./Modal";

interface StakeProps {
  isWalletConnected: boolean;
  handleConnectWallet: () => void;
  treeTokenBalance: number;
  setTreeTokenBalance: React.Dispatch<React.SetStateAction<number>>;
  stakedTreeTokenBalance: number;
  setStakedTreeTokenBalance: React.Dispatch<React.SetStateAction<number>>;
}

const Stake = ({
  treeTokenBalance,
  setTreeTokenBalance,
  stakedTreeTokenBalance,
  setStakedTreeTokenBalance,
  isWalletConnected,
  handleConnectWallet,
}: StakeProps) => {
  const [isStake, setIsStake] = useState(0);
  const [amount, setAmount] = useState("");

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleStake = () => {
    if (treeTokenBalance >= parseInt(amount)) {
      setTreeTokenBalance(treeTokenBalance - parseInt(amount));
      setStakedTreeTokenBalance(stakedTreeTokenBalance + parseInt(amount));
      setAmount("");
      setShowSuccessModal(true);
    }
  };

  const handleUnstake = () => {
    if (stakedTreeTokenBalance >= parseInt(amount)) {
      setTreeTokenBalance(treeTokenBalance + parseInt(amount));
      setStakedTreeTokenBalance(stakedTreeTokenBalance - parseInt(amount));
      setAmount("");
      setShowSuccessModal(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 1000);
  }, [showSuccessModal]);

  return (
    <>
      <div className="flex h-full flex-col gap-4">
        <p className="text-sm">Stake your 3verse to earn O² tokens</p>
        <div className="grow">
          {/* TAB */}
          <div className="w-full">
            <Tab.Group selectedIndex={isStake} onChange={setIsStake}>
              <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 pb-1">
                {["Stake", "Unstake"].map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) => `
                  w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white
                  focus:outline-none focus:ring-0
                  ${
                    selected
                      ? "bg-primary shadow"
                      : "text-gray-100 hover:bg-white/10 hover:text-white"
                  }
                `}
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
            </Tab.Group>
          </div>
          {/* AMOUNT */}
          <div>
            <div className="mt-1">
              <input
                type="number"
                name="amount"
                id="amount"
                className="block w-full rounded-md border-gray-300 text-black shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                placeholder={`Amount to ${isStake === 0 ? "stake" : "unstake"}`}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-4 divide-y divide-white/20 border-y border-white/20">
            {/* STAKING INFO */}
            <p className="py-2 text-center text-xl font-semibold">Rewards</p>
            <div className="grid w-full grid-cols-3 gap-4 py-4 text-center">
              <div>
                <p className="font-semibold">Annual Yield</p>
                <p>105 O² Tokens</p>
              </div>
              <div>
                <p className="font-semibold">Monthly Yield</p>
                <p>8.75 O² Tokens</p>
              </div>
              <div>
                <p className="font-semibold">Daily Yield</p>
                <p>0.29 O² Tokens</p>
              </div>
            </div>
            {/* BREAKDOWN */}
            <p className="py-2 text-center text-xl font-semibold">Breakdown</p>
            <div className="grid w-full grid-cols-3 gap-4 py-4 text-center">
              <div>
                <p className="font-semibold">1 tree takes up</p>
                <p>5m²</p>
              </div>
              <div>
                <p className="font-semibold">1 plot is</p>
                <p>25m²</p>
              </div>
              <div>
                <p className="font-semibold">CO² Offset per tree is</p>
                <p>21kg</p>
              </div>
            </div>
            <div
              className={`flex items-center text-lg ${
                isStake === 0 && amount ? "justify-between" : "justify-center"
              }`}
            >
              {isStake === 0 && amount && <p>{amount}</p>}
              {isStake === 0 && amount && <p>x</p>}
              <p className="py-2 text-center">
                Annual CO² offset per TREE TOKEN is{" "}
                <span className="font-semibold">102kg</span>
              </p>
              {isStake === 0 && amount && <p>=</p>}
              {isStake === 0 && amount && <p>{parseInt(amount) * 102}kg</p>}
            </div>
          </div>
        </div>
        {/* BUTTON */}
        <button
          onClick={() =>
            isWalletConnected
              ? isStake === 0
                ? handleStake()
                : handleUnstake()
              : handleConnectWallet()
          }
          className="mt-2 w-full self-end rounded-lg bg-primary px-4 py-2.5 text-sm font-medium leading-5 text-white"
        >
          {!isWalletConnected
            ? "Connect Wallet"
            : isStake === 0
            ? "Stake"
            : "Unstake"}
        </button>
      </div>
      <Modal
        isOpen={showSuccessModal}
        closeModal={() => setShowSuccessModal(false)}
      >
        <SuccessModal
          message={`${
            isStake === 0 ? "Staked" : "Unstaked"
          } O² Tokens successfully!`}
        />
      </Modal>
    </>
  );
};

export default Stake;
