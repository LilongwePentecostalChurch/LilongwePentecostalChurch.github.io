import { Link } from 'react-router';
import { User, Users, UserCog, Briefcase, Shield, Building } from 'lucide-react';

const subPages = [
  { name: 'The Lead Pastor', path: '/leadership/lead-pastor', icon: User },
  { name: 'Pastoral Team', path: '/leadership/pastoral-team', icon: Users },
  { name: 'Elders Board', path: '/leadership/elders-board', icon: Shield },
  { name: 'Deacons', path: '/leadership/deacons', icon: UserCog },
  { name: 'Ministry Leaders', path: '/leadership/ministry-leaders', icon: Briefcase },
  { name: 'Staff Directory', path: '/leadership/staff-directory', icon: Building },
];

const featuredLeader = {
  name: 'Pastor John Doe',
  title: 'Lead Pastor',
  bio: 'Serving with faith and integrity for over 20 years',
  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
};

interface LeadershipDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadershipDropdown({ isOpen, onClose }: LeadershipDropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-20 left-0 right-0 z-30 animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A0500] border-t-2 border-[#E8821A] shadow-lg shadow-[#E8821A]/20 rounded-b-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Left Column - Sub Pages */}
            <div className="space-y-2">
              {subPages.map((page) => {
                const Icon = page.icon;
                return (
                  <Link
                    key={page.path}
                    to={page.path}
                    onClick={onClose}
                    className="group flex items-center gap-4 px-4 py-4 rounded-lg hover:bg-[#E8821A]/10 transition-all duration-200"
                  >
                    <Icon className="text-[#E8821A] flex-shrink-0" size={20} />
                    <span className="font-['Montserrat'] font-bold text-white group-hover:text-[#E8821A] transition-colors flex-1">
                      {page.name}
                    </span>
                    <svg
                      className="text-[#E8821A] transform group-hover:translate-x-1 transition-transform"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M7.5 15L12.5 10L7.5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                );
              })}
            </div>

            {/* Right Column - Featured Leader */}
            <div className="relative">
              <div className="border-2 border-[#E8821A] rounded-xl overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={featuredLeader.image}
                    alt={featuredLeader.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0500] via-[#E8821A]/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-['TAN-BUSTER'] text-2xl text-white mb-1">
                    {featuredLeader.name}
                  </h3>
                  <p className="font-['Signature'] text-[#E8821A] text-lg mb-2">
                    {featuredLeader.title}
                  </p>
                  <p className="font-['Montserrat'] text-white/80 mb-4">
                    {featuredLeader.bio}
                  </p>
                  <Link
                    to="/leadership/lead-pastor"
                    onClick={onClose}
                    className="inline-block px-6 py-2 bg-[#E8821A] text-white rounded-full font-['Montserrat'] font-bold hover:bg-[#C94A1A] transition-colors"
                  >
                    Read Bio
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Strip */}
          <div className="bg-[#7A1A0A] border-t-2 border-[#E8821A] py-4 px-8">
            <p className="font-['Montserrat'] text-white text-center">
              Serving and leading the LPC family with faith and integrity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
