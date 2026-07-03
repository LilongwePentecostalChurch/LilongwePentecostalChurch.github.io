import { Link } from 'react-router';
import { SocialIcon } from '../components/SocialIcon';
import { LPCLogo } from '../components/LPCLogo';
import { SectionFooter } from '../components/SectionFooter';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { DiscoverCarousel } from '../components/DiscoverCarousel';
import { MinistriesSection } from '../components/MinistriesSection';

const socialLinks = [
  { platform: 'tiktok' as const, label: 'TikTok', url: 'https://www.tiktok.com/@llpentecostalchurch?is_from_webapp=1&sender_device=pc' },
  { platform: 'youtube' as const, label: 'YouTube', url: 'https://youtube.com/@lilongwepentecostalchurch-l1u?si=vbWjtir34kbr5grZ' },
  { platform: 'facebook' as const, label: 'Facebook', url: 'https://web.facebook.com/lilongwepentecostalchurch' },
  { platform: 'instagram' as const, label: 'Instagram', url: 'https://instagram.com/lpc' },
];

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A] via-[#C94A1A] to-[#7A1A0A] opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1A0500]/30 to-[#1A0500]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')] opacity-40"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Script Label */}
          <p className="font-['Signature'] text-2xl text-white mb-6">
            Lilongwe Pentecostal Church · Malawi · 2026
          </p>

          {/* Main Headline */}
          <h1 className="font-['TAN-BUSTER'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 tracking-wider">
            GROWING STRONGER
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 border-4 border-white rounded-full font-['TAN-BUSTER'] text-2xl sm:text-3xl text-white">
              IN
            </span>
          </div>
          <h1 className="font-['TAN-BUSTER'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-8 tracking-wider">
            CHRIST
          </h1>

          {/* Scripture */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-12 bg-white"></div>
            <p className="font-['Montserrat'] text-sm sm:text-base tracking-widest text-white">
              EPHESIANS 6:10
            </p>
            <div className="h-px w-12 bg-white"></div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#service"
              className="px-8 py-4 bg-[#E8821A] text-white rounded-full font-bold hover:bg-[#C94A1A] transition-colors"
            >
              Join Us This Sunday
            </a>
            <Link
              to="/sermons"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-[#1A0500] transition-colors"
            >
              Watch Online
            </Link>
          </div>

          {/* Social Follow Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
            <a
              href="https://www.tiktok.com/@llpentecostalchurch?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-[#1A0500]/80 border-2 border-[#E8821A] rounded-full text-white hover:bg-[#E8821A] transition-colors"
            >
              <SocialIcon platform="tiktok" size={20} />
              <span className="font-['Montserrat'] font-semibold">Follow on TikTok</span>
            </a>
            <a
              href="https://youtube.com/@lilongwepentecostalchurch-l1u?si=vbWjtir34kbr5grZ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-[#1A0500]/80 border-2 border-[#E8821A] rounded-full text-white hover:bg-[#E8821A] transition-colors"
            >
              <SocialIcon platform="youtube" size={20} />
              <span className="font-['Montserrat'] font-semibold">Watch on YouTube</span>
            </a>
            <a
              href="https://web.facebook.com/lilongwepentecostalchurch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-[#1A0500]/80 border-2 border-[#E8821A] rounded-full text-white hover:bg-[#E8821A] transition-colors"
            >
              <SocialIcon platform="facebook" size={20} />
              <span className="font-['Montserrat'] font-semibold">Like on Facebook</span>
            </a>
            <a
              href="https://instagram.com/lpc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-[#1A0500]/80 border-2 border-[#E8821A] rounded-full text-white hover:bg-[#E8821A] transition-colors"
            >
              <SocialIcon platform="instagram" size={20} />
              <span className="font-['Montserrat'] font-semibold">Follow on Instagram</span>
            </a>
          </div>
        </div>

        {/* Bottom Elements */}
        <div className="absolute bottom-8 left-8 z-10 hidden lg:flex gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#E8821A] flex items-center justify-center text-white hover:bg-[#C94A1A] transition-colors"
            >
              <SocialIcon platform={social.platform} size={18} />
            </a>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <LPCLogo size={90} />
        </div>

        <div className="absolute bottom-8 right-8 z-10 hidden lg:block text-right">
          <div className="font-['TAN-BUSTER'] text-white text-xs tracking-wider">
            GROWING STRONGER
          </div>
          <div className="font-['TAN-BUSTER'] text-white text-xs tracking-wider flex items-center gap-1 justify-end">
            <span className="inline-flex items-center justify-center w-4 h-4 border-2 border-white rounded-full text-[8px]">IN</span>
            <span>CHRIST</span>
          </div>
        </div>
      </section>

      {/* Discover More Carousel */}
      <DiscoverCarousel />

      {/* Service Times */}
      <section id="service" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#7A1A0A]/60 to-[#1A0500]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yNSIvPjwvc3ZnPg==')] opacity-40"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white text-center mb-16 tracking-wider">
            SERVICE TIMES
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "SUNDAY MAIN SERVICE",
                time: "9:00 AM & 11:00 AM",
                details: "Join us for powerful worship and life-changing messages"
              },
              {
                title: "TUESDAY BIBLE STUDY",
                time: "6:30 PM",
                details: "Dive deeper into God's Word with our community"
              },
              {
                title: "THURSDAY PRAYER & FASTING",
                time: "5:00 AM - 6:00 AM",
                details: "Corporate Intercessory Prayers - Standing in the gap together"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg bg-gradient-radial from-[#E8821A]/40 via-[#C94A1A]/30 to-[#7A1A0A]/20 backdrop-blur-sm border-2 border-[#E8821A] p-8 hover:shadow-[0_0_30px_rgba(232,130,26,0.5)] transition-all duration-300"
              >
                <h3 className="font-['TAN-BUSTER'] text-2xl text-white mb-4 tracking-wide">
                  {service.title}
                </h3>
                <p className="font-['Signature'] text-4xl text-[#E8821A] mb-4">
                  {service.time}
                </p>
                <p className="font-['Montserrat'] text-white/90">
                  {service.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Areas of Strength */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#C94A1A]/50 via-[#7A1A0A]/40 to-[#1A0500]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl md:text-6xl text-white text-center mb-16 tracking-wider">
            CORE AREAS OF STRENGTH
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Stronger in Faith",
                description: "Deep conviction in God's word and promises, unshakable trust and bold believing.",
                image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwZ3JvdXB8ZW58MXx8fHwxNzc0MDA0NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                number: "02",
                title: "Stronger in the Word",
                description: "Scripture foundation through Care Groups, discipleship, sound doctrinal clarity.",
                image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwZ3JvdXB8ZW58MXx8fHwxNzc0MDA0NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                number: "03",
                title: "Stronger in Prayer",
                description: "Intercession, Fasting and Prayer, intimacy and Spiritual warfare.",
                image: "https://images.unsplash.com/photo-1575516662637-99214ea59f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5aW5nJTIwaGFuZHMlMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzc0MDM3MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                number: "04",
                title: "Stronger in Character",
                description: "Life of integrity, purity, walking in humility and perseverance.",
                image: "https://images.unsplash.com/photo-1604443830970-05ac4193ada9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb25ncmVnYXRpb24lMjB3b3JzaGlwfGVufDF8fHx8MTc3Mzk1MDQ3NHww&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                number: "05",
                title: "Stronger in Service",
                description: "Serving one another, Unity, encouragement and building relationships.",
                image: "https://images.unsplash.com/photo-1765947382559-93260e5d6c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzc0MDA5Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                number: "06",
                title: "Stronger in Purpose",
                description: "City Gospel Outreach, Evangelism and Church Planting, Calling, Ministry and Kingdom Impact.",
                image: "https://images.unsplash.com/photo-1604443830970-05ac4193ada9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb25ncmVnYXRpb24lMjB3b3JzaGlwfGVufDF8fHx8MTc3Mzk1MDQ3NHww&ixlib=rb-4.1.0&q=80&w=1080"
              }
            ].map((area, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg bg-gradient-radial from-[#E8821A]/30 via-[#C94A1A]/20 to-[#7A1A0A]/10 backdrop-blur-sm border border-[#E8821A]/30 hover:border-[#E8821A] transition-all duration-300 group"
              >
                <div className="p-8 relative z-10">
                  <p className="font-['Signature'] text-5xl text-[#E8821A] mb-3">{area.number}</p>
                  <h3 className="font-['TAN-BUSTER'] text-2xl text-white mb-4 tracking-wide">
                    {area.title.toUpperCase()}
                  </h3>
                  <p className="font-['Montserrat'] text-white/90 mb-6 leading-relaxed">
                    {area.description}
                  </p>
                </div>
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#7A1A0A] via-[#7A1A0A]/50 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>

          <SectionFooter />
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#7A1A0A]/70 to-[#1A0500]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] opacity-40"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl md:text-6xl text-white text-center mb-6 tracking-wider">
            FOLLOW OUR JOURNEY
          </h2>
          <p className="font-['Signature'] text-2xl text-[#E8821A] text-center mb-16">
            Stay connected with LPC online
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                platform: 'tiktok' as const,
                name: 'TIKTOK',
                handle: '@lpc',
                description: 'Watch our latest clips and spirit-filled moments',
                buttonText: 'Follow on TikTok',
                url: 'https://www.tiktok.com/@llpentecostalchurch?is_from_webapp=1&sender_device=pc'
              },
              {
                platform: 'youtube' as const,
                name: 'YOUTUBE',
                handle: 'LPC Malawi',
                description: 'Watch live services and full sermons',
                buttonText: 'Subscribe on YouTube',
                url: 'https://youtube.com/@lilongwepentecostalchurch-l1u?si=vbWjtir34kbr5grZ'
              },
              {
                platform: 'facebook' as const,
                name: 'FACEBOOK',
                handle: '/lpc',
                description: 'Join our online church community',
                buttonText: 'Like on Facebook',
                url: 'https://web.facebook.com/lilongwepentecostalchurch'
              },
              {
                platform: 'instagram' as const,
                name: 'INSTAGRAM',
                handle: '@lpc',
                description: 'See our latest photos and stories',
                buttonText: 'Follow on Instagram',
                url: 'https://instagram.com/lpc'
              }
            ].map((social, index) => (
              <div
                key={index}
                className="bg-gradient-radial from-[#E8821A]/20 via-[#C94A1A]/10 to-transparent backdrop-blur-sm border-2 border-[#E8821A] rounded-lg p-8 text-center hover:shadow-[0_0_30px_rgba(232,130,26,0.4)] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#E8821A] flex items-center justify-center text-white">
                    <SocialIcon platform={social.platform} size={32} />
                  </div>
                </div>
                <h3 className="font-['TAN-BUSTER'] text-2xl text-white mb-2 tracking-wider">
                  {social.name}
                </h3>
                <p className="font-['Montserrat'] text-white/80 mb-4">{social.handle}</p>
                <p className="font-['Montserrat'] text-sm text-white/70 mb-6">
                  {social.description}
                </p>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#E8821A] text-white rounded-full font-['Montserrat'] font-bold hover:bg-[#C94A1A] transition-colors"
                >
                  {social.buttonText}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-['Montserrat'] text-white text-lg mb-2">
              All our services are streamed live. Never miss a moment.
            </p>
            <div className="w-24 h-1 bg-[#E8821A] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <MinistriesSection />
    </>
  );
}