import { Link } from 'react-router';
import { SectionFooter } from '../../components/SectionFooter';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function TestimonyOfGiving() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1552633173-f7019bd12718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBnaXZpbmclMjB0ZXN0aW1vbnklMjBvZmZlcmluZyUyMGdlbmVyb3NpdHl8ZW58MXx8fHwxNzc1MTI2Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Testimony of Giving"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/40 via-[#C94A1A]/50 to-[#7A1A0A]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/70 to-[#1A0500]/80"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] opacity-40"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-white/60 mb-8 font-['Montserrat'] text-sm">
            <Link to="/" className="hover:text-[#E8821A] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#E8821A]">Testimony of Giving</span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-['Signature'] text-3xl text-[#E8821A] mb-4">God's Faithfulness</p>
            <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl lg:text-6xl text-white mb-6 tracking-wider">
              TESTIMONIES OF GIVING
            </h2>
            <div className="w-20 h-1 bg-[#E8821A] mx-auto mb-6"></div>
            <p className="font-['Montserrat'] text-lg text-white/90 leading-relaxed">
              When we honor God with our finances, He promises to pour out His blessings. These stories of faith and generosity reflect God's unchanging faithfulness to those who trust Him with their giving.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonies List */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1A0500]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7A1A0A]/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yNSIvPjwvc3ZnPg==')] opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {[
              {
                name: "The Phiri Family",
                title: "God's Abundant Provision",
                quote: "When we made the commitment to tithe faithfully, we saw God move in miraculous ways. Even when our business faced challenges, our needs were not just met—they were exceeded. God opened doors we never thought possible.",
                image: "https://images.unsplash.com/photo-1586447557026-804f77a10b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNodXJjaCUyMG1lbWJlcnxlbnwxfHx8fDE3NzUwMzQ4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
                date: "March 2026"
              },
              {
                name: "Sister Mary",
                title: "From Scarcity to Overflow",
                quote: "I used to give whatever was left over. But when the pastor preached on first-fruits, I changed my approach. Honoring God first brought peace and order to my finances. Today, I am debt-free and able to be a blessing to others.",
                image: "https://images.unsplash.com/photo-1575516662637-99214ea59f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5aW5nJTIwaGFuZHMlMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzc0MDM3MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
                date: "January 2026"
              }
            ].map((testimony, index) => (
              <div key={index} className="bg-gradient-radial from-[#E8821A]/20 via-[#C94A1A]/10 to-[#1A0500] backdrop-blur-sm border-2 border-[#E8821A]/30 p-8 rounded-lg relative hover:border-[#E8821A] transition-all duration-500">
                <p className="font-['Signature'] text-4xl text-[#E8821A]/40 absolute top-4 right-6">"</p>
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#E8821A]">
                    <ImageWithFallback
                      src={testimony.image}
                      alt={testimony.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-['TAN-BUSTER'] text-2xl text-white tracking-wide">{testimony.name}</h3>
                    <p className="font-['Montserrat'] text-[#E8821A] text-sm font-bold">{testimony.title}</p>
                  </div>
                </div>
                <p className="font-['Montserrat'] text-white/90 text-lg leading-relaxed italic mb-6">
                  "{testimony.quote}"
                </p>
                <p className="font-['Montserrat'] text-white/50 text-sm text-right">
                  Shared in {testimony.date}
                </p>
              </div>
            ))}
          </div>

          {/* Share Your Story CTA */}
          <div className="bg-[#1A0500]/80 border border-[#E8821A] p-12 rounded-lg text-center max-w-4xl mx-auto shadow-[0_0_40px_rgba(232,130,26,0.2)]">
            <h3 className="font-['TAN-BUSTER'] text-3xl text-white mb-4 tracking-wider">SHARE YOUR TESTIMONY</h3>
            <p className="font-['Montserrat'] text-white/80 mb-8 max-w-2xl mx-auto">
              Has God blessed you as a result of your faithfulness in giving? We would love to hear your story and share it to encourage others in their walk of faith.
            </p>
            <a
              href="mailto:testimonies@lpc.org"
              className="inline-block px-8 py-4 bg-[#E8821A] text-white rounded-full font-['Montserrat'] font-bold hover:bg-[#C94A1A] transition-colors"
            >
              Submit Your Story
            </a>
          </div>

          <div className="mt-16">
            <SectionFooter />
          </div>
        </div>
      </section>
    </div>
  );
}