import { useEffect, useState } from "react";

interface ConnectWalletModalProps {
  handleCloseConnectWalletModal: () => void;
}

export default function ConnectWalletModal({
  handleCloseConnectWalletModal,
}: ConnectWalletModalProps) {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsConnected(true);
    }, 750);

    setTimeout(() => {
      handleCloseConnectWalletModal();
    }, 1250);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {isConnected ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-green-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="h-5 w-5 animate-spin"
        >
          <path d="M222.7 32.15C227.7 49.08 218.1 66.9 201.1 71.94C121.8 95.55 64 169.1 64 255.1C64 362 149.1 447.1 256 447.1C362 447.1 448 362 448 255.1C448 169.1 390.2 95.55 310.9 71.94C293.9 66.9 284.3 49.08 289.3 32.15C294.4 15.21 312.2 5.562 329.1 10.6C434.9 42.07 512 139.1 512 255.1C512 397.4 397.4 511.1 256 511.1C114.6 511.1 0 397.4 0 255.1C0 139.1 77.15 42.07 182.9 10.6C199.8 5.562 217.6 15.21 222.7 32.15V32.15z" />
        </svg>
      )}
      <p>{isConnected ? "Wallet connected" : "Connecting to wallet"}</p>
    </div>
  );
}
