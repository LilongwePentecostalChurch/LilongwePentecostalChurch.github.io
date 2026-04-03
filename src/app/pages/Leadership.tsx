import { SectionFooter } from '../components/SectionFooter';
import { SocialIcon } from '../components/SocialIcon';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const socialLinks = [
  { platform: 'tiktok' as const, url: 'https://www.tiktok.com/@llpentecostalchurch?is_from_webapp=1&sender_device=pc' },
  { platform: 'youtube' as const, url: 'https://youtube.com/@lilongwepentecostalchurch-l1u?si=vbWjtir34kbr5grZ' },
  { platform: 'facebook' as const, url: 'https://web.facebook.com/lilongwepentecostalchurch' },
  { platform: 'instagram' as const, url: 'https://instagram.com/lpc' },
];

export function Leadership() {
  return (
    <div className="min-h-screen">
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/40 via-[#C94A1A]/30 to-[#7A1A0A]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/20 to-[#1A0500]/60"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="font-['Signature'] text-3xl text-[#E8821A] text-center mb-4">Meet Our Leadership</p>
          <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl md:text-6xl text-white text-center mb-16 tracking-wider">
            THOSE WHO SERVE YOU
          </h2>

          {/* Tier 1 - The Bishop */}
          <div className="mb-16 pb-8 border-b border-[#E8821A]/30">
            <div className="max-w-4xl mx-auto bg-gradient-radial from-[#E8821A]/20 via-[#C94A1A]/10 to-transparent backdrop-blur-sm border-2 border-[#E8821A] rounded-lg overflow-hidden shadow-[0_0_40px_rgba(232,130,26,0.4)]">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="relative h-96">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1560279800-8b23f487ce83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGFzdG9yJTIwcHJlYWNoaW5nfGVufDF8fHx8MTc3NDAzNzIxOHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Bishop"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#E8821A]/40 to-transparent rounded-lg"></div>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-['TAN-BUSTER'] text-4xl text-white mb-2 tracking-wide">
                    [BISHOP NAME]
                  </h3>
                  <p className="font-['Signature'] text-3xl text-[#E8821A] mb-6">Bishop</p>
                  <p className="font-['Montserrat'] text-white/90 leading-relaxed mb-6">
                    Leading with wisdom and compassion, our Bishop has served the Lilongwe community 
                    for over two decades, guiding our church family in spiritual growth and Kingdom impact.
                  </p>
                  <div className="flex gap-3">
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
                </div>
              </div>
            </div>
          </div>

          {/* Tier 2 - The Pastors */}
          <div className="mb-16 pb-8 border-b border-[#E8821A]/30">
            <h3 className="font-['TAN-BUSTER'] text-3xl text-white mb-8 tracking-wide">OUR PASTORS</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "[PASTOR NAME]", role: "Pastor — Youth", description: "Empowering the next generation" },
                { name: "[PASTOR NAME]", role: "Pastor — Worship", description: "Leading us into His presence" },
                { name: "[PASTOR NAME]", role: "Pastor — Outreach", description: "Taking the Gospel to the city" }
              ].map((pastor, index) => (
                <div
                  key={index}
                  className="bg-gradient-radial from-[#E8821A]/20 via-[#C94A1A]/10 to-transparent backdrop-blur-sm border border-[#E8821A] rounded-lg overflow-hidden hover:border-[#E8821A] hover:shadow-[0_0_20px_rgba(232,130,26,0.3)] transition-all"
                >
                  <div className="relative h-64">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1560279800-8b23f487ce83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGFzdG9yJTIwcHJlYWNoaW5nfGVufDF8fHx8MTc3NDAzNzIxOHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt={pastor.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#7A1A0A] via-[#7A1A0A]/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-['TAN-BUSTER'] text-xl text-white mb-2 tracking-wide">
                      {pastor.name}
                    </h4>
                    <p className="font-['Signature'] text-2xl text-[#E8821A] mb-3">{pastor.role}</p>
                    <p className="font-['Montserrat'] text-sm text-white/80 mb-4">{pastor.description}</p>
                    <div className="flex gap-2">
                      {socialLinks.map((social) => (
                        <a
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-[#E8821A] flex items-center justify-center text-white hover:bg-[#C94A1A] transition-colors"
                        >
                          <SocialIcon platform={social.platform} size={14} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tier 3 - Elders */}
          <div className="mb-16 pb-8 border-b border-[#E8821A]/30">
            <h3 className="font-['TAN-BUSTER'] text-3xl text-white mb-8 tracking-wide">ELDERS</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {Array.from({ length: 13 }).map((_, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-3">
                    <div className="w-full h-full rounded-full border-4 border-[#E8821A] overflow-hidden">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1560279800-8b23f487ce83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGFzdG9yJTIwcHJlYWNoaW5nfGVufDF8fHx8MTc3NDAzNzIxOHww&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Elder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <p className="font-['Montserrat'] font-bold text-white text-sm mb-1">[NAME]</p>
                  <p className="font-['Signature'] text-lg text-[#E8821A]">Elder</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tier 4 - Deacons */}
          <div className="mb-16 pb-8 border-b border-[#E8821A]/30">
            <h3 className="font-['TAN-BUSTER'] text-3xl text-white mb-8 tracking-wide">DEACONS</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {Array.from({ length: 13 }).map((_, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-3">
                    <div className="w-full h-full rounded-full border-4 border-[#E8821A] overflow-hidden">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1560279800-8b23f487ce83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGFzdG9yJTIwcHJlYWNoaW5nfGVufDF8fHx8MTc3NDAzNzIxOHww&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Deacon"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <p className="font-['Montserrat'] font-bold text-white text-sm mb-1">[NAME]</p>
                  <p className="font-['Signature'] text-lg text-[#E8821A]">Deacon</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tier 5 - Ministry Leaders */}
          <div className="mb-8">
            <h3 className="font-['TAN-BUSTER'] text-3xl text-white mb-8 tracking-wide">MINISTRY LEADERS</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                "Youth Ministry",
                "Women's Ministry",
                "Worship Ministry",
                "Children's Ministry",
                "Men's Ministry",
                "Outreach Ministry"
              ].map((ministry, index) => (
                <div
                  key={index}
                  className="text-center group cursor-pointer"
                >
                  <div className="relative w-24 h-24 mx-auto mb-3">
                    <div className="w-full h-full rounded-full border-4 border-[#E8821A] overflow-hidden group-hover:shadow-[0_0_20px_rgba(232,130,26,0.6)] transition-all">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1560279800-8b23f487ce83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGFzdG9yJTIwcHJlYWNoaW5nfGVufDF8fHx8MTc3NDAzNzIxOHww&ixlib=rb-4.1.0&q=80&w=1080"
                        alt={ministry}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                  </div>
                  <p className="font-['Montserrat'] font-bold text-white text-sm mb-1">[NAME]</p>
                  <p className="font-['Signature'] text-lg text-[#E8821A]">{ministry}</p>
                </div>
              ))}
            </div>
          </div>

          <SectionFooter />
        </div>
      </section>
    </div>
  );
}