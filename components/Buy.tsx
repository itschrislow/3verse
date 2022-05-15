import { useState } from "react";

import { TABS } from "../lib/constants";

interface BuyProps {
  handleTabChange: (tab: TABS) => void;
}

const Buy = ({ handleTabChange }: BuyProps) => {
  const [landId, setLandId] = useState<number>();

  return (
    <div className="flex h-full flex-col">
      <p className="mb-4 text-sm">Buy TREE tokens directly on our platform.</p>
      <div className="flex h-full items-start justify-center gap-6">
        <div className="grid-rows-20 grid w-full grid-cols-20 divide-x divide-y divide-white/20 border-r border-b border-white/30  bg-island bg-contain bg-left bg-no-repeat">
          {Array(400)
            .fill(0)
            .map((_, index) => (
              <div
                onClick={() => setLandId(index)}
                className={`
                  aspect-square cursor-pointer hover:bg-white/30
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
              <button className="w-full self-end rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white">
                Buy
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
  );
};

export default Buy;
