import { useState, useEffect } from 'react';
import { SectionFooter } from '../components/SectionFooter';
import { SocialIcon } from '../components/SocialIcon';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { sanityClient, urlFor } from '../../lib/sanityClient';

const socialLinks = [
  { platform: 'tiktok' as const, url: 'https://www.tiktok.com/@llpentecostalchurch?is_from_webapp=1&sender_device=pc' },
  { platform: 'youtube' as const, url: 'https://youtube.com/@lilongwepentecostalchurch-l1u?si=vbWjtir34kbr5grZ' },
  { platform: 'facebook' as const, url: 'https://web.facebook.com/lilongwepentecostalchurch' },
  { platform: 'instagram' as const, url: 'https://instagram.com/lpc' },
];

interface StaffMember {
  _id: string;
  name: string;
  title: string;
  department: string;
  photo?: any;
  shortBio?: string;
  isLeadPastor?: boolean;
}

const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1560279800-8b23f487ce83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400';

export function Leadership() {
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "staffMember"] | order(order asc) { _id, name, title, department, photo, shortBio, isLeadPastor }`)
      .then((data: StaffMember[]) => {
        if (data) setStaff(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const bishop = staff.find(s => s.isLeadPastor);
  const pastors = staff.filter(s => s.department === 'elders' ? false : !s.isLeadPastor && s.department !== 'deacons' && s.department !== 'ministry-leaders');
  const elders = staff.filter(s => s.department === 'elders');
  const deacons = staff.filter(s => s.department === 'deacons');
  const ministryLeaders = staff.filter(s => s.department === 'ministry-leaders');

  // Fallback placeholders when Sanity has no data yet
  const fallbackPastors = [
    { name: "[PASTOR NAME]", role: "Pastor — Youth", description: "Empowering the next generation" },
    { name: "[PASTOR NAME]", role: "Pastor — Worship", description: "Leading us into His presence" },
    { name: "[PASTOR NAME]", role: "Pastor — Outreach", description: "Taking the Gospel to the city" },
  ];

  const fallbackMinistries = ["Youth Ministry", "Women's Ministry", "Worship Ministry", "Children's Ministry", "Men's Ministry", "Outreach Ministry"];

  return (
    <div className="min-h-screen">
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/40 via-[#C94A1A]/30 to-[#7A1A0A]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/20 to-[#1A0500]/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="font-['Signature'] text-3xl text-[#E8821A] text-center mb-4">Meet Our Leadership</p>
          <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl md:text-6xl text-white text-center mb-16 tracking-wider">
            THOSE WHO SERVE YOU
          </h2>

          {loading && (
            <p className="font-['Montserrat'] text-white/60 text-center py-12">Loading leadership...</p>
          )}

          {/* Tier 1 - The Bishop */}
          <div className="mb-16 pb-8 border-b border-[#E8821A]/30">
            <div className="max-w-4xl mx-auto bg-gradient-radial from-[#E8821A]/20 via-[#C94A1A]/10 to-transparent backdrop-blur-sm border-2 border-[#E8821A] rounded-lg overflow-hidden shadow-[0_0_40px_rgba(232,130,26,0.4)]">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="relative h-96">
                  <ImageWithFallback
                    src={bishop?.photo ? urlFor(bishop.photo).width(600).url() : PLACEHOLDER_IMG}
                    alt={bishop?.name ?? 'Bishop'}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#E8821A]/40 to-transparent rounded-lg"></div>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-['TAN-BUSTER'] text-4xl text-white mb-2 tracking-wide">
                    {bishop?.name ?? 'BISHOP DAVID CHIGAMBA'}
                  </h3>
                  <p className="font-['Signature'] text-3xl text-[#E8821A] mb-6">
                    {bishop?.title ?? 'Bishop'}
                  </p>
                  <p className="font-['Montserrat'] text-white/90 leading-relaxed mb-6">
                    {bishop?.shortBio ?? 'Leading with wisdom and compassion, our Bishop has served the Lilongwe community for over two decades, guiding our church family in spiritual growth and Kingdom impact.'}
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#E8821A] flex items-center justify-center text-white hover:bg-[#C94A1A] transition-colors">
                        <SocialIcon platform={social.platform} size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tier 2 - Pastors */}
          <div className="mb-16 pb-8 border-b border-[#E8821A]/30">
            <h3 className="font-['TAN-BUSTER'] text-3xl text-white mb-8 tracking-wide">OUR PASTORS</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {(pastors.length > 0 ? pastors : fallbackPastors).map((pastor: any, index) => (
                <div key={pastor._id ?? index}
                  className="bg-gradient-radial from-[#E8821A]/20 via-[#C94A1A]/10 to-transparent backdrop-blur-sm border border-[#E8821A] rounded-lg overflow-hidden hover:shadow-[0_0_20px_rgba(232,130,26,0.3)] transition-all">
                  <div className="relative h-64">
                    <ImageWithFallback
                      src={pastor.photo ? urlFor(pastor.photo).width(400).url() : PLACEHOLDER_IMG}
                      alt={pastor.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#7A1A0A] via-[#7A1A0A]/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-['TAN-BUSTER'] text-xl text-white mb-2 tracking-wide">{pastor.name}</h4>
                    <p className="font-['Signature'] text-2xl text-[#E8821A] mb-3">{pastor.title ?? pastor.role}</p>
                    <p className="font-['Montserrat'] text-sm text-white/80 mb-4">{pastor.shortBio ?? pastor.description}</p>
                    <div className="flex gap-2">
                      {socialLinks.map((social) => (
                        <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-[#E8821A] flex items-center justify-center text-white hover:bg-[#C94A1A] transition-colors">
                          <SocialIcon platform={social.platform} size={14} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tier 3 - Elders */}
          <div className="mb-16 pb-8 border-b border-[#E8821A]/30">
            <h3 className="font-['TAN-BUSTER'] text-3xl text-white mb-8 tracking-wide">ELDERS</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {(elders.length > 0 ? elders : Array.from({ length: 13 })).map((elder: any, index) => (
                <div key={elder?._id ?? index} className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-3">
                    <div className="w-full h-full rounded-full border-4 border-[#E8821A] overflow-hidden">
                      <ImageWithFallback
                        src={elder?.photo ? urlFor(elder.photo).width(200).url() : PLACEHOLDER_IMG}
                        alt={elder?.name ?? 'Elder'}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <p className="font-['Montserrat'] font-bold text-white text-sm mb-1">{elder?.name ?? '[NAME]'}</p>
                  <p className="font-['Signature'] text-lg text-[#E8821A]">Elder</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tier 4 - Deacons */}
          <div className="mb-16 pb-8 border-b border-[#E8821A]/30">
            <h3 className="font-['TAN-BUSTER'] text-3xl text-white mb-8 tracking-wide">DEACONS</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {(deacons.length > 0 ? deacons : Array.from({ length: 13 })).map((deacon: any, index) => (
                <div key={deacon?._id ?? index} className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-3">
                    <div className="w-full h-full rounded-full border-4 border-[#E8821A] overflow-hidden">
                      <ImageWithFallback
                        src={deacon?.photo ? urlFor(deacon.photo).width(200).url() : PLACEHOLDER_IMG}
                        alt={deacon?.name ?? 'Deacon'}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <p className="font-['Montserrat'] font-bold text-white text-sm mb-1">{deacon?.name ?? '[NAME]'}</p>
                  <p className="font-['Signature'] text-lg text-[#E8821A]">Deacon</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tier 5 - Ministry Leaders */}
          <div className="mb-8">
            <h3 className="font-['TAN-BUSTER'] text-3xl text-white mb-8 tracking-wide">MINISTRY LEADERS</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {(ministryLeaders.length > 0 ? ministryLeaders : fallbackMinistries.map(m => ({ name: '[NAME]', title: m }))).map((leader: any, index) => (
                <div key={leader?._id ?? index} className="text-center group cursor-pointer">
                  <div className="relative w-24 h-24 mx-auto mb-3">
                    <div className="w-full h-full rounded-full border-4 border-[#E8821A] overflow-hidden group-hover:shadow-[0_0_20px_rgba(232,130,26,0.6)] transition-all">
                      <ImageWithFallback
                        src={leader?.photo ? urlFor(leader.photo).width(200).url() : PLACEHOLDER_IMG}
                        alt={leader?.name ?? 'Ministry Leader'}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                  </div>
                  <p className="font-['Montserrat'] font-bold text-white text-sm mb-1">{leader?.name ?? '[NAME]'}</p>
                  <p className="font-['Signature'] text-lg text-[#E8821A]">{leader?.title}</p>
                </div>
              ))}
            </div>
          </div>

          <SectionFooter />
        </div>
      </section>
    </div>
  );
}
