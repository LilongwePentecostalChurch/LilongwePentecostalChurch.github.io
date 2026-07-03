import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Mail, Phone } from 'lucide-react';
import { SectionFooter } from '../../components/SectionFooter';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { sanityClient, urlFor } from '../../../lib/sanityClient';

interface StaffMember {
  _id: string;
  name: string;
  title: string;
  shortBio?: string;
  email?: string;
  phone?: string;
  photo?: any;
}

const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1560279800-8b23f487ce83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400';

const fallbackStaff: StaffMember[] = [
  { _id: '1', name: '[STAFF NAME]', title: 'Church Administrator', email: 'admin@lpc.org.mw' },
  { _id: '2', name: '[STAFF NAME]', title: 'Administrator', email: 'admin@lpc.org.mw' },
  { _id: '3', name: '[STAFF NAME]', title: 'Administrator', email: 'admin@lpc.org.mw' },
];

export function Staff() {
  const [staff, setStaff] = useState<StaffMember[]>(fallbackStaff);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "staffMember" && department == "staff"] | order(order asc) {
        _id, name, title, shortBio, email, phone, photo
      }`)
      .then((data: StaffMember[]) => {
        if (data && data.length > 0) setStaff(data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/images/staff-hero.jpg"
            alt="Staff"
            className="w-full h-full object-cover"
            fetchPriority="high"
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
            <span className="text-[#E8821A]">Staff</span>
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <p className="font-['Signature'] text-3xl text-[#E8821A] mb-4">Behind the scenes</p>
            <h1 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl lg:text-6xl text-white mb-6 tracking-wider">
              CHURCH STAFF
            </h1>
            <div className="w-20 h-1 bg-[#E8821A] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Staff Cards */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1A0500]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8821A]/10 via-[#7A1A0A]/10 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {staff.map((member) => (
              <div
                key={member._id}
                className="group relative bg-[#1A0500]/80 backdrop-blur-sm rounded-lg overflow-hidden border-2 border-[#E8821A]/30 hover:border-[#E8821A] hover:shadow-[0_0_30px_rgba(232,130,26,0.4)] transition-all duration-300"
              >
                <div className="aspect-square relative overflow-hidden">
                  <ImageWithFallback
                    src={member.photo ? urlFor(member.photo).width(400).url() : PLACEHOLDER_IMG}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0500] via-[#1A0500]/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-['TAN-BUSTER'] text-xl text-white mb-1 tracking-wide">{member.name}</h3>
                    <p className="font-['Signature'] text-lg text-[#E8821A] mb-3">{member.title}</p>
                    {member.shortBio && (
                      <p className="font-['Montserrat'] text-sm text-white/90 mb-3">{member.shortBio}</p>
                    )}
                    <div className="flex flex-col gap-2">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-2 text-white/80 hover:text-[#E8821A] transition-colors font-['Montserrat'] text-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Mail size={14} />
                          {member.email}
                        </a>
                      )}
                      {member.phone && (
                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center gap-2 text-white/80 hover:text-[#E8821A] transition-colors font-['Montserrat'] text-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Phone size={14} />
                          {member.phone}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <SectionFooter />
        </div>
      </section>
    </div>
  );
}
