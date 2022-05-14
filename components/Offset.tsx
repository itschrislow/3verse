interface OffsetProps {
  isWalletConnected: boolean;
  handleConnectWallet: () => void;
}

const Offset = ({ isWalletConnected, handleConnectWallet }: OffsetProps) => {
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
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            How many kilograms of CO2 do you want to offset?
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="you@example.com"
              aria-describedby="email-description"
            />
          </div>
          <p className="mt-2 text-sm text-gray-500" id="email-description">
            1 O2 token offsets 1kg of CO2
          </p>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            What is your name <span className="font-bold">or</span> organization
            name?
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="you@example.com"
              aria-describedby="email-description"
            />
          </div>
          <p className="mt-2 text-sm text-gray-500" id="email-description">
            This name will be put on the certificate of carbon offset.
          </p>
        </div>
      </div>
      {/* BUTTON */}
      <button
        onClick={() => (isWalletConnected ? null : handleConnectWallet())}
        className="mt-2 w-full self-end rounded-lg bg-primary px-4 py-2.5 text-sm font-medium leading-5 text-white"
      >
        {!isWalletConnected ? "Connect Wallet" : "Offset"}
      </button>
    </div>
  );
};

export default Offset;
