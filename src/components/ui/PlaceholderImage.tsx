interface PlaceholderImageProps {
  className?: string;
}

const PlaceholderImage = ({ className = "" }: PlaceholderImageProps) => {
  return (
    <div
      className={`w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-800 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden ${className}`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_70%)]"></div>
      </div>

      {/* TSS-X Logo */}
      <div className="relative z-10 mb-4">
        <img
          src="/img/tssx/tssx-light-logo.png"
          alt="TSS-X Logo"
          className="w-24 h-24 object-contain"
        />
      </div>
    </div>
  );
};

export default PlaceholderImage;
