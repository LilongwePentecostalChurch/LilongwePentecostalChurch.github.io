import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { Book, Flower2, Zap, Shield, Heart, Globe, Hand, Clock, MapPin, Phone, Mail, ChevronRight, ChevronLeft, Expand, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { SocialIcon } from '../../components/SocialIcon';
import { LPCLogo } from '../../components/LPCLogo';

export interface MinistryData {
  id: string;
  name: string;
  icon: typeof Book;
  tagline: string;
  heroImage: string;
  aboutTitle: string;
  aboutText: string[];
  values: Array<{ icon: typeof Book; name: string; description: string }>;
  leaderPhoto: string;
  leaderName: string;
  leaderTitle: string;
  leaderBio: string;
  meetingDay: string;
  meetingTime: string;
  location: string;
  phone: string;
  email: string;
  whatsapp: string;
  galleryImages: Array<{ src: string; caption: string }>;
  ageClasses?: Array<{ ageRange: string; className: string; color: string }>;
  rotatingGallery?: Array<{ src: string; caption: string }>;
  upcomingEvents?: Array<{ title: string; date: string; time: string; location: string; description: string }>;
}

interface MinistryTemplateProps {
  ministry: MinistryData;
  allMinistries: MinistryData[];
}

const socialLinks = [
  { platform: 'tiktok' as const, url: 'https://www.tiktok.com/@llpentecostalchurch?is_from_webapp=1&sender_device=pc' },
  { platform: 'youtube' as const, url: 'https://youtube.com/@lilongwepentecostalchurch-l1u?si=vbWjtir34kbr5grZ' },
  { platform: 'facebook' as const, url: 'https://web.facebook.com/lilongwepentecostalchurch' },
  { platform: 'instagram' as const, url: 'https://instagram.com/lpc' },
];

export function MinistryTemplate({ ministry, allMinistries }: MinistryTemplateProps) {
  const Icon = ministry.icon;
  const otherMinistries = allMinistries.filter(m => m.id !== ministry.id);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const gallery = ministry.rotatingGallery || [];

  // Auto-rotate gallery
  useEffect(() => {
    if (gallery.length === 0) return;
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % gallery.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [gallery.length]);

  return (
    <div>
      {/* Section 1 - Ministry Hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <ImageWithFallback
          src={ministry.heroImage}
          alt={ministry.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tl from-[#7A1A0A]/90 via-[#C94A1A]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] opacity-30"></div>

        {/* Breadcrumb */}
        <div className="absolute top-6 left-6 z-10">
          <div className="flex items-center gap-2 font-['Montserrat'] text-sm text-white/90">
            <Link to="/" className="hover:text-[#E8821A] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="hover:text-[#E8821A] transition-colors cursor-pointer">Ministries</span>
            <ChevronRight size={14} />
            <span className="text-[#E8821A]">{ministry.name}</span>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-['Signature'] text-2xl text-[#E8821A] italic mb-2">
                Lilongwe Pentecostal Church
              </p>
              <h1 className="font-['TAN-BUSTER'] text-5xl sm:text-6xl md:text-7xl text-white mb-4 tracking-wider">
                {ministry.name.toUpperCase()}
              </h1>
              <p className="font-['Montserrat'] text-xl text-white/90 mb-6">
                {ministry.tagline}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/connect/plan-your-visit"
                  className="px-8 py-3 bg-[#E8821A] text-white rounded-full font-['Montserrat'] font-bold hover:bg-[#C94A1A] transition-colors"
                >
                  Join This Ministry
                </Link>
                <Link
                  to="/connect/counselling-prayer"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-['Montserrat'] font-bold hover:bg-white hover:text-[#1A0500] transition-colors"
                >
                  Contact Leader
                </Link>
              </div>
            </div>
            <LPCLogo size={48} />
          </div>
        </div>
      </section>

      {/* Section 2 - About the Ministry */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#C94A1A]/30 via-[#7A1A0A]/20 to-[#1A0500]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <p className="font-['Signature'] text-2xl text-[#E8821A] italic mb-2">About Us</p>
              <h2 className="font-['TAN-BUSTER'] text-4xl text-white mb-4 tracking-wider">WHO WE ARE</h2>
              <div className="w-24 h-1 bg-[#E8821A] mb-6"></div>
              
              <div className="space-y-4 mb-8">
                {ministry.aboutText.map((paragraph, idx) => (
                  <p key={idx} className="font-['Montserrat'] text-white/90 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                {ministry.values.map((value, idx) => {
                  const ValueIcon = value.icon;
                  return (
                    <div key={idx} className="bg-[#1A0500]/60 border border-[#E8821A]/30 rounded-lg p-4 text-center hover:border-[#E8821A] transition-colors">
                      <ValueIcon className="text-[#E8821A] mx-auto mb-2" size={24} />
                      <p className="font-['Montserrat'] font-bold text-white text-sm mb-1">{value.name}</p>
                      <p className="font-['Montserrat'] text-white/70 text-xs">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#E8821A]/50 shadow-[0_0_30px_rgba(232,130,26,0.2)]">
                <ImageWithFallback
                  src={ministry.heroImage}
                  alt={ministry.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7A1A0A]/60 to-transparent"></div>
              </div>

              {/* Leader Card */}
              <div className="bg-[#1A0500]/80 border-2 border-[#E8821A] rounded-lg p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#E8821A] ring-4 ring-[#E8821A]/30 flex-shrink-0">
                    <ImageWithFallback
                      src={ministry.leaderPhoto}
                      alt={ministry.leaderName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Montserrat'] font-bold text-white text-lg">{ministry.leaderName}</h3>
                    <p className="font-['Signature'] text-[#E8821A] text-sm mb-2">{ministry.leaderTitle}</p>
                    <p className="font-['Montserrat'] text-white/80 text-sm">{ministry.leaderBio}</p>
                  </div>
                </div>
                <div className="flex gap-2 justify-center pt-4 border-t border-[#E8821A]/30">
                  {socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#E8821A] flex items-center justify-center hover:bg-[#C94A1A] transition-colors"
                    >
                      <SocialIcon platform={social.platform} size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Classes Section (Sunday School only) */}
      {ministry.ageClasses && ministry.ageClasses.length > 0 && (
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/15 via-[#7A1A0A]/20 to-[#1A0500]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-30"></div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-['Signature'] text-2xl text-[#E8821A] italic mb-2">Our Classes</p>
              <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white mb-4 tracking-wider">AGE GROUPS</h2>
              <div className="w-32 h-1 bg-[#E8821A] mx-auto mb-4"></div>
              <p className="font-['Montserrat'] text-white/80 max-w-2xl mx-auto">
                Every child and teenager has a place in our Sunday School. We provide age-appropriate teaching tailored to each group.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {ministry.ageClasses.map((ageClass, idx) => (
                <div
                  key={idx}
                  className="relative group rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(232,130,26,0.3)]"
                  style={{ borderColor: ageClass.color }}
                >
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{ background: `linear-gradient(135deg, ${ageClass.color}, transparent)` }}
                  />
                  <div className="relative p-8 text-center">
                    <div
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ background: `${ageClass.color}25`, border: `2px solid ${ageClass.color}` }}
                    >
                      <span className="font-['TAN-BUSTER'] text-xl text-white">{idx + 1}</span>
                    </div>
                    <h3 className="font-['TAN-BUSTER'] text-xl text-white mb-2 tracking-wide">
                      {ageClass.className.toUpperCase()}
                    </h3>
                    <div
                      className="inline-block px-4 py-1.5 rounded-full font-['Montserrat'] text-sm text-white mb-3"
                      style={{ background: ageClass.color }}
                    >
                      Ages {ageClass.ageRange}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Rotating Gallery (Sunday School only) */}
      {gallery.length > 0 && (
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-[#C94A1A]/20 via-[#7A1A0A]/15 to-[#1A0500]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-30"></div>

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-['Signature'] text-2xl text-[#E8821A] italic mb-2">Moments</p>
              <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white mb-4 tracking-wider">GALLERY</h2>
              <div className="w-32 h-1 bg-[#E8821A] mx-auto"></div>
            </div>

            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#E8821A]/40 shadow-[0_0_50px_rgba(232,130,26,0.2)] mb-6 aspect-[16/9]">
              {gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{ opacity: idx === galleryIndex ? 1 : 0 }}
                >
                  <ImageWithFallback
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0500]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="font-['Montserrat'] text-white text-lg">{img.caption}</p>
                  </div>
                </div>
              ))}

              {/* Navigation arrows */}
              <button
                onClick={() => setGalleryIndex((prev) => (prev - 1 + gallery.length) % gallery.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1A0500]/60 border border-[#E8821A]/50 flex items-center justify-center text-white hover:bg-[#E8821A] transition-colors z-10"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setGalleryIndex((prev) => (prev + 1) % gallery.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1A0500]/60 border border-[#E8821A]/50 flex items-center justify-center text-white hover:bg-[#E8821A] transition-colors z-10"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Thumbnail strip */}
            <div className="flex justify-center gap-3">
              {gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setGalleryIndex(idx)}
                  className="relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0"
                  style={{
                    borderColor: idx === galleryIndex ? '#E8821A' : 'rgba(232,130,26,0.2)',
                    opacity: idx === galleryIndex ? 1 : 0.5,
                    transform: idx === galleryIndex ? 'scale(1.1)' : 'scale(1)',
                  }}
                >
                  <ImageWithFallback src={img.src} alt={img.caption} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Events Section */}
      {ministry.upcomingEvents && ministry.upcomingEvents.length > 0 && (
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/15 via-[#C94A1A]/15 to-[#1A0500]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-30"></div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-['Signature'] text-2xl text-[#E8821A] italic mb-2">What's Coming Up</p>
              <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white mb-4 tracking-wider">UPCOMING EVENTS</h2>
              <div className="w-32 h-1 bg-[#E8821A] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ministry.upcomingEvents.map((event, idx) => {
                const dateParts = event.date.split(' ');
                const day = dateParts[0] || '';
                const monthYear = dateParts.slice(1).join(' ') || '';
                return (
                  <div
                    key={idx}
                    className="bg-[#1A0500]/70 border border-[#E8821A]/30 rounded-2xl overflow-hidden hover:border-[#E8821A] hover:shadow-[0_0_30px_rgba(232,130,26,0.2)] transition-all duration-300 group"
                  >
                    {/* Date Header */}
                    <div className="bg-gradient-to-r from-[#E8821A] to-[#C94A1A] p-4 flex items-center gap-4">
                      <div className="bg-white/20 rounded-lg px-4 py-2 text-center flex-shrink-0">
                        <p className="font-['TAN-BUSTER'] text-2xl text-white leading-none">{day}</p>
                        <p className="font-['Montserrat'] text-white/90 text-xs">{monthYear}</p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-['TAN-BUSTER'] text-lg text-white tracking-wide truncate">
                          {event.title.toUpperCase()}
                        </h3>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="p-6 space-y-3">
                      <p className="font-['Montserrat'] text-white/85 text-sm leading-relaxed">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-2 text-white/70">
                        <Clock size={14} className="text-[#E8821A] flex-shrink-0" />
                        <span className="font-['Montserrat'] text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <MapPin size={14} className="text-[#E8821A] flex-shrink-0" />
                        <span className="font-['Montserrat'] text-sm">{event.location}</span>
                      </div>
                      <button className="w-full mt-4 px-6 py-2.5 bg-transparent border border-[#E8821A] text-[#E8821A] rounded-full font-['Montserrat'] text-sm hover:bg-[#E8821A] hover:text-white transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Section 3 - How to Join */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/20 via-[#C94A1A]/10 to-[#1A0500]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-['Signature'] text-2xl text-[#E8821A] italic mb-2">Get Connected</p>
            <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white mb-4 tracking-wider">HOW TO JOIN</h2>
            <div className="w-32 h-1 bg-[#E8821A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { number: '01', icon: MapPin, title: 'ATTEND A MEETING', description: 'Come to any of our regular meetings. No registration needed. Just show up and experience the community.' },
              { number: '02', icon: Hand, title: 'MEET THE LEADER', description: 'Introduce yourself to the ministry leader after the meeting. They will welcome you and answer any questions you have about getting involved.' },
              { number: '03', icon: Phone, title: 'GET CONNECTED', description: 'Fill in a simple connection form or speak to a pastor. We will add you to the ministry WhatsApp group and keep you updated on all activities.' }
            ].map((step) => {
              const StepIcon = step.icon;
              return (
                <div key={step.number} className="bg-[#1A0500]/60 border border-[#E8821A]/30 rounded-lg p-8 hover:border-[#E8821A] hover:scale-105 transition-all duration-200">
                  <p className="font-['TAN-BUSTER'] text-5xl text-[#E8821A] mb-4">{step.number}</p>
                  <StepIcon className="text-[#E8821A] mb-4" size={32} />
                  <h3 className="font-['Montserrat'] font-bold text-white text-lg mb-3">{step.title}</h3>
                  <p className="font-['Montserrat'] text-white/80">{step.description}</p>
                </div>
              );
            })}
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-[#E8821A] via-[#C94A1A] to-[#7A1A0A] rounded-2xl p-12 text-center">
            <h3 className="font-['TAN-BUSTER'] text-3xl sm:text-4xl text-white mb-4 tracking-wider">READY TO JOIN US?</h3>
            <p className="font-['Montserrat'] text-white/90 mb-6">Take the first step today — we would love to have you.</p>
            <button className="px-10 py-4 bg-white text-[#1A0500] rounded-full font-['Montserrat'] font-bold hover:bg-[#E8821A] hover:text-white transition-colors mb-4">
              Fill In Connection Form
            </button>
            <p className="font-['Montserrat'] text-white/80 text-sm">Or speak to any of our pastors after Sunday service.</p>
          </div>
        </div>
      </section>

      {/* Section 4 - Contact the Ministry */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/30 via-[#C94A1A]/20 to-[#1A0500]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-['Signature'] text-2xl text-[#E8821A] italic mb-2">Get In Touch</p>
            <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white mb-4 tracking-wider">CONTACT US</h2>
            <div className="w-32 h-1 bg-[#E8821A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#E8821A] ring-4 ring-[#E8821A]/30 flex-shrink-0">
                  <ImageWithFallback
                    src={ministry.leaderPhoto}
                    alt={ministry.leaderName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-['TAN-BUSTER'] text-2xl text-white mb-1">{ministry.leaderName}</h3>
                  <p className="font-['Signature'] text-[#E8821A] mb-2">{ministry.leaderTitle}</p>
                  <p className="font-['Montserrat'] text-white/80 text-sm">{ministry.leaderBio}</p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-3">
                  <Phone className="text-[#E8821A]" size={20} />
                  <span className="font-['Montserrat'] text-white">{ministry.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-[#E8821A]" size={20} />
                  <span className="font-['Montserrat'] text-white">{ministry.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-[#E8821A]" size={20} />
                  <span className="font-['Montserrat'] text-white">WhatsApp: {ministry.whatsapp}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-[#E8821A]" size={20} />
                  <span className="font-['Montserrat'] text-white">{ministry.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-[#E8821A]" size={20} />
                  <span className="font-['Montserrat'] text-white">{ministry.meetingDay} {ministry.meetingTime}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#E8821A] flex items-center justify-center hover:bg-[#C94A1A] transition-colors"
                  >
                    <SocialIcon platform={social.platform} size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="bg-[#1A0500]/80 border-2 border-[#E8821A] rounded-2xl p-8">
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-[#1A0500] border border-[#E8821A]/30 rounded-lg text-white font-['Montserrat'] focus:border-[#E8821A] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-[#1A0500] border border-[#E8821A]/30 rounded-lg text-white font-['Montserrat'] focus:border-[#E8821A] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-[#1A0500] border border-[#E8821A]/30 rounded-lg text-white font-['Montserrat'] focus:border-[#E8821A] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={ministry.name}
                    readOnly
                    className="w-full px-4 py-3 bg-[#1A0500]/50 border border-[#E8821A]/30 rounded-lg text-white/60 font-['Montserrat'] cursor-not-allowed"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message or Question"
                    rows={4}
                    className="w-full px-4 py-3 bg-[#1A0500] border border-[#E8821A]/30 rounded-lg text-white font-['Montserrat'] focus:border-[#E8821A] focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#E8821A] text-white rounded-full font-['Montserrat'] font-bold hover:bg-[#C94A1A] transition-colors"
                >
                  Send Message
                </button>
                <p className="text-center font-['Montserrat'] text-white/70 text-sm">
                  We will get back to you within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Other Ministries */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#7A1A0A]/40 to-[#1A0500]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-['Signature'] text-2xl text-[#E8821A] italic mb-2">Explore More</p>
            <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white mb-4 tracking-wider">OTHER MINISTRIES</h2>
            <div className="w-32 h-1 bg-[#E8821A] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {otherMinistries.map((otherMinistry) => (
              <Link
                key={otherMinistry.id}
                to={`/ministries/${otherMinistry.id}`}
                className="flex flex-col items-center group hover:scale-105 transition-transform duration-200"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#E8821A] ring-4 ring-[#E8821A]/30 mb-3 group-hover:shadow-[0_0_30px_rgba(232,130,26,0.6)] transition-shadow">
                  <ImageWithFallback
                    src={otherMinistry.heroImage}
                    alt={otherMinistry.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-['TAN-BUSTER'] text-sm text-white text-center mb-1">{otherMinistry.name.toUpperCase()}</h3>
                <p className="font-['Signature'] text-[#E8821A] text-xs text-center mb-2">{otherMinistry.tagline.substring(0, 30)}...</p>
                <span className="px-4 py-1 bg-[#E8821A] text-white rounded-full text-xs font-['Montserrat'] font-bold group-hover:bg-[#C94A1A] transition-colors">
                  Visit
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}