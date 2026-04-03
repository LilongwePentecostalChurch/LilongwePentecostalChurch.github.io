export function LPCLogo({ size = 60 }: { size?: number }) {
  return (
    <div 
      style={{ width: size, height: size }}
      className="bg-gradient-to-br from-[#E8821A] to-[#C94A1A] rounded-lg flex items-center justify-center"
    >
      <span className="font-['TAN-BUSTER'] text-white text-lg font-bold">LPC</span>
    </div>
  );
}