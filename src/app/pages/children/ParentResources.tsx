import { Link } from 'react-router';
import { SectionFooter } from '../../components/SectionFooter';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function ParentResources() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/40 via-[#C94A1A]/30 to-[#7A1A0A]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/20 to-[#1A0500]/60"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')] opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-white/60 mb-8 font-['Montserrat'] text-sm">
            <Link to="/" className="hover:text-[#E8821A] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/children" className="hover:text-[#E8821A] transition-colors">Children</Link>
            <span>/</span>
            <span className="text-[#E8821A]">Parent Resources</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column */}
            <div>
              <p className="font-['Signature'] text-3xl text-[#E8821A] mb-4">Equipping the Family</p>
              <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl lg:text-6xl text-white mb-6 tracking-wider leading-tight">
                PARENT RESOURCES
              </h2>
              <div className="w-20 h-1 bg-[#E8821A] mb-6"></div>
              <p className="font-['Montserrat'] text-lg text-white/90 leading-relaxed mb-6">
                We believe that discipleship begins at home. Our goal at LPC is to partner with parents to help raise up a generation that knows, loves, and serves the Lord. We want to equip you with the tools, encouragement, and community you need to build a spiritually strong family.
              </p>
              <p className="font-['Montserrat'] text-lg text-white/90 leading-relaxed">
                Explore our curated materials, guides, and recommended reading designed to help you guide your children in faith every day.
              </p>
            </div>

            {/* Right Column */}
            <div className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden border-2 border-[#E8821A]">
                <ImageWithFallback
                  src=""
                  alt="Parents reading Bible to children"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0500] via-[#1A0500]/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Library Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#7A1A0A]/40 to-[#1A0500]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yNSIvPjwvc3ZnPg==')] opacity-40"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white text-center mb-16 tracking-wider">
            DIGITAL LIBRARY
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Weekly Family Devotionals",
                description: "Short, engaging devotional guides that align with Sunday's sermon to keep the conversation going at home.",
                category: "GUIDES"
              },
              {
                title: "Talking About Tough Topics",
                description: "Scripture-based strategies for navigating difficult conversations with your children in today's world.",
                category: "ARTICLES"
              },
              {
                title: "Praying for Your Children",
                description: "A 30-day prayer calendar and guide focusing on specific areas of spiritual growth for your kids.",
                category: "DOWNLOADS"
              },
              {
                title: "Milestone Celebrations",
                description: "Ideas for celebrating spiritual milestones like salvation, baptism, and transitioning to youth group.",
                category: "GUIDES"
              },
              {
                title: "Recommended Reading List",
                description: "A curated list of Christian books, bibles, and devotionals for various age groups.",
                category: "RESOURCES"
              },
              {
                title: "Media Guidelines",
                description: "Practical advice on navigating screens, social media, and entertainment from a biblical perspective.",
                category: "ARTICLES"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-radial from-[#E8821A]/20 via-[#C94A1A]/10 to-transparent backdrop-blur-sm border-2 border-[#E8821A]/40 hover:border-[#E8821A] hover:-translate-y-2 transition-all duration-300 p-8 rounded-lg group"
              >
                <p className="font-['Montserrat'] text-xs font-bold text-[#E8821A] mb-3 tracking-widest">{item.category}</p>
                <h3 className="font-['TAN-BUSTER'] text-2xl text-white mb-4 tracking-wide">{item.title}</h3>
                <p className="font-['Montserrat'] text-white/80 leading-relaxed mb-6">{item.description}</p>
                <button className="text-[#E8821A] font-['Montserrat'] font-bold group-hover:text-white transition-colors flex items-center gap-2">
                  Access Resource <span>→</span>
                </button>
              </div>
            ))}
          </div>

          <SectionFooter />
        </div>
      </section>
    </div>
  );
}