import { Calendar, Clock, MapPin } from 'lucide-react';
import { LPCLogo } from '../components/LPCLogo';
import { SocialIcon } from '../components/SocialIcon';
import { SectionFooter } from '../components/SectionFooter';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const socialLinks = [
  { platform: 'tiktok' as const, url: 'https://www.tiktok.com/@llpentecostalchurch?is_from_webapp=1&sender_device=pc' },
  { platform: 'youtube' as const, url: 'https://youtube.com/@lilongwepentecostalchurch-l1u?si=vbWjtir34kbr5grZ' },
  { platform: 'facebook' as const, url: 'https://web.facebook.com/lilongwepentecostalchurch' },
  { platform: 'instagram' as const, url: 'https://instagram.com/lpc' },
];

export function Events() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/50 via-[#C94A1A]/40 to-[#7A1A0A]/30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#1A0500]/50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yNSIvPjwvc3ZnPg==')] opacity-40"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="font-['Signature'] text-3xl text-[#E8821A] mb-4">What's Happening</p>
          <h1 className="font-['TAN-BUSTER'] text-5xl sm:text-6xl md:text-7xl text-white mb-6 tracking-wider">
            EVENTS & ANNOUNCEMENTS
          </h1>
          <p className="font-['Montserrat'] text-lg text-white/90 max-w-2xl mx-auto">
            Stay connected with all the latest happenings at Lilongwe Pentecostal Church
          </p>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#7A1A0A]/60 to-[#1A0500]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] opacity-40"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white mb-12 tracking-wider border-l-4 border-[#E8821A] pl-6">
            LATEST ANNOUNCEMENTS
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "New Care Group Sessions Starting",
                date: "March 25, 2026",
                description: "Join us for our new weekly Care Group sessions focused on deepening our understanding of God's Word and building stronger community bonds."
              },
              {
                title: "Easter Sunday Celebration",
                date: "April 20, 2026",
                description: "Mark your calendars for our special Easter Sunday celebration service with baptism, communion, and powerful worship."
              },
              {
                title: "Volunteer Opportunities Available",
                date: "Ongoing",
                description: "We're looking for volunteers to serve in various ministries including children's ministry, worship team, and community outreach."
              }
            ].map((announcement, index) => (
              <div
                key={index}
                className="bg-gradient-radial from-[#E8821A]/20 via-[#C94A1A]/10 to-transparent backdrop-blur-sm border-2 border-[#E8821A]/50 rounded-lg p-8 hover:border-[#E8821A] hover:shadow-[0_0_30px_rgba(232,130,26,0.3)] transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <h3 className="font-['TAN-BUSTER'] text-2xl sm:text-3xl text-white tracking-wide">
                    {announcement.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#E8821A]">
                    <Calendar size={18} />
                    <span className="font-['Montserrat'] font-semibold">{announcement.date}</span>
                  </div>
                </div>
                <p className="font-['Montserrat'] text-white/90 leading-relaxed">
                  {announcement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#C94A1A]/50 via-[#7A1A0A]/40 to-[#1A0500]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white mb-12 tracking-wider border-l-4 border-[#E8821A] pl-6">
            UPCOMING EVENTS
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "RECHARGE - A PRAISE & WORSHIP SERVICE",
                date: "February 25, 2026",
                time: "6:00 PM - 7:30 PM",
                location: "Lilongwe Pentecostal Church",
                description: "Join us for an evening of powerful praise and worship featuring Artist Paul Kachala. Come and be refreshed, renewed, and recharged in the presence of God.",
                image: "https://images.unsplash.com/photo-1765947382559-93260e5d6c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzc0MDA5Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
                featured: true,
                artist: "Paul Kachala"
              },
              {
                title: "ANOINTING SERVICE",
                date: "March 28, 2026",
                time: "6:00 PM - 9:00 PM",
                location: "Main Sanctuary",
                description: "Join us for a special evening of prayer, worship, and anointing for breakthrough and spiritual empowerment.",
                image: "https://images.unsplash.com/photo-1575516662637-99214ea59f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5aW5nJTIwaGFuZHMlMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzc0MDM3MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
                featured: true
              },
              {
                title: "HOLY COMMUNION",
                date: "April 6, 2026",
                time: "9:00 AM & 11:00 AM",
                location: "Main Sanctuary",
                description: "First Sunday of the month communion service. Come prepared to encounter the Lord at His table.",
                image: "https://images.unsplash.com/photo-1765947382559-93260e5d6c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzc0MDA5Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
                featured: true
              },
              {
                title: "YOUTH CONFERENCE 2026",
                date: "April 15-17, 2026",
                time: "3-Day Event",
                location: "LPC Campus",
                description: "Three days of powerful teaching, worship, and fellowship designed specifically for our youth and young adults.",
                image: "https://images.unsplash.com/photo-1769755411779-e4c43e7b7742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB5b3V0aCUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NzQwMzc3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
                featured: false
              },
              {
                title: "CITY-WIDE GOSPEL CRUSADE",
                date: "May 10-12, 2026",
                time: "Evening Services",
                location: "Outdoor Venue - TBA",
                description: "A massive outdoor evangelistic crusade bringing the Gospel to the streets of Lilongwe with signs, wonders, and miracles.",
                image: "https://images.unsplash.com/photo-1759893025633-1de7a4da5d6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3NwZWwlMjBjcnVzYWRlJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzQwMzc3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
                featured: false
              },
              {
                title: "PRAYER & FASTING",
                date: "Every Friday",
                time: "6:00 PM - 8:00 PM",
                location: "Prayer Room",
                description: "Weekly corporate prayer and fasting for spiritual breakthrough, church growth, and national transformation.",
                image: "https://images.unsplash.com/photo-1575516662637-99214ea59f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5aW5nJTIwaGFuZHMlMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzc0MDM3MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
                featured: false
              },
              {
                title: "WOMEN'S FELLOWSHIP",
                date: "March 30, 2026",
                time: "10:00 AM - 1:00 PM",
                location: "Fellowship Hall",
                description: "Monthly gathering for women to connect, pray, and be empowered through teaching and fellowship.",
                image: "https://images.unsplash.com/photo-1604443830970-05ac4193ada9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb25ncmVnYXRpb24lMjB3b3JzaGlwfGVufDF8fHx8MTc3Mzk1MDQ3NHww&ixlib=rb-4.1.0&q=80&w=1080",
                featured: false
              }
            ].map((event, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg bg-gradient-radial from-[#E8821A]/30 via-[#C94A1A]/20 to-[#7A1A0A]/10 backdrop-blur-sm border-2 ${
                  event.featured ? 'border-[#E8821A] shadow-[0_0_30px_rgba(232,130,26,0.4)]' : 'border-[#E8821A]/50'
                } hover:border-[#E8821A] hover:shadow-[0_0_30px_rgba(232,130,26,0.4)] transition-all duration-300`}
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0500] via-[#1A0500]/60 to-transparent"></div>
                  
                  {event.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-2 bg-[#E8821A] text-white font-['Montserrat'] font-bold text-sm rounded-full">
                        FEATURED
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="font-['TAN-BUSTER'] text-3xl text-white mb-4 tracking-wide">
                    {event.title}
                  </h3>

                  {/* Artist Badge - Only for Recharge Event */}
                  {'artist' in event && event.artist && (
                    <div className="mb-4">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8821A] rounded-full">
                        <span className="font-['Montserrat'] font-bold text-sm text-white">Artist:</span>
                        <span className="font-['Montserrat'] font-bold text-sm text-white">{event.artist}</span>
                      </span>
                    </div>
                  )}

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-[#E8821A]">
                      <Calendar size={18} />
                      <span className="font-['Montserrat'] font-semibold">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#E8821A]">
                      <Clock size={18} />
                      <span className="font-['Montserrat'] font-semibold">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#E8821A]">
                      <MapPin size={18} />
                      <span className="font-['Montserrat'] font-semibold">{event.location}</span>
                    </div>
                  </div>

                  <p className="font-['Montserrat'] text-white/90 mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-[#E8821A]/30">
                    <div className="flex gap-2">
                      {socialLinks.map((social) => (
                        <a
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-[#E8821A] flex items-center justify-center text-white hover:bg-[#C94A1A] transition-colors"
                        >
                          <SocialIcon platform={social.platform} size={14} />
                        </a>
                      ))}
                    </div>
                    <LPCLogo size={35} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <SectionFooter />
        </div>
      </section>

      {/* Calendar CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/60 via-[#C94A1A]/50 to-[#7A1A0A]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#1A0500]/50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] opacity-50"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white mb-6 tracking-wider">
            NEVER MISS AN EVENT
          </h2>
          <p className="font-['Montserrat'] text-lg text-white/90 mb-8">
            Follow us on social media to stay updated on all our events, announcements, and special services
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-[#1A0500]/80 border-2 border-white rounded-full text-white hover:bg-white hover:text-[#1A0500] transition-all font-['Montserrat'] font-bold"
              >
                <SocialIcon platform={social.platform} size={20} />
                Follow on {social.platform.charAt(0).toUpperCase() + social.platform.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}