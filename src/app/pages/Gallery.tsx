import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { SectionFooter } from '../components/SectionFooter';
import { ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';
import { sanityClient, urlFor } from '../../lib/sanityClient';

interface GalleryImage {
  url: string;
  caption: string;
  event: string;
  month: string;
}

// Fallback hardcoded images shown while Sanity loads or if empty
const fallbackImages: GalleryImage[] = [
  { url: 'https://images.unsplash.com/photo-1604443830970-05ac4193ada9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'New Year Service', event: 'Sunday Service', month: 'JANUARY 2026' },
  { url: 'https://images.unsplash.com/photo-1717201611909-0f75ee9b0b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'January Worship', event: 'Sunday Service', month: 'JANUARY 2026' },
  { url: 'https://images.unsplash.com/photo-1628716957555-f88f182aadfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Worship Team', event: 'Sunday Service', month: 'JANUARY 2026' },
  { url: 'https://images.unsplash.com/photo-1560279800-8b23f487ce83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Sunday Preaching', event: 'Sunday Service', month: 'FEBRUARY 2026' },
  { url: 'https://images.unsplash.com/photo-1553404954-7858899788e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Youth Worship', event: 'Youth Ministry', month: 'FEBRUARY 2026' },
  { url: 'https://images.unsplash.com/photo-1717201611909-0f75ee9b0b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Sunday Worship', event: 'Sunday Service', month: 'MARCH 2026' },
  { url: 'https://images.unsplash.com/photo-1630467267476-c67b34ffc837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Recharge Service', event: 'Recharge Service', month: 'APRIL 2026' },
  { url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: "Women's Fellowship", event: "Women's Ministry", month: 'MAY 2026' },
];

const ALL_MONTHS = ['ALL', 'JANUARY 2026', 'FEBRUARY 2026', 'MARCH 2026', 'APRIL 2026', 'MAY 2026', 'JUNE 2026'];

function ImageWithFallback({ src, alt, className, loading }: { src?: string; alt?: string; className?: string; loading?: 'lazy' | 'eager' }) {
  if (!src) {
    return (
      <div className={`bg-[#2A0A00] flex flex-col items-center justify-center gap-2 ${className ?? ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8821A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
        </svg>
        <span className="font-['Montserrat'] text-xs text-white/40 text-center px-2">{alt ?? 'Photo coming soon'}</span>
      </div>
    );
  }
  return <img src={src} alt={alt ?? ''} className={className} loading={loading} />;
}

export function Gallery() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(fallbackImages);
  const [loading, setLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState('ALL');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "galleryMonth"] | order(month asc) { month, photos[] { caption, event, image } }`)
      .then((data: any[]) => {
        if (data && data.length > 0) {
          const images: GalleryImage[] = data.flatMap((monthDoc) =>
            (monthDoc.photos ?? []).map((photo: any) => ({
              url: photo.image ? urlFor(photo.image).width(1080).url() : '',
              caption: photo.caption ?? '',
              event: photo.event ?? '',
              month: monthDoc.month,
            }))
          );
          if (images.length > 0) setGalleryImages(images);
        }
      })
      .catch(() => {/* silently use fallback */})
      .finally(() => setLoading(false));
  }, []);

  const filteredImages = selectedMonth === 'ALL'
    ? galleryImages
    : galleryImages.filter(img => img.month === selectedMonth);

  const visibleImages = filteredImages.slice(0, visibleCount);

  const goToPrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0)
      setSelectedImageIndex(selectedImageIndex - 1);
  };

  const goToNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < filteredImages.length - 1)
      setSelectedImageIndex(selectedImageIndex + 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') setSelectedImageIndex(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/gallery-hero.jpg"
            alt="LPC Gallery"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 20%' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/40 via-[#C94A1A]/50 to-[#7A1A0A]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/70 to-[#1A0500]/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-white/60 mb-8 font-['Montserrat'] text-sm">
            <Link to="/" className="hover:text-[#E8821A] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-[#E8821A]">Gallery</span>
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <p className="font-['Signature'] text-3xl text-[#E8821A] mb-4">Moments from life at LPC</p>
            <h1 className="font-['TAN-BUSTER'] text-5xl sm:text-6xl lg:text-7xl text-white mb-6 tracking-wider">
              GALLERY
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1A0500]"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="font-['Montserrat'] text-lg text-white/90 leading-relaxed">
            Explore moments from services, events and community life at Lilongwe Pentecostal Church.
            Select a month to view photos and relive what God is doing at LPC.
          </p>
        </div>
      </section>

      {/* Month Filter Bar */}
      <section className="py-8 px-4 sticky top-0 z-30 backdrop-blur-md bg-[#1A0500]/90 border-b border-[#E8821A]/20">
        <div className="relative z-10 max-w-7xl mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex justify-center gap-3 min-w-max px-4">
            {ALL_MONTHS.map((month) => (
              <button
                key={month}
                onClick={() => { setSelectedMonth(month); setVisibleCount(12); }}
                className={`px-6 py-2.5 rounded-full font-['Montserrat'] text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedMonth === month
                    ? 'bg-[#E8821A] text-white'
                    : 'bg-[#1A0500] text-white/70 border border-[#E8821A]/30 hover:border-[#E8821A]/60 hover:text-white'
                }`}
              >
                {month}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Month Heading */}
      {selectedMonth !== 'ALL' && (
        <section className="py-12 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#1A0500]"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h2 className="font-['TAN-BUSTER'] text-3xl sm:text-4xl text-white mb-3 tracking-wider">
              {selectedMonth} GALLERY
            </h2>
            <p className="font-['Montserrat'] text-sm text-[#E8821A]">
              {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'}
            </p>
          </div>
        </section>
      )}

      {/* Image Grid */}
      <section className="py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#7A1A0A]/20 to-[#1A0500]"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-24">
              <p className="font-['Montserrat'] text-white/60 text-lg">Loading photos...</p>
            </div>
          ) : visibleImages.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {visibleImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(filteredImages.indexOf(image))}
                  className="relative aspect-square overflow-hidden bg-[#1A0500] group cursor-pointer"
                >
                  <ImageWithFallback
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <Eye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <h3 className="font-['TAN-BUSTER'] text-3xl text-white mb-4 tracking-wider">NO PHOTOS AVAILABLE</h3>
              <p className="font-['Montserrat'] text-white/80 max-w-md mx-auto">
                Photos for this month will be uploaded soon. Check back later.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Load More */}
      {visibleCount < filteredImages.length && (
        <section className="py-12 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#1A0500]"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="px-12 py-4 border-2 border-[#E8821A] text-[#E8821A] rounded-full font-['Montserrat'] font-bold hover:bg-[#E8821A] hover:text-white transition-all duration-300"
            >
              LOAD MORE PHOTOS
            </button>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1A0500]"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white mb-6 tracking-wider">
            BE PART OF THE MOMENTS
          </h2>
          <p className="font-['Montserrat'] text-lg text-white/90 mb-8 leading-relaxed">
            Join us this Sunday and be part of what God is doing at LPC.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/connect/plan-your-visit" className="px-10 py-4 bg-[#E8821A] text-white rounded-full font-['Montserrat'] font-bold hover:bg-[#C94A1A] transition-all duration-300 shadow-lg hover:scale-105">
              Join Us This Sunday
            </Link>
            <Link to="/connect/plan-your-visit" className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-['Montserrat'] font-bold hover:bg-white/10 transition-all duration-300 shadow-lg hover:scale-105">
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button onClick={() => setSelectedImageIndex(null)} className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300">
            <X size={24} />
          </button>
          {selectedImageIndex > 0 && (
            <button onClick={(e) => { e.stopPropagation(); goToPrevious(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300">
              <ChevronLeft size={24} />
            </button>
          )}
          {selectedImageIndex < filteredImages.length - 1 && (
            <button onClick={(e) => { e.stopPropagation(); goToNext(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300">
              <ChevronRight size={24} />
            </button>
          )}
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <ImageWithFallback
              src={filteredImages[selectedImageIndex].url}
              alt={filteredImages[selectedImageIndex].caption}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-6 text-center bg-[#1A0500]/80 backdrop-blur-sm rounded-lg p-4">
              <p className="font-['TAN-BUSTER'] text-xl text-white mb-2 tracking-wide">{filteredImages[selectedImageIndex].event}</p>
              <p className="font-['Montserrat'] text-white/90">{filteredImages[selectedImageIndex].caption}</p>
              <p className="font-['Montserrat'] text-sm text-[#E8821A] mt-2">{filteredImages[selectedImageIndex].month}</p>
            </div>
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <p className="font-['Montserrat'] text-sm text-white">{selectedImageIndex + 1} / {filteredImages.length}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
