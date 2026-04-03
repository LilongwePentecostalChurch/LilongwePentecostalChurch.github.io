import { Link } from 'react-router';
import { DoorOpen, Home, Heart } from 'lucide-react';

interface MenuItem {
  icon: React.ElementType;
  title: string;
  description: string;
  path: string;
}

const menuItems: MenuItem[] = [
  {
    icon: DoorOpen,
    title: 'Plan Your Visit',
    description: 'Everything you need to know before your first Sunday — including how to join and volunteer',
    path: '/connect/plan-your-visit',
  },
  {
    icon: Home,
    title: 'Care Groups',
    description: 'Small groups that meet weekly for Bible study, prayer and fellowship',
    path: '/connect/care-groups',
  },
  {
    icon: Heart,
    title: 'Counselling and Prayer',
    description: 'Pastoral counselling, prayer requests and spiritual support',
    path: '/connect/counselling-prayer',
  },
];

interface ConnectDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConnectDropdown({ isOpen, onClose }: ConnectDropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="w-full bg-[#150800] py-8 px-8 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-250">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-1">
              you belong here
            </p>
            <h2 className="font-['TAN-BUSTER'] text-white text-3xl tracking-wide">
              GET CONNECTED
            </h2>
          </div>
          <Link
            to="/connect/plan-your-visit"
            onClick={onClose}
            className="font-['Montserrat'] text-white hover:text-[#E8821A] transition-colors text-sm"
          >
            New here? Start with a visit →
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
          <div className="p-4 rounded-lg opacity-0 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}