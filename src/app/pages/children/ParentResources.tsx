import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FileText, Download, Eye } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { sanityClient } from '../../../lib/sanityClient';

interface ParentResource {
  _id: string;
  title: string;
  description?: string;
  date?: string;
  isFeatured?: boolean;
  pdfUrl?: string;
}

const fallbackResources: ParentResource[] = [
  { _id: '1', title: "Weekly Family Devotionals", description: "Short devotional guides that align with Sunday's sermon to keep the conversation going at home." },
  { _id: '2', title: "Praying for Your Children", description: "A 30-day prayer calendar focusing on specific areas of spiritual growth for your kids." },
  { _id: '3', title: "Milestone Celebrations", description: "Ideas for celebrating spiritual milestones like salvation, baptism, and transitioning to youth group." },
];

function formatDate(dateStr?: string) {
  if (!dateStr) return '';
  try {
    return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

export function ParentResources() {
  const [resources, setResources] = useState<ParentResource[]>(fallbackResources);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "parentResource"] | order(isFeatured desc, date desc) {
        _id, title, category, description, date, isFeatured,
        "pdfUrl": pdf.asset->url
      }`)
      .then((data: ParentResource[]) => {
        if (data && data.length > 0) setResources(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/images/parent-resources-hero.jpg"
            alt="Parent Resources"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/40 via-[#C94A1A]/50 to-[#7A1A0A]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/70 to-[#1A0500]/80"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6 font-['Montserrat'] text-sm text-white/70">
            <Link to="/" className="hover:text-[#E8821A] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Parent Resources</span>
          </div>
          <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-4">Equipping the family at home</p>
          <h1 className="font-['TAN-BUSTER'] text-white text-3xl sm:text-5xl md:text-6xl tracking-wide mb-6">PARENT RESOURCES</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="relative py-12 px-6 overflow-hidden" style={{ backgroundColor: '#1A0500' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-['Montserrat'] text-white/90 leading-relaxed text-lg">
            We believe discipleship begins at home. These resources are designed to help you partner with LPC in raising a generation that knows, loves, and serves the Lord.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="relative py-20 px-6 overflow-hidden" style={{ backgroundColor: '#1A0500' }}>
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <p className="font-['Montserrat'] text-white/60 text-center py-12">Loading resources...</p>
          ) : resources.length === 0 ? (
            <p className="font-['Montserrat'] text-white/60 text-center py-12">No resources available yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource) => (
                <div
                  key={resource._id}
                  className="bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-6 hover:border-[#E8821A] transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#E8821A]/10 flex items-center justify-center mb-4">
                    <FileText className="text-[#E8821A]" size={24} />
                  </div>
                  {resource.isFeatured && (
                    <span className="inline-block mb-2 px-3 py-1 bg-[#E8821A] text-white text-xs font-['Montserrat'] font-bold rounded-full">FEATURED</span>
                  )}
                  <h3 className="font-['TAN-BUSTER'] text-white text-xl tracking-wide mb-2">{resource.title}</h3>
                  {resource.date && (
                    <p className="font-['Montserrat'] text-white/50 text-xs mb-3">{formatDate(resource.date)}</p>
                  )}
                  {resource.description && (
                    <p className="font-['Montserrat'] text-white/80 text-sm leading-relaxed mb-6">{resource.description}</p>
                  )}
                  <div className="flex gap-3">
                    {resource.pdfUrl ? (
                      <>
                        <a
                          href={`${resource.pdfUrl}?dl=`}
                          download
                          className="flex-1 px-4 py-2 bg-[#E8821A] text-white font-['Montserrat'] font-bold text-sm rounded-full hover:bg-[#C94A1A] transition-all flex items-center justify-center gap-2"
                        >
                          <Download size={16} />
                          Download
                        </a>
                        <a
                          href={resource.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-transparent border border-white text-white font-['Montserrat'] font-bold text-sm rounded-full hover:bg-white hover:text-[#E8821A] transition-all flex items-center justify-center"
                        >
                          <Eye size={16} />
                        </a>
                      </>
                    ) : (
                      <span className="font-['Montserrat'] text-white/40 text-sm italic">Coming soon</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
