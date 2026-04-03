import { Link } from 'react-router';
import { Calendar, Star, Clock } from 'lucide-react';

interface MenuItem {
  icon: React.ElementType;
  title: string;
  description: string;
  path: string;
}

const menuItems: MenuItem[] = [
  {
    icon: Calendar,
    title: 'Upcoming Events',
    description: 'See everything coming up at LPC — services, conferences and outreaches',
    path: '/events/upcoming',
  },
  {
    icon: Star,
    title: 'Annual Events',
    description: 'Christmas, Easter, Anniversary, Crossover and our annual conference',
    path: '/events/annual',
  },
  {
    icon: Clock,
    title: 'Past Events',
    description: 'Photo galleries and highlights from previous LPC events and services',
    path: '/events/past',
  },
];

interface EventsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EventsDropdown({ isOpen, onClose }: EventsDropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="w-full bg-[#150800] py-8 px-8 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-250">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-1">
              never miss a moment
            </p>
            <h2 className="font-['TAN-BUSTER'] text-white text-3xl tracking-wide">
              EVENTS AT LPC
            </h2>
          </div>
          <Link
            to="/events/upcoming"
            onClick={onClose}
            className="font-['Montserrat'] text-white hover:text-[#E8821A] transition-colors text-sm"
          >
            View full calendar →
          </Link>
        </div>
        <div className="h-px bg-white/10 mb-6" />
        <div className="grid grid-cols-4 gap-4">
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
          <div className="p-4 rounded-lg border-2 border-dashed border-[#E8821A]/20 flex items-center justify-center">
            <p className="font-['Montserrat'] text-xs text-white/40 text-center">Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
