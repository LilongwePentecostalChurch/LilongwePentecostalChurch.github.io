import { Link } from 'react-router';
import { BookOpen, User, Users, Cross, BarChart, Briefcase } from 'lucide-react';

interface MenuItem {
  icon: React.ElementType;
  title: string;
  description: string;
  path: string;
}

const menuItems: MenuItem[] = [
  {
    icon: BookOpen,
    title: 'Our Story',
    description: 'How LPC was founded and our journey of faith in Lilongwe',
    path: '/about/our-story',
  },
  {
    icon: User,
    title: 'Our Lead Pastor',
    description: 'Meet the man God placed to lead Lilongwe Pentecostal Church',
    path: '/about/lead-pastor',
  },
  {
    icon: Users,
    title: 'Leadership Team',
    description: 'Our elders, deacons and ministry leaders serving the LPC family',
    path: '/about/leadership-team',
  },
  {
    icon: Cross,
    title: 'What We Believe',
    description: 'Our statement of faith, core doctrines and Pentecostal convictions',
    path: '/about/what-we-believe',
  },
  {
    icon: BarChart,
    title: 'LPC At A Glance',
    description: 'Key facts, figures and milestones of Lilongwe Pentecostal Church',
    path: '/about/lpc-at-a-glance',
  },
  {
    icon: Briefcase,
    title: 'Staff',
    description: 'Meet our church administrators and support staff',
    path: '/about/staff',
  },
];

interface AboutDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutDropdown({ isOpen, onClose }: AboutDropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="w-full bg-[#150800] py-8 px-8 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-250">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-1">
              our foundation
            </p>
            <h2 className="font-['TAN-BUSTER'] text-white text-3xl tracking-wide">
              ABOUT LPC
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/about"
              onClick={onClose}
              className="font-['Montserrat'] text-white hover:text-[#E8821A] transition-colors text-sm"
            >
              About overview →
            </Link>
            <Link
              to="/connect/plan-your-visit"
              onClick={onClose}
              className="font-['Montserrat'] text-white hover:text-[#E8821A] transition-colors text-sm"
            >
              Plan your visit →
            </Link>
          </div>
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