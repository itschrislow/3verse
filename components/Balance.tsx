const Balance = () => {
  return (
    <div className="p-4">
      <h3 className="mb-4 text-lg font-semibold text-white">Balance</h3>
      {/* LAND */}
      <div className="mb-4">
        <p className="text-5xl font-semibold text-white">1</p>
        <p className="text-lg font-semibold text-white/80">LAND</p>
      </div>
      {/* LAND TOKENS */}
      <div className="mb-4">
        <p className="text-5xl font-semibold text-white">5</p>
        <p className="text-lg font-semibold text-white/80">TOKENS</p>
      </div>
    </div>
  );
};

export default Balance;
