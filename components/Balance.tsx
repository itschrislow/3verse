interface BalanceProps {
  plotBalance: number;
  tokenBalance: number;
}

const Balance = ({ plotBalance, tokenBalance }: BalanceProps) => {
  return (
    <div className="p-4">
      <h3 className="mb-4 text-lg font-semibold text-white">Balance</h3>
      {/* LAND */}
      <div className="mb-4">
        <p className="text-5xl font-semibold text-white">{plotBalance}</p>
        <p className="text-lg font-semibold uppercase text-white/80">
          TREE TOKENS
        </p>
      </div>
      {/* LAND TOKENS */}
      <div className="mb-4">
        <p className="text-5xl font-semibold text-white">{tokenBalance}</p>
        <p className="text-lg font-semibold uppercase text-white/80">
          O² TOKENS
        </p>
      </div>
    </div>
  );
};

export default Balance;
