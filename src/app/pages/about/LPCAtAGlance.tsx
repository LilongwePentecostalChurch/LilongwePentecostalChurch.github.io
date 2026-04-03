import { Link } from 'react-router';
import { MapPin, Cross, Clock, Users, Book, Flame, Globe, Heart } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function LPCAtAGlance() {
  const keyFacts = [
    {
      icon: MapPin,
      stat: "LILONGWE, MALAWI",
      label: "Our Location",
      description: "Located in the capital city of Malawi on M1 Road"
    },
    {
      icon: Cross,
      stat: "PENTECOSTAL",
      label: "Our Identity",
      description: "Spirit-filled, Bible-believing, Christ-centred church"
    },
    {
      icon: Clock,
      stat: "EVERY SUNDAY",
      label: "Service Times",
      description: "8:00 AM to 10:00 AM — one service every Sunday morning"
    },
    {
      icon: Users,
      stat: "GROWING CONGREGATION",
      label: "Our People",
      description: "A thriving and growing family of believers"
    },
    {
      icon: Book,
      stat: "THE WORD",
      label: "Our Foundation",
      description: "Expository Bible preaching every Sunday"
    },
    {
      icon: Flame,
      stat: "THE SPIRIT",
      label: "Our Power",
      description: "Believing in the full work of the Holy Spirit"
    },
    {
      icon: Globe,
      stat: "CITY IMPACT",
      label: "Our Reach",
      description: "Active in gospel outreach across Lilongwe"
    },
    {
      icon: Heart,
      stat: "WHERE CHRIST IS THE ANSWER",
      label: "Our Mission",
      description: "Our mission and heartbeat since day one"
    }
  ];

  const serviceSchedule = [
    {
      service: "Sunday Main Service",
      day: "Every Sunday",
      time: "8:00 AM – 10:00 AM",
      location: "LPC Main Auditorium M1 Road Lilongwe"
    },
    {
      service: "LPC Kids",
      day: "Every Sunday",
      time: "8:00 AM – 10:00 AM",
      location: "LPC Kids Classrooms"
    },
    {
      service: "Care Groups",
      day: "Various",
      time: "Contact us for schedule",
      location: "Various locations across Lilongwe"
    }
  ];

  const whatToExpect = [
    {
      time: "8:00 AM",
      title: "DOORS OPEN",
      description: "Our welcome team is at the entrance to greet you and help you find your seat"
    },
    {
      time: "8:00 AM",
      title: "WORSHIP BEGINS",
      description: "Powerful Spirit-filled praise and worship to set the atmosphere"
    },
    {
      time: "9:00 AM",
      title: "THE MESSAGE",
      description: "Expository Bible preaching from Bishop David Chigamba or one of our pastors"
    },
    {
      time: "10:00 AM",
      title: "PRAYER AND DISMISSAL",
      description: "Corporate prayer, announcements and a warm close to the service"
    }
  ];

  const themePillars = [
    { icon: Book, label: "Stronger in Faith" },
    { icon: Book, label: "Stronger in the Word" },
    { icon: Flame, label: "Stronger in Prayer" },
    { icon: Heart, label: "Stronger in Character" },
    { icon: Users, label: "Stronger in Service" },
    { icon: Globe, label: "Stronger in Purpose" }
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
            src="https://images.unsplash.com/photo-1626133693180-6d89bb103f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBvdmVydmlldyUyMGJ1aWxkaW5nJTIwY29tbXVuaXR5fGVufDF8fHx8MTc3NTEyNjc5NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="LPC At A Glance"
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
            <Link to="/about" className="hover:text-[#E8821A] transition-colors">About</Link>
            <span>›</span>
            <span className="text-white">LPC At A Glance</span>
          </div>

          <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-4">
            Everything you need to know about Lilongwe Pentecostal Church
          </p>
          <h1 className="font-['TAN-BUSTER'] text-white text-5xl md:text-6xl tracking-wide mb-6">
            LPC AT A GLANCE
          </h1>
        </div>
      </section>

      {/* Section 1 - Key Facts Grid */}
      <section 
        className="relative py-20 px-6 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 30%, rgba(232, 130, 26, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(122, 26, 10, 0.2) 0%, transparent 50%)
          `,
          backgroundColor: '#1A0500'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <div
                  key={index}
                  className="bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-6 hover:border-[#E8821A] transition-all group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#E8821A]/10 mb-4 group-hover:bg-[#E8821A]/20 transition-all">
                    <Icon className="text-[#E8821A]" size={24} />
                  </div>
                  <h3 className="font-['TAN-BUSTER'] text-[#E8821A] text-lg tracking-wide mb-2">
                    {fact.stat}
                  </h3>
                  <p className="font-['Montserrat'] font-bold text-white text-sm mb-2">
                    {fact.label}
                  </p>
                  <p className="font-['Montserrat'] text-white/70 text-xs leading-relaxed">
                    {fact.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2 - Service Times */}
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
            <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-3">
              Join us
            </p>
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-8">
              SERVICE TIMES AND LOCATION
            </h2>
          </div>

          {/* Service Table */}
          <div className="bg-[#1A0500]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg overflow-hidden mb-8">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 bg-[#E8821A] p-4">
              <div className="font-['Montserrat'] font-bold text-white text-sm">SERVICE</div>
              <div className="font-['Montserrat'] font-bold text-white text-sm">DAY</div>
              <div className="font-['Montserrat'] font-bold text-white text-sm">TIME</div>
              <div className="font-['Montserrat'] font-bold text-white text-sm">LOCATION</div>
            </div>

            {/* Rows */}
            {serviceSchedule.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-4 gap-4 p-4 border-t border-[#E8821A]/20 hover:bg-[#1A0500]/80 transition-colors"
              >
                <div className="font-['Montserrat'] text-white/90 text-sm">{item.service}</div>
                <div className="font-['Montserrat'] text-white/90 text-sm">{item.day}</div>
                <div className="font-['Montserrat'] text-white/90 text-sm">{item.time}</div>
                <div className="font-['Montserrat'] text-white/90 text-sm">{item.location}</div>
              </div>
            ))}
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-lg overflow-hidden border-2 border-[#E8821A]/30 mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.3!2d33.78!3d-13.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU4JzQ4LjAiUyAzM8KwNDYnNDguMCJF!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Lilongwe+Pentecostal+Church+M1+Road+Lilongwe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Section 3 - What To Expect */}
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
          <div className="text-center mb-12">
            <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-3">
              What to expect
            </p>
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-8">
              A SUNDAY AT LPC
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatToExpect.map((step, index) => (
              <div
                key={index}
                className="bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-6 hover:border-[#E8821A] transition-all"
              >
                <div className="inline-block px-4 py-1 bg-[#E8821A]/20 rounded-full mb-4">
                  <p className="font-['Montserrat'] font-bold text-[#E8821A] text-sm">
                    {step.time}
                  </p>
                </div>
                <h3 className="font-['TAN-BUSTER'] text-white text-lg tracking-wide mb-3">
                  {step.title}
                </h3>
                <p className="font-['Montserrat'] text-white/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - 2026 Theme */}
      <section 
        className="relative py-20 px-6 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 40% 30%, rgba(232, 130, 26, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 60% 70%, rgba(122, 26, 10, 0.3) 0%, transparent 50%)
          `,
          backgroundColor: '#0A0300'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-3">
              Our theme for 2026
            </p>
            <h2 className="font-['TAN-BUSTER'] text-white text-5xl tracking-wide mb-4">
              GROWING STRONGER IN CHRIST
            </h2>
            <p className="font-['Montserrat'] text-white/90 text-lg">
              Ephesians 6:10 — Finally be strong in the Lord and in his mighty power
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {themePillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="bg-[#1A0500]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-4 text-center hover:border-[#E8821A] transition-all group"
                >
                  <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-[#E8821A]/10 flex items-center justify-center group-hover:bg-[#E8821A]/20 transition-all">
                    <Icon className="text-[#E8821A]" size={20} />
                  </div>
                  <p className="font-['Montserrat'] text-white text-xs font-medium leading-tight">
                    {pillar.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5 - Find Us (duplicate for emphasis) */}
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
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Contact Info */}
            <div>
              <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-3">
                Come and see us
              </p>
              <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-8">
                FIND US
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8821A]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#E8821A]" size={20} />
                  </div>
                  <div>
                    <p className="font-['Montserrat'] text-white leading-relaxed">
                      Lilongwe Pentecostal Church<br />
                      3Q5J+43X, M1 Road<br />
                      Lilongwe, Malawi
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8821A]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#E8821A]" size={20} />
                  </div>
                  <div>
                    <p className="font-['Montserrat'] font-bold text-white mb-1">Phone</p>
                    <p className="font-['Montserrat'] text-white/70">To be updated</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8821A]/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="text-[#E8821A]" size={20} />
                  </div>
                  <div>
                    <p className="font-['Montserrat'] font-bold text-white mb-1">YouTube</p>
                    <a
                      href="https://www.youtube.com/@LilongwePentecostalChurch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-['Montserrat'] text-[#E8821A] hover:underline"
                    >
                      Lilongwe Pentecostal Church
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Lilongwe+Pentecostal+Church+M1+Road+Lilongwe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all"
              >
                Get Directions
              </a>
            </div>

            {/* Right - Map */}
            <div className="relative rounded-lg overflow-hidden border-2 border-[#E8821A]/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.3!2d33.78!3d-13.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU4JzQ4LjAiUyAzM8KwNDYnNDguMCJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Pulsing marker effect overlay - cosmetic only */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="w-4 h-4 bg-[#E8821A] rounded-full animate-ping opacity-75" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}