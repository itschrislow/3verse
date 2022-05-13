import { useState } from "react";
import { Tab } from "@headlessui/react";

interface StakeProps {
  isWalletConnected: boolean;
  handleConnectWallet: () => void;
}

const Stake = ({ isWalletConnected, handleConnectWallet }: StakeProps) => {
  const [isStake, setIsStake] = useState(0);

  const handleStake = () => {};
  const handleUnstake = () => {};

  return (
    <div className="flex h-full flex-col gap-4">
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar
        dui ipsum, sed fermentum augue iaculis et.
      </p>
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
                      ? "bg-green-600 shadow"
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
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-600 focus:ring-green-600 sm:text-sm"
              placeholder={`Amount to ${isStake === 0 ? "stake" : "unstake"}`}
            />
          </div>
        </div>
        {/* STAKING INFO */}
        <div className="pt-4">
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            pulvinar dui ipsum, sed fermentum augue iaculis et.
          </p>
        </div>
      </div>
      {/* BUTTON */}
      <button
        onClick={() => (isWalletConnected ? null : handleConnectWallet())}
        className="mt-2 w-full self-end rounded-lg bg-green-600 px-4 py-2.5 text-sm font-medium leading-5 text-white"
      >
        {!isWalletConnected
          ? "Connect Wallet"
          : isStake === 0
          ? "Stake"
          : "Unstake"}
      </button>
    </div>
  );
};

export default Stake;
