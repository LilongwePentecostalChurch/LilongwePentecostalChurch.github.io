import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { SectionFooter } from '../../components/SectionFooter';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Shield, UserCog, Users, Church, Cross, ArrowDown } from 'lucide-react';
import { ministriesData } from '../../data/ministriesData';
import { sanityClient, urlFor } from '../../lib/sanityClient';

// Fallback hardcoded data
const fallbackElders = [
  { name: 'Rex Kuyeli', image: 'https://images.unsplash.com/photo-1742436448498-94c4790e846d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Trevor Hiwa', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Mcdonald Chikoja', image: 'https://images.unsplash.com/photo-1686628092262-2ac7bc415e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Chawanangwa Jana', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Bickiel Sinoya', image: 'https://images.unsplash.com/photo-1742436448498-94c4790e846d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Stanford Mwanyongo', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Nyokase Phiri', image: 'https://images.unsplash.com/photo-1686628092262-2ac7bc415e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Saul Kamanga', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Monalisa Mushava', image: 'https://images.unsplash.com/photo-1742436448498-94c4790e846d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Chikondi Kabwadza', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Tina Rebello', image: 'https://images.unsplash.com/photo-1686628092262-2ac7bc415e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Susan Mtuwa', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Doreen Matonga', image: 'https://images.unsplash.com/photo-1742436448498-94c4790e846d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
];

const fallbackDeacons = [
  { name: 'Elsie Chitedze', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Tingo Mipando', image: 'https://images.unsplash.com/photo-1742436448498-94c4790e846d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Vita Sinoya', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Yanja Chigamba', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Gift Njoloma', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Snowden Bulla', image: 'https://images.unsplash.com/photo-1742436448498-94c4790e846d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Yowoyani Chinoko', image: 'https://images.unsplash.com/photo-1686628092262-2ac7bc415e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Molly Chikoja', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Davies Kapenga', image: 'https://images.unsplash.com/photo-1742436448498-94c4790e846d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Chikhu Iyombe', image: 'https://images.unsplash.com/photo-1686628092262-2ac7bc415e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Ivy Chihana', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Diana Nkhulambe', image: 'https://images.unsplash.com/photo-1742436448498-94c4790e846d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
  { name: 'Pharnice Bushuru', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
];

interface StaffMember {
  name: string;
  image: string;
}

export function LeadershipTeam() {
  const [elders, setElders] = useState<StaffMember[]>(fallbackElders);
  const [deacons, setDeacons] = useState<StaffMember[]>(fallbackDeacons);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "staffMember" && (department == "elders" || department == "deacons")] | order(order asc) {
        name, department, photo
      }`)
      .then((data: any[]) => {
        if (!data || data.length === 0) return;
        const sanityElders = data.filter(s => s.department === 'elders').map(s => ({
          name: s.name,
          image: s.photo ? urlFor(s.photo).width(400).url() : '',
        }));
        const sanityDeacons = data.filter(s => s.department === 'deacons').map(s => ({
          name: s.name,
          image: s.photo ? urlFor(s.photo).width(400).url() : '',
        }));
        if (sanityElders.length > 0) setElders(sanityElders);
        if (sanityDeacons.length > 0) setDeacons(sanityDeacons);
      })
      .catch(() => {});
  }, []);

  const ministryLeaders = ministriesData.map(ministry => ({
    ministry: ministry.name,
    leader: ministry.leaderName,
    description: ministry.leaderTitle,
    image: ministry.leaderPhoto,
    icon: ministry.icon,
    link: `/ministries/${ministry.id}`,
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1750284743576-d600a45d6165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Leadership Team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/40 via-[#C94A1A]/50 to-[#7A1A0A]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/70 to-[#1A0500]/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-white/60 mb-8 font-['Montserrat'] text-sm">
            <Link to="/" className="hover:text-[#E8821A] transition-colors">Home</Link>
            <span>›</span>
            <Link to="/about" className="hover:text-[#E8821A] transition-colors">About</Link>
            <span>›</span>
            <span className="text-[#E8821A]">Leadership</span>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="font-['Signature'] text-3xl text-[#E8821A] mb-4">Serving with vision, integrity and faith</p>
            <h1 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl lg:text-6xl text-white mb-6 tracking-wider">
              LEADERSHIP TEAM
            </h1>
            <div className="w-20 h-1 bg-[#E8821A] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Elders Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#7A1A0A]/40 to-[#1A0500]"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-['Signature'] text-3xl text-[#E8821A] mb-4">Board of Elders</p>
            <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white tracking-wider mb-4">ELDERS</h2>
            <p className="font-['Montserrat'] text-white/80 max-w-2xl mx-auto">
              Spiritual overseers who provide wisdom, accountability and pastoral care for the LPC family
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            {elders.map((elder, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-24 h-24 mx-auto mb-3">
                  <div className="w-full h-full rounded-full border-4 border-[#E8821A] overflow-hidden group-hover:shadow-[0_0_20px_rgba(232,130,26,0.6)] transition-all">
                    <ImageWithFallback
                      src={elder.image}
                      alt={elder.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                </div>
                <p className="font-['Montserrat'] font-bold text-white text-sm mb-1">{elder.name}</p>
                <p className="font-['Signature'] text-lg text-[#E8821A]">Elder</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deacons Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1A0500]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#7A1A0A]/20 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-['Signature'] text-3xl text-[#E8821A] mb-4">Board of Deacons</p>
            <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white tracking-wider mb-4">DEACONS</h2>
            <p className="font-['Montserrat'] text-white/80 max-w-2xl mx-auto">
              Servant leaders who handle the practical needs of the church with faithfulness and integrity
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            {deacons.map((deacon, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-24 h-24 mx-auto mb-3">
                  <div className="w-full h-full rounded-full border-4 border-[#E8821A] overflow-hidden group-hover:shadow-[0_0_20px_rgba(232,130,26,0.6)] transition-all">
                    <ImageWithFallback
                      src={deacon.image}
                      alt={deacon.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                </div>
                <p className="font-['Montserrat'] font-bold text-white text-sm mb-1">{deacon.name}</p>
                <p className="font-['Signature'] text-lg text-[#E8821A]">Deacon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Leaders Section */}
      <section className="py-24 px-4 relative overflow-hidden" id="ministry-leaders">
        <div className="absolute inset-0 bg-[#1A0500]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8821A]/10 via-[#7A1A0A]/10 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-['Signature'] text-3xl text-[#E8821A] mb-4">Ministry Leadership</p>
            <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white tracking-wider mb-4">MINISTRY LEADERS</h2>
            <p className="font-['Montserrat'] text-white/80 max-w-2xl mx-auto">
              Champions of specific ministries, recruiting and training volunteers to serve with excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {ministryLeaders.map((ministry, index) => {
              const IconComponent = ministry.icon;
              return (
                <Link
                  key={index}
                  to={ministry.link}
                  className="group relative bg-[#1A0500]/80 backdrop-blur-sm rounded-lg overflow-hidden border-2 border-[#E8821A]/30 hover:border-[#E8821A] hover:shadow-[0_0_30px_rgba(232,130,26,0.4)] transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <ImageWithFallback
                      src={ministry.image}
                      alt={ministry.ministry}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0500] via-[#1A0500]/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-[#E8821A] rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-['TAN-BUSTER'] text-xl text-white mb-2 tracking-wide">{ministry.ministry}</h3>
                      <p className="font-['Signature'] text-lg text-[#E8821A] mb-2">{ministry.leader}</p>
                      <p className="font-['Montserrat'] text-sm text-white/90">{ministry.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <SectionFooter />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8821A] via-[#C94A1A] to-[#7A1A0A]"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white mb-6 tracking-wider">SERVE WITH US AT LPC</h2>
          <p className="font-['Montserrat'] text-lg text-white/90 mb-8 leading-relaxed">
            God has given every believer a gift. There is a place for you to serve.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/get-involved" className="font-['Montserrat'] px-8 py-4 bg-white text-[#E8821A] rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg">
              Join a Ministry
            </Link>
            <Link to="/contact" className="font-['Montserrat'] px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/10 transition-all duration-300 shadow-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
