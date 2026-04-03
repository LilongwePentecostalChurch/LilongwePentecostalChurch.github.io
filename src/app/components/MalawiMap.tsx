import { useState } from 'react';
import { LPCLogo } from './LPCLogo';

export function MalawiMap() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative w-full h-full min-h-[600px] flex items-center justify-center group">
      {/* Map Container */}
      <div className="relative w-full max-w-md">
        {/* Malawi Silhouette - Simplified SVG */}
        <svg
          viewBox="0 0 200 400"
          className="w-full h-auto transition-all duration-500"
          style={{
            filter: 'drop-shadow(0 0 20px rgba(232, 130, 26, 0.3)) drop-shadow(0 0 40px rgba(232, 130, 26, 0.2))',
          }}
        >
          {/* Background */}
          <rect x="0" y="0" width="200" height="400" fill="#0A0200" />
          
          {/* Malawi Shape - Simplified vertical country shape */}
          <path
            d="M 100 40 
               L 120 50 L 130 70 L 135 90 L 140 120 L 142 150 
               L 145 180 L 148 210 L 150 240 L 148 270 
               L 145 300 L 140 330 L 135 350 L 130 365 
               L 120 375 L 100 380 
               L 80 375 L 70 365 L 65 350 L 60 330 
               L 55 300 L 52 270 L 50 240 L 52 210 
               L 55 180 L 58 150 L 60 120 L 65 90 
               L 70 70 L 80 50 Z"
            fill="#2A0A00"
            stroke="#E8821A"
            strokeWidth="1.5"
            className="transition-all duration-500 group-hover:stroke-[3] group-hover:drop-shadow-[0_0_15px_rgba(232,130,26,0.8)]"
            style={{
              filter: 'url(#innerGlow)',
            }}
          />

          {/* Inner Glow Filter */}
          <defs>
            <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur"/>
              <feOffset in="blur" dx="0" dy="0" result="offsetBlur"/>
              <feFlood floodColor="#E8821A" floodOpacity="0.3" result="color"/>
              <feComposite in="color" in2="offsetBlur" operator="in" result="glow"/>
              <feComposite in="SourceGraphic" in2="glow" operator="over"/>
            </filter>
            
            <filter id="amberGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Lilongwe Location - Approximately in the center */}
          <g transform="translate(100, 200)">
            {/* Pulsing Ripple Rings - Always Active */}
            <circle
              r="20"
              fill="none"
              stroke="#E8821A"
              strokeWidth="2"
              opacity="0"
              className="animate-ping-slow"
            />
            <circle
              r="15"
              fill="none"
              stroke="#E8821A"
              strokeWidth="2"
              opacity="0"
              className="animate-ping-slower"
            />
            
            {/* Location Pin */}
            <g
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="cursor-pointer"
            >
              {/* Pin Shadow */}
              <ellipse
                cx="0"
                cy="25"
                rx="8"
                ry="3"
                fill="#000"
                opacity="0.4"
              />
              
              {/* Pin Shape */}
              <path
                d="M 0 -15 
                   C -8 -15, -12 -10, -12 -3 
                   C -12 4, 0 15, 0 15 
                   C 0 15, 12 4, 12 -3 
                   C 12 -10, 8 -15, 0 -15 Z"
                fill="#E8821A"
                stroke="#C94A1A"
                strokeWidth="1"
                className="transition-all duration-300 hover:scale-110"
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 15px rgba(232, 130, 26, 0.8))',
                }}
              />
              
              {/* LPC Logo Badge Inside Pin */}
              <g transform="scale(0.15) translate(-50, -50)">
                <circle cx="50" cy="30" r="35" fill="#FFFFFF" />
                <rect x="42" y="15" width="3" height="25" fill="#E8821A" rx="1.5"/>
                <rect x="50" y="15" width="3" height="25" fill="#E8821A" rx="1.5"/>
                <rect x="58" y="15" width="3" height="25" fill="#E8821A" rx="1.5"/>
              </g>
            </g>
          </g>

          {/* City Label */}
          <text
            x="105"
            y="192"
            fill="#FFFFFF"
            fontSize="8"
            fontFamily="Montserrat"
            fontWeight="700"
            className="pointer-events-none"
          >
            Lilongwe
          </text>
          <circle cx="98" cy="190" r="2" fill="#E8821A" />
        </svg>

        {/* Tooltip */}
        {showTooltip && (
          <div
            className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-full mb-4 animate-tooltip-in"
            style={{
              animation: 'tooltipIn 0.3s ease-out forwards',
            }}
          >
            <div className="relative bg-[#2A0A00]/95 backdrop-blur-sm border-2 border-[#E8821A] rounded-lg px-6 py-4 shadow-[0_0_30px_rgba(232,130,26,0.4)]">
              <div className="flex items-start gap-3 mb-2">
                <div className="flex-shrink-0">
                  <LPCLogo size={24} />
                </div>
                <div>
                  <p className="font-['Montserrat'] font-bold text-white text-sm mb-1">
                    Lilongwe Pentecostal Church
                  </p>
                  <p className="font-['Montserrat'] text-white/80 text-xs mb-2">
                    3Q5J+43X · M1 Road · Area 18A · Lilongwe
                  </p>
                  <a
                    href="https://www.google.com/maps/search/3Q5J+43X+M1+Road+Lilongwe+Malawi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['Montserrat'] text-[#E8821A] text-xs hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
              
              {/* Tooltip Arrow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#E8821A]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes ping-slower {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-ping-slower {
          animation: ping-slower 3s cubic-bezier(0, 0, 0.2, 1) infinite 0.5s;
        }
        
        @keyframes tooltipIn {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(calc(-100% + 8px));
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) translateY(-100%);
          }
        }
        
        .animate-tooltip-in {
          animation: tooltipIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}