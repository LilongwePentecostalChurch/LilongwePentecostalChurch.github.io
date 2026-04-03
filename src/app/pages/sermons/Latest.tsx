import { Link } from 'react-router';
import { Play, Share2, Youtube } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function Latest() {
  const featuredSermon = {
    title: "GROWING STRONGER IN CHRIST",
    preacher: "Bishop David Chigamba",
    series: "Sunday Service",
    location: "Lilongwe Pentecostal Church",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1200&h=600&fit=crop"
  };

  const sermons = [
    {
      title: "Growing Stronger in Faith",
      preacher: "Bishop David Chigamba",
      series: "Growing Stronger in Christ",
      part: "Part 1",
      date: "Recent",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop"
    },
    {
      title: "The Power of the Word",
      preacher: "Bishop David Chigamba",
      series: "Growing Stronger in Christ",
      part: "Part 2",
      date: "Recent",
      image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&h=400&fit=crop"
    },
    {
      title: "Stronger in Prayer",
      preacher: "Bishop David Chigamba",
      series: "Growing Stronger in Christ",
      part: "Part 3",
      date: "Recent",
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&h=400&fit=crop"
    },
    {
      title: "Walking in Character",
      preacher: "Bishop David Chigamba",
      series: "Growing Stronger in Christ",
      part: "Part 4",
      date: "Recent",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop"
    },
    {
      title: "Serving with Purpose",
      preacher: "Bishop David Chigamba",
      series: "Growing Stronger in Christ",
      part: "Part 5",
      date: "Recent",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&h=400&fit=crop"
    },
    {
      title: "Kingdom Impact",
      preacher: "Bishop David Chigamba",
      series: "Growing Stronger in Christ",
      part: "Part 6",
      date: "Recent",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1769755409781-9e8924c57362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Latest Sermons"
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
            <span className="text-white">Latest Sermons</span>
          </div>

          <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-4">
            Listen to the living Word of God
          </p>
          <h1 className="font-['TAN-BUSTER'] text-white text-5xl md:text-6xl tracking-wide mb-6">
            LATEST SERMONS
          </h1>
        </div>
      </section>

      {/* Featured Sermon */}
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
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-lg overflow-hidden group cursor-pointer">
            <ImageWithFallback
              src={featuredSermon.image}
              alt={featuredSermon.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/80 to-[#7A1A0A]/90" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
              <div className="inline-block px-4 py-2 bg-[#E8821A] rounded-full mb-6">
                <p className="font-['Montserrat'] font-bold text-white text-sm">
                  LATEST SERMON
                </p>
              </div>

              <h2 className="font-['TAN-BUSTER'] text-white text-5xl md:text-6xl tracking-wide mb-4">
                {featuredSermon.title}
              </h2>

              <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-2">
                {featuredSermon.preacher}
              </p>

              <p className="font-['Montserrat'] text-white/90 mb-8">
                {featuredSermon.series} · {featuredSermon.location}
              </p>

              {/* Play Button */}
              <div className="w-20 h-20 rounded-full bg-[#E8821A] flex items-center justify-center group-hover:scale-110 transition-transform mb-6">
                <Play className="text-white" size={32} fill="white" />
              </div>

              <a
                href="https://www.youtube.com/@LilongwePentecostalChurch"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sermon Grid */}
      <section 
        className="relative py-20 px-6 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 30%, rgba(232, 130, 26, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(122, 26, 10, 0.2) 0%, transparent 50%)
          `,
          backgroundColor: '#150800'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.map((sermon, index) => (
              <div
                key={index}
                className="bg-[#1A0500]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg overflow-hidden hover:border-[#E8821A] transition-all group"
              >
                {/* Sermon Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={sermon.image}
                    alt={sermon.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/60 to-[#7A1A0A]/80" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-[#E8821A] flex items-center justify-center">
                      <Play className="text-white" size={24} fill="white" />
                    </div>
                  </div>
                </div>

                {/* Sermon Details */}
                <div className="p-6">
                  <h3 className="font-['TAN-BUSTER'] text-white text-xl tracking-wide mb-2">
                    {sermon.title}
                  </h3>

                  <p className="font-['Signature'] text-[#E8821A] text-lg italic mb-3">
                    {sermon.preacher}
                  </p>

                  <p className="font-['Montserrat'] text-white/70 text-sm mb-6">
                    {sermon.date} · {sermon.part} of {sermon.series} series
                  </p>

                  <div className="flex gap-3">
                    <a
                      href="https://www.youtube.com/@LilongwePentecostalChurch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-[#E8821A] text-white font-['Montserrat'] font-bold text-sm rounded-full hover:bg-[#C94A1A] transition-all text-center"
                    >
                      Watch
                    </a>
                    <button className="px-4 py-2 bg-transparent border border-white text-white font-['Montserrat'] font-bold text-sm rounded-full hover:bg-white hover:text-[#E8821A] transition-all">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-transparent border-2 border-[#E8821A] text-[#E8821A] font-['Montserrat'] font-bold rounded-full hover:bg-[#E8821A] hover:text-white transition-all">
              Load More Sermons
            </button>
          </div>
        </div>
      </section>

      {/* YouTube Banner */}
      <section 
        className="relative py-12 px-6 overflow-hidden"
        style={{
          backgroundColor: '#1A0500'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
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