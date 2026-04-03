import { Link } from 'react-router';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useState } from 'react';

export function Devotionals() {
  const [subscribeData, setSubscribeData] = useState({
    name: '',
    contact: ''
  });

  const todaysDevotional = {
    title: "BE STRONG IN THE LORD",
    scripture: "Ephesians 6:10",
    body: "The Christian life is not a life of passive faith. God calls us to be strong — not in our own strength but in His. Every day we face battles — in our minds, in our relationships, in our circumstances. But the invitation of Scripture is clear: draw your strength from the Lord. Not from your own ability. Not from your own wisdom. From Him alone. Today whatever you face — draw from His strength. He is more than enough.",
    date: "TODAY"
  };

  const devotionals = [
    {
      title: "Growing Stronger in Faith",
      scripture: "Hebrews 11:1",
      excerpt: "Faith is the substance of things hoped for, the evidence of things not seen. Today, walk by faith...",
      date: "01 APR",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop"
    },
    {
      title: "The Word is Life",
      scripture: "John 6:63",
      excerpt: "The words that I speak to you are spirit and they are life. Let the Word dwell in you richly today...",
      date: "31 MAR",
      image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&h=400&fit=crop"
    },
    {
      title: "Prayer Changes Everything",
      scripture: "James 5:16",
      excerpt: "The effective, fervent prayer of a righteous person avails much. Today, commit to prayer...",
      date: "30 MAR",
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&h=400&fit=crop"
    },
    {
      title: "Walk in Love",
      scripture: "1 John 4:7",
      excerpt: "Beloved, let us love one another, for love is of God. Let love be your mark today...",
      date: "29 MAR",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop"
    },
    {
      title: "Serve with Joy",
      scripture: "Galatians 5:13",
      excerpt: "Through love serve one another. Service is not a burden when love is the motive...",
      date: "28 MAR",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&h=400&fit=crop"
    },
    {
      title: "Kingdom Purpose",
      scripture: "Matthew 6:33",
      excerpt: "Seek first the kingdom of God and His righteousness. Today, make His kingdom your priority...",
      date: "27 MAR",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop"
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe:', subscribeData);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-24 px-6 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1527058554731-0ae094a267dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2hyaXN0aWFuJTIwZGV2b3Rpb25hbCUyMHByYXlleciUyMGpvdXJuYWx8ZW58MXx8fHwxNzc1MTI2NDI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Devotionals"
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
            <span className="text-white">Devotionals</span>
          </div>

          <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-4">
            Daily fuel for your faith
          </p>
          <h1 className="font-['TAN-BUSTER'] text-white text-5xl md:text-6xl tracking-wide mb-6">
            DEVOTIONALS
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
            Start every day in the Word. Our daily devotionals are short, powerful and rooted in Scripture — designed to anchor your heart in God before the day begins.
          </p>
        </div>
      </section>

      {/* Featured Today's Devotional */}
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-8 md:p-12">
            <div className="inline-block px-4 py-2 bg-[#E8821A] rounded-full mb-6">
              <p className="font-['Montserrat'] font-bold text-white text-sm">
                {todaysDevotional.date}'S DEVOTIONAL
              </p>
            </div>

            <h2 className="font-['TAN-BUSTER'] text-white text-4xl md:text-5xl tracking-wide mb-4">
              {todaysDevotional.title}
            </h2>

            <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-8">
              {todaysDevotional.scripture}
            </p>

            <p className="font-['Montserrat'] text-white/90 text-lg leading-relaxed mb-8">
              {todaysDevotional.body}
            </p>

            <button className="px-8 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all">
              Read Full Devotional
            </button>
          </div>
        </div>
      </section>

      {/* Devotional Grid */}
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
            {devotionals.map((devotional, index) => (
              <div
                key={index}
                className="bg-[#1A0500]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg overflow-hidden hover:border-[#E8821A] transition-all group"
              >
                {/* Devotional Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={devotional.image}
                    alt={devotional.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/60 to-[#7A1A0A]/80" />

                  {/* Date Pill */}
                  <div className="absolute top-4 left-4 px-4 py-2 bg-[#E8821A] rounded-full">
                    <p className="font-['Montserrat'] font-bold text-white text-sm">
                      {devotional.date}
                    </p>
                  </div>
                </div>

                {/* Devotional Details */}
                <div className="p-6">
                  <h3 className="font-['TAN-BUSTER'] text-white text-xl tracking-wide mb-2">
                    {devotional.title}
                  </h3>

                  <p className="font-['Signature'] text-[#E8821A] text-lg italic mb-3">
                    {devotional.scripture}
                  </p>

                  <p className="font-['Montserrat'] text-white/80 text-sm leading-relaxed mb-6">
                    {devotional.excerpt}
                  </p>

                  <button className="w-full px-6 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all">
                    Read Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Strip */}
      <section 
        className="relative py-16 px-6 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(232, 130, 26, 0.2) 0%, transparent 50%)
          `,
          backgroundColor: '#1A0500'
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-8 md:p-12 text-center">
            <h3 className="font-['TAN-BUSTER'] text-white text-3xl tracking-wide mb-4">
              NEVER MISS A DEVOTIONAL
            </h3>
            <p className="font-['Montserrat'] text-white/80 text-lg mb-8">
              Subscribe to receive our daily devotional straight to your WhatsApp or email.
            </p>

            <form onSubmit={handleSubscribe} className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={subscribeData.name}
                  onChange={(e) => setSubscribeData({ ...subscribeData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#1A0500]/60 border border-[#E8821A]/30 rounded-lg text-white font-['Montserrat'] placeholder:text-white/50 focus:outline-none focus:border-[#E8821A] transition-colors"
                  required
                />
                <input
                  type="text"
                  placeholder="Email or WhatsApp Number"
                  value={subscribeData.contact}
                  onChange={(e) => setSubscribeData({ ...subscribeData, contact: e.target.value })}
                  className="w-full px-4 py-3 bg-[#1A0500]/60 border border-[#E8821A]/30 rounded-lg text-white font-['Montserrat'] placeholder:text-white/50 focus:outline-none focus:border-[#E8821A] transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}