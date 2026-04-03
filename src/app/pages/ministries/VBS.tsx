import { Link } from 'react-router';
import { SectionFooter } from '../../components/SectionFooter';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function VBS() {
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
            <Link to="/ministries" className="hover:text-[#E8821A] transition-colors">Ministries</Link>
            <span>/</span>
            <Link to="/ministries/sunday-school/lpc-kids" className="hover:text-[#E8821A] transition-colors">Sunday School</Link>
            <span>/</span>
            <span className="text-[#E8821A]">VBS</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <p className="font-['Signature'] text-3xl text-[#E8821A] mb-4">Summer Fun & Faith</p>
              <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl lg:text-6xl text-white mb-6 tracking-wider leading-tight">
                VACATION BIBLE SCHOOL
              </h2>
              <div className="w-20 h-1 bg-[#E8821A] mb-6"></div>
              <p className="font-['Montserrat'] text-lg text-white/90 leading-relaxed mb-6">
                Every year, LPC hosts an exciting, action-packed Vacation Bible School (VBS) where children discover God's word in fun, engaging, and age-appropriate ways. Through interactive Bible stories, energetic worship, creative crafts, and team games, we plant the seeds of faith that will last a lifetime.
              </p>
              <p className="font-['Montserrat'] text-lg text-white/90 leading-relaxed mb-8">
                Our VBS program is open to all children in the community. It's a safe, welcoming environment where kids can build friendships and grow stronger in Christ.
              </p>
              
              <Link
                to="/events"
                className="inline-block px-8 py-4 bg-[#E8821A] text-white rounded-full font-['Montserrat'] font-bold hover:bg-[#C94A1A] transition-colors"
              >
                Register for Upcoming VBS
              </Link>
            </div>

            {/* Right Column */}
            <div className="relative">
              <div className="relative h-[500px] rounded-lg overflow-hidden border-2 border-[#E8821A]">
                <ImageWithFallback
                  src=""
                  alt="Children participating in VBS activities"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0500] via-[#1A0500]/40 to-transparent"></div>
              </div>

              {/* Badges */}
              <div className="absolute -bottom-6 -left-6 bg-[#1A0500]/90 backdrop-blur-sm border-2 border-[#E8821A] rounded-lg px-6 py-4 shadow-xl">
                <p className="font-['TAN-BUSTER'] text-3xl text-[#E8821A]">AGES 4-12</p>
                <p className="font-['Montserrat'] text-sm text-white">All Are Welcome</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#7A1A0A]/40 to-[#1A0500]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yNSIvPjwvc3ZnPg==')] opacity-40"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white text-center mb-16 tracking-wider">
            WHAT TO EXPECT
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "BIBLICAL TEACHING",
                description: "Deep, age-appropriate lessons that make scripture come alive through storytelling and drama."
              },
              {
                title: "EXCITING ACTIVITIES",
                description: "Hands-on crafts, team-building games, and creative projects that reinforce the daily lesson."
              },
              {
                title: "WORSHIP & MUSIC",
                description: "High-energy worship sessions with actions and songs that children will be singing all year long."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#1A0500]/60 backdrop-blur-sm border border-[#E8821A]/30 p-8 rounded-lg hover:border-[#E8821A] transition-colors"
              >
                <h3 className="font-['TAN-BUSTER'] text-2xl text-[#E8821A] mb-4 tracking-wide">{item.title}</h3>
                <p className="font-['Montserrat'] text-white/90 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <SectionFooter />
        </div>
      </section>
    </div>
  );
}