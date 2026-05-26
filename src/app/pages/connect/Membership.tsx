import { Link } from 'react-router';
import { Users, CheckCircle, ChevronRight, BookOpen, Heart, Star } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useState } from 'react';
import { sendFormEmail } from '../../../lib/emailService';

export function Membership() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    howLong: '',
    heardAbout: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const whatYouLearn = [
    { icon: BookOpen, title: "Our Doctrine", desc: "What LPC believes about Scripture, salvation, the Holy Spirit and the church." },
    { icon: Heart, title: "Our Values", desc: "The culture, vision and DNA that drives everything we do at LPC." },
    { icon: Users, title: "Your Place", desc: "How to find your community, serve your gift, and grow as a disciple." },
    { icon: Star, title: "Next Steps", desc: "Practical steps to make LPC your church home and get fully connected." },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      await sendFormEmail({
        form_type:  'Membership Class Registration',
        from_name:  formData.name,
        from_email: formData.email,
        phone:      formData.phone,
        details: [
          `How long attending LPC: ${formData.howLong || 'Not specified'}`,
          `How they heard about LPC: ${formData.heardAbout || 'Not specified'}`,
          `Additional message: ${formData.message || 'None'}`,
        ].join('\n'),
      });
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1080&h=720&fit=crop"
            alt="Membership Class"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0500]/60 via-[#1A0500]/70 to-[#1A0500]/90" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6 font-['Montserrat'] text-sm text-white/70">
            <Link to="/" className="hover:text-[#E8821A] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Membership Class</span>
          </div>
          <p className="font-['Signature'] text-[#E8821A] text-3xl italic mb-4">This is your home</p>
          <h1 className="font-['TAN-BUSTER'] text-white text-5xl md:text-7xl tracking-wide mb-6">
            MEMBERSHIP CLASS
          </h1>
          <p className="font-['Montserrat'] text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you are new to LPC or have been attending for years — membership class is the doorway to belonging. Come and discover who we are, what we believe, and where you fit.
          </p>
          <div className="mt-10">
            <a
              href="#register"
              className="px-8 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>

      {/* ── What You'll Learn ────────────────────────────────── */}
      <section
        className="relative py-24 px-6 overflow-hidden"
        style={{ backgroundColor: '#1A0500' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(232,130,26,0.12) 0%, transparent 55%), radial-gradient(circle at 80% 20%, rgba(122,26,10,0.18) 0%, transparent 50%)'
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-3">One session. A lifetime of belonging.</p>
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl md:text-5xl tracking-wide">
              WHAT YOU'LL DISCOVER
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatYouLearn.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/20 rounded-2xl p-7 hover:border-[#E8821A] hover:bg-[#150800]/80 transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-[#E8821A]/10 group-hover:bg-[#E8821A]/20 flex items-center justify-center transition-all">
                    <Icon className="text-[#E8821A]" size={26} />
                  </div>
                  <h3 className="font-['TAN-BUSTER'] text-white text-lg tracking-wide mb-3">{item.title}</h3>
                  <p className="font-['Montserrat'] text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Detail strip */}
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {[
              { label: "Duration", value: "Single Sunday session after service" },
              { label: "Who is it for", value: "Anyone wanting to officially call LPC their church home" },
              { label: "Cost", value: "Completely free — light refreshments provided" },
            ].map((d, i) => (
              <div key={i} className="flex items-start gap-4 bg-[#150800]/40 border border-[#E8821A]/10 rounded-xl p-5">
                <CheckCircle className="text-[#E8821A] shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-['Montserrat'] text-white/50 text-xs uppercase tracking-widest mb-1">{d.label}</p>
                  <p className="font-['Montserrat'] text-white font-bold text-sm">{d.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registration Form ────────────────────────────────── */}
      <section
        id="register"
        className="relative py-24 px-6 overflow-hidden"
        style={{ backgroundColor: '#150800' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 30%, rgba(232,130,26,0.07) 0%, transparent 60%)'
          }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-3">We'd love to welcome you</p>
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl md:text-5xl tracking-wide mb-4">
              REGISTER FOR CLASS
            </h2>
            <p className="font-['Montserrat'] text-white/70 text-base">
              Fill in the form below and our team will get back to you with the next available date.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#1A0500]/60 border border-[#E8821A]/40 rounded-2xl p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#E8821A]/10 flex items-center justify-center">
                <CheckCircle className="text-[#E8821A]" size={30} />
              </div>
              <h3 className="font-['TAN-BUSTER'] text-white text-3xl tracking-wide mb-3">REGISTERED!</h3>
              <p className="font-['Montserrat'] text-white/70 leading-relaxed">
                Thank you, <span className="text-white font-bold">{formData.name}</span>! We've received your registration and will be in touch soon with class details. We look forward to welcoming you officially into the LPC family.
              </p>
              <Link
                to="/connect/plan-your-visit#contact"
                className="inline-block mt-6 font-['Montserrat'] text-[#E8821A] text-sm underline hover:text-white transition-colors"
              >
                Contact us if you have questions
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[#1A0500]/60 backdrop-blur-sm border border-[#E8821A]/20 rounded-2xl p-8 space-y-6"
            >
              <div>
                <label className="block font-['Montserrat'] text-white/90 text-sm font-bold mb-2 uppercase tracking-wide">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Chisomo Banda"
                  className="w-full px-4 py-3 bg-[#150800]/80 border border-[#E8821A]/20 rounded-xl text-white placeholder-white/30 font-['Montserrat'] focus:outline-none focus:border-[#E8821A] transition-colors"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-['Montserrat'] text-white/90 text-sm font-bold mb-2 uppercase tracking-wide">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-[#150800]/80 border border-[#E8821A]/20 rounded-xl text-white placeholder-white/30 font-['Montserrat'] focus:outline-none focus:border-[#E8821A] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block font-['Montserrat'] text-white/90 text-sm font-bold mb-2 uppercase tracking-wide">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+265 ..."
                    className="w-full px-4 py-3 bg-[#150800]/80 border border-[#E8821A]/20 rounded-xl text-white placeholder-white/30 font-['Montserrat'] focus:outline-none focus:border-[#E8821A] transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-['Montserrat'] text-white/90 text-sm font-bold mb-2 uppercase tracking-wide">
                  How long have you been attending LPC?
                </label>
                <select
                  value={formData.howLong}
                  onChange={(e) => setFormData({ ...formData, howLong: e.target.value })}
                  className="w-full px-4 py-3 bg-[#150800]/80 border border-[#E8821A]/20 rounded-xl text-white font-['Montserrat'] focus:outline-none focus:border-[#E8821A] transition-colors appearance-none"
                >
                  <option value="" disabled className="bg-[#150800]">Select an option</option>
                  <option value="new" className="bg-[#150800]">This is my first time</option>
                  <option value="few-weeks" className="bg-[#150800]">A few weeks</option>
                  <option value="few-months" className="bg-[#150800]">A few months</option>
                  <option value="over-a-year" className="bg-[#150800]">Over a year</option>
                  <option value="years" className="bg-[#150800]">Several years</option>
                </select>
              </div>

              <div>
                <label className="block font-['Montserrat'] text-white/90 text-sm font-bold mb-2 uppercase tracking-wide">
                  How did you hear about LPC?
                </label>
                <input
                  type="text"
                  value={formData.heardAbout}
                  onChange={(e) => setFormData({ ...formData, heardAbout: e.target.value })}
                  placeholder="e.g. Friend, social media, walked past…"
                  className="w-full px-4 py-3 bg-[#150800]/80 border border-[#E8821A]/20 rounded-xl text-white placeholder-white/30 font-['Montserrat'] focus:outline-none focus:border-[#E8821A] transition-colors"
                />
              </div>

              <div>
                <label className="block font-['Montserrat'] text-white/90 text-sm font-bold mb-2 uppercase tracking-wide">
                  Anything you'd like us to know? <span className="text-white/40 font-normal normal-case">(optional)</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  placeholder="Questions, special needs, or anything else…"
                  className="w-full px-4 py-3 bg-[#150800]/80 border border-[#E8821A]/20 rounded-xl text-white placeholder-white/30 font-['Montserrat'] focus:outline-none focus:border-[#E8821A] transition-colors resize-none"
                />
              </div>

              {error && (
                <p className="font-['Montserrat'] text-red-400 text-sm text-center">{error}</p>
              )}
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all text-base disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? 'Sending…' : <> Register for Membership Class <ChevronRight size={18} /> </>}
              </button>

              <p className="font-['Montserrat'] text-white/50 text-xs text-center">
                Our team will reach out within 48 hours to confirm your place and share class details.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────── */}
      <section
        className="relative py-16 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #E8821A 0%, #C94A1A 50%, #7A1A0A 100%)' }}
      >
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-4">
            HAVE QUESTIONS FIRST?
          </h2>
          <p className="font-['Montserrat'] text-white/90 text-lg mb-7">
            Speak to one of our pastors after Sunday service or reach us directly through our contact page.
          </p>
          <Link
            to="/connect/plan-your-visit#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#E8821A] font-['Montserrat'] font-bold rounded-full hover:bg-white/90 transition-all"
          >
            Contact Us <ChevronRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}
