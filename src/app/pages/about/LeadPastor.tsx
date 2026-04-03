import { Link } from 'react-router';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { useState } from 'react';

export function LeadPastor() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  const visionPillars = [
    {
      title: "THE WORD",
      description: "A church deeply rooted in Scripture and sound doctrine"
    },
    {
      title: "PRAYER",
      description: "A church that believes in and practices the power of prayer"
    },
    {
      title: "DISCIPLESHIP",
      description: "Raising disciples not just members"
    },
    {
      title: "MISSION",
      description: "Taking the Gospel to every corner of Lilongwe and Malawi"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
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
            src="https://images.unsplash.com/photo-1748518146543-67a6b87f7c8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwcGFzdG9yJTIwbGVhZGVyc2hpcCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTEyNjc5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Bishop David Chigamba"
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
            <span className="text-white">Bishop David Chigamba</span>
          </div>

          <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-4">
            Lead Pastor — Lilongwe Pentecostal Church
          </p>
          <h1 className="font-['TAN-BUSTER'] text-white text-5xl md:text-6xl tracking-wide mb-8">
            BISHOP DAVID CHIGAMBA
          </h1>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all"
            >
              Contact the Bishop
            </a>
            <a
              href="#bio"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-['Montserrat'] font-bold rounded-full hover:bg-white hover:text-[#E8821A] transition-all"
            >
              Read Full Bio
            </a>
          </div>
        </div>
      </section>

      {/* Section 1 - Introduction Card */}
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
          <div className="bg-[#150800]/80 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Left - Portrait */}
              <div className="relative">
                <div className="relative inline-block">
                  {/* Double ring border */}
                  <div className="absolute -inset-3 rounded-lg border-2 border-[#E8821A]/50" />
                  <div className="absolute -inset-1.5 rounded-lg border-2 border-[#E8821A]/70" />
                  
                  <div className="relative rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop"
                      alt="Bishop David Chigamba"
                      className="w-full h-[500px] object-cover"
                    />
                  </div>

                  {/* LPC Badge overlay */}
                  <div className="absolute bottom-4 right-4 bg-[#E8821A] text-white px-4 py-2 rounded-full font-['Montserrat'] font-bold text-sm">
                    LPC
                  </div>
                </div>
              </div>

              {/* Right - Message */}
              <div className="flex flex-col justify-center">
                <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-3">
                  A message from our Bishop
                </p>
                <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-6">
                  WELCOME TO LPC
                </h2>
                
                <div className="space-y-4 font-['Montserrat'] text-white/90 leading-relaxed mb-6">
                  <p>
                    I want to personally welcome you to Lilongwe Pentecostal Church — a place where Christ is truly the answer. Whether you are joining us for the first time or you have been part of this family for years — you are loved, you are valued and you belong here.
                  </p>
                  <p>
                    My prayer for you is that every time you encounter LPC — whether in person, online or through this website — you encounter the living God who has all the answers you are looking for. Welcome home.
                  </p>
                </div>

                {/* Signature */}
                <div className="relative">
                  <p className="font-['Signature'] text-[#E8821A] text-2xl italic">
                    — Bishop David Chigamba
                  </p>
                  <div className="h-0.5 w-32 bg-[#E8821A] mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Full Biography */}
      <section 
        id="bio"
        className="relative py-20 px-6 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 20%, rgba(232, 130, 26, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 50% 80%, rgba(122, 26, 10, 0.15) 0%, transparent 40%)
          `,
          backgroundColor: '#150800'
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-3">
              His story
            </p>
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-8">
              THE MAN BEHIND THE VISION
            </h2>
          </div>

          <div className="space-y-6 font-['Montserrat'] text-white/90 leading-relaxed">
            <p>
              Bishop David Chigamba is the Lead Pastor of Lilongwe Pentecostal Church — a man whose life has been marked by a deep encounter with God and an unshakeable call to serve the body of Christ. His journey into ministry was not one of convenience but of conviction — a burning sense that God had placed something on the inside of him that could not be contained.
            </p>
            <p>
              Bishop Chigamba's passion for the Word of God, for prayer and for the lost is evident in everything he does. Under his leadership LPC has grown into a thriving, Spirit-filled community that is making an impact across Lilongwe and beyond. He is known for his bold preaching, his genuine love for people and his unwavering faith that God is still in the business of changing lives.
            </p>
            <p>
              As a leader Bishop Chigamba is deeply committed to discipleship — raising not just church members but disciples of Jesus Christ who are equipped to carry the Gospel into every area of life. His vision for LPC is one of a church that is strong in faith, strong in the Word, strong in prayer and strong in its impact on the city of Lilongwe.
            </p>
            <p>
              Beyond the pulpit Bishop David Chigamba is a husband, a father and a man of prayer who believes that the greatest work of the church is done on its knees. His life is a testament to the power of God to take a willing heart and use it to build something that outlasts a single generation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Vision Statement */}
      <section 
        className="relative py-20 px-6 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 30%, rgba(232, 130, 26, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(122, 26, 10, 0.3) 0%, transparent 50%)
          `,
          backgroundColor: '#0A0300'
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-3">
              The vision
            </p>
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-12">
              VISION FOR LPC
            </h2>
          </div>

          {/* Large centered quote */}
          <div className="relative mb-16">
            <div className="text-center">
              <span className="font-['TAN-BUSTER'] text-[#E8821A] text-6xl">"</span>
              <p className="font-['TAN-BUSTER'] text-white text-2xl md:text-3xl leading-relaxed max-w-4xl mx-auto my-6">
                My vision for LPC is a church that is Growing Stronger in Christ — stronger in faith, stronger in the Word, stronger in prayer, stronger in character, stronger in service and stronger in purpose. A church that transforms Lilongwe one life at a time.
              </p>
              <span className="font-['TAN-BUSTER'] text-[#E8821A] text-6xl">"</span>
            </div>
            <p className="font-['Signature'] text-[#E8821A] text-2xl italic text-center mt-6">
              — Bishop David Chigamba
            </p>
          </div>

          {/* Vision pillars */}
          <div className="grid md:grid-cols-4 gap-6">
            {visionPillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-[#1A0500]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-6 text-center hover:border-[#E8821A] transition-all"
              >
                <h3 className="font-['TAN-BUSTER'] text-white text-sm tracking-wide mb-3">
                  {pillar.title}
                </h3>
                <p className="font-['Montserrat'] text-white/70 text-xs leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - 2026 Word */}
      <section 
        className="relative py-20 px-6 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 40% 50%, rgba(232, 130, 26, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 60% 80%, rgba(122, 26, 10, 0.2) 0%, transparent 50%)
          `,
          backgroundColor: '#1A0500'
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-3">
              A word for 2026
            </p>
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-6">
              GROWING STRONGER IN CHRIST
            </h2>
          </div>

          <div className="font-['Montserrat'] text-white/90 leading-relaxed mb-6">
            <p>
              This is the word God has placed on my heart for LPC in 2026 — Growing Stronger in Christ. Based on Ephesians 6:10 — Finally be strong in the Lord and in his mighty power — this is our mandate for the year. We are not growing stronger in our own strength. We are growing stronger in Christ. In His Word. In His Spirit. In His grace. And I believe that as we commit to this — God is going to do things in and through LPC that will mark this city for generations.
            </p>
          </div>

          <div className="text-center">
            <p className="font-['Signature'] text-[#E8821A] text-2xl italic">
              — Bishop David Chigamba
            </p>
            <p className="font-['Montserrat'] text-[#E8821A] font-bold mt-4">
              Ephesians 6:10
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 - Contact the Bishop */}
      <section 
        id="contact"
        className="relative py-20 px-6 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 50%, rgba(232, 130, 26, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(122, 26, 10, 0.15) 0%, transparent 50%)
          `,
          backgroundColor: '#150800'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Contact Details */}
            <div>
              <h3 className="font-['TAN-BUSTER'] text-white text-3xl tracking-wide mb-8">
                CONTACT THE BISHOP
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8821A]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#E8821A]" size={20} />
                  </div>
                  <div>
                    <p className="font-['Montserrat'] font-bold text-white mb-1">Phone</p>
                    <p className="font-['Montserrat'] text-white/70 text-sm">To be updated</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8821A]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#E8821A]" size={20} />
                  </div>
                  <div>
                    <p className="font-['Montserrat'] font-bold text-white mb-1">Email</p>
                    <p className="font-['Montserrat'] text-white/70 text-sm">To be updated</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8821A]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#E8821A]" size={20} />
                  </div>
                  <div>
                    <p className="font-['Montserrat'] font-bold text-white mb-1">Address</p>
                    <p className="font-['Montserrat'] text-white/70 text-sm">
                      Lilongwe Pentecostal Church<br />
                      M1 Road, Lilongwe
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                <a
                  href="https://www.youtube.com/@LilongwePentecostalChurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#E8821A]/10 flex items-center justify-center hover:bg-[#E8821A] transition-all group"
                >
                  <Youtube className="text-[#E8821A] group-hover:text-white transition-colors" size={20} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#E8821A]/10 flex items-center justify-center hover:bg-[#E8821A] transition-all group"
                >
                  <Facebook className="text-[#E8821A] group-hover:text-white transition-colors" size={20} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#E8821A]/10 flex items-center justify-center hover:bg-[#E8821A] transition-all group"
                >
                  <Instagram className="text-[#E8821A] group-hover:text-white transition-colors" size={20} />
                </a>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-['Montserrat'] text-white/90 text-sm mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1A0500]/60 border border-[#E8821A]/30 rounded-lg text-white font-['Montserrat'] focus:outline-none focus:border-[#E8821A] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block font-['Montserrat'] text-white/90 text-sm mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1A0500]/60 border border-[#E8821A]/30 rounded-lg text-white font-['Montserrat'] focus:outline-none focus:border-[#E8821A] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block font-['Montserrat'] text-white/90 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1A0500]/60 border border-[#E8821A]/30 rounded-lg text-white font-['Montserrat'] focus:outline-none focus:border-[#E8821A] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block font-['Montserrat'] text-white/90 text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-[#1A0500]/60 border border-[#E8821A]/30 rounded-lg text-white font-['Montserrat'] focus:outline-none focus:border-[#E8821A] transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}