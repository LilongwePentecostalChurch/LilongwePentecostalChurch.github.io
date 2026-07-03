import { Link } from 'react-router';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function Past() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', '2026', '2025', '2024'];

  const pastEvents = [
    {
      title: "Easter Sunday Service 2025",
      date: "20 APR",
      year: "2025",
      description: "A powerful celebration of the resurrection of Jesus Christ with the LPC family.",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop"
    },
    {
      title: "New Year Crossover Service 2025",
      date: "31 DEC",
      year: "2024",
      description: "We crossed into 2025 together in prayer, worship and the Word.",
      image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=600&h=400&fit=crop"
    },
    {
      title: "Christmas Service 2024",
      date: "25 DEC",
      year: "2024",
      description: "Celebrating the birth of Jesus Christ with our full LPC family.",
      image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=600&h=400&fit=crop"
    },
    {
      title: "LPC Anniversary Service 2024",
      date: "PLACEHOLDER",
      year: "2024",
      description: "Celebrating another year of God's faithfulness to Lilongwe Pentecostal Church.",
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&h=400&fit=crop"
    },
    {
      title: "Easter Sunday Service 2024",
      date: "31 MAR",
      year: "2024",
      description: "A powerful celebration of the resurrection of Jesus Christ.",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop"
    },
    {
      title: "Annual Conference 2024",
      date: "PLACEHOLDER",
      year: "2024",
      description: "Our flagship annual conference bringing together believers from across Lilongwe and Malawi.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-24 px-6 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1625426551028-d0180b87d771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBwYXN0JTIwZXZlbnRzJTIwY2VsZWJyYXRpb24lMjBtZW1vcmllc3xlbnwxfHx8fDE3NzUxMjY3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Past Events"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/40 via-[#C94A1A]/50 to-[#7A1A0A]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/70 to-[#1A0500]/80"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] opacity-40"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 mb-6 font-['Montserrat'] text-sm text-white/70">
            <Link to="/" className="hover:text-[#E8821A] transition-colors">Home</Link>
            <span>›</span>
            <Link to="/events" className="hover:text-[#E8821A] transition-colors">Events</Link>
            <span>›</span>
            <span className="text-white">Past Events</span>
          </div>

          <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-4">
            Testimonies of God's faithfulness at LPC
          </p>
          <h1 className="font-['TAN-BUSTER'] text-white text-5xl md:text-6xl tracking-wide mb-6">
            PAST EVENTS
          </h1>
        </div>
      </section>

      {/* Intro Text */}
      <section 
        className="relative py-12 px-6 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(232, 130, 26, 0.1) 0%, transparent 50%)
          `,
          backgroundColor: '#1A0500'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-['Montserrat'] text-white/90 leading-relaxed text-lg">
            Every event at LPC is a testimony of God's faithfulness. Browse through our past events and see what God has been doing in and through Lilongwe Pentecostal Church.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section 
        className="relative py-8 px-6 overflow-hidden"
        style={{
          backgroundColor: '#150800'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-['Montserrat'] font-bold text-sm transition-all ${
                  activeFilter === filter
                    ? 'bg-[#E8821A] text-white'
                    : 'bg-[#1A0500]/60 border border-[#E8821A]/30 text-white/70 hover:border-[#E8821A] hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Grid */}
      <section 
        className="relative py-20 px-6 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 30%, rgba(232, 130, 26, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(122, 26, 10, 0.2) 0%, transparent 50%)
          `,
          backgroundColor: '#1A0500'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg overflow-hidden hover:border-[#E8821A] transition-all group"
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/60 to-[#7A1A0A]/80" />

                  {/* Date Block */}
                  <div className="absolute top-4 left-4 bg-[#1A0500]/90 backdrop-blur-sm border border-[#E8821A]/50 rounded-lg p-3 text-center">
                    <p className="font-['TAN-BUSTER'] text-[#E8821A] text-sm leading-tight">
                      {event.date}
                    </p>
                  </div>

                  {/* Past Event Label */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                    <p className="font-['Montserrat'] font-bold text-white text-xs">
                      PAST EVENT
                    </p>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="font-['TAN-BUSTER'] text-white text-xl tracking-wide mb-2">
                    {event.title}
                  </h3>

                  <p className="font-['Montserrat'] text-white/80 text-sm leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <Link
                    to="/gallery"
                    className="block w-full px-6 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold text-center rounded-full hover:bg-[#C94A1A] transition-all"
                  >
                    View Photos
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Sharing Strip */}
      <section 
        className="relative py-16 px-6 overflow-hidden"
        style={{
          backgroundColor: '#150800'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-['TAN-BUSTER'] text-white text-3xl tracking-wide mb-4">
            SEE HIGHLIGHTS FROM ALL PAST LPC EVENTS
          </h3>
          <p className="font-['Montserrat'] text-white/80 text-lg mb-8">
            Follow us on social media for photos, videos and highlights from every event
          </p>

          <div className="flex gap-4 justify-center">
            <a
              href="https://www.youtube.com/@LilongwePentecostalChurch"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#1A0500]/60 border border-[#E8821A]/30 rounded-lg flex items-center gap-3 hover:border-[#E8821A] hover:bg-[#1A0500] transition-all group"
            >
              <Youtube className="text-[#E8821A]" size={24} />
              <span className="font-['Montserrat'] font-bold text-white">YouTube</span>
            </a>

            <a
              href="https://www.tiktok.com/@lilongwepentecostalchurch"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#1A0500]/60 border border-[#E8821A]/30 rounded-lg flex items-center gap-3 hover:border-[#E8821A] hover:bg-[#1A0500] transition-all group"
            >
              <svg className="w-6 h-6 text-[#E8821A]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
              <span className="font-['Montserrat'] font-bold text-white">TikTok</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#1A0500]/60 border border-[#E8821A]/30 rounded-lg flex items-center gap-3 hover:border-[#E8821A] hover:bg-[#1A0500] transition-all group"
            >
              <Facebook className="text-[#E8821A]" size={24} />
              <span className="font-['Montserrat'] font-bold text-white">Facebook</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#1A0500]/60 border border-[#E8821A]/30 rounded-lg flex items-center gap-3 hover:border-[#E8821A] hover:bg-[#1A0500] transition-all group"
            >
              <Instagram className="text-[#E8821A]" size={24} />
              <span className="font-['Montserrat'] font-bold text-white">Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}