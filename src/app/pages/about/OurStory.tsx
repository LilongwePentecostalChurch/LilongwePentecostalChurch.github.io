import { Link } from 'react-router';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Check, Cross, Flame, Users, Book, Globe } from 'lucide-react';

export function OurStory() {
  const timeline = [
    {
      title: "THE CHURCH IS FOUNDED",
      description: "LPC is established in Lilongwe with a small group of believers united by one conviction — Where Christ Is The Answer.",
      year: "Placeholder year"
    },
    {
      title: "FIRST PERMANENT HOME",
      description: "LPC moves into its first permanent meeting place, marking a new chapter of growth and stability for the congregation.",
      year: "Placeholder year"
    },
    {
      title: "GROWING CONGREGATION",
      description: "Membership grows significantly as more families and young people discover LPC and experience the presence of God in worship and the Word.",
      year: "Placeholder year"
    },
    {
      title: "BISHOP DAVID CHIGAMBA LEADS LPC",
      description: "Bishop David Chigamba takes the helm of Lilongwe Pentecostal Church, bringing a fresh vision for growth, discipleship and community impact.",
      year: "Placeholder year"
    },
    {
      title: "CURRENT HOME — M1 ROAD",
      description: "LPC establishes its home at the current location on M1 Road, Lilongwe — a landmark that has become known across the city as a place of prayer, transformation and the living Word.",
      year: "Placeholder year"
    },
    {
      title: "GROWING STRONGER IN CHRIST 2026",
      description: "LPC enters 2026 with a bold theme anchored in Ephesians 6:10 — Growing Stronger in Christ — committing to deepen faith, expand outreach and build the Kingdom of God in Lilongwe and beyond.",
      year: "2026"
    }
  ];

  const values = [
    {
      icon: Book,
      title: "THE WORD",
      description: "We are built on the uncompromised truth of the Bible"
    },
    {
      icon: Flame,
      title: "THE SPIRIT",
      description: "We believe in the full work of the Holy Spirit"
    },
    {
      icon: Users,
      title: "THE FAMILY",
      description: "We are a community of believers who do life together"
    },
    {
      icon: Globe,
      title: "THE MISSION",
      description: "We exist to take the Gospel to Lilongwe and beyond"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/images/our-story-hero.jpg"
            alt="Our Story"
            className="w-full h-full object-cover"
            fetchPriority="high"
            style={{ objectPosition: 'center 40%' }}
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
            <Link to="/about" className="hover:text-[#E8821A] transition-colors">About</Link>
            <span>›</span>
            <span className="text-white">Our Story</span>
          </div>

          <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-4">
            A journey of faith in the heart of Lilongwe
          </p>
          <h1 className="font-['TAN-BUSTER'] text-white text-5xl md:text-6xl tracking-wide mb-6">
            OUR STORY
          </h1>
        </div>
      </section>

      {/* Section 1 - The Beginning */}
      <section 
        className="relative py-20 px-6 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(232, 130, 26, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(122, 26, 10, 0.2) 0%, transparent 50%)
          `,
          backgroundColor: '#1A0500'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-3">
                How it all started
              </p>
              <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-6">
                WHERE IT ALL BEGAN
              </h2>
              
              <div className="space-y-4 font-['Montserrat'] text-white/90">
                <p>
                  Lilongwe Pentecostal Church was born out of a deep conviction that Lilongwe needed a church where the power of God was real, the Word of God was central and every person who walked through the doors could find hope, healing and a genuine encounter with Jesus Christ.
                </p>
                <p>
                  From humble beginnings in the heart of Malawi's capital city, LPC grew from a small gathering of believers into a thriving, Spirit-filled community that has touched thousands of lives across Lilongwe and beyond. What started as a seed of faith has become a tree whose branches reach into every corner of the city.
                </p>
                <p>
                  Through the years LPC has remained anchored in its conviction that Christ is the answer to every question, every challenge and every need. This has been the heartbeat of the church from its very first day and it remains the heartbeat today.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="/images/our-story-hero.jpg"
                  alt="LPC Congregation"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8821A]/30 to-[#7A1A0A]/50" />
              </div>

              {/* Floating stat cards */}
              <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                <div className="bg-[#1A0500]/95 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-4 text-center">
                  <p className="font-['Montserrat'] font-bold text-white text-sm">Lilongwe, Malawi</p>
                </div>
                <div className="bg-[#1A0500]/95 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-4 text-center">
                  <p className="font-['Montserrat'] font-bold text-white text-sm">Growing Daily</p>
                </div>
                <div className="bg-[#1A0500]/95 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-4 text-center">
                  <p className="font-['Montserrat'] font-bold text-[#E8821A] text-xs">Christ Is The Answer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Timeline */}
      <section 
        className="relative py-20 px-6 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 20%, rgba(232, 130, 26, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 50% 80%, rgba(122, 26, 10, 0.15) 0%, transparent 40%)
          `,
          backgroundColor: '#150800'
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-3">
              Through the years
            </p>
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-4">
              OUR JOURNEY
            </h2>
            <p className="font-['Montserrat'] text-white/70">
              Key moments in the story of Lilongwe Pentecostal Church
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#E8821A]/30 -translate-x-1/2" />

            {timeline.map((milestone, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-8 w-4 h-4 bg-[#E8821A] rounded-full border-4 border-[#150800] -translate-x-1/2 z-10" />

                {/* Card - alternating sides */}
                <div className={`flex ${index % 2 === 0 ? 'justify-start pr-[52%]' : 'justify-end pl-[52%]'}`}>
                  <div className="bg-[#1A0500]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-6 w-full">
                    <p className="font-['Montserrat'] text-[#E8821A] text-sm font-bold mb-2">
                      {milestone.year}
                    </p>
                    <h3 className="font-['TAN-BUSTER'] text-white text-lg tracking-wide mb-3">
                      {milestone.title}
                    </h3>
                    <p className="font-['Montserrat'] text-white/80 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Who We Are Today */}
      <section 
        className="relative py-20 px-6 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 50%, rgba(232, 130, 26, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 70% 50%, rgba(122, 26, 10, 0.25) 0%, transparent 50%)
          `,
          backgroundColor: '#1A0500'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-3">
              Today
            </p>
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-8">
              WHERE CHRIST IS THE ANSWER
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="font-['Montserrat'] text-white/90 leading-relaxed">
              <p>
                Today Lilongwe Pentecostal Church stands as one of Lilongwe's most vibrant and Spirit-filled congregations. We are a church that believes in the full gospel of Jesus Christ — salvation, healing, deliverance and the baptism of the Holy Spirit. We are a church that preaches the uncompromised Word of God and believes that prayer changes everything. We are a church for everyone — regardless of age, background or where you have come from. At LPC you will find a family, a home and a God who is more than enough.
              </p>
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <ImageWithFallback
                src="/images/our-story-hero.jpg"
                alt="LPC Worship"
                className="w-full h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8821A]/20 to-[#7A1A0A]/40" />
            </div>
          </div>

          {/* Value cards */}
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-[#1A0500]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-6 text-center hover:border-[#E8821A] transition-all group"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[#E8821A]/10 flex items-center justify-center group-hover:bg-[#E8821A]/20 transition-all">
                    <Icon className="text-[#E8821A]" size={24} />
                  </div>
                  <h3 className="font-['TAN-BUSTER'] text-white text-sm tracking-wide mb-2">
                    {value.title}
                  </h3>
                  <p className="font-['Montserrat'] text-white/70 text-xs leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4 - Closing Invitation */}
      <section 
        className="relative py-16 px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #E8821A 0%, #C94A1A 50%, #7A1A0A 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-['TAN-BUSTER'] text-white text-4xl md:text-5xl tracking-wide mb-4">
            COME AND BE PART OF THE STORY
          </h2>
          <p className="font-['Montserrat'] text-white text-lg mb-8">
            Every chapter of LPC's story has been written by people who said yes to God. Your chapter is waiting to be written.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/connect/plan-your-visit"
              className="px-8 py-3 bg-white text-[#E8821A] font-['Montserrat'] font-bold rounded-full hover:bg-white/90 transition-all"
            >
              Join Us This Sunday
            </Link>
            <Link
              to="/connect/plan-your-visit"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-['Montserrat'] font-bold rounded-full hover:bg-white hover:text-[#E8821A] transition-all"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}