import { Link } from 'react-router';
import { BookOpen, Cross, Heart, Flame, Users, Star } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function WhatWeBelieve() {
  const beliefs = [
    {
      icon: BookOpen,
      title: "THE HOLY BIBLE",
      body: "We believe the Bible is the inspired, infallible and authoritative Word of God. It is our final authority in all matters of faith and conduct. Every word of Scripture is God-breathed and profitable for doctrine, reproof, correction and instruction in righteousness.",
      scripture: "2 Timothy 3:16-17"
    },
    {
      icon: Cross,
      title: "THE NATURE OF GOD",
      body: "We believe in one God eternally existing in three persons — Father, Son and Holy Spirit. God the Father is the creator of all things. Jesus Christ is the Son of God — fully God and fully man — who was born of a virgin, lived a sinless life, died on the cross for our sins, rose bodily from the dead and is coming again. The Holy Spirit is the third person of the Trinity who convicts, regenerates, indwells and empowers believers.",
      scripture: "Matthew 28:19"
    },
    {
      icon: Heart,
      title: "SALVATION",
      body: "We believe that all people have sinned and fall short of the glory of God. Salvation is a free gift of God received through faith in Jesus Christ alone. We are saved by grace through faith — not by works. Repentance toward God and faith in the Lord Jesus Christ are the conditions for salvation. Every person who calls on the name of the Lord shall be saved.",
      scripture: "Ephesians 2:8-9"
    },
    {
      icon: Flame,
      title: "THE HOLY SPIRIT AND SPIRITUAL GIFTS",
      body: "We believe in the baptism of the Holy Spirit as a distinct experience subsequent to salvation, accompanied by the initial physical evidence of speaking in other tongues. We believe that the gifts of the Holy Spirit are active and available to believers today — including prophecy, healing, miracles, tongues and interpretation. Divine healing is provided in the atonement of Christ.",
      scripture: "Acts 2:4"
    },
    {
      icon: Users,
      title: "THE CHURCH",
      body: "We believe the Church is the body of Christ — a community of born-again believers committed to worship, the Word, fellowship, prayer and mission. The local church is God's primary vehicle for discipleship, community transformation and the advancement of His Kingdom. We practice water baptism by immersion and Holy Communion as ordinances of the church.",
      scripture: "Ephesians 1:22-23"
    },
    {
      icon: Star,
      title: "THE SECOND COMING",
      body: "We believe in the personal, visible and imminent return of Jesus Christ. The dead in Christ shall rise first and those who are alive at His coming shall be caught up together with them. There will be a final judgment — the saved will inherit eternal life and the lost will face eternal separation from God. We live with the blessed hope of His return.",
      scripture: "1 Thessalonians 4:16-17"
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
            src="/images/what-we-believe-hero.jpg"
            alt="What We Believe"
            className="w-full h-full object-cover"
            fetchPriority="high"
            style={{ objectPosition: 'center 30%' }}
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
            <span className="text-white">What We Believe</span>
          </div>

          <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-4">
            The faith that anchors Lilongwe Pentecostal Church
          </p>
          <h1 className="font-['TAN-BUSTER'] text-white text-5xl md:text-6xl tracking-wide mb-6">
            WHAT WE BELIEVE
          </h1>
        </div>
      </section>

      {/* Intro Strip */}
      <section 
        className="relative py-12 px-6 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(232, 130, 26, 0.1) 0%, transparent 50%)
          `,
          backgroundColor: '#1A0500'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-['Montserrat'] text-white/90 leading-relaxed text-lg">
            At LPC we are a Bible-believing, Spirit-filled Pentecostal church. Our beliefs are rooted in the unchanging truth of the Word of God. Below is a summary of the core convictions that define who we are and how we live.
          </p>
        </div>
      </section>

      {/* Beliefs Section */}
      <section 
        className="relative py-20 px-6 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 30%, rgba(232, 130, 26, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(122, 26, 10, 0.2) 0%, transparent 50%)
          `,
          backgroundColor: '#150800'
        }}
      >
        <div className="max-w-5xl mx-auto space-y-8">
          {beliefs.map((belief, index) => {
            const Icon = belief.icon;
            return (
              <div
                key={index}
                className="bg-[#1A0500]/60 backdrop-blur-sm border-l-4 border-[#E8821A] rounded-lg p-8 hover:bg-[#1A0500]/80 transition-all group"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-[#E8821A]/10 flex items-center justify-center group-hover:bg-[#E8821A]/20 transition-all">
                      <Icon className="text-[#E8821A]" size={28} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-['TAN-BUSTER'] text-white text-2xl tracking-wide mb-4">
                      {belief.title}
                    </h3>
                    <p className="font-['Montserrat'] text-white/90 leading-relaxed mb-4">
                      {belief.body}
                    </p>
                    <p className="font-['Signature'] text-[#E8821A] text-lg italic">
                      {belief.scripture}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Banner */}
      <section 
        className="relative py-16 px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #E8821A 0%, #C94A1A 50%, #7A1A0A 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-['TAN-BUSTER'] text-white text-4xl md:text-5xl tracking-wide mb-4">
            HAVE QUESTIONS ABOUT OUR FAITH?
          </h2>
          <p className="font-['Montserrat'] text-white text-lg mb-8">
            We would love to talk with you. Speak to any of our pastors after Sunday service or send us a message.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/connect/plan-your-visit#contact"
              className="px-8 py-3 bg-white text-[#E8821A] font-['Montserrat'] font-bold rounded-full hover:bg-white/90 transition-all"
            >
              Contact Us
            </Link>
            <Link
              to="/connect/plan-your-visit"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-['Montserrat'] font-bold rounded-full hover:bg-white hover:text-[#E8821A] transition-all"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}