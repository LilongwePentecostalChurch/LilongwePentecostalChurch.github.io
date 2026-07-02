import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Clock, MapPin, Facebook, Instagram, Youtube, CalendarPlus } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { sanityClient } from '../../../lib/sanityClient';

interface SanityEvent {
  _id: string;
  title: string;
  date: string;
  endDate?: string;
  location?: string;
  description?: any[];
  imageUrl?: string;
  isFeatured?: boolean;
  registrationUrl?: string;
  category?: string;
}

function blocksToText(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return '';
  return blocks.map((b: any) => b.children?.map((c: any) => c.text).join('') ?? '').join(' ');
}

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch { return dateStr; }
}

function formatTime(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  } catch { return ''; }
}

function getDay(dateStr: string) {
  try { return new Date(dateStr).getDate().toString(); } catch { return ''; }
}

function getMonth(dateStr: string) {
  try { return new Date(dateStr).toLocaleString('en-GB', { month: 'short' }).toUpperCase(); } catch { return ''; }
}

function toGcalDate(isoDate: string) {
  // Format: YYYYMMDDTHHmmSS (local, no Z suffix so Google Calendar treats it as local time)
  const d = new Date(isoDate);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;
}

function buildGoogleCalendarUrl(title: string, rawDate: string, location: string, description: string) {
  const start = toGcalDate(rawDate);
  // Default end = 2 hours after start
  const endMs = new Date(rawDate).getTime() + 2 * 60 * 60 * 1000;
  const end = toGcalDate(new Date(endMs).toISOString());
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${start}/${end}`,
    location,
    details: description,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

const fallbackFeatured = {
  title: "RECHARGE SERVICE",
  date: "29th April 2026",
  time: "6:00 PM – 7:30 PM",
  description: "A praise and worship experience where the goal is to recharge with praise and worship. Come expecting a fresh encounter with God through powerful Spirit-filled worship.",
  location: "Lilongwe Pentecostal Church M1 Road",
  registrationUrl: '',
  rawDate: '',
};

const fallbackEvents = [
  {
    title: "RECHARGE SERVICE",
    day: "29", month: "APR",
    category: "WORSHIP EVENT",
    description: "A praise and worship experience where the goal is to recharge with praise and worship.",
    time: "6:00 PM – 7:30 PM",
    location: "Lilongwe Pentecostal Church M1 Road",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&h=500&fit=crop",
    registrationUrl: '',
  }
];

export function Upcoming() {
  const [featured, setFeatured] = useState<any>(fallbackFeatured);
  const [events, setEvents] = useState<any[]>(fallbackEvents);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "event" && category == "upcoming"] | order(date asc) {
        _id, title, date, endDate, location, description, isFeatured, registrationUrl,
        "imageUrl": image.asset->url
      }`)
      .then((data: SanityEvent[]) => {
        if (data && data.length > 0) {
          const featuredEvent = data.find(e => e.isFeatured) ?? data[0];
          setFeatured({
            title: featuredEvent.title,
            date: formatDate(featuredEvent.date),
            time: formatTime(featuredEvent.date),
            description: blocksToText(featuredEvent.description as any[] ?? []),
            location: featuredEvent.location ?? 'LPC Main Sanctuary',
            registrationUrl: featuredEvent.registrationUrl ?? '',
            rawDate: featuredEvent.date,
          });
          setEvents(data.map(e => ({
            title: e.title,
            day: getDay(e.date),
            month: getMonth(e.date),
            category: 'LPC EVENT',
            description: blocksToText(e.description as any[] ?? []),
            time: formatTime(e.date),
            location: e.location ?? 'LPC Main Sanctuary',
            image: e.imageUrl ?? '',
            registrationUrl: e.registrationUrl ?? '',
          })));
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src="https://images.unsplash.com/photo-1762303928693-db677877afeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Upcoming Events" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/40 via-[#C94A1A]/50 to-[#7A1A0A]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/70 to-[#1A0500]/80"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6 font-['Montserrat'] text-sm text-white/70">
            <Link to="/" className="hover:text-[#E8821A] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Upcoming Events</span>
          </div>
          <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-4">Never miss a moment at LPC</p>
          <h1 className="font-['TAN-BUSTER'] text-white text-5xl md:text-6xl tracking-wide mb-6">UPCOMING EVENTS</h1>
        </div>
      </section>

      {/* Featured Event */}
      <section className="relative py-20 px-6 overflow-hidden" style={{ backgroundColor: '#0A0300' }}>
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-lg overflow-hidden p-12" style={{ backgroundColor: '#1A0500' }}>
            <div className="inline-block px-4 py-2 bg-[#E8821A] rounded-full mb-6">
              <p className="font-['Montserrat'] font-bold text-white text-sm">FEATURED EVENT</p>
            </div>
            <h2 className="font-['TAN-BUSTER'] text-white text-5xl tracking-wide mb-4">{featured.title}</h2>
            <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-6">{featured.date} · {featured.time}</p>
            <p className="font-['Montserrat'] text-white/90 text-lg leading-relaxed max-w-3xl mb-8">{featured.description}</p>
            {featured.location && (
              <div className="flex items-center gap-2 mb-8">
                <MapPin className="text-[#E8821A]" size={18} />
                <p className="font-['Montserrat'] text-white/80">{featured.location}</p>
              </div>
            )}
            <div className="flex flex-wrap gap-4">
              {featured.registrationUrl ? (
                <a href={featured.registrationUrl} target="_blank" rel="noopener noreferrer"
                  className="px-8 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all">
                  Register Now
                </a>
              ) : (
                <Link to="/connect/plan-your-visit"
                  className="px-8 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all">
                  Plan Your Visit
                </Link>
              )}
              {featured.rawDate && (
                <a
                  href={buildGoogleCalendarUrl(featured.title, featured.rawDate, featured.location, featured.description)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-white text-white font-['Montserrat'] font-bold rounded-full hover:bg-white hover:text-[#E8821A] transition-all"
                >
                  <CalendarPlus size={18} />
                  Add to Calendar
                </a>
              )}
            </div>
            <div className="absolute bottom-8 right-8 w-20 h-20 rounded-full bg-[#E8821A] flex items-center justify-center">
              <span className="font-['TAN-BUSTER'] text-white text-xl">LPC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="relative py-20 px-6 overflow-hidden" style={{ backgroundColor: '#1A0500' }}>
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <p className="font-['Montserrat'] text-white/60 text-center py-12">Loading events...</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div key={index} className="bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg overflow-hidden hover:border-[#E8821A] transition-all group">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E8821A]/30 to-[#7A1A0A]/50" />
                    <div className="absolute top-4 left-4 bg-[#1A0500]/90 backdrop-blur-sm border border-[#E8821A]/50 rounded-lg p-3 text-center">
                      <p className="font-['TAN-BUSTER'] text-[#E8821A] text-2xl leading-none">{event.day}</p>
                      <p className="font-['Montserrat'] text-white text-xs mt-1">{event.month}</p>
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#E8821A] rounded-full">
                      <p className="font-['Montserrat'] font-bold text-white text-xs">{event.category}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-['TAN-BUSTER'] text-white text-xl tracking-wide mb-3">{event.title}</h3>
                    <p className="font-['Montserrat'] text-white/80 text-sm leading-relaxed mb-4">{event.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className="text-[#E8821A]" size={16} />
                        <p className="font-['Montserrat'] text-white/70 text-sm">{event.time}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="text-[#E8821A]" size={16} />
                        <p className="font-['Montserrat'] text-white/70 text-sm">{event.location}</p>
                      </div>
                    </div>
                    {event.registrationUrl ? (
                      <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer"
                        className="block w-full px-6 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold text-center rounded-full hover:bg-[#C94A1A] transition-all">
                        Register Now
                      </a>
                    ) : (
                      <Link to="/connect/plan-your-visit"
                        className="block w-full px-6 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold text-center rounded-full hover:bg-[#C94A1A] transition-all">
                        Plan Your Visit
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-12 text-center">
              <h3 className="font-['TAN-BUSTER'] text-white text-3xl tracking-wide mb-4">MORE EVENTS COMING SOON</h3>
              <p className="font-['Montserrat'] text-white/80 text-lg mb-6">Check back regularly or follow us on social media to stay updated.</p>
              <div className="flex gap-4 justify-center">
                <a href="https://youtube.com/@lilongwepentecostalchurch-l1u" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-[#E8821A]/10 flex items-center justify-center hover:bg-[#E8821A] transition-all group">
                  <Youtube className="text-[#E8821A] group-hover:text-white" size={20} />
                </a>
                <a href="https://web.facebook.com/lilongwepentecostalchurch" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-[#E8821A]/10 flex items-center justify-center hover:bg-[#E8821A] transition-all group">
                  <Facebook className="text-[#E8821A] group-hover:text-white" size={20} />
                </a>
                <a href="https://instagram.com/lpc" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-[#E8821A]/10 flex items-center justify-center hover:bg-[#E8821A] transition-all group">
                  <Instagram className="text-[#E8821A] group-hover:text-white" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
