import { Link } from 'react-router';
import { Book, Users, Heart, MapPin, Clock, Coffee, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useState } from 'react';
import { sendFormEmail } from '../../../lib/emailService';

export function CareGroups() {
  const [formData, setFormData] = useState({
    name: '',
    area: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const values = [
    {
      icon: Book,
      title: "THE WORD",
      description: "Studying Scripture together in a safe, open space where questions are welcomed."
    },
    {
      icon: Heart,
      title: "PRAYER",
      description: "Carrying one another's burdens and interceding together in faith."
    },
    {
      icon: Users,
      title: "COMMUNITY",
      description: "Building genuine, lasting friendships rooted in Christ."
    }
  ];

  const meetingFlow = [
    { icon: Coffee, step: "01", label: "Fellowship", desc: "Arrive, connect, share a meal or snack together." },
    { icon: Book, step: "02", label: "The Word", desc: "Short Bible study or reflection tied to Sunday's message." },
    { icon: Heart, step: "03", label: "Prayer", desc: "Pray for one another's needs, families and the city." },
    { icon: MapPin, step: "04", label: "Go & Serve", desc: "Care for someone in your neighbourhood before the next meeting." },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      await sendFormEmail({
        form_type:  'Care Group Enquiry',
        from_name:  formData.name,
        phone:      formData.phone,
        details:    `Area in Lilongwe: ${formData.area}`,
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

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1080&h=720&fit=crop"
            alt="Care Groups"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0500]/60 via-[#1A0500]/70 to-[#1A0500]/90" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6 font-['Montserrat'] text-sm text-white/70">
            <Link to="/" className="hover:text-[#E8821A] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Care Groups</span>
          </div>
          <p className="font-['Signature'] text-[#E8821A] text-3xl italic mb-4">Do life together</p>
          <h1 className="font-['TAN-BUSTER'] text-white text-5xl md:text-7xl tracking-wide mb-6">
            CARE GROUPS
          </h1>
          <p className="font-['Montserrat'] text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Small groups meeting across Lilongwe — studying the Word, praying together, and doing life in community.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="#find"
              className="px-8 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all"
            >
              Find a Group Near You
            </a>
            <Link
              to="/connect/plan-your-visit#contact"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-['Montserrat'] font-bold rounded-full hover:bg-white hover:text-[#1A0500] transition-all"
            >
              Speak to a Pastor
            </Link>
          </div>
        </div>
      </section>

      {/* ── What is a Care Group ─────────────────────────────── */}
      <section className="relative py-24 px-6 overflow-hidden" style={{ backgroundColor: '#1A0500' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(232,130,26,0.12) 0%, transparent 55%), radial-gradient(circle at 80% 20%, rgba(122,26,10,0.18) 0%, transparent 50%)'
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(232,130,26,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=600&fit=crop"
                alt="Care Group meeting"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#1A0500]/60" />
              {/* Pull quote on image */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#1A0500]/80 backdrop-blur-sm border-l-4 border-[#E8821A] rounded-r-lg p-4">
                <p className="font-['Signature'] text-[#E8821A] text-xl italic">
                  "Church is not just something you attend — it is a community you belong to."
                </p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-3">The heartbeat of LPC</p>
              <h2 className="font-['TAN-BUSTER'] text-white text-4xl md:text-5xl tracking-wide mb-6 leading-tight">
                WHAT IS A<br />CARE GROUP?
              </h2>
              <p className="font-['Montserrat'] text-white/80 leading-relaxed mb-6">
                Care Groups are small groups of believers who meet weekly in homes across Lilongwe. They are where real relationships are forged — where you are known by name, prayed for by name, and where the Sunday message becomes Monday living.
              </p>
              <p className="font-['Montserrat'] text-white/80 leading-relaxed mb-8">
                We believe discipleship happens in community. Care Groups are how LPC takes the church beyond the four walls and into every neighbourhood of the city.
              </p>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-[#E8821A] shrink-0" />
                <p className="font-['Montserrat'] text-white/70 text-sm">Groups meet weekly — weekday evenings or Saturday mornings depending on your area.</p>
              </div>
            </div>
          </div>

          {/* Value Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/20 rounded-2xl p-8 text-center hover:border-[#E8821A] hover:bg-[#150800]/80 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-[#E8821A]/10 group-hover:bg-[#E8821A]/20 flex items-center justify-center transition-all">
                    <Icon className="text-[#E8821A]" size={28} />
                  </div>
                  <h3 className="font-['TAN-BUSTER'] text-white text-xl tracking-wide mb-3">{value.title}</h3>
                  <p className="font-['Montserrat'] text-white/70 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What Happens in a Meeting ────────────────────────── */}
      <section
        className="relative py-24 px-6 overflow-hidden"
        style={{ backgroundColor: '#150800' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-3">A typical evening</p>
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl md:text-5xl tracking-wide">
              WHAT TO EXPECT
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {meetingFlow.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="relative bg-[#1A0500]/70 border border-[#E8821A]/20 rounded-2xl p-6 hover:border-[#E8821A]/50 transition-all">
                  <span className="font-['TAN-BUSTER'] text-[#E8821A]/20 text-5xl absolute top-4 right-5 select-none">{item.step}</span>
                  <div className="w-12 h-12 rounded-xl bg-[#E8821A]/10 flex items-center justify-center mb-4">
                    <Icon className="text-[#E8821A]" size={22} />
                  </div>
                  <h4 className="font-['TAN-BUSTER'] text-white text-lg tracking-wide mb-2">{item.label}</h4>
                  <p className="font-['Montserrat'] text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Find a Care Group Form ───────────────────────────── */}
      <section
        id="find"
        className="relative py-24 px-6 overflow-hidden"
        style={{ backgroundColor: '#1A0500' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 30%, rgba(232,130,26,0.08) 0%, transparent 60%)'
          }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-3">We'll find one close to you</p>
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl md:text-5xl tracking-wide mb-4">
              FIND YOUR CARE GROUP
            </h2>
            <p className="font-['Montserrat'] text-white/70 text-base">
              Care Groups meet across different areas of Lilongwe. Fill in your details and our coordinator will connect you with the nearest group within 48 hours.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#150800]/60 border border-[#E8821A]/40 rounded-2xl p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#E8821A]/10 flex items-center justify-center">
                <Heart className="text-[#E8821A]" size={30} />
              </div>
              <h3 className="font-['TAN-BUSTER'] text-white text-3xl tracking-wide mb-3">YOU'RE ALL SET!</h3>
              <p className="font-['Montserrat'] text-white/70 leading-relaxed">
                Thank you, <span className="text-white font-bold">{formData.name}</span>! Our Care Group coordinator will be in touch with you shortly to connect you with a group near <span className="text-white font-bold">{formData.area}</span>.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', area: '', phone: '' }); }}
                className="mt-6 font-['Montserrat'] text-[#E8821A] text-sm underline hover:text-white transition-colors"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/20 rounded-2xl p-8 space-y-6"
            >
              <div>
                <label className="block font-['Montserrat'] text-white/90 text-sm font-bold mb-2 uppercase tracking-wide">
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Chisomo Banda"
                  className="w-full px-4 py-3 bg-[#1A0500]/80 border border-[#E8821A]/20 rounded-xl text-white placeholder-white/30 font-['Montserrat'] focus:outline-none focus:border-[#E8821A] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block font-['Montserrat'] text-white/90 text-sm font-bold mb-2 uppercase tracking-wide">
                  Your Area in Lilongwe
                </label>
                <input
                  type="text"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  placeholder="e.g. Area 25, Crossroads, Chilinde…"
                  className="w-full px-4 py-3 bg-[#1A0500]/80 border border-[#E8821A]/20 rounded-xl text-white placeholder-white/30 font-['Montserrat'] focus:outline-none focus:border-[#E8821A] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block font-['Montserrat'] text-white/90 text-sm font-bold mb-2 uppercase tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+265 ..."
                  className="w-full px-4 py-3 bg-[#1A0500]/80 border border-[#E8821A]/20 rounded-xl text-white placeholder-white/30 font-['Montserrat'] focus:outline-none focus:border-[#E8821A] transition-colors"
                  required
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
                {sending ? 'Sending…' : <> Find a Care Group <ChevronRight size={18} /> </>}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── Start / Lead a Care Group CTA ───────────────────── */}
      <section
        className="relative py-20 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #E8821A 0%, #C94A1A 50%, #7A1A0A 100%)' }}
      >
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="font-['Signature'] text-white/80 text-2xl italic mb-3">Feel the calling?</p>
          <h2 className="font-['TAN-BUSTER'] text-white text-4xl md:text-5xl tracking-wide mb-5">
            LEAD A CARE GROUP
          </h2>
          <p className="font-['Montserrat'] text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            If God is stirring your heart to open your home and lead a group in your area, we want to walk with you. Speak to one of our pastors — we will train and support you every step of the way.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/connect/plan-your-visit#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#E8821A] font-['Montserrat'] font-bold rounded-full hover:bg-white/90 transition-all"
            >
              Speak to a Pastor <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
