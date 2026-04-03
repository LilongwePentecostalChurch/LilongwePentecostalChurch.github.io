import { Link } from 'react-router';
import { FileText, Download, Eye, Youtube } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function BibleStudyNotes() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'OLD TESTAMENT', 'NEW TESTAMENT', 'TOPICAL', 'CARE GROUP NOTES'];

  const notes = [
    {
      title: "Ephesians 6 — The Full Armour of God",
      scripture: "Ephesians 6:10-18",
      description: "Growing Stronger in Christ series notes",
      date: "Recent",
      category: "NEW TESTAMENT"
    },
    {
      title: "The Power of Prayer",
      scripture: "Various scriptures",
      description: "A study on the principles and practice of prayer",
      date: "Recent",
      category: "TOPICAL"
    },
    {
      title: "Walking in the Spirit",
      scripture: "Galatians 5",
      description: "Understanding life in the Spirit",
      date: "Recent",
      category: "NEW TESTAMENT"
    },
    {
      title: "Foundations of Salvation",
      scripture: "Romans 3-5",
      description: "What the Bible says about how we are saved",
      date: "Recent",
      category: "NEW TESTAMENT"
    },
    {
      title: "The Great Commission",
      scripture: "Matthew 28",
      description: "Understanding our mandate to reach the lost",
      date: "Recent",
      category: "NEW TESTAMENT"
    },
    {
      title: "Faith and Works",
      scripture: "James 2",
      description: "How genuine faith expresses itself in action",
      date: "Recent",
      category: "NEW TESTAMENT"
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
            src="https://images.unsplash.com/photo-1681158086111-59751fd44bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwd29yc2hpcCUyMGFsdGFyJTIwYmlibGUlMjBvcGVufGVufDF8fHx8MTc3NTEyNjQyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Bible Study Notes"
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
            <Link to="/sermons" className="hover:text-[#E8821A] transition-colors">Sermons</Link>
            <span>›</span>
            <span className="text-white">Bible Study Notes</span>
          </div>

          <p className="font-['Signature'] text-[#E8821A] text-2xl italic mb-4">
            Go deeper in the Word of God
          </p>
          <h1 className="font-['TAN-BUSTER'] text-white text-5xl md:text-6xl tracking-wide mb-6">
            BIBLE STUDY NOTES
          </h1>
        </div>
      </section>

      {/* Intro Text */}
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
            Our Bible study notes are designed to help you go deeper in Scripture beyond the Sunday sermon. Use them for personal study, family devotions or in your Care Group.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section 
        className="relative py-8 px-6 overflow-hidden"
        style={{
          backgroundColor: '#150800'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-['Montserrat'] font-bold text-sm transition-all ${
                  activeFilter === filter
                    ? 'bg-[#E8821A] text-white'
                    : 'bg-[#1A0500]/60 border border-[#E8821A]/30 text-white/70 hover:border-[#E8821A] hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Notes Grid */}
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
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {notes.map((note, index) => (
              <div
                key={index}
                className="bg-[#150800]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-6 hover:border-[#E8821A] transition-all"
              >
                {/* Document Icon */}
                <div className="w-12 h-12 rounded-lg bg-[#E8821A]/10 flex items-center justify-center mb-4">
                  <FileText className="text-[#E8821A]" size={24} />
                </div>

                {/* Note Title */}
                <h3 className="font-['TAN-BUSTER'] text-white text-xl tracking-wide mb-2">
                  {note.title}
                </h3>

                {/* Scripture Reference */}
                <p className="font-['Signature'] text-[#E8821A] text-lg italic mb-3">
                  {note.scripture}
                </p>

                {/* Date */}
                <p className="font-['Montserrat'] text-white/50 text-xs mb-3">
                  {note.date}
                </p>

                {/* Description */}
                <p className="font-['Montserrat'] text-white/80 text-sm leading-relaxed mb-6">
                  {note.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-[#E8821A] text-white font-['Montserrat'] font-bold text-sm rounded-full hover:bg-[#C94A1A] transition-all flex items-center justify-center gap-2">
                    <Download size={16} />
                    Download PDF
                  </button>
                  <button className="px-4 py-2 bg-transparent border border-white text-white font-['Montserrat'] font-bold text-sm rounded-full hover:bg-white hover:text-[#E8821A] transition-all flex items-center justify-center">
                    <Eye size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Banner */}
      <section 
        className="relative py-12 px-6 overflow-hidden"
        style={{
          backgroundColor: '#150800'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#1A0500]/60 backdrop-blur-sm border border-[#E8821A]/30 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg bg-[#E8821A]/10 flex items-center justify-center flex-shrink-0">
                <Youtube className="text-[#E8821A]" size={28} />
              </div>
              <div>
                <h3 className="font-['TAN-BUSTER'] text-white text-2xl tracking-wide mb-2">
                  WATCH ALL SERMONS ON YOUTUBE
                </h3>
                <p className="font-['Montserrat'] text-white/80">
                  Subscribe to the Lilongwe Pentecostal Church YouTube channel for all messages, live streams and highlights.
                </p>
              </div>
            </div>
            <a
              href="https://www.youtube.com/@LilongwePentecostalChurch"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#E8821A] text-white font-['Montserrat'] font-bold rounded-full hover:bg-[#C94A1A] transition-all whitespace-nowrap"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}