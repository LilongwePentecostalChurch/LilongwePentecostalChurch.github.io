import { Link } from 'react-router';
import { Clock, MapPin, Users, Coffee, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function PlanYourVisit() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whatToExpect = [
    {
      icon: Clock,
      title: "WHEN",
      description: "Every Sunday 8:00 AM to 10:00 AM"
    },
    {
      icon: MapPin,
      title: "WHERE",
      description: "Lilongwe Pentecostal Church 3Q5J+43X M1 Road Lilongwe"
    },
    {
      icon: Users,
      title: "WHAT TO WEAR",
      description: "Come as you are. There is no dress code."
    },
    {
      icon: Coffee,
      title: "HOW LONG",
      description: "Services run approximately 2 hours."
    }
  ];

  const faqs = [
    {
      question: "What time should I arrive?",
      answer: "We recommend arriving 10-15 minutes before the service starts at 8:00 AM. This gives you time to find parking, be greeted by our welcome team, and find a comfortable seat before worship begins."
    },
    {
      question: "What is the service like?",
      answer: "Our Sunday service is a powerful blend of Spirit-filled worship, expository Bible preaching from Bishop David Chigamba, and corporate prayer. We are a Pentecostal church that believes in the full work of the Holy Spirit and the authority of God's Word."
    },
    {
      question: "What about my children?",
      answer: "We have LPC Kids running at the same time as the main service every Sunday from 8:00 AM to 10:00 AM. Our dedicated children's team provides age-appropriate teaching and activities in a safe, fun environment."
    },
    {
      question: "Is there parking available?",
      answer: "Yes, parking is available at the church. Our parking team will be happy to direct you when you arrive."
    },
    {
      question: "What if I'm visiting for the first time?",
      answer: "We love first-time visitors! Our welcome team will greet you at the door and help you feel at home. You're also welcome to speak to Bishop David Chigamba or any of our pastors after the service — we'd love to meet you personally."
    },
    {
      question: "How can I get involved?",
      answer: "There are many ways to get connected at LPC — from joining a Care Group to volunteering in one of our ministries. Speak to someone on our Connect team after the service and they'll help you find the right place to plug in."
    }
  ];

  const membershipSteps = [
    {
      step: "01",
      title: "ATTEND REGULARLY",
      description: "Start by joining us for Sunday services and experiencing the LPC family."
    },
    {
      step: "02",
      title: "ATTEND MEMBERSHIP CLASS",
      description: "Learn about our vision, values, and what it means to be part of LPC."
    },
    {
      step: "03",
      title: "COMMIT AND JOIN",
      description: "Make LPC your church home and become an official member of the family."
    }
  ];

  const volunteerAreas = [
    "Welcome and Ushering",
    "Media and Tech Team",
    "Worship Team",
    "Children's Team",
    "Outreach Team",
    "Facilities Team"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1748371915375-958214b72d91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Plan Your Visit"
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
            <span className="text-white">Plan Your Visit</span>
          </div>

          <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-4">
            We cannot wait to welcome you to LPC
          </p>
          <h1 className="font-['TAN-BUSTER'] text-white text-5xl md:text-6xl tracking-wide mb-6">
            PLAN YOUR VISIT
          </h1>
        </div>
      </section>

      {/* Section 1 - What to Expect */}
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-8">
              WHAT TO EXPECT
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatToExpect.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-6 text-center hover:border-[#E8821A] transition-all"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-[#E8821A]/10 flex items-center justify-center">
                    <Icon className="text-[#E8821A]" size={28} />
                  </div>
                  <h3 className="font-['TAN-BUSTER'] text-white text-xl tracking-wide mb-3">
                    {item.title}
                  </h3>
                  <p className="font-['Montserrat'] text-white/80 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2 - FAQ */}
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-4">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="font-['Montserrat'] text-white/70">
              Have questions? We have answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1A0500]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg overflow-hidden hover:border-[#E8821A] transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <h3 className="font-['Montserrat'] font-bold text-white text-lg pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`text-[#E8821A] flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    size={24}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="font-['Montserrat'] text-white/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Membership */}
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
          <div className="text-center mb-12">
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-8">
              BECOME A MEMBER OF LPC
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {membershipSteps.map((step, index) => (
              <div
                key={index}
                className="bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-6 text-center hover:border-[#E8821A] transition-all"
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

          <div className="text-center">
            <button className="px-8 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all">
              Register for Membership Class
            </button>
          </div>
        </div>
      </section>

      {/* Section 4 - Volunteer */}
      <section 
        className="relative py-20 px-6 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 30%, rgba(232, 130, 26, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 50% 70%, rgba(122, 26, 10, 0.15) 0%, transparent 40%)
          `,
          backgroundColor: '#150800'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-8">
              VOLUNTEER AT LPC
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {volunteerAreas.map((area, index) => (
              <div
                key={index}
                className="bg-[#1A0500]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-6 text-center hover:border-[#E8821A] transition-all"
              >
                <p className="font-['Montserrat'] font-bold text-white">
                  {area}
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
            <h3 className="font-['TAN-BUSTER'] text-white text-3xl tracking-wide mb-4">
              READY TO SERVE?
            </h3>
            <p className="font-['Montserrat'] text-white text-lg mb-6">
              Join one of our volunteer teams and use your gifts to serve the LPC family.
            </p>
            <button className="px-8 py-3 bg-white text-[#E8821A] font-['Montserrat'] font-bold rounded-full hover:bg-white/90 transition-all">
              Fill In Volunteer Form
            </button>
          </div>
        </div>
      </section>

      {/* Section 5 - Getting Here */}
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
          <div className="text-center mb-12">
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-8">
              GETTING HERE
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Address */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#E8821A]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#E8821A]" size={24} />
                </div>
                <div>
                  <h3 className="font-['Montserrat'] font-bold text-white text-lg mb-2">
                    Lilongwe Pentecostal Church
                  </h3>
                  <p className="font-['Montserrat'] text-white/80 leading-relaxed">
                    3Q5J+43X, M1 Road<br />
                    Lilongwe, Malawi
                  </p>
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
              {/* Pulsing marker */}
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