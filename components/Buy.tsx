import { useState } from "react";

import { TABS } from "../lib/constants";

interface BuyProps {
  handleTabChange: (tab: TABS) => void;
}

const Buy = ({ handleTabChange }: BuyProps) => {
  const [landId, setLandId] = useState<number>();

  return (
    <div>
      <p className="mb-4 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar
        dui ipsum, sed fermentum augue iaculis et.
      </p>
      <div className="flex gap-6">
        <div className="min-h-full w-1/2">
          <div className="grid-rows-30 grid w-full grid-cols-20 divide-x divide-y divide-white/30 border-r border-b border-white/30  bg-forest-map bg-contain bg-left bg-no-repeat">
            {Array(600)
              .fill(0)
              .map((_, index) => (
                <div
                  onClick={() => setLandId(index)}
                  className={`
                  aspect-square cursor-pointer hover:bg-white/50
                  ${landId === index ? "bg-white/70" : ""}
                  ${index === 0 ? "border-t border-l border-white/30" : ""}
                `}
                  key={index}
                />
              ))}
          </div>
        </div>
        <div className="w-1/2">
          {/* STEP 1 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-white">
                <span className="text-white">1</span>
              </span>
              <p>Select GreenLand</p>
            </div>
            {/* STEP 2 */}
            <div className="flex items-center gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-white">
                <span className="text-white">2</span>
              </span>
              <p>Mint GreenLand {landId && "#" + landId}</p>
            </div>
            <div className="pl-12">
              <button className="w-full self-end rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white">
                Mint
              </button>
            </div>
            {/* STEP 3 */}
            <div className="flex items-center gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-white">
                <span className="text-white">3</span>
              </span>
              <p>Stake GreenLand {landId && "#" + landId}</p>
            </div>
            <div className="pl-12">
              <button
                onClick={() => handleTabChange(TABS.Stake)}
                className="w-full self-end rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white"
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
