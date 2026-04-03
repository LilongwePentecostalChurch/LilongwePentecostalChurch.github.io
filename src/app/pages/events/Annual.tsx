import { Link } from 'react-router';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function Annual() {
  const annualEvents = [
    {
      title: "EASTER SUNDAY SERVICE",
      month: "APRIL",
      description: "A powerful celebration of the resurrection of Jesus Christ. Our biggest Sunday service of the year filled with worship, the Word and the presence of God.",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=500&fit=crop"
    },
    {
      title: "LPC ANNIVERSARY SERVICE",
      month: "PLACEHOLDER MONTH",
      description: "Celebrating another year of God's faithfulness to Lilongwe Pentecostal Church. A service of testimony, worship and gratitude.",
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&h=500&fit=crop"
    },
    {
      title: "RECHARGE SERVICE",
      month: "APRIL",
      description: "A praise and worship experience where the goal is to recharge with praise and worship. Next date: 29th April 2026 6:00 PM to 7:30 PM.",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&h=500&fit=crop"
    },
    {
      title: "CHRISTMAS SERVICE",
      month: "DECEMBER",
      description: "Celebrating the birth of Jesus Christ with our full LPC family. A service of joy, worship and the true meaning of Christmas.",
      image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&h=500&fit=crop"
    },
    {
      title: "NEW YEAR CROSSOVER SERVICE",
      month: "31ST DECEMBER",
      description: "Crossing into the new year together in prayer, worship and the Word. One of the most powerful services of the year.",
      image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&h=500&fit=crop"
    },
    {
      title: "ANNUAL CONFERENCE",
      month: "PLACEHOLDER MONTH",
      description: "Our flagship annual conference bringing together believers from across Lilongwe and Malawi for days of teaching, worship and encounter.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Annual Events"
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
            <span className="text-white">Annual Events</span>
          </div>

          <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-4">
            Signature events you can expect every year at LPC
          </p>
          <h1 className="font-['TAN-BUSTER'] text-white text-5xl md:text-6xl tracking-wide mb-6">
            ANNUAL EVENTS
          </h1>
        </div>
      </section>

      {/* Annual Events Grid */}
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
            {annualEvents.map((event, index) => (
              <div
                key={index}
                className="bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg overflow-hidden hover:border-[#E8821A] transition-all group"
              >
                {/* Event Image */}
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E8821A]/30 to-[#7A1A0A]/50" />

                  {/* Month Pill */}
                  <div className="absolute top-4 left-4 px-4 py-2 bg-[#E8821A] rounded-full">
                    <p className="font-['Montserrat'] font-bold text-white text-sm">
                      {event.month}
                    </p>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="font-['TAN-BUSTER'] text-white text-xl tracking-wide mb-3">
                    {event.title}
                  </h3>

                  <p className="font-['Montserrat'] text-white/80 text-sm leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <button className="w-full px-6 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}