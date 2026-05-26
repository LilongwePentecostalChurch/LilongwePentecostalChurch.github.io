import { Link } from 'react-router';
import { PlayCircle, BookOpen, Sun } from 'lucide-react';

interface MenuItem {
  icon: React.ElementType;
  title: string;
  description: string;
  path: string;
}

const menuItems: MenuItem[] = [
  {
    icon: PlayCircle,
    title: 'Sermons',
    description: 'Watch and listen to the latest Sunday messages from LPC',
    path: '/sermons',
  },
  {
    icon: BookOpen,
    title: 'Bible Study Notes',
    description: 'Wednesday night study notes and downloadable study guides',
    path: '/sermons/bible-study-notes',
  },
  {
    icon: Sun,
    title: 'Devotionals',
    description: 'Daily and weekly devotionals to keep you rooted in the Word',
    path: '/sermons/devotionals',
  },
];

interface SermonsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SermonsDropdown({ isOpen, onClose }: SermonsDropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="w-full bg-[#150800] py-8 px-8 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-250">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-1">
              listen and grow
            </p>
            <h2 className="font-['TAN-BUSTER'] text-white text-3xl tracking-wide">
              SERMONS AND TEACHING
            </h2>
          </div>
          <a
            href="https://youtube.com/@lilongwepentecostalchurch-l1u?si=vbWjtir34kbr5grZ"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Montserrat'] text-white hover:text-[#E8821A] transition-colors text-sm"
          >
            Watch live every Sunday →
          </a>
        </div>

        {/* Thin divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Grid of menu items - 3 columns */}
        <div className="grid grid-cols-3 gap-4">
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