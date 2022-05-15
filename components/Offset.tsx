import { useState } from "react";

interface OffsetProps {
  isWalletConnected: boolean;
  handleConnectWallet: () => void;
}

const Offset = ({ isWalletConnected, handleConnectWallet }: OffsetProps) => {
  const [hasOffset, setHasOffset] = useState(false);

  return (
    <div className="flex h-full flex-col">
      <p className="mb-4 text-sm">
        Go carbon neutral by retiring carbon and claiming the underlying
        environmental benefit of the carbon offset.
      </p>
      {/* FORM */}
      <div className="flex grow flex-col gap-4">
        <div>
          <label
            htmlFor="co2-offset"
            className="block text-sm font-medium text-white"
          >
            How many kilograms of CO2 do you want to offset?
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="co2-offset"
              id="co2-offset"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="5"
              aria-describedby="co2-offset"
            />
          </div>
          <p className="mt-2 text-sm text-gray-500" id="co2-offset">
            1 O2 token offsets 1kg of CO2
          </p>
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            What is your name <span className="font-bold">or</span> organization
            name?
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="John Doe"
              aria-describedby="name"
            />
          </div>
          <p className="mt-2 text-sm text-gray-500" id="name">
            This name will be put on the certificate of carbon offset.
          </p>
        </div>
      </div>
      {/* BUTTON */}
      <button
        onClick={() =>
          isWalletConnected ? setHasOffset(true) : handleConnectWallet()
        }
        className="mt-2 w-full self-end rounded-lg bg-primary px-4 py-2.5 text-sm font-medium leading-5 text-white"
      >
        {!isWalletConnected
          ? "Connect Wallet"
          : hasOffset
          ? "Share to instagram"
          : "Offset"}
      </button>
    </div>
  );
};

export default Offset;
