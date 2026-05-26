import { useState } from 'react';
import { Link } from 'react-router';
import {
  Shield, Star, Cross, UserPlus, Clipboard, Sparkles as StarIcon,
  Check, Phone, Mail, MessageCircle, MapPin, Clock, BookOpen, Users, Calendar,
  ChevronLeft, ChevronRight, X, Expand, Home, Baby, Lightbulb, Book, Flower2, Zap, Heart, Globe, Hand
} from 'lucide-react';
import { SocialIcon } from '../../components/SocialIcon';
import { sendFormEmail } from '../../../lib/emailService';

export function LPCKidsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [loadedPhotos, setLoadedPhotos] = useState(6);

  // Kids contact form state
  const [kidsForm, setKidsForm] = useState({ parentName: '', childName: '', childAge: '', phone: '', email: '', message: '' });
  const [kidsSending, setKidsSending] = useState(false);
  const [kidsSubmitted, setKidsSubmitted] = useState(false);
  const [kidsError, setKidsError] = useState('');

  const handleKidsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setKidsSending(true);
    setKidsError('');
    try {
      await sendFormEmail({
        form_type:  'LPC Kids Registration',
        from_name:  kidsForm.parentName,
        from_email: kidsForm.email,
        phone:      kidsForm.phone,
        details: [
          `Child's Name: ${kidsForm.childName}`,
          `Child's Age: ${kidsForm.childAge}`,
          `Message: ${kidsForm.message || 'None'}`,
        ].join('\n'),
      });
      setKidsSubmitted(true);
    } catch {
      setKidsError('Something went wrong. Please try again or call us directly.');
    } finally {
      setKidsSending(false);
    }
  };

  const galleryPhotos = [
    { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&q=80', caption: 'Children on Stage with Teacher' },
    { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80', caption: 'Learning God\'s Word Together' },
    { src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=200&q=80', caption: 'Active Kids Ministry' },
    { src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80', caption: 'Classroom Bible Study' },
    { src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=200&q=80', caption: 'Teacher Leading Sunday School' },
    { src: 'https://images.unsplash.com/photo-1502052097377-87fa36a5e1e3?w=200&q=80', caption: 'Children Seated in Classroom' },
    { src: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=200&q=80', caption: 'Young Student Reading Scripture' },
    { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&q=80', caption: 'Focused Student at Work' },
  ];

  const ageGroups = [
    { range: '0—2', name: 'Nursery', description: 'A loving and safe nursery environment for our youngest members while parents worship. Fully supervised by trained carers.' },
    { range: '3—5', name: 'Little Lights', description: 'Fun Bible stories, songs, crafts and play-based learning for toddlers and pre-schoolers discovering God\'s love.' },
    { range: '6—9', name: 'Junior Kids', description: 'Interactive Bible lessons, memory verses, games and creative activities for primary school aged children.' },
    { range: '10—12', name: 'Pre-Teen', description: 'Deeper Bible study, discussion and discipleship for pre-teens preparing to transition into LPC Youth.' },
  ];

  const upcomingEvents = [
    {
      day: '15',
      month: 'APR',
      title: 'Kids Camp',
      description: 'Annual holiday kids camp for ages 6 to 12 — fun, faith and fellowship for three days',
      time: '8:00 AM - 5:00 PM',
      location: 'LPC Camp Grounds',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&q=80',
    },
    {
      day: '26',
      month: 'MAY',
      title: 'Children\'s Sunday',
      description: 'A special Sunday service dedicated to celebrating the children of LPC',
      time: '9:00 AM - 12:00 PM',
      location: 'LPC Main Auditorium',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&q=80',
    },
    {
      day: '20',
      month: 'DEC',
      title: 'Christmas Kids Party',
      description: 'Annual Christmas celebration for all LPC Kids children and families',
      time: '10:00 AM - 2:00 PM',
      location: 'LPC Fellowship Hall',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&q=80',
    },
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextPhoto = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryPhotos.length);
  };

  const prevPhoto = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length);
  };

  return (
    <div className="min-h-screen bg-[#1A0500]">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${galleryPhotos[0].src})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-[#C94A1A]/40 to-[#7A1A0A]/80" />
        
        {/* Smoky Texture Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,130,26,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(122,26,10,0.2),transparent_50%)] opacity-30" />

        {/* Breadcrumb */}
        <div className="absolute top-8 left-8 z-10">
          <div className="flex items-center gap-2 text-sm font-['Montserrat'] text-white">
            <Link to="/" className="hover:text-[#E8821A] transition-colors">Home</Link>
            <span>›</span>
            <Link to="/ministries" className="hover:text-[#E8821A] transition-colors">Ministries</Link>
            <span>›</span>
            <Link to="/ministries/sunday-school" className="hover:text-[#E8821A] transition-colors">Sunday School</Link>
            <span>›</span>
            <span>LPC Kids</span>
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-12 left-12 z-10 max-w-2xl">
          <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-2">
            Lilongwe Pentecostal Church
          </p>
          <h1 className="font-['TAN-BUSTER'] text-white text-7xl tracking-wide mb-4">
            LPC KIDS
          </h1>
          <p className="font-['Montserrat'] text-white text-lg mb-6">
            A safe, fun and faith-filled place for your children to grow
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-[#E8821A] text-white rounded-full font-['Montserrat'] font-bold hover:bg-[#C94A1A] transition-colors">
              Register Your Child
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-['Montserrat'] font-bold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Logo Bottom Right */}
        <div className="absolute bottom-12 right-12">
          <div className="w-12 h-12 rounded-full bg-[#E8821A] border-2 border-white" />
        </div>
      </section>

      {/* About LPC Kids Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse at top left, rgba(232,130,26,0.08), transparent 60%), radial-gradient(ellipse at bottom right, rgba(122,26,10,0.12), transparent 60%)',
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Text */}
            <div>
              <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-2">
                About LPC Kids
              </p>
              <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-4">
                WHO WE ARE
              </h2>
              <div className="w-24 h-1 bg-[#E8821A] mb-6"></div>
              
              <div className="space-y-4 font-['Montserrat'] text-white/90 leading-relaxed">
                <p>
                  LPC Kids is the children's ministry of Lilongwe Pentecostal Church. We exist to create a safe, fun and genuinely faith-filled environment where every child can encounter God, learn the Word and grow in their relationship with Jesus Christ.
                </p>
                <p>
                  Every Sunday morning we run age-appropriate classes for children from toddlers all the way through to pre-teens. Our dedicated and trained teachers pour their hearts into making sure every child leaves knowing they are loved by God and valued by their church family.
                </p>
                <p>
                  At LPC Kids we believe children are not the church of tomorrow — they are the church of today. We take their faith seriously and create experiences that are engaging, relevant and rooted in the truth of Scripture.
                </p>
                <p>
                  Whether your child is visiting for the first time or has grown up at LPC — they have a home here. Come and experience LPC Kids this Sunday.
                </p>
              </div>

              {/* Ministry Values */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="p-4 bg-[#1A0500]/60 border border-[#E8821A] rounded-xl">
                  <Shield className="text-[#E8821A] mb-2" size={24} />
                  <h3 className="font-['Montserrat'] font-bold text-white text-sm mb-1">SAFE</h3>
                  <p className="font-['Montserrat'] text-white/70 text-xs">
                    A fully supervised and secure environment for every child
                  </p>
                </div>
                <div className="p-4 bg-[#1A0500]/60 border border-[#E8821A] rounded-xl">
                  <Star className="text-[#E8821A] mb-2" size={24} />
                  <h3 className="font-['Montserrat'] font-bold text-white text-sm mb-1">FUN</h3>
                  <p className="font-['Montserrat'] text-white/70 text-xs">
                    Engaging activities, games and creative learning every week
                  </p>
                </div>
                <div className="p-4 bg-[#1A0500]/60 border border-[#E8821A] rounded-xl">
                  <Cross className="text-[#E8821A] mb-2" size={24} />
                  <h3 className="font-['Montserrat'] font-bold text-white text-sm mb-1">FAITH</h3>
                  <p className="font-['Montserrat'] text-white/70 text-xs">
                    Age-appropriate Bible teaching rooted in the living Word of God
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image & Leader Card */}
            <div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#E8821A] shadow-lg shadow-[#E8821A]/20 mb-6">
                <img 
                  src={galleryPhotos[1].src}
                  alt="LPC Kids Class"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-[#E8821A]/20" />
              </div>

              {/* Leader Card */}
              <div className="p-6 bg-[#1A0500]/60 border border-[#E8821A] rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full border-4 border-[#E8821A] overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80"
                        alt="Ministry Leader"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Montserrat'] font-bold text-white text-lg">Sister Grace Banda</h3>
                    <p className="font-['Signature'] text-[#E8821A] italic text-sm mb-1">LPC Kids Director</p>
                    <p className="font-['Montserrat'] text-white/70 text-sm">
                      Passionate about raising children who love Jesus
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <a href="https://www.tiktok.com/@llpentecostalchurch" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#E8821A] flex items-center justify-center hover:bg-[#C94A1A] transition-colors">
                    <SocialIcon platform="tiktok" size={14} />
                  </a>
                  <a href="https://youtube.com/@lilongwepentecostalchurch-l1u" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#E8821A] flex items-center justify-center hover:bg-[#C94A1A] transition-colors">
                    <SocialIcon platform="youtube" size={14} />
                  </a>
                  <a href="https://web.facebook.com/lilongwepentecostalchurch" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#E8821A] flex items-center justify-center hover:bg-[#C94A1A] transition-colors">
                    <SocialIcon platform="facebook" size={14} />
                  </a>
                  <a href="https://instagram.com/lpc" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#E8821A] flex items-center justify-center hover:bg-[#C94A1A] transition-colors">
                    <SocialIcon platform="instagram" size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-24 px-4 relative overflow-hidden bg-[#1A0500]/40">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at bottom left, rgba(232,130,26,0.1), transparent 60%)',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-2">
              Every Child Belongs
            </p>
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-4">
              OUR AGE GROUPS
            </h2>
            <div className="w-32 h-1 bg-[#E8821A] mx-auto mb-4"></div>
            <p className="font-['Montserrat'] text-white/80 max-w-2xl mx-auto">
              We have a class for every child at every stage of their faith journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ageGroups.map((group, index) => (
              <div 
                key={index}
                className="group p-6 bg-[#1A0500]/60 border border-[#E8821A] rounded-xl hover:shadow-lg hover:shadow-[#E8821A]/30 hover:scale-105 transition-all duration-200"
              >
                <div className="font-['TAN-BUSTER'] text-[#E8821A] text-4xl mb-2">
                  {group.range}
                </div>
                <h3 className="font-['Montserrat'] font-bold text-white text-xl mb-3">
                  {group.name}
                </h3>
                <p className="font-['Montserrat'] text-white/70 text-sm mb-4 leading-relaxed">
                  {group.description}
                </p>
                <button className="px-4 py-2 bg-transparent border border-[#E8821A] text-[#E8821A] rounded-full text-sm font-['Montserrat'] font-bold hover:bg-[#E8821A] hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Register Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse at top right, rgba(122,26,10,0.15), transparent 60%)',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-2">
              Get Your Child Connected
            </p>
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-4">
              HOW TO REGISTER
            </h2>
            <div className="w-32 h-1 bg-[#E8821A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group p-8 bg-[#1A0500]/60 border border-[#E8821A] rounded-xl hover:shadow-lg hover:shadow-[#E8821A]/30 hover:scale-105 transition-all duration-200 text-center">
              <div className="font-['TAN-BUSTER'] text-[#E8821A] text-5xl mb-4">01</div>
              <UserPlus className="text-[#E8821A] mx-auto mb-4" size={32} />
              <h3 className="font-['Montserrat'] font-bold text-white text-xl mb-3">
                ARRIVE ON SUNDAY
              </h3>
              <p className="font-['Montserrat'] text-white/70 leading-relaxed">
                Bring your child to LPC any Sunday morning. Our friendly welcome team will meet you at the entrance and guide you to the LPC Kids check-in point.
              </p>
            </div>

            <div className="group p-8 bg-[#1A0500]/60 border border-[#E8821A] rounded-xl hover:shadow-lg hover:shadow-[#E8821A]/30 hover:scale-105 transition-all duration-200 text-center">
              <div className="font-['TAN-BUSTER'] text-[#E8821A] text-5xl mb-4">02</div>
              <Clipboard className="text-[#E8821A] mx-auto mb-4" size={32} />
              <h3 className="font-['Montserrat'] font-bold text-white text-xl mb-3">
                CHECK IN YOUR CHILD
              </h3>
              <p className="font-['Montserrat'] text-white/70 leading-relaxed">
                Fill in a quick check-in form with your child's name, age and any medical or dietary needs. We take every child's safety and wellbeing seriously.
              </p>
            </div>

            <div className="group p-8 bg-[#1A0500]/60 border border-[#E8821A] rounded-xl hover:shadow-lg hover:shadow-[#E8821A]/30 hover:scale-105 transition-all duration-200 text-center">
              <div className="font-['TAN-BUSTER'] text-[#E8821A] text-5xl mb-4">03</div>
              <StarIcon className="text-[#E8821A] mx-auto mb-4" size={32} />
              <h3 className="font-['Montserrat'] font-bold text-white text-xl mb-3">
                THEY ARE IN GREAT HANDS
              </h3>
              <p className="font-['Montserrat'] text-white/70 leading-relaxed">
                Your child goes to their age-appropriate class while you enjoy the main service. Pick them up after service — they will not want to leave.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="p-12 bg-gradient-to-r from-[#E8821A] to-[#C94A1A] rounded-2xl text-center">
            <h3 className="font-['TAN-BUSTER'] text-white text-3xl mb-2">
              READY TO BRING YOUR CHILD?
            </h3>
            <p className="font-['Montserrat'] text-white mb-6">
              Registration takes less than 5 minutes.
            </p>
            <button className="px-12 py-4 bg-white text-[#1A0500] rounded-full font-['Montserrat'] font-bold text-lg hover:bg-[#E8821A] hover:text-white transition-colors mb-3">
              Register Online Now
            </button>
            <p className="font-['Montserrat'] text-white/90 text-sm">
              Or simply arrive any Sunday morning — no appointment needed.
            </p>
          </div>
        </div>
      </section>

      {/* Child Safety Section */}
      <section className="py-24 px-4 relative overflow-hidden bg-[#0A0200]">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(232,130,26,0.08), transparent 70%)',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-2">
                Your Child Is Safe With Us
              </p>
              <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-4">
                OUR SAFETY PROMISE
              </h2>
              <div className="w-24 h-1 bg-[#E8821A] mb-6"></div>
              
              <p className="font-['Montserrat'] text-white/90 leading-relaxed mb-6">
                The safety and wellbeing of every child at LPC is our highest priority. Every LPC Kids team member is trained, vetted and committed to maintaining the highest standards of child safety and care.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'All teachers and helpers are trained and background checked',
                  'Secure check-in and check-out system every Sunday',
                  'No child is ever left unsupervised',
                  'Clear safeguarding and child protection policy',
                  'Medical information collected for every registered child',
                  'Emergency procedures in place at all times'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="text-[#E8821A] flex-shrink-0 mt-1" size={20} />
                    <span className="font-['Montserrat'] text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <button className="px-8 py-3 bg-transparent border-2 border-[#E8821A] text-[#E8821A] rounded-full font-['Montserrat'] font-bold hover:bg-[#E8821A] hover:text-white transition-colors">
                Read Our Full Safety Policy
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden border-2 border-[#E8821A] shadow-lg shadow-[#E8821A]/20">
              <img 
                src={galleryPhotos[4].src}
                alt="Safe LPC Kids Environment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#E8821A]/20" />
            </div>
          </div>
        </div>
      </section>

      {/* LPC Kids Photo Gallery */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse at top left, rgba(122,26,10,0.12), transparent 60%)',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-2">
              Our Moments
            </p>
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-4">
              LPC KIDS GALLERY
            </h2>
            <div className="w-32 h-1 bg-[#E8821A] mx-auto"></div>
          </div>

          {/* Featured Large Photo */}
          <div 
            className="relative h-[480px] rounded-2xl overflow-hidden border-2 border-[#E8821A] mb-4 group cursor-pointer"
            onClick={() => openLightbox(0)}
          >
            <img 
              src={galleryPhotos[0].src}
              alt={galleryPhotos[0].caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#E8821A]/25 group-hover:bg-[#E8821A]/50 transition-all duration-300" />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-['TAN-BUSTER'] text-white text-2xl">{galleryPhotos[0].caption}</p>
            </div>
            <button className="absolute bottom-4 right-4 w-10 h-10 bg-[#E8821A] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Expand className="text-white" size={20} />
            </button>
          </div>

          {/* Masonry Grid */}
          <div className="grid md:grid-cols-3 gap-2">
            {galleryPhotos.slice(1, loadedPhotos).map((photo, index) => (
              <div 
                key={index + 1}
                className="relative aspect-square rounded-lg overflow-hidden border border-[#E8821A]/30 group cursor-pointer"
                onClick={() => openLightbox(index + 1)}
              >
                <img 
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#E8821A]/25 group-hover:bg-[#E8821A]/50 transition-all duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-['Montserrat'] text-white text-sm">{photo.caption}</p>
                </div>
                <button className="absolute bottom-2 right-2 w-8 h-8 bg-[#E8821A] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Expand className="text-white" size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {loadedPhotos < galleryPhotos.length && (
            <div className="text-center mt-8">
              <button 
                onClick={() => setLoadedPhotos(prev => Math.min(prev + 3, galleryPhotos.length))}
                className="px-8 py-3 bg-transparent border-2 border-[#E8821A] text-[#E8821A] rounded-full font-['Montserrat'] font-bold hover:bg-[#E8821A] hover:text-white transition-colors"
              >
                Load More Photos
              </button>
            </div>
          )}

          {/* Social Sharing Strip */}
          <div className="mt-12 p-6 border-t border-[#E8821A] text-center">
            <p className="font-['Montserrat'] text-white mb-4">
              Share your LPC Kids moments — tag us on social media
            </p>
            <div className="flex justify-center gap-3">
              <a href="https://www.tiktok.com/@llpentecostalchurch" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#E8821A] text-white rounded-full font-['Montserrat'] font-bold hover:bg-[#C94A1A] transition-colors flex items-center gap-2">
                <SocialIcon platform="tiktok" size={16} />
                TikTok
              </a>
              <a href="https://youtube.com/@lilongwepentecostalchurch-l1u" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#E8821A] text-white rounded-full font-['Montserrat'] font-bold hover:bg-[#C94A1A] transition-colors flex items-center gap-2">
                <SocialIcon platform="youtube" size={16} />
                YouTube
              </a>
              <a href="https://web.facebook.com/lilongwepentecostalchurch" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#E8821A] text-white rounded-full font-['Montserrat'] font-bold hover:bg-[#C94A1A] transition-colors flex items-center gap-2">
                <SocialIcon platform="facebook" size={16} />
                Facebook
              </a>
              <a href="https://instagram.com/lpc" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#E8821A] text-white rounded-full font-['Montserrat'] font-bold hover:bg-[#C94A1A] transition-colors flex items-center gap-2">
                <SocialIcon platform="instagram" size={16} />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Children's Events */}
      <section className="py-24 px-4 relative overflow-hidden bg-[#0A0200]">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at bottom right, rgba(232,130,26,0.1), transparent 60%)',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-2">
              What Is Coming Up
            </p>
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-4">
              CHILDREN'S EVENTS
            </h2>
            <div className="w-32 h-1 bg-[#E8821A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="group bg-[#1A0500]/60 border border-[#E8821A] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#E8821A]/30 transition-all duration-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#E8821A]/40" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-['TAN-BUSTER'] text-[#E8821A] text-4xl">{event.day}</div>
                      <div className="font-['Montserrat'] font-bold text-white text-xs">{event.month}</div>
                    </div>
                    <div className="px-3 py-1 bg-[#E8821A] rounded-full">
                      <span className="font-['Montserrat'] font-bold text-white text-xs">LPC Kids</span>
                    </div>
                  </div>
                  <h3 className="font-['TAN-BUSTER'] text-white text-xl mb-2">{event.title}</h3>
                  <p className="font-['Montserrat'] text-white/70 text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="w-full h-px bg-[#E8821A]/30 mb-4"></div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-white/70 text-xs">
                        <Clock size={14} />
                        <span className="font-['Montserrat']">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70 text-xs">
                        <MapPin size={14} />
                        <span className="font-['Montserrat']">{event.location}</span>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-[#E8821A] text-white rounded-full text-sm font-['Montserrat'] font-bold hover:bg-[#C94A1A] transition-colors">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-transparent border-2 border-[#E8821A] text-[#E8821A] rounded-full font-['Montserrat'] font-bold hover:bg-[#E8821A] hover:text-white transition-colors">
              View All Children's Events
            </button>
          </div>
        </div>
      </section>

      {/* Parent Resources */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(232,130,26,0.12), transparent 60%)',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-2">
              For LPC Families
            </p>
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-4">
              PARENT RESOURCES
            </h2>
            <div className="w-32 h-1 bg-[#E8821A] mx-auto mb-4"></div>
            <p className="font-['Montserrat'] text-white/80 max-w-2xl mx-auto">
              Helping you raise your children in the faith at home and at church.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-[#1A0500]/60 border border-[#E8821A] rounded-xl hover:shadow-lg hover:shadow-[#E8821A]/30 hover:scale-105 transition-all duration-200 text-center">
              <BookOpen className="text-[#E8821A] mx-auto mb-4" size={40} />
              <h3 className="font-['Montserrat'] font-bold text-white text-xl mb-3">
                Family Devotionals
              </h3>
              <p className="font-['Montserrat'] text-white/70 mb-4 leading-relaxed">
                Weekly devotionals designed for families to do together at home. Age-appropriate Bible readings, discussion questions and prayer prompts.
              </p>
              <a href="#" className="text-[#E8821A] font-['Montserrat'] font-bold hover:underline">
                Download Now →
              </a>
            </div>

            <div className="group p-8 bg-[#1A0500]/60 border border-[#E8821A] rounded-xl hover:shadow-lg hover:shadow-[#E8821A]/30 hover:scale-105 transition-all duration-200 text-center">
              <Users className="text-[#E8821A] mx-auto mb-4" size={40} />
              <h3 className="font-['Montserrat'] font-bold text-white text-xl mb-3">
                Parenting Seminars
              </h3>
              <p className="font-['Montserrat'] text-white/70 mb-4 leading-relaxed">
                Regular seminars covering topics like raising children in faith, managing screen time, and building strong family foundations in Christ.
              </p>
              <a href="#" className="text-[#E8821A] font-['Montserrat'] font-bold hover:underline">
                View Schedule →
              </a>
            </div>

            <div className="group p-8 bg-[#1A0500]/60 border border-[#E8821A] rounded-xl hover:shadow-lg hover:shadow-[#E8821A]/30 hover:scale-105 transition-all duration-200 text-center">
              <Star className="text-[#E8821A] mx-auto mb-4" size={40} />
              <h3 className="font-['Montserrat'] font-bold text-white text-xl mb-3">
                Bible Activities
              </h3>
              <p className="font-['Montserrat'] text-white/70 mb-4 leading-relaxed">
                Fun Bible-based colouring pages, activity sheets and memory verse cards for children to enjoy at home during the week.
              </p>
              <a href="#" className="text-[#E8821A] font-['Montserrat'] font-bold hover:underline">
                Download Activities →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact LPC Kids */}
      <section className="py-24 px-4 relative overflow-hidden bg-[#0A0200]">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at top center, rgba(232,130,26,0.1), transparent 70%)',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-2">
              Get In Touch
            </p>
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-4">
              CONTACT LPC KIDS
            </h2>
            <div className="w-32 h-1 bg-[#E8821A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Contact Details */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-24 h-24 rounded-full border-4 border-[#E8821A] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80"
                    alt="LPC Kids Director"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-['Montserrat'] font-bold text-white text-xl">Sister Grace Banda</h3>
                  <p className="font-['Signature'] text-[#E8821A] italic">LPC Kids Director</p>
                  <p className="font-['Montserrat'] text-white/70 text-sm">Passionate about children and their faith journey</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Phone className="text-[#E8821A]" size={20} />
                  <span className="font-['Montserrat'] text-white">+265 XXX XXX XXX</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-[#E8821A]" size={20} />
                  <span className="font-['Montserrat'] text-white">lpckids@lpc.org.mw</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="text-[#E8821A]" size={20} />
                  <span className="font-['Montserrat'] text-white">+265 XXX XXX XXX (WhatsApp)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-[#E8821A]" size={20} />
                  <span className="font-['Montserrat'] text-white">LPC Kids Classrooms</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-[#E8821A]" size={20} />
                  <span className="font-['Montserrat'] text-white">Every Sunday 8:00 AM to 12:00 PM</span>
                </div>
              </div>

              <div className="flex gap-3">
                <a href="https://www.tiktok.com/@llpentecostalchurch" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#E8821A] flex items-center justify-center hover:bg-[#C94A1A] transition-colors">
                  <SocialIcon platform="tiktok" size={18} />
                </a>
                <a href="https://youtube.com/@lilongwepentecostalchurch-l1u" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#E8821A] flex items-center justify-center hover:bg-[#C94A1A] transition-colors">
                  <SocialIcon platform="youtube" size={18} />
                </a>
                <a href="https://web.facebook.com/lilongwepentecostalchurch" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#E8821A] flex items-center justify-center hover:bg-[#C94A1A] transition-colors">
                  <SocialIcon platform="facebook" size={18} />
                </a>
                <a href="https://instagram.com/lpc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#E8821A] flex items-center justify-center hover:bg-[#C94A1A] transition-colors">
                  <SocialIcon platform="instagram" size={18} />
                </a>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="p-8 bg-[#1A0500]/60 border border-[#E8821A] rounded-2xl">
              {kidsSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#E8821A]/10 flex items-center justify-center">
                    <Check className="text-[#E8821A]" size={26} />
                  </div>
                  <h3 className="font-['TAN-BUSTER'] text-white text-2xl tracking-wide mb-3">REGISTERED!</h3>
                  <p className="font-['Montserrat'] text-white/70 text-sm leading-relaxed">
                    Thank you, <span className="text-white font-bold">{kidsForm.parentName}</span>! We've received your registration for <span className="text-white font-bold">{kidsForm.childName}</span> and will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
              <form onSubmit={handleKidsSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Parent Full Name"
                    value={kidsForm.parentName}
                    onChange={(e) => setKidsForm({ ...kidsForm, parentName: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A0200] border border-[#E8821A]/30 rounded-lg text-white font-['Montserrat'] focus:border-[#E8821A] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Child's Name"
                    value={kidsForm.childName}
                    onChange={(e) => setKidsForm({ ...kidsForm, childName: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A0200] border border-[#E8821A]/30 rounded-lg text-white font-['Montserrat'] focus:border-[#E8821A] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Child's Age"
                    value={kidsForm.childAge}
                    onChange={(e) => setKidsForm({ ...kidsForm, childAge: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A0200] border border-[#E8821A]/30 rounded-lg text-white font-['Montserrat'] focus:border-[#E8821A] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={kidsForm.phone}
                    onChange={(e) => setKidsForm({ ...kidsForm, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A0200] border border-[#E8821A]/30 rounded-lg text-white font-['Montserrat'] focus:border-[#E8821A] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={kidsForm.email}
                    onChange={(e) => setKidsForm({ ...kidsForm, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A0200] border border-[#E8821A]/30 rounded-lg text-white font-['Montserrat'] focus:border-[#E8821A] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message or Question (optional)"
                    value={kidsForm.message}
                    onChange={(e) => setKidsForm({ ...kidsForm, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-[#0A0200] border border-[#E8821A]/30 rounded-lg text-white font-['Montserrat'] focus:border-[#E8821A] focus:outline-none resize-none"
                  />
                </div>
                {kidsError && (
                  <p className="font-['Montserrat'] text-red-400 text-sm text-center">{kidsError}</p>
                )}
                <button
                  type="submit"
                  disabled={kidsSending}
                  className="w-full px-8 py-4 bg-[#E8821A] text-white rounded-full font-['Montserrat'] font-bold hover:bg-[#C94A1A] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {kidsSending ? 'Sending…' : 'Register My Child'}
                </button>
                <p className="text-center font-['Montserrat'] text-white/70 text-sm">
                  We will get back to you within 24 hours
                </p>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Other Ministries Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(122,26,10,0.12), transparent 60%)',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="font-['Signature'] text-[#E8821A] text-xl italic mb-2">
              Explore More
            </p>
            <h2 className="font-['TAN-BUSTER'] text-white text-4xl tracking-wide mb-4">
              OTHER MINISTRIES
            </h2>
            <div className="w-32 h-1 bg-[#E8821A] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
            {[
              { name: 'Sunday School', icon: Book, description: 'Building faith from the foundation', path: '/ministries/sunday-school', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&q=80' },
              { name: "Women's Ministry", icon: Flower2, description: 'Women of strength and purpose', path: '/ministries/womens-ministry', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80' },
              { name: 'Youth Ministry', icon: Zap, description: 'Unstoppable generation for Christ', path: '/ministries/youth-ministry', image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=200&q=80' },
              { name: "Men's Ministry", icon: Shield, description: 'Men standing strong in faith', path: '/ministries/mens-ministry', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80' },
              { name: 'Couples Ministry', icon: Heart, description: 'Marriage rooted in Christ', path: '/ministries/couples-ministry', image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=200&q=80' },
              { name: 'Evangelism', icon: Globe, description: 'Taking the gospel to the nations', path: '/ministries/evangelism', image: 'https://images.unsplash.com/photo-1502052097377-87fa36a5e1e3?w=200&q=80' },
              { name: 'Intercessors', icon: Hand, description: 'Prayer warriors of LPC', path: '/ministries/intercessors', image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=200&q=80' },
            ].map((ministry, index) => (
              <Link
                key={index}
                to={ministry.path}
                className="group flex flex-col items-center text-center p-6 bg-[#1A0500]/60 border border-[#E8821A] rounded-xl hover:shadow-lg hover:shadow-[#E8821A]/30 hover:scale-105 transition-all duration-200"
              >
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full border-4 border-[#E8821A] overflow-hidden">
                    <img 
                      src={ministry.image}
                      alt={ministry.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-['TAN-BUSTER'] text-white text-sm mb-2">
                  {ministry.name.toUpperCase()}
                </h3>
                <p className="font-['Signature'] text-[#E8821A] italic text-xs mb-3">
                  {ministry.description}
                </p>
                <button className="px-4 py-1 bg-[#E8821A] text-white rounded-full text-xs font-['Montserrat'] font-bold hover:bg-[#C94A1A] transition-colors">
                  Visit
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-[#1A0500]/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button 
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
          >
            <X className="text-[#1A0500]" size={24} />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-4 w-12 h-12 bg-[#E8821A] rounded-full flex items-center justify-center hover:bg-[#C94A1A] transition-colors z-10"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-4 w-12 h-12 bg-[#E8821A] rounded-full flex items-center justify-center hover:bg-[#C94A1A] transition-colors z-10"
          >
            <ChevronRight className="text-white" size={24} />
          </button>

          <div 
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative border-4 border-white rounded-lg overflow-hidden">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#E8821A]"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#E8821A]"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#E8821A]"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#E8821A]"></div>
              
              <img 
                src={galleryPhotos[lightboxIndex].src}
                alt={galleryPhotos[lightboxIndex].caption}
                className="w-full h-auto"
              />
            </div>
            <div className="text-center mt-4 flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E8821A]" />
              <p className="font-['Montserrat'] text-white text-lg">
                {galleryPhotos[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}