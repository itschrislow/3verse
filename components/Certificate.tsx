interface CertificateProps {
  shareToInstagram: () => void;
  closeModal: () => void;
}

export default function Certificate({
  shareToInstagram,
  closeModal,
}: CertificateProps) {
  return (
    <div>
      <p className="text-xl font-semibold">Carbon Offset Certificate</p>
      <br />
      <p>
        This is to certify that Chris has offsetted 5kg of carbon on{" "}
        {new Date().toUTCString().substring(0, 16)}.
      </p>
      <br />
      <p className="font-mono text-sm text-gray-500">3verse</p>
      <br />
      <button
        onClick={() => {
          closeModal();
          shareToInstagram();
        }}
        className="w-full rounded-lg bg-gradient-to-r from-[#8a3ab9] via-[#fbad50] to-[#e95950] py-2 font-medium text-white"
      >
        Share on Instagram
      </button>
    </div>
  );
}
