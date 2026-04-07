import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { SectionFooter } from '../components/SectionFooter';
import { SocialIcon } from '../components/SocialIcon';
import { LPCLogo } from '../components/LPCLogo';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { sanityClient, urlFor } from '../../lib/sanityClient';

const fallbackSermons = [
  { title: "GROWING IN FAITH", image: "https://images.unsplash.com/photo-1560279800-8b23f487ce83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", youtubeUrl: null },
  { title: "POWER OF PRAYER", image: "https://images.unsplash.com/photo-1575516662637-99214ea59f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", youtubeUrl: null },
  { title: "LIVING IN PURPOSE", image: "https://images.unsplash.com/photo-1628716957555-f88f182aadfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", youtubeUrl: null },
  { title: "WALKING IN FAITH", image: "https://images.unsplash.com/photo-1604443830970-05ac4193ada9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", youtubeUrl: null },
  { title: "HOLY SPIRIT POWER", image: "https://images.unsplash.com/photo-1717201611909-0f75ee9b0b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", youtubeUrl: null },
  { title: "KINGDOM MINDSET", image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", youtubeUrl: null },
];

interface Sermon {
  title: string;
  image: string;
  youtubeUrl: string | null;
  pastor?: string;
  date?: string;
  scripture?: string;
}

export function Sermons() {
  const [sermons, setSermons] = useState<Sermon[]>(fallbackSermons);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "sermon"] | order(date desc) [0...12] { title, thumbnail, youtubeUrl, pastor, date, scripture }`)
      .then((data: any[]) => {
        if (data && data.length > 0) {
          setSermons(data.map(s => ({
            title: s.title,
            image: s.thumbnail ? urlFor(s.thumbnail).width(800).url() : '',
            youtubeUrl: s.youtubeUrl ?? null,
            pastor: s.pastor,
            date: s.date,
            scripture: s.scripture,
          })));
        }
      })
      .catch(() => {/* silently use fallback */})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen">
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#C94A1A]/40 via-[#7A1A0A]/50 to-[#1A0500]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="font-['Signature'] text-3xl text-[#E8821A] text-center mb-4">Watch and Listen</p>
          <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl md:text-6xl text-white text-center mb-16 tracking-wider">
            BIBLE STUDY AND SERMONS
          </h2>

          {loading ? (
            <p className="font-['Montserrat'] text-white/60 text-center py-12">Loading sermons...</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {sermons.map((sermon, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg bg-gradient-radial from-[#E8821A]/30 via-[#C94A1A]/20 to-[#7A1A0A]/10 backdrop-blur-sm group cursor-pointer"
                  onClick={() => sermon.youtubeUrl && window.open(sermon.youtubeUrl, '_blank')}
                >
                  <div className="p-6">
                    <h3 className="font-['TAN-BUSTER'] text-3xl text-white mb-1 tracking-wide">
                      {sermon.title.toUpperCase()}
                    </h3>
                    {sermon.pastor && (
                      <p className="font-['Montserrat'] text-sm text-[#E8821A]">{sermon.pastor}</p>
                    )}
                    {sermon.scripture && (
                      <p className="font-['Montserrat'] text-xs text-white/60 mt-1">{sermon.scripture}</p>
                    )}
                  </div>
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={sermon.image}
                      alt={sermon.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#7A1A0A] via-[#7A1A0A]/50 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-[#E8821A] flex items-center justify-center">
                        <Play className="text-white ml-1" size={28} />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                      <LPCLogo size={40} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Banner */}
          <div className="bg-[#7A1A0A] border-t-2 border-b-2 border-[#E8821A] py-8 px-6 rounded-lg mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="font-['Montserrat'] font-bold text-white text-lg">
                Watch our full sermon archive and live streams on YouTube and TikTok.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://youtube.com/@lilongwepentecostalchurch-l1u?si=vbWjtir34kbr5grZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#E8821A] text-white rounded-full font-bold hover:bg-[#C94A1A] transition-colors"
                >
                  <SocialIcon platform="youtube" size={20} />
                  Watch on YouTube
                </a>
                <a
                  href="https://www.tiktok.com/@llpentecostalchurch?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-[#7A1A0A] transition-colors"
                >
                  <SocialIcon platform="tiktok" size={20} />
                  Watch on TikTok
                </a>
              </div>
            </div>
          </div>

          <SectionFooter />
        </div>
      </section>
    </div>
  );
}
