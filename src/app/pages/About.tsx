import { SectionFooter } from '../components/SectionFooter';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MalawiMap } from '../components/MalawiMap';
import { SocialIcon } from '../components/SocialIcon';
import { MapPin, Phone } from 'lucide-react';

const socialLinks = [
  { platform: 'tiktok' as const, url: 'https://www.tiktok.com/@llpentecostalchurch?is_from_webapp=1&sender_device=pc' },
  { platform: 'youtube' as const, url: 'https://youtube.com/@lilongwepentecostalchurch-l1u?si=vbWjtir34kbr5grZ' },
  { platform: 'facebook' as const, url: 'https://web.facebook.com/lilongwepentecostalchurch' },
  { platform: 'instagram' as const, url: 'https://instagram.com/lpc' },
];

export function About() {
  return (
    <div className="min-h-screen">
      {/* About Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/40 via-[#C94A1A]/30 to-[#7A1A0A]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/20 to-[#1A0500]/60"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')] opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <p className="font-['Signature'] text-3xl text-[#E8821A] mb-4">Who We Are</p>
              <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white mb-6 tracking-wider">
                WHERE CHRIST IS THE ANSWER
              </h2>
              <div className="w-20 h-1 bg-[#E8821A] mb-6"></div>
              <p className="font-['Montserrat'] text-lg text-white/90 leading-relaxed mb-6">
                Lilongwe Pentecostal Church is a Spirit-filled community committed to growing stronger in Christ. 
                We believe in the power of God's Word, the importance of prayer, and living lives that reflect 
                the character of Jesus Christ.
              </p>
              <p className="font-['Montserrat'] text-lg text-white/90 leading-relaxed">
                Our mission is to equip believers to live purposefully, serve faithfully, and impact our city 
                and nation with the Gospel of Jesus Christ. Join us as we grow stronger together in faith, 
                worship, and community.
              </p>
            </div>

            {/* Right Column */}
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="/images/about-hero.jpg"
                  alt="Church Congregation"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 35%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7A1A0A] to-transparent"></div>
              </div>

              {/* Stat Badges */}
              <div className="absolute -bottom-6 left-6 bg-[#1A0500]/90 backdrop-blur-sm border-2 border-[#E8821A] rounded-lg px-6 py-4">
                <p className="font-['TAN-BUSTER'] text-3xl text-[#E8821A]">2001</p>
                <p className="font-['Montserrat'] text-sm text-white">Established</p>
              </div>
              <div className="absolute top-6 right-6 bg-[#1A0500]/90 backdrop-blur-sm border-2 border-[#E8821A] rounded-lg px-6 py-4">
                <p className="font-['TAN-BUSTER'] text-xl text-[#E8821A]">LILONGWE</p>
                <p className="font-['Montserrat'] text-sm text-white">Malawi</p>
              </div>
              <div className="absolute bottom-20 right-6 bg-[#1A0500]/90 backdrop-blur-sm border-2 border-[#E8821A] rounded-lg px-6 py-4">
                <p className="font-['Montserrat'] text-sm text-white font-bold">Growing Daily</p>
              </div>
            </div>
          </div>

          <SectionFooter />
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Deep Dark Maroon Background */}
        <div className="absolute inset-0 bg-gradient-radial from-[#1A0500]/95 via-[#0A0200] to-[#000000]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8821A]/5 via-transparent to-[#7A1A0A]/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC40Ii8+PC9zdmc+')] opacity-60"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 relative">
            {/* Vertical Divider Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#E8821A] -translate-x-1/2"></div>

            {/* LEFT COLUMN - Location and Invitation */}
            <div className="py-20 px-8 lg:px-16 lg:pr-12">
              <p className="font-['Signature'] text-3xl text-[#E8821A] italic mb-6">
                Come Worship With Us
              </p>
              
              <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl lg:text-6xl text-white mb-6 tracking-wider">
                FIND US IN LILONGWE
              </h2>
              
              <div className="w-20 h-1 bg-[#E8821A] mb-8"></div>
              
              <p className="font-['Montserrat'] text-white/90 text-lg leading-relaxed mb-12">
                We are located along the M1 Road in Area 18A, Lilongwe, Malawi. Our doors are open to everyone. 
                Whether you are visiting for the first time or coming home — you are welcome here.
              </p>

              {/* Location Details List */}
              <div className="space-y-4 mb-12">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#E8821A] flex-shrink-0 mt-1" size={20} />
                  <p className="font-['Montserrat'] text-white/90">
                    3Q5J+43X, M1 Road, Area 18A, Lilongwe, Malawi
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#E8821A] flex-shrink-0 mt-1" size={20} />
                  <p className="font-['Montserrat'] text-white/90">
                    Sunday Services: 9:00 AM and 11:00 AM
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#E8821A] flex-shrink-0 mt-1" size={20} />
                  <p className="font-['Montserrat'] text-white/90">
                    Tuesday Bible Study: 6:30 PM
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#E8821A] flex-shrink-0 mt-1" size={20} />
                  <p className="font-['Montserrat'] text-white/90">
                    Thursday Prayer & Fasting: 5:00 AM - 6:00 AM
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-4 mb-8">
                <a
                  href="https://www.google.com/maps/search/3Q5J+43X+M1+Road+Lilongwe+Malawi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-10 py-4 bg-[#E8821A] text-white rounded-full font-['TAN-BUSTER'] text-lg tracking-wide text-center hover:bg-[#C94A1A] hover:scale-105 transition-all duration-200 shadow-[0_8px_30px_rgba(232,130,26,0.4)] hover:shadow-[0_12px_40px_rgba(232,130,26,0.6)]"
                >
                  GET DIRECTIONS
                </a>
                
                <a
                  href="tel:+265XXXXXXXXX"
                  className="flex items-center justify-center gap-3 w-full px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-['Montserrat'] font-bold hover:bg-[#E8821A] hover:border-[#E8821A] transition-all duration-200"
                >
                  <Phone size={20} />
                  Call Us
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#E8821A] flex items-center justify-center text-white hover:scale-110 hover:brightness-110 transition-all duration-200"
                  >
                    <SocialIcon platform={social.platform} size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN - Interactive Map */}
            <div className="py-20 px-8 lg:px-16 lg:pl-12">
              <div className="border-2 border-[#E8821A] rounded-lg overflow-hidden shadow-[0_0_40px_rgba(232,130,26,0.3)] hover:shadow-[0_0_60px_rgba(232,130,26,0.5)] transition-all duration-500">
                <MalawiMap />
              </div>
            </div>
          </div>

          {/* Section Footer */}
          <div className="pt-16 mt-16 border-t border-[#E8821A]">
            <SectionFooter />
          </div>
        </div>
      </section>
    </div>
  );
}