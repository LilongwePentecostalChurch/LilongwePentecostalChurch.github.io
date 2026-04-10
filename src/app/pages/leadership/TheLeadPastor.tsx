import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { SectionFooter } from '../../components/SectionFooter';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { SocialIcon } from '../../components/SocialIcon';
import { sanityClient, urlFor } from '../../lib/sanityClient';

const socialLinks = [
  { platform: 'tiktok' as const, url: 'https://www.tiktok.com/@llpentecostalchurch?is_from_webapp=1&sender_device=pc' },
  { platform: 'youtube' as const, url: 'https://youtube.com/@lilongwepentecostalchurch-l1u?si=vbWjtir34kbr5grZ' },
  { platform: 'facebook' as const, url: 'https://web.facebook.com/lilongwepentecostalchurch' },
  { platform: 'instagram' as const, url: 'https://instagram.com/lpc' },
];

interface Pastor {
  name: string;
  title: string;
  photoUrl?: string;
  shortBio?: string;
  bio?: any[];
  welcomeMessage?: any[];
  email?: string;
}

function blocksToText(blocks: any[]): string {
  if (!blocks) return '';
  return blocks
    .map((block: any) => block.children?.map((c: any) => c.text).join('') ?? '')
    .join('\n\n');
}

export function TheLeadPastor() {
  const [pastor, setPastor] = useState<Pastor | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "staffMember" && isLeadPastor == true][0] {
        name, title, photo, shortBio, bio, welcomeMessage, email
      }`)
      .then((data: Pastor) => {
        if (data) setPastor(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const photoUrl = pastor?.photoUrl ?? '';
  const name = pastor?.name ?? 'Bishop David Chigamba';
  const title = pastor?.title ?? 'Lead Pastor';
  const welcomeText = pastor?.welcomeMessage
    ? blocksToText(pastor.welcomeMessage)
    : 'I want to personally welcome you to Lilongwe Pentecostal Church — a place where Christ is truly the answer. Whether you are joining us for the first time or you have been part of this family for years — you are loved, you are valued and you belong here.\n\nMy prayer for you is that every time you encounter LPC — whether in person, online or through this website — you encounter the living God who has all the answers you are looking for. Welcome home.';
  const bioText = pastor?.bio
    ? blocksToText(pastor.bio)
    : pastor?.shortBio ?? '';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={photoUrl}
            alt={name}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/40 via-[#C94A1A]/50 to-[#7A1A0A]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/70 to-[#1A0500]/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-white/60 mb-8 font-['Montserrat'] text-sm">
            <Link to="/" className="hover:text-[#E8821A] transition-colors">Home</Link>
            <span>›</span>
            <Link to="/about" className="hover:text-[#E8821A] transition-colors">About</Link>
            <span>›</span>
            <span className="text-[#E8821A]">{name}</span>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="font-['Signature'] text-3xl text-[#E8821A] mb-4">Lead Pastor — Lilongwe Pentecostal Church</p>
            <h1 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl lg:text-7xl text-white mb-6 tracking-wider">
              {name.toUpperCase()}
            </h1>
            <div className="flex flex-wrap gap-4 justify-center">
              {pastor?.email && (
                <a
                  href={`mailto:${pastor.email}`}
                  className="px-8 py-4 bg-[#E8821A] text-white rounded-full font-['Montserrat'] font-bold hover:bg-[#C94A1A] transition-all duration-300"
                >
                  Contact the Bishop
                </a>
              )}
              <a
                href="#bio"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-['Montserrat'] font-bold hover:bg-white/10 transition-all duration-300"
              >
                Read Full Bio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1A0500]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#7A1A0A]/20 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="relative h-[500px] rounded-lg overflow-hidden border-2 border-[#E8821A]">
                {loading ? (
                  <div className="w-full h-full bg-[#2A0A00] flex items-center justify-center">
                    <p className="font-['Montserrat'] text-white/40">Loading...</p>
                  </div>
                ) : (
                  <ImageWithFallback
                    src={photoUrl}
                    alt={name}
                    className="w-full h-full object-cover object-top"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0500] via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 left-6 bg-[#1A0500]/90 backdrop-blur-sm border-2 border-[#E8821A] rounded-lg px-6 py-4">
                <p className="font-['TAN-BUSTER'] text-xl text-[#E8821A]">{title.toUpperCase()}</p>
                <p className="font-['Montserrat'] text-sm text-white">Lilongwe Pentecostal Church</p>
              </div>
            </div>

            {/* Welcome Text */}
            <div>
              <p className="font-['Signature'] text-3xl text-[#E8821A] mb-4">A message from our Bishop</p>
              <h2 className="font-['TAN-BUSTER'] text-4xl text-white mb-6 tracking-wider">WELCOME TO LPC</h2>
              <div className="w-20 h-1 bg-[#E8821A] mb-8"></div>
              {welcomeText.split('\n\n').map((paragraph, i) => (
                <p key={i} className="font-['Montserrat'] text-white/90 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
              <p className="font-['Signature'] text-2xl text-[#E8821A] mt-6">— {name}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Bio */}
      {bioText && (
        <section id="bio" className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-[#7A1A0A]/30 to-[#1A0500]"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="font-['Signature'] text-3xl text-[#E8821A] mb-4 text-center">His Story</p>
            <h2 className="font-['TAN-BUSTER'] text-4xl text-white mb-8 tracking-wider text-center">FULL BIOGRAPHY</h2>
            <div className="w-20 h-1 bg-[#E8821A] mx-auto mb-12"></div>
            {bioText.split('\n\n').map((paragraph, i) => (
              <p key={i} className="font-['Montserrat'] text-white/90 leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* Social & Contact */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8821A] via-[#C94A1A] to-[#7A1A0A]"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-['TAN-BUSTER'] text-3xl text-white mb-4 tracking-wider">CONNECT WITH LPC</h2>
          <p className="font-['Montserrat'] text-white/90 mb-8">Follow us on social media for messages, updates and more</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors"
              >
                <SocialIcon platform={social.platform} size={22} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-[#1A0500]">
        <div className="max-w-7xl mx-auto">
          <SectionFooter />
        </div>
      </section>
    </div>
  );
}
