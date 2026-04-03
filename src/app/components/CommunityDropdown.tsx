import { Link } from 'react-router';
import { Globe, Heart } from 'lucide-react';

interface MenuItem {
  icon: React.ElementType;
  title: string;
  description: string;
  path: string;
}

const menuItems: MenuItem[] = [
  {
    icon: Globe,
    title: 'City Outreach',
    description: 'Taking the Gospel to every corner of Lilongwe through street evangelism',
    path: '/community/city-outreach',
  },
  {
    icon: Heart,
    title: 'Care and Welfare',
    description: 'Supporting those in need through food, clothing and community care',
    path: '/community/care-and-welfare',
  },
];

interface CommunityDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommunityDropdown({ isOpen, onClose }: CommunityDropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="w-full bg-[#150800] py-8 px-8 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-250">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-1">
              serving Lilongwe
            </p>
            <h2 className="font-['TAN-BUSTER'] text-white text-3xl tracking-wide">
              LPC IN THE COMMUNITY
            </h2>
          </div>
          <Link
            to="/community/city-outreach"
            onClick={onClose}
            className="font-['Montserrat'] text-white hover:text-[#E8821A] transition-colors text-sm"
          >
            Join an outreach team →
          </Link>
        </div>
        <div className="h-px bg-white/10 mb-6" />
        <div className="grid grid-cols-2 gap-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className="group p-4 rounded-lg bg-[#1A0500]/40 hover:bg-[#1A0500]/70 transition-all duration-200"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-transparent border border-[#E8821A]/30 flex items-center justify-center group-hover:border-[#E8821A] transition-all">
                    <Icon className="text-[#E8821A] group-hover:scale-110 transition-transform" size={18} />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-white group-hover:text-[#E8821A] transition-colors text-sm">
                    {item.title}
                  </h3>
                  <p className="font-['Montserrat'] text-xs text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}