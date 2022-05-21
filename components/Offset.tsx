import { useState } from "react";

interface OffsetProps {
  isWalletConnected: boolean;
  handleConnectWallet: () => void;
}

const Offset = ({ isWalletConnected, handleConnectWallet }: OffsetProps) => {
  const [hasOffset, setHasOffset] = useState(false);

  // FORM FIELDS
  const [co2Offset, setCo2Offset] = useState("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmitForm = () => {
    if (isWalletConnected) {
      setCo2Offset("");
      setName("");
      setMessage("");
    }
  };

  return (
    <div className="flex h-full flex-col">
      <p className="mb-4 text-sm">
        Go carbon neutral by retiring carbon and claiming the underlying
        environmental benefit of the carbon offset.
      </p>
      {/* FORM */}
      <div className="flex grow flex-col gap-4">
        {/* CO2 OFFSET AMOUNT */}
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
              className="block w-full rounded-md border-gray-300 text-black shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder="5"
              value={co2Offset}
              onChange={(e) => setCo2Offset(e.target.value)}
            />
          </div>
          <p className="mt-2 text-sm text-gray-500" id="co2-offset">
            1 O² token offsets 1kg of CO²
          </p>
        </div>
        {/* NAME */}
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
              className="block w-full rounded-md border-gray-300 text-black shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <p className="mt-2 text-sm text-gray-500" id="name">
            This name will be put on the certificate of carbon offset.
          </p>
        </div>
        {/* MESSAGE */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white"
          >
            Message
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="message"
              id="message"
              className="block w-full rounded-md border-gray-300 text-black shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder="I am a carbon neutral citizen."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <p className="mt-2 text-sm text-gray-500" id="name">
            This message will be on the blockchain forever.
          </p>
        </div>
      </div>
      {/* BUTTON */}
      <button
        type={isWalletConnected ? "submit" : "button"}
        onClick={() =>
          isWalletConnected ? handleSubmitForm() : handleConnectWallet()
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
