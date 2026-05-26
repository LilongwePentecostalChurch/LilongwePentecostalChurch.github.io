import { Link } from 'react-router';
import { Heart, Users, Home } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useState } from 'react';
import { sendFormEmail } from '../../../lib/emailService';

export function CounsellingPrayer() {
  const [prayerRequest, setPrayerRequest] = useState({
    fullName: '',
    phone: '',
    email: '',
    request: '',
    confidential: false
  });

  const counsellingAreas = [
    {
      icon: Heart,
      title: "PERSONAL CHALLENGES",
      description: "Individual struggles and life challenges"
    },
    {
      icon: Users,
      title: "RELATIONSHIP AND FAMILY",
      description: "Marriage, family and relationship issues"
    },
    {
      icon: Home,
      title: "GRIEF AND LOSS",
      description: "Walking through seasons of loss"
    }
  ];

  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      await sendFormEmail({
        form_type:  'Prayer / Counselling Request',
        from_name:  prayerRequest.fullName,
        from_email: prayerRequest.email,
        phone:      prayerRequest.phone,
        details: [
          `Prayer Request: ${prayerRequest.request}`,
          `Confidential: ${prayerRequest.confidential ? 'Yes — please keep private' : 'No'}`,
        ].join('\n'),
      });
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setSending(false);
    }
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
            src="https://images.unsplash.com/photo-1629338789670-630e71caea04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb3Vuc2VsaW5nJTIwcGFzdG9yYWwlMjBjYXJlJTIwcHJheWVyfGVufDF8fHx8MTc3NTEyNjc5NXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Counselling and Prayer"
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
            <span className="text-white">Counselling and Prayer</span>
          </div>

          <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-4">
            We believe God hears and answers prayer
          </p>
          <h1 className="font-['TAN-BUSTER'] text-white text-5xl md:text-6xl tracking-wide mb-6">
            COUNSELLING AND PRAYER
          </h1>
        </div>
      </section>

      {/* Section 1 - Prayer Request */}
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
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Content */}
            <div>
              <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-3">
                Submit your request
              </p>
              <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-6">
                WE ARE PRAYING FOR YOU
              </h2>
              <p className="font-['Montserrat'] text-white/90 leading-relaxed">
                At LPC we believe that prayer changes everything. Our dedicated prayer team covers every prayer request submitted to us with faith and intercession. No request is too big and none is too small. Whatever you are facing — God is bigger. Submit your prayer request below and our team will stand in agreement with you.
              </p>
            </div>

            {/* Right - Form */}
            <div>
              {submitted ? (
                <div className="bg-[#150800]/60 border border-[#E8821A]/40 rounded-lg p-10 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#E8821A]/10 flex items-center justify-center">
                    <Heart className="text-[#E8821A]" size={26} />
                  </div>
                  <h3 className="font-['TAN-BUSTER'] text-white text-2xl tracking-wide mb-3">REQUEST RECEIVED</h3>
                  <p className="font-['Montserrat'] text-white/70 text-sm leading-relaxed">
                    Thank you, <span className="text-white font-bold">{prayerRequest.fullName}</span>. Our prayer team will be lifting your request before God. You are not alone.
                  </p>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-6 space-y-4">
                <div>
                  <label className="block font-['Montserrat'] text-white/90 text-sm mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={prayerRequest.fullName}
                    onChange={(e) => setPrayerRequest({ ...prayerRequest, fullName: e.target.value })}
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
                    value={prayerRequest.phone}
                    onChange={(e) => setPrayerRequest({ ...prayerRequest, phone: e.target.value })}
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
                    value={prayerRequest.email}
                    onChange={(e) => setPrayerRequest({ ...prayerRequest, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1A0500]/60 border border-[#E8821A]/30 rounded-lg text-white font-['Montserrat'] focus:outline-none focus:border-[#E8821A] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block font-['Montserrat'] text-white/90 text-sm mb-2">
                    Prayer Request
                  </label>
                  <textarea
                    value={prayerRequest.request}
                    onChange={(e) => setPrayerRequest({ ...prayerRequest, request: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-[#1A0500]/60 border border-[#E8821A]/30 rounded-lg text-white font-['Montserrat'] focus:outline-none focus:border-[#E8821A] transition-colors resize-none"
                    required
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="confidential"
                    checked={prayerRequest.confidential}
                    onChange={(e) => setPrayerRequest({ ...prayerRequest, confidential: e.target.checked })}
                    className="w-5 h-5 rounded border-[#E8821A]/30 bg-[#1A0500]/60 text-[#E8821A] focus:ring-[#E8821A]"
                  />
                  <label htmlFor="confidential" className="font-['Montserrat'] text-white/90 text-sm">
                    Keep my request confidential
                  </label>
                </div>

                {error && (
                  <p className="font-['Montserrat'] text-red-400 text-sm text-center">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full px-8 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? 'Sending…' : 'Submit Prayer Request'}
                </button>

                <p className="font-['Montserrat'] text-white/70 text-xs text-center">
                  All requests are treated with complete confidentiality and prayed over by our team.
                </p>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Pastoral Counselling */}
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
              We are here for you
            </p>
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-6">
              PASTORAL COUNSELLING
            </h2>
            <p className="font-['Montserrat'] text-white/80 max-w-3xl mx-auto leading-relaxed">
              Our pastoral team is available for one-on-one counselling sessions for members and visitors who are going through difficult seasons. Whether you are dealing with personal challenges, relationship difficulties, grief, spiritual struggles or simply need someone to talk to — our pastors are here. All sessions are completely confidential.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {counsellingAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="bg-[#1A0500]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-6 text-center hover:border-[#E8821A] transition-all"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[#E8821A]/10 flex items-center justify-center">
                    <Icon className="text-[#E8821A]" size={24} />
                  </div>
                  <h3 className="font-['TAN-BUSTER'] text-white text-lg tracking-wide mb-2">
                    {area.title}
                  </h3>
                  <p className="font-['Montserrat'] text-white/70 text-sm">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button className="px-8 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all">
              Book a Counselling Session
            </button>
          </div>
        </div>
      </section>

      {/* Section 3 - Corporate Prayer */}
      <section 
        className="relative py-20 px-6 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1200&h=600&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/90 to-[#7A1A0A]/90" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-['TAN-BUSTER'] text-white text-4xl md:text-5xl tracking-wide mb-6">
            JOIN US IN PRAYER
          </h2>
          <p className="font-['Montserrat'] text-white text-lg mb-8">
            We gather as a church to pray together. Join us every Sunday at 8:00 AM as we open our service with corporate prayer.
          </p>
          <Link
            to="/connect/plan-your-visit"
            className="inline-block px-8 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all"
          >
            Join Us This Sunday
          </Link>
        </div>
      </section>
    </div>
  );
}