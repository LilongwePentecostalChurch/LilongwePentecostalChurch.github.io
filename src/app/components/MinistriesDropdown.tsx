import { Link } from 'react-router';
import { useNavigate } from 'react-router';
import { Book, Flower2, Zap, Shield, Heart, Globe, Hand } from 'lucide-react';

const ministries = [
  {
    id: 'sunday-school',
    name: 'Sunday School',
    icon: Book,
    description: 'Building faith from the foundation — LPC Kids, Parent Resources and VBS',
    path: '/ministries/sunday-school',
    subItems: [
      { name: 'LPC Kids', path: '/ministries/sunday-school/lpc-kids' },
      { name: 'Parent Resources', path: '/ministries/sunday-school/parent-resources' },
      { name: 'VBS', path: '/ministries/sunday-school/vbs' },
    ]
  },
  {
    id: 'womens-ministry',
    name: "Women's Ministry",
    icon: Flower2,
    description: 'Empowering women of all ages in their walk with God',
    path: '/ministries/womens-ministry',
  },
  {
    id: 'youth-ministry',
    name: 'Youth Ministry',
    icon: Zap,
    description: 'Vibrant community for young people aged 13 to 35',
    path: '/ministries/youth-ministry',
  },
  {
    id: 'mens-ministry',
    name: "Men's Ministry",
    icon: Shield,
    description: 'Building men of integrity, faith and purpose',
    path: '/ministries/mens-ministry',
  },
  {
    id: 'couples-ministry',
    name: 'Couples Ministry',
    icon: Heart,
    description: 'Building strong Christ-centred marriages and families',
    path: '/ministries/couples-ministry',
  },
  {
    id: 'evangelism',
    name: 'Evangelism',
    icon: Globe,
    description: 'Fulfilling the Great Commission through city outreach',
    path: '/ministries/evangelism',
  },
  {
    id: 'intercessors',
    name: 'Intercessors',
    icon: Hand,
    description: 'The prayer engine of the church',
    path: '/ministries/intercessors',
  }
];

interface MinistriesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MinistriesDropdown({ isOpen, onClose }: MinistriesDropdownProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleMinistryClick = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="w-full bg-[#150800] py-8 px-8 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-250">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-1">
              find your place
            </p>
            <h2 className="font-['TAN-BUSTER'] text-white text-3xl tracking-wide">
              OUR MINISTRIES
            </h2>
          </div>
          <Link
            to="/about/lead-pastor"
            onClick={onClose}
            className="font-['Montserrat'] text-white hover:text-[#E8821A] transition-colors text-sm"
          >
            Not sure? Talk to a pastor →
          </Link>
        </div>

        {/* Thin divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Grid of menu items - 4 columns */}
        <div className="grid grid-cols-4 gap-4">
          {ministries.map((ministry) => {
            const Icon = ministry.icon;
            return (
              <div
                key={ministry.id}
                onClick={() => handleMinistryClick(ministry.path)}
                className="group p-5 rounded-lg bg-gradient-to-br from-[#1A0500]/60 to-[#1A0500]/40 border border-[#E8821A]/20 hover:border-[#E8821A] hover:shadow-lg hover:shadow-[#E8821A]/20 transition-all duration-300 cursor-pointer relative"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E8821A]/20 to-[#E8821A]/10 border-2 border-[#E8821A]/40 flex items-center justify-center group-hover:border-[#E8821A] group-hover:bg-[#E8821A]/30 group-hover:scale-110 transition-all duration-300">
                    <Icon className="text-[#E8821A] group-hover:scale-110 transition-transform duration-300" size={22} />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-white group-hover:text-[#E8821A] transition-colors text-sm">
                    {ministry.name}
                  </h3>
                  <p className="font-['Montserrat'] text-xs text-white/60 group-hover:text-white/80 transition-colors leading-relaxed min-h-[32px]">
                    {ministry.description}
                  </p>

                  {/* Sunday School sub-items as enhanced pill links - appear on hover */}
                  {ministry.subItems && (
                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible flex flex-col gap-2 w-full mt-2 pt-3 border-t border-[#E8821A]/20 transition-all duration-300">
                      {ministry.subItems.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                          }}
                          className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#E8821A]/10 to-[#C94A1A]/10 border border-[#E8821A]/40 text-[#E8821A] hover:from-[#E8821A] hover:to-[#C94A1A] hover:text-white hover:border-[#E8821A] hover:shadow-md hover:shadow-[#E8821A]/30 hover:scale-105 transition-all duration-300 text-xs font-['Montserrat'] font-bold flex items-center justify-between group/link"
                        >
                          <span>{subItem.name}</span>
                          <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          
          {/* Empty cell for the 8th spot */}
          <div className="p-4 rounded-lg opacity-0 pointer-events-none">
          </div>
        </div>
      </div>
    </div>
  );
}