import { Link } from 'react-router';
import { Book, Users, Heart } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useState } from 'react';

export function CareGroups() {
  const [formData, setFormData] = useState({
    name: '',
    area: '',
    phone: ''
  });

  const values = [
    {
      icon: Book,
      title: "THE WORD",
      description: "studying Scripture together"
    },
    {
      icon: Heart,
      title: "PRAYER",
      description: "praying for one another"
    },
    {
      icon: Users,
      title: "COMMUNITY",
      description: "building genuine friendships"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Care Group form submitted:', formData);
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
            src="https://images.unsplash.com/photo-1754951875558-b14088865ac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGdyb3VwJTIwcHJheWVyJTIwY2lyY2xlJTIwZmVsbG93c2hpcHxlbnwxfHx8fDE3NzUxMjY3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Care Groups"
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
            <Link to="/connect" className="hover:text-[#E8821A] transition-colors">Connect</Link>
            <span>›</span>
            <span className="text-white">Care Groups</span>
          </div>

          <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-4">
            Do life together with LPC
          </p>
          <h1 className="font-['TAN-BUSTER'] text-white text-5xl md:text-6xl tracking-wide mb-6">
            CARE GROUPS
          </h1>
        </div>
      </section>

      {/* Section 1 - About Care Groups */}
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
                WHAT IS A CARE GROUP
              </h2>
              <p className="font-['Montserrat'] text-white/90 leading-relaxed">
                Care Groups are the heartbeat of community at LPC. They are small groups of believers who meet regularly to study the Bible together, pray for one another, share life and build genuine friendships rooted in faith. At LPC we believe church is not just something you attend on Sunday — it is a community you belong to every day of the week. Care Groups are how we make that real.
              </p>
            </div>

            {/* Right - Image */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop"
                alt="Care Group"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8821A]/20 to-[#7A1A0A]/40" />
            </div>
          </div>

          {/* Value Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-6 text-center hover:border-[#E8821A] transition-all"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[#E8821A]/10 flex items-center justify-center">
                    <Icon className="text-[#E8821A]" size={24} />
                  </div>
                  <h3 className="font-['TAN-BUSTER'] text-white text-lg tracking-wide mb-2">
                    {value.title}
                  </h3>
                  <p className="font-['Montserrat'] text-white/70 text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2 - Find a Care Group */}
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
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-4">
              FIND YOUR CARE GROUP
            </h2>
            <p className="font-['Montserrat'] text-white/80 text-lg">
              We have Care Groups meeting across different areas of Lilongwe. Find one near you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#1A0500]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-8 space-y-6">
            <div>
              <label className="block font-['Montserrat'] text-white/90 text-sm mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-[#150800]/60 border border-[#E8821A]/30 rounded-lg text-white font-['Montserrat'] focus:outline-none focus:border-[#E8821A] transition-colors"
                required
              />
            </div>

            <div>
              <label className="block font-['Montserrat'] text-white/90 text-sm mb-2">
                Your Area in Lilongwe
              </label>
              <input
                type="text"
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                className="w-full px-4 py-3 bg-[#150800]/60 border border-[#E8821A]/30 rounded-lg text-white font-['Montserrat'] focus:outline-none focus:border-[#E8821A] transition-colors"
                required
              />
            </div>

            <div>
              <label className="block font-['Montserrat'] text-white/90 text-sm mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-[#150800]/60 border border-[#E8821A]/30 rounded-lg text-white font-['Montserrat'] focus:outline-none focus:border-[#E8821A] transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all"
            >
              Find a Care Group
            </button>

            <p className="font-['Montserrat'] text-white/70 text-sm text-center">
              Our Care Group coordinator will contact you within 48 hours to connect you with the nearest group.
            </p>
          </form>
        </div>
      </section>

      {/* Section 3 - Start a Care Group */}
      <section 
        className="relative py-16 px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #E8821A 0%, #C94A1A 50%, #7A1A0A 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-['TAN-BUSTER'] text-white text-4xl md:text-5xl tracking-wide mb-4">
            FEEL CALLED TO LEAD A CARE GROUP?
          </h2>
          <p className="font-['Montserrat'] text-white text-lg mb-8">
            If God is putting it on your heart to start a Care Group in your area speak to one of our pastors after Sunday service.
          </p>
          <Link
            to="/about/lead-pastor"
            className="inline-block px-8 py-3 bg-white text-[#E8821A] font-['Montserrat'] font-bold rounded-full hover:bg-white/90 transition-all"
          >
            Speak to a Pastor
          </Link>
        </div>
      </section>
    </div>
  );
}