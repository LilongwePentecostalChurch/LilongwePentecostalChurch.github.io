import { Link } from 'react-router';
import { Calendar, Clock, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function Upcoming() {
  const featuredEvent = {
    title: "RECHARGE SERVICE",
    date: "29th April 2026",
    time: "6:00 PM – 7:30 PM",
    description: "A praise and worship experience where the goal is to recharge with praise and worship. Come expecting a fresh encounter with God through powerful Spirit-filled worship.",
    location: "Lilongwe Pentecostal Church M1 Road"
  };

  const upcomingEvents = [
    {
      title: "RECHARGE SERVICE",
      date: "29 APRIL",
      month: "APR",
      day: "29",
      category: "WORSHIP EVENT",
      description: "A praise and worship experience where the goal is to recharge with praise and worship.",
      time: "6:00 PM – 7:30 PM",
      location: "Lilongwe Pentecostal Church M1 Road",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&h=500&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1762303928693-db677877afeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Upcoming Events"
            className="w-full h-full object-cover"
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
            <span className="text-white">Upcoming Events</span>
          </div>

          <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-4">
            Never miss a moment at LPC
          </p>
          <h1 className="font-['TAN-BUSTER'] text-white text-5xl md:text-6xl tracking-wide mb-6">
            UPCOMING EVENTS
          </h1>
        </div>
      </section>

      {/* Featured Event */}
      <section 
        className="relative py-20 px-6 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 30%, rgba(232, 130, 26, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(122, 26, 10, 0.3) 0%, transparent 50%)
          `,
          backgroundColor: '#0A0300'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div 
            className="relative rounded-lg overflow-hidden"
            style={{
              backgroundImage: `
                radial-gradient(circle at 40% 50%, rgba(232, 130, 26, 0.3) 0%, transparent 60%),
                radial-gradient(circle at 60% 80%, rgba(122, 26, 10, 0.4) 0%, transparent 60%)
              `,
              backgroundColor: '#1A0500'
            }}
          >
            <div className="p-12">
              {/* Featured Event Label */}
              <div className="inline-block px-4 py-2 bg-[#E8821A] rounded-full mb-6">
                <p className="font-['Montserrat'] font-bold text-white text-sm">
                  FEATURED EVENT
                </p>
              </div>

              <h2 className="font-['TAN-BUSTER'] text-white text-5xl tracking-wide mb-4">
                {featuredEvent.title}
              </h2>

              <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-6">
                {featuredEvent.date} · {featuredEvent.time}
              </p>

              <p className="font-['Montserrat'] text-white/90 text-lg leading-relaxed max-w-3xl mb-8">
                {featuredEvent.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <button className="px-8 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all">
                  Register Now
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-['Montserrat'] font-bold rounded-full hover:bg-white hover:text-[#E8821A] transition-all">
                  Add to Calendar
                </button>
              </div>

              {/* LPC Badge */}
              <div className="absolute bottom-8 right-8 w-20 h-20 rounded-full bg-[#E8821A] flex items-center justify-center">
                <span className="font-['TAN-BUSTER'] text-white text-xl">LPC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section 
        className="relative py-20 px-6 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 50%, rgba(232, 130, 26, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(122, 26, 10, 0.2) 0%, transparent 50%)
          `,
          backgroundColor: '#1A0500'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg overflow-hidden hover:border-[#E8821A] transition-all group"
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E8821A]/30 to-[#7A1A0A]/50" />

                  {/* Date Block */}
                  <div className="absolute top-4 left-4 bg-[#1A0500]/90 backdrop-blur-sm border border-[#E8821A]/50 rounded-lg p-3 text-center">
                    <p className="font-['TAN-BUSTER'] text-[#E8821A] text-2xl leading-none">
                      {event.day}
                    </p>
                    <p className="font-['Montserrat'] text-white text-xs mt-1">
                      {event.month}
                    </p>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#E8821A] rounded-full">
                    <p className="font-['Montserrat'] font-bold text-white text-xs">
                      {event.category}
                    </p>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="font-['TAN-BUSTER'] text-white text-xl tracking-wide mb-3">
                    {event.title}
                  </h3>

                  <p className="font-['Montserrat'] text-white/80 text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="text-[#E8821A]" size={16} />
                      <p className="font-['Montserrat'] text-white/70 text-sm">
                        {event.time}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="text-[#E8821A]" size={16} />
                      <p className="font-['Montserrat'] text-white/70 text-sm">
                        {event.location}
                      </p>
                    </div>
                  </div>

                  <button className="w-full px-6 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No More Events Message */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-12 text-center">
              <h3 className="font-['TAN-BUSTER'] text-white text-3xl tracking-wide mb-4">
                MORE EVENTS COMING SOON
              </h3>
              <p className="font-['Montserrat'] text-white/80 text-lg mb-6">
                Check back regularly or follow us on social media to stay updated on all LPC events.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 justify-center">
                <a
                  href="https://www.youtube.com/@LilongwePentecostalChurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-[#E8821A]/10 flex items-center justify-center hover:bg-[#E8821A] transition-all group"
                >
                  <Youtube className="text-[#E8821A] group-hover:text-white transition-colors" size={20} />
                </a>
                <a
                  href="https://www.tiktok.com/@lilongwepentecostalchurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-[#E8821A]/10 flex items-center justify-center hover:bg-[#E8821A] transition-all group"
                >
                  <svg className="w-5 h-5 text-[#E8821A] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-[#E8821A]/10 flex items-center justify-center hover:bg-[#E8821A] transition-all group"
                >
                  <Facebook className="text-[#E8821A] group-hover:text-white transition-colors" size={20} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-[#E8821A]/10 flex items-center justify-center hover:bg-[#E8821A] transition-all group"
                >
                  <Instagram className="text-[#E8821A] group-hover:text-white transition-colors" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}