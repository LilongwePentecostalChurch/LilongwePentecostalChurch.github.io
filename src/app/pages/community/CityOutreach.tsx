import { Link } from 'react-router';
import { Users, BookOpen, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function CityOutreach() {
  const steps = [
    {
      step: "01",
      title: "JOIN AN OUTREACH TEAM",
      description: "Connect with our evangelism team and get equipped to share your faith effectively."
    },
    {
      step: "02",
      title: "ATTEND OUTREACH TRAINING",
      description: "We run regular evangelism training to equip every believer to share the Gospel with confidence."
    },
    {
      step: "03",
      title: "GO INTO THE CITY",
      description: "Join us as we take the love and message of Christ to the streets of Lilongwe."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-24 px-6 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759709042164-0dd78a39028b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNpdHklMjBvdXRyZWFjaCUyMG1pc3Npb24lMjBjb21tdW5pdHl8ZW58MXx8fHwxNzc1MTI2Nzk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="City Outreach"
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
            <span className="text-white">City Outreach</span>
          </div>

          <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-4">
            Taking the Gospel to every corner of Lilongwe
          </p>
          <h1 className="font-['TAN-BUSTER'] text-white text-5xl md:text-6xl tracking-wide mb-6">
            CITY OUTREACH
          </h1>
        </div>
      </section>

      {/* Section 1 - About Outreach */}
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
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-6">
                THE GOSPEL TO LILONGWE
              </h2>
              <p className="font-['Montserrat'] text-white/90 leading-relaxed">
                LPC is a church on mission. We believe the Great Commission is not optional — it is the mandate of every believer. Our City Outreach ministry takes the Gospel of Jesus Christ to the streets, communities and neighbourhoods of Lilongwe through street evangelism, door to door outreach and community events.
              </p>
            </div>

            {/* Right - Image */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop"
                alt="City Outreach"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8821A]/20 to-[#7A1A0A]/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - How to Get Involved */}
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-8">
              HOW TO GET INVOLVED
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-[#1A0500]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-6 hover:border-[#E8821A] transition-all"
              >
                <div className="inline-block px-4 py-2 bg-[#E8821A]/20 rounded-full mb-4">
                  <p className="font-['TAN-BUSTER'] text-[#E8821A] text-xl">
                    STEP {step.step}
                  </p>
                </div>
                <h3 className="font-['TAN-BUSTER'] text-white text-xl tracking-wide mb-3">
                  {step.title}
                </h3>
                <p className="font-['Montserrat'] text-white/80 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div 
            className="rounded-lg p-12 text-center"
            style={{
              background: 'linear-gradient(135deg, #E8821A 0%, #C94A1A 50%, #7A1A0A 100%)'
            }}
          >
            <h3 className="font-['TAN-BUSTER'] text-white text-3xl md:text-4xl tracking-wide mb-4">
              READY TO REACH LILONGWE?
            </h3>
            <p className="font-['Montserrat'] text-white text-lg mb-6">
              Join our outreach team and be part of taking the Gospel to every corner of the city.
            </p>
            <button className="px-8 py-3 bg-white text-[#E8821A] font-['Montserrat'] font-bold rounded-full hover:bg-white/90 transition-all">
              Join the Outreach Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}