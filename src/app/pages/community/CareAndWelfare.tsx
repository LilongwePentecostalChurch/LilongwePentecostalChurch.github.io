import { Link } from 'react-router';
import { Heart, Package, Users } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function CareAndWelfare() {
  const services = [
    {
      icon: Package,
      title: "FOOD AND CLOTHING DRIVES",
      description: "Providing practical support to families in need"
    },
    {
      icon: Heart,
      title: "HOSPITAL AND PRISON MINISTRY",
      description: "Bringing hope and the love of Christ to those who need it most"
    },
    {
      icon: Users,
      title: "COMMUNITY SUPPORT AND CARE",
      description: "Standing with the vulnerable and marginalized"
    }
  ];

  const waysToHelp = [
    {
      title: "DONATE",
      description: "Give food, clothing or finances",
      icon: Package
    },
    {
      title: "VOLUNTEER",
      description: "Join our care teams",
      icon: Users
    },
    {
      title: "PRAY",
      description: "Intercede for those in need",
      icon: Heart
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
            src="https://images.unsplash.com/photo-1596450514537-fae68a81346b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwd2VsZmFyZSUyMGhlbHBpbmclMjBoYW5kcyUyMGNvbW11bml0eSUyMGNhcmV8ZW58MXx8fHwxNzc1MTI2Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Care and Welfare"
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
            <Link to="/community" className="hover:text-[#E8821A] transition-colors">Community</Link>
            <span>›</span>
            <span className="text-white">Care and Welfare</span>
          </div>

          <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-4">
            Serving the most vulnerable in Lilongwe
          </p>
          <h1 className="font-['TAN-BUSTER'] text-white text-5xl md:text-6xl tracking-wide mb-6">
            CARE AND WELFARE
          </h1>
        </div>
      </section>

      {/* Section 1 - About Care and Welfare */}
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
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Content */}
            <div>
              <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-6">
                LOVING OUR NEIGHBOUR
              </h2>
              <p className="font-['Montserrat'] text-white/90 leading-relaxed">
                At LPC we believe the church exists not just for those within its walls but for the community around it. Our Care and Welfare ministry reaches out to the most vulnerable people in Lilongwe — providing practical support, care and the love of Christ to those who need it most.
              </p>
            </div>

            {/* Right - Image */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop"
                alt="Care and Welfare"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8821A]/20 to-[#7A1A0A]/40" />
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-6 text-center hover:border-[#E8821A] transition-all"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[#E8821A]/10 flex items-center justify-center">
                    <Icon className="text-[#E8821A]" size={24} />
                  </div>
                  <h3 className="font-['TAN-BUSTER'] text-white text-lg tracking-wide mb-2">
                    {service.title}
                  </h3>
                  <p className="font-['Montserrat'] text-white/70 text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2 - Get Involved */}
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
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-4">
              HOW YOU CAN HELP
            </h2>
            <p className="font-['Montserrat'] text-white/80 text-lg">
              Three ways to give and serve
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {waysToHelp.map((way, index) => {
              const Icon = way.icon;
              return (
                <div
                  key={index}
                  className="bg-[#1A0500]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-8 text-center hover:border-[#E8821A] transition-all"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-[#E8821A]/10 flex items-center justify-center">
                    <Icon className="text-[#E8821A]" size={28} />
                  </div>
                  <h3 className="font-['TAN-BUSTER'] text-white text-2xl tracking-wide mb-3">
                    {way.title}
                  </h3>
                  <p className="font-['Montserrat'] text-white/80 text-sm">
                    {way.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Banner */}
          <div 
            className="rounded-lg p-12 text-center"
            style={{
              background: 'linear-gradient(135deg, #E8821A 0%, #C94A1A 50%, #7A1A0A 100%)'
            }}
          >
            <h3 className="font-['TAN-BUSTER'] text-white text-3xl md:text-4xl tracking-wide mb-4">
              MAKE A DIFFERENCE IN LILONGWE
            </h3>
            <p className="font-['Montserrat'] text-white text-lg mb-6">
              Join us in serving the most vulnerable members of our community.
            </p>
            <button className="px-8 py-3 bg-white text-[#E8821A] font-['Montserrat'] font-bold rounded-full hover:bg-white/90 transition-all">
              Get Involved Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}