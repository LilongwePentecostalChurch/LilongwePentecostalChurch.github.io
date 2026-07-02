import { Link } from 'react-router';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-4">
          Oops — page not found
        </p>
        <h1 className="font-['TAN-BUSTER'] text-white text-6xl md:text-8xl tracking-wide mb-6">
          404
        </h1>
        <p className="font-['Montserrat'] text-white/70 text-lg mb-10 leading-relaxed">
          The page you're looking for doesn't exist or may have moved. Let's get you back on track.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all"
          >
            Go Home
          </Link>
          <Link
            to="/connect/plan-your-visit"
            className="px-8 py-3 bg-transparent border-2 border-[#E8821A] text-[#E8821A] font-['Montserrat'] font-bold rounded-full hover:bg-[#E8821A] hover:text-white transition-all"
          >
            Plan Your Visit
          </Link>
        </div>
      </div>
    </div>
  );
}
