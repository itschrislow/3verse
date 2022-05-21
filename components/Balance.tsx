interface BalanceProps {
  treeTokenBalance: number;
  stakedTreeTokenBalance: number;
  o2TokenBalance: number;
}

const Balance = ({
  treeTokenBalance,
  stakedTreeTokenBalance,
  o2TokenBalance,
}: BalanceProps) => {
  return (
    <div className="p-4">
      <h3 className="mb-4 text-lg font-semibold text-white">Balance</h3>
      {/* LAND */}
      <div className="mb-4">
        <div className="flex items-center gap-10">
          <div>
            <p className="text-5xl font-semibold text-white">
              {treeTokenBalance}
            </p>
            <p className="text-lg font-semibold uppercase text-white/80">
              TREE TOKENS
            </p>
          </div>
          <div>
            <p className="text-5xl font-semibold text-white">
              {stakedTreeTokenBalance}
            </p>
            <p className="text-lg font-semibold text-white/80">sTREE TOKENS</p>
          </div>
        </div>
      </div>
      {/* LAND TOKENS */}
      <div className="mb-4">
        <p className="text-5xl font-semibold text-white">{o2TokenBalance}</p>
        <p className="text-lg font-semibold uppercase text-white/80">
          O² TOKENS
        </p>
      </div>
    </div>
  );
};

export default Balance;
