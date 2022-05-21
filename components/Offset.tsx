import { useEffect, useState } from "react";
import Certificate from "./Certificate";
import Modal from "./Modal";
import SuccessModal from "./Modal/SuccessModal";

interface OffsetProps {
  isWalletConnected: boolean;
  handleConnectWallet: () => void;
  o2TokenBalance: number;
  setO2TokenBalance: React.Dispatch<React.SetStateAction<number>>;
}

const Offset = ({
  o2TokenBalance,
  setO2TokenBalance,
  isWalletConnected,
  handleConnectWallet,
}: OffsetProps) => {
  const [hasOffset, setHasOffset] = useState(false);
  const [showOffsetCertificate, setShowOffsetCertificate] = useState(false);
  const [shared, setShared] = useState(false);

  // FORM FIELDS
  const [co2Offset, setCo2Offset] = useState("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmitForm = () => {
    // deduct token balance
    setO2TokenBalance(o2TokenBalance - parseFloat(co2Offset));

    // clear form
    setCo2Offset("");
    setName("");
    setMessage("");

    // show certificate
    setHasOffset(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setShared(false);
    }, 750);
  }, [shared]);

  return (
    <>
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
              What is your name <span className="font-bold">or</span>{" "}
              organization name?
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
        <div>
          {/* CERTIFICATE */}
          {hasOffset && (
            <div className="mb-4 flex items-center justify-between text-sm">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p>{new Date().toUTCString().substring(0, 16)}</p>
              </div>
              <p
                className="cursor-pointer underline"
                onClick={() => setShowOffsetCertificate(true)}
              >
                Show certificate
              </p>
            </div>
          )}
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
      </div>
      {/* CERTIFICATE MODAL */}
      <Modal
        isOpen={showOffsetCertificate}
        closeModal={() => setShowOffsetCertificate(false)}
      >
        <Certificate
          shareToInstagram={() => setShared(true)}
          closeModal={() => setShowOffsetCertificate(false)}
        />
      </Modal>
      {/* SHARED TO INSTAGRAM MODAL */}
      <Modal isOpen={shared} closeModal={() => setShared(false)}>
        <SuccessModal message="Shared to Instagram" />
      </Modal>
    </>
  );
};

export default Offset;
