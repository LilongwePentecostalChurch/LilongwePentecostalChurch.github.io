import { Link } from 'react-router';
import { Youtube } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function Series() {
  const currentSeries = {
    title: "GROWING STRONGER IN CHRIST",
    preacher: "Bishop David Chigamba",
    year: "2026",
    description: "A six part series anchored in Ephesians 6:10 exploring what it means to grow stronger in faith, the Word, prayer, character, service and purpose.",
    messageCount: 6,
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&h=600&fit=crop"
  };

  const pastSeries = [
    {
      title: "Where Christ Is The Answer",
      preacher: "Bishop David Chigamba",
      year: "Placeholder year",
      messageCount: 8,
      image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&h=400&fit=crop"
    },
    {
      title: "The Power of Prayer",
      preacher: "Bishop David Chigamba",
      year: "Placeholder year",
      messageCount: 6,
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&h=400&fit=crop"
    },
    {
      title: "Walking in the Spirit",
      preacher: "Bishop David Chigamba",
      year: "Placeholder year",
      messageCount: 7,
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop"
    },
    {
      title: "Faith That Works",
      preacher: "Bishop David Chigamba",
      year: "Placeholder year",
      messageCount: 5,
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&h=400&fit=crop"
    },
    {
      title: "The Great Commission",
      preacher: "Bishop David Chigamba",
      year: "Placeholder year",
      messageCount: 4,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop"
    },
    {
      title: "Foundations of Faith",
      preacher: "Bishop David Chigamba",
      year: "Placeholder year",
      messageCount: 10,
      image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1604072424771-7300bc5de457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Sermon Series"
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
            <Link to="/sermons" className="hover:text-[#E8821A] transition-colors">Sermons</Link>
            <span>›</span>
            <span className="text-white">Sermon Series</span>
          </div>

          <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-4">
            Teaching series from Lilongwe Pentecostal Church
          </p>
          <h1 className="font-['TAN-BUSTER'] text-white text-5xl md:text-6xl tracking-wide mb-6">
            SERMON SERIES
          </h1>
        </div>
      </section>

      {/* Featured Current Series */}
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
            <div className="grid md:grid-cols-2 gap-8 p-12">
              {/* Left - Content */}
              <div className="flex flex-col justify-center">
                <div className="inline-block px-4 py-2 bg-[#E8821A] rounded-full mb-6 w-fit">
                  <p className="font-['Montserrat'] font-bold text-white text-sm">
                    CURRENT SERIES
                  </p>
                </div>

                <h2 className="font-['TAN-BUSTER'] text-white text-5xl tracking-wide mb-4">
                  {currentSeries.title}
                </h2>

                <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-6">
                  {currentSeries.preacher} · {currentSeries.year}
                </p>

                <p className="font-['Montserrat'] text-white/90 leading-relaxed mb-6">
                  {currentSeries.description}
                </p>

                <div className="flex items-center gap-4 mb-8">
                  <div className="px-4 py-2 bg-[#E8821A]/20 rounded-full">
                    <p className="font-['Montserrat'] text-[#E8821A] text-sm font-bold">
                      {currentSeries.messageCount} messages in this series
                    </p>
                  </div>
                </div>

                <div>
                  <a
                    href="https://www.youtube.com/@LilongwePentecostalChurch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all"
                  >
                    Watch Series
                  </a>
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={currentSeries.image}
                  alt={currentSeries.title}
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8821A]/20 to-[#7A1A0A]/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Series Grid */}
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
          <div className="text-center mb-12">
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-4">
              PAST SERIES
            </h2>
            <p className="font-['Montserrat'] text-white/70">
              Explore previous teaching series from LPC
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastSeries.map((series, index) => (
              <div
                key={index}
                className="bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg overflow-hidden hover:border-[#E8821A] transition-all group"
              >
                {/* Series Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={series.image}
                    alt={series.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/60 to-[#7A1A0A]/80" />
                </div>

                {/* Series Details */}
                <div className="p-6">
                  <h3 className="font-['TAN-BUSTER'] text-white text-xl tracking-wide mb-2">
                    {series.title}
                  </h3>

                  <p className="font-['Signature'] text-[#E8821A] text-lg italic mb-3">
                    {series.preacher}
                  </p>

                  <p className="font-['Montserrat'] text-white/70 text-sm mb-6">
                    {series.messageCount} messages · {series.year}
                  </p>

                  <a
                    href="https://www.youtube.com/@LilongwePentecostalChurch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold text-center rounded-full hover:bg-[#C94A1A] transition-all"
                  >
                    Watch Series
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Banner */}
      <section 
        className="relative py-12 px-6 overflow-hidden"
        style={{
          backgroundColor: '#150800'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#1A0500]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg bg-[#E8821A]/10 flex items-center justify-center flex-shrink-0">
                <Youtube className="text-[#E8821A]" size={28} />
              </div>
              <div>
                <h3 className="font-['TAN-BUSTER'] text-white text-2xl tracking-wide mb-2">
                  WATCH ALL SERMONS ON YOUTUBE
                </h3>
                <p className="font-['Montserrat'] text-white/80">
                  Subscribe to the Lilongwe Pentecostal Church YouTube channel for all messages, live streams and highlights.
                </p>
              </div>
            </div>
            <a
              href="https://www.youtube.com/@LilongwePentecostalChurch"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all whitespace-nowrap"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}