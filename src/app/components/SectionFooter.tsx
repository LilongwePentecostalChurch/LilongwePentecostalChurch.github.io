import { LPCLogo } from './LPCLogo';
import { SocialIcon } from './SocialIcon';

const socialLinks = [
  { platform: 'tiktok' as const, url: 'https://www.tiktok.com/@llpentecostalchurch?is_from_webapp=1&sender_device=pc' },
  { platform: 'youtube' as const, url: 'https://youtube.com/@lilongwepentecostalchurch-l1u?si=vbWjtir34kbr5grZ' },
  { platform: 'facebook' as const, url: 'https://web.facebook.com/lilongwepentecostalchurch' },
  { platform: 'instagram' as const, url: 'https://instagram.com/lpc' },
];

export function SectionFooter() {
  return (
    <div className="flex items-center justify-between mt-16 pt-8 border-t border-[#E8821A]/30">
      {/* Social icons left */}
      <div className="flex gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#E8821A] flex items-center justify-center text-white hover:bg-[#C94A1A] transition-colors"
          >
            <SocialIcon platform={social.platform} size={18} />
          </a>
        ))}
      </div>

      {/* Logo center */}
      <div>
        <LPCLogo size={70} />
      </div>

      {/* Wordmark right */}
      <div className="text-right">
        <div className="font-['TAN-BUSTER'] text-white text-sm tracking-wider">
          GROWING STRONGER
        </div>
        <div className="font-['TAN-BUSTER'] text-white text-sm tracking-wider flex items-center gap-1 justify-end">
          <span className="inline-flex items-center justify-center w-5 h-5 border-2 border-white rounded-full text-[10px]">IN</span>
          <span>CHRIST</span>
        </div>
      </div>
    </div>
  );
}