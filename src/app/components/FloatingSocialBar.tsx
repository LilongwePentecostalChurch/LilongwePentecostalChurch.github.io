import { useState } from 'react';
import { SocialIcon } from './SocialIcon';

const socialLinks = [
  { platform: 'tiktok' as const, label: 'TikTok', url: 'https://www.tiktok.com/@llpentecostalchurch?is_from_webapp=1&sender_device=pc' },
  { platform: 'youtube' as const, label: 'YouTube', url: 'https://youtube.com/@lilongwepentecostalchurch-l1u?si=vbWjtir34kbr5grZ' },
  { platform: 'facebook' as const, label: 'Facebook', url: 'https://web.facebook.com/lilongwepentecostalchurch' },
  { platform: 'instagram' as const, label: 'Instagram', url: 'https://instagram.com/lpc' },
];

export function FloatingSocialBar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-0 bg-[#1A0500]/80 backdrop-blur-sm border-l-2 border-[#E8821A] rounded-l-lg shadow-[-4px_0_20px_rgba(232,130,26,0.3)] hidden md:flex">
      {socialLinks.map((social, index) => (
        <a
          key={social.platform}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-12 h-12 flex items-center justify-center text-white hover:bg-[#E8821A] transition-all duration-300 hover:-translate-x-1 group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <SocialIcon platform={social.platform} size={20} />
          
          {/* Label on hover */}
          {hoveredIndex === index && (
            <div className="absolute right-full mr-2 px-3 py-1 bg-[#1A0500] border border-[#E8821A] rounded whitespace-nowrap text-xs font-['Montserrat'] text-white">
              {social.label}
            </div>
          )}
        </a>
      ))}
    </div>
  );
}