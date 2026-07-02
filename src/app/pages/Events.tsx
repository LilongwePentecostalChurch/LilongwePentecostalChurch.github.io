import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { LPCLogo } from '../components/LPCLogo';
import { SocialIcon } from '../components/SocialIcon';
import { SectionFooter } from '../components/SectionFooter';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { sanityClient, urlFor } from '../../lib/sanityClient';

const socialLinks = [
  { platform: 'tiktok' as const, url: 'https://www.tiktok.com/@llpentecostalchurch?is_from_webapp=1&sender_device=pc' },
  { platform: 'youtube' as const, url: 'https://youtube.com/@lilongwepentecostalchurch-l1u?si=vbWjtir34kbr5grZ' },
  { platform: 'facebook' as const, url: 'https://web.facebook.com/lilongwepentecostalchurch' },
  { platform: 'instagram' as const, url: 'https://instagram.com/lpc' },
];

// Fallback events shown while Sanity loads or if empty
const fallbackEvents = [
  {
    title: "RECHARGE - A PRAISE & WORSHIP SERVICE",
    date: "February 25, 2026",
    time: "6:00 PM - 7:30 PM",
    location: "Lilongwe Pentecostal Church",
    description: "Join us for an evening of powerful praise and worship. Come and be refreshed, renewed, and recharged in the presence of God.",
    image: "https://images.unsplash.com/photo-1765947382559-93260e5d6c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    featured: true,
  },
  {
    title: "ANOINTING SERVICE",
    date: "March 28, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "Main Sanctuary",
    description: "A special evening of prayer, worship, and anointing for breakthrough and spiritual empowerment.",
    image: "https://images.unsplash.com/photo-1575516662637-99214ea59f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    featured: true,
  },
  {
    title: "HOLY COMMUNION",
    date: "April 6, 2026",
    time: "9:00 AM & 11:00 AM",
    location: "Main Sanctuary",
    description: "First Sunday of the month communion service. Come prepared to encounter the Lord at His table.",
    image: "https://images.unsplash.com/photo-1765947382559-93260e5d6c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    featured: true,
  },
  {
    title: "YOUTH CONFERENCE 2026",
    date: "April 15-17, 2026",
    time: "3-Day Event",
    location: "LPC Campus",
    description: "Three days of powerful teaching, worship, and fellowship for our youth and young adults.",
    image: "https://images.unsplash.com/photo-1769755411779-e4c43e7b7742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    featured: false,
  },
];

const fallbackAnnouncements = [
  { title: "New Care Group Sessions Starting", date: "March 25, 2026", description: "Join us for our new weekly Care Group sessions focused on deepening our understanding of God's Word." },
  { title: "Easter Sunday Celebration", date: "April 20, 2026", description: "Mark your calendars for our special Easter Sunday celebration service with baptism, communion, and powerful worship." },
  { title: "Volunteer Opportunities Available", date: "Ongoing", description: "We're looking for volunteers to serve in children's ministry, worship team, and community outreach." },
];

interface SanityEvent {
  _id: string;
  title: string;
  date: string;
  endDate?: string;
  location?: string;
  description?: any[];
  image?: any;
  isFeatured?: boolean;
  registrationUrl?: string;
}

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

function formatTime(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  } catch {
    return '';
  }
}

export function Events() {
  const [upcomingEvents, setUpcomingEvents] = useState<any[]>(fallbackEvents);
  const [announcements, setAnnouncements] = useState<any[]>(fallbackAnnouncements);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "event"] | order(date asc) { _id, title, date, endDate, location, description, image, isFeatured, category, registrationUrl }`)
      .then((data: SanityEvent[]) => {
        if (data && data.length > 0) {
          const upcoming = data.filter(e => e.category === 'upcoming' || !e.category);
          const annual = data.filter(e => e.category === 'annual');
          if (upcoming.length > 0) {
            setUpcomingEvents(upcoming.map(e => ({
              title: e.title,
              date: formatDate(e.date),
              time: formatTime(e.date),
              location: e.location ?? 'LPC Main Sanctuary',
              description: Array.isArray(e.description)
                ? e.description.map((b: any) => b.children?.map((c: any) => c.text).join('')).join(' ')
                : '',
              image: e.image ? urlFor(e.image).width(800).url() : '',
              featured: e.isFeatured ?? false,
              registrationUrl: e.registrationUrl,
            })));
          }
          if (annual.length > 0) {
            setAnnouncements(annual.map(e => ({
              title: e.title,
              date: formatDate(e.date),
              description: Array.isArray(e.description)
                ? e.description.map((b: any) => b.children?.map((c: any) => c.text).join('')).join(' ')
                : '',
            })));
          }
        }
      })
      .catch(() => {/* silently use fallback */})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/50 via-[#C94A1A]/40 to-[#7A1A0A]/30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#1A0500]/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="font-['Signature'] text-3xl text-[#E8821A] mb-4">What's Happening</p>
          <h1 className="font-['TAN-BUSTER'] text-2xl sm:text-5xl md:text-7xl text-white mb-6 tracking-wider">
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

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="font-['TAN-BUSTER'] text-2xl sm:text-4xl md:text-5xl text-white mb-12 tracking-wider border-l-4 border-[#E8821A] pl-6">
            LATEST ANNOUNCEMENTS
          </h2>

          {loading ? (
            <p className="font-['Montserrat'] text-white/60 text-center py-12">Loading announcements...</p>
          ) : (
            <div className="space-y-6">
              {announcements.map((announcement, index) => (
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
          )}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#C94A1A]/50 via-[#7A1A0A]/40 to-[#1A0500]"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white mb-12 tracking-wider border-l-4 border-[#E8821A] pl-6">
            UPCOMING EVENTS
          </h2>

          {loading ? (
            <p className="font-['Montserrat'] text-white/60 text-center py-12">Loading events...</p>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-lg bg-gradient-radial from-[#E8821A]/30 via-[#C94A1A]/20 to-[#7A1A0A]/10 backdrop-blur-sm border-2 ${
                    event.featured ? 'border-[#E8821A] shadow-[0_0_30px_rgba(232,130,26,0.4)]' : 'border-[#E8821A]/50'
                  } hover:border-[#E8821A] hover:shadow-[0_0_30px_rgba(232,130,26,0.4)] transition-all duration-300`}
                >
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0500] via-[#1A0500]/60 to-transparent"></div>
                    {event.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-4 py-2 bg-[#E8821A] text-white font-['Montserrat'] font-bold text-sm rounded-full">FEATURED</span>
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    <h3 className="font-['TAN-BUSTER'] text-3xl text-white mb-4 tracking-wide">{event.title}</h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-[#E8821A]">
                        <Calendar size={18} />
                        <span className="font-['Montserrat'] font-semibold">{event.date}</span>
                      </div>
                      {event.time && (
                        <div className="flex items-center gap-3 text-[#E8821A]">
                          <Clock size={18} />
                          <span className="font-['Montserrat'] font-semibold">{event.time}</span>
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center gap-3 text-[#E8821A]">
                          <MapPin size={18} />
                          <span className="font-['Montserrat'] font-semibold">{event.location}</span>
                        </div>
                      )}
                    </div>

                    <p className="font-['Montserrat'] text-white/90 mb-6 leading-relaxed">{event.description}</p>

                    {event.registrationUrl && (
                      <a
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mb-6 px-6 py-2 bg-[#E8821A] text-white rounded-full font-['Montserrat'] font-bold text-sm hover:bg-[#C94A1A] transition-colors"
                      >
                        Register Now
                      </a>
                    )}

                    <div className="flex items-center justify-between pt-6 border-t border-[#E8821A]/30">
                      <div className="flex gap-2">
                        {socialLinks.map((social) => (
                          <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-[#E8821A] flex items-center justify-center text-white hover:bg-[#C94A1A] transition-colors">
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
          )}

          <SectionFooter />
        </div>
      </section>

      {/* Calendar CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/60 via-[#C94A1A]/50 to-[#7A1A0A]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#1A0500]/50"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white mb-6 tracking-wider">NEVER MISS AN EVENT</h2>
          <p className="font-['Montserrat'] text-lg text-white/90 mb-8">
            Follow us on social media to stay updated on all our events, announcements, and special services
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-[#1A0500]/80 border-2 border-white rounded-full text-white hover:bg-white hover:text-[#1A0500] transition-all font-['Montserrat'] font-bold">
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
