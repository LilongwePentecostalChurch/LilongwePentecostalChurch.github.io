import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { sanityClient } from '../../../lib/sanityClient';

function blocksToText(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return '';
  return blocks.map((b: any) => b.children?.map((c: any) => c.text).join('') ?? '').join(' ');
}

function getMonth(dateStr: string) {
  try { return new Date(dateStr).toLocaleString('en-GB', { month: 'long' }).toUpperCase(); } catch { return 'ANNUAL'; }
}

const fallbackEvents = [
  { title: "EASTER SUNDAY SERVICE", month: "APRIL", description: "A powerful celebration of the resurrection of Jesus Christ. Our biggest Sunday service of the year.", image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=500&fit=crop" },
  { title: "LPC ANNIVERSARY SERVICE", month: "ANNUAL", description: "Celebrating another year of God's faithfulness to Lilongwe Pentecostal Church.", image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&h=500&fit=crop" },
  { title: "RECHARGE SERVICE", month: "APRIL", description: "A praise and worship experience where the goal is to recharge with praise and worship.", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&h=500&fit=crop" },
  { title: "CHRISTMAS SERVICE", month: "DECEMBER", description: "Celebrating the birth of Jesus Christ with our full LPC family.", image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&h=500&fit=crop" },
  { title: "NEW YEAR CROSSOVER SERVICE", month: "31ST DECEMBER", description: "Crossing into the new year together in prayer, worship and the Word.", image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&h=500&fit=crop" },
  { title: "ANNUAL CONFERENCE", month: "ANNUAL", description: "Our flagship annual conference bringing together believers from across Lilongwe and Malawi.", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop" },
];

export function Annual() {
  const [events, setEvents] = useState<any[]>(fallbackEvents);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "event" && category == "annual"] | order(date asc) {
        _id, title, date, description,
        "imageUrl": image.asset->url
      }`)
      .then((data: any[]) => {
        if (data && data.length > 0) {
          setEvents(data.map(e => ({
            title: e.title,
            month: e.date ? getMonth(e.date) : 'ANNUAL',
            description: blocksToText(e.description ?? []),
            image: e.imageUrl ?? '',
          })));
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src="https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Annual Events" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/40 via-[#C94A1A]/50 to-[#7A1A0A]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/70 to-[#1A0500]/80"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6 font-['Montserrat'] text-sm text-white/70">
            <Link to="/" className="hover:text-[#E8821A] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Annual Events</span>
          </div>
          <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-4">Signature events you can expect every year at LPC</p>
          <h1 className="font-['TAN-BUSTER'] text-white text-5xl md:text-6xl tracking-wide mb-6">ANNUAL EVENTS</h1>
        </div>
      </section>

      <section className="relative py-20 px-6 overflow-hidden" style={{ backgroundColor: '#1A0500' }}>
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <p className="font-['Montserrat'] text-white/60 text-center py-12">Loading events...</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div key={index} className="bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg overflow-hidden hover:border-[#E8821A] transition-all group">
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E8821A]/30 to-[#7A1A0A]/50" />
                    <div className="absolute top-4 left-4 px-4 py-2 bg-[#E8821A] rounded-full">
                      <p className="font-['Montserrat'] font-bold text-white text-sm">{event.month}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-['TAN-BUSTER'] text-white text-xl tracking-wide mb-3">{event.title}</h3>
                    <p className="font-['Montserrat'] text-white/80 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
