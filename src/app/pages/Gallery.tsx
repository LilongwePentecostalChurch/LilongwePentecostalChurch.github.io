import { useState } from 'react';
import { Link } from 'react-router';
import { SectionFooter } from '../components/SectionFooter';
import { ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';

// Gallery data structure with month tags
interface GalleryImage {
  url: string;
  caption: string;
  event: string;
  month: string;
}

const galleryImages: GalleryImage[] = [
  // January 2026
  { url: 'https://images.unsplash.com/photo-1604443830970-05ac4193ada9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'New Year Service', event: 'Sunday Service', month: 'JANUARY 2026' },
  { url: 'https://images.unsplash.com/photo-1717201611909-0f75ee9b0b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'January Worship', event: 'Sunday Service', month: 'JANUARY 2026' },
  { url: 'https://images.unsplash.com/photo-1628716957555-f88f182aadfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Worship Team', event: 'Sunday Service', month: 'JANUARY 2026' },
  { url: 'https://images.unsplash.com/photo-1575516662637-99214ea59f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Prayer Night', event: 'Prayer & Fasting', month: 'JANUARY 2026' },
  { url: 'https://images.unsplash.com/photo-1765947382559-93260e5d6c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Community Prayer', event: 'Prayer & Fasting', month: 'JANUARY 2026' },

  // February 2026
  { url: 'https://images.unsplash.com/photo-1560279800-8b23f487ce83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Sunday Preaching', event: 'Sunday Service', month: 'FEBRUARY 2026' },
  { url: 'https://images.unsplash.com/photo-1575516662637-99214ea59f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Prayer Time', event: 'Sunday Service', month: 'FEBRUARY 2026' },
  { url: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Bible Study', event: 'Sunday Service', month: 'FEBRUARY 2026' },
  { url: 'https://images.unsplash.com/photo-1769755411779-e4c43e7b7742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Youth Gathering', event: 'Youth Ministry', month: 'FEBRUARY 2026' },
  { url: 'https://images.unsplash.com/photo-1553404954-7858899788e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Youth Worship', event: 'Youth Ministry', month: 'FEBRUARY 2026' },
  { url: 'https://images.unsplash.com/photo-1765947386414-5e63c7887830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Baptism Service', event: 'Special Event', month: 'FEBRUARY 2026' },
  { url: 'https://images.unsplash.com/photo-1649163572174-01e4d79d03d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Fellowship Meal', event: 'Special Event', month: 'FEBRUARY 2026' },

  // March 2026
  { url: 'https://images.unsplash.com/photo-1717201611909-0f75ee9b0b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Sunday Worship', event: 'Sunday Service', month: 'MARCH 2026' },
  { url: 'https://images.unsplash.com/photo-1553404954-7858899788e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Praise & Worship', event: 'Sunday Service', month: 'MARCH 2026' },
  { url: 'https://images.unsplash.com/photo-1604443830970-05ac4193ada9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Congregation Worship', event: 'Sunday Service', month: 'MARCH 2026' },
  { url: 'https://images.unsplash.com/photo-1628716957555-f88f182aadfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Worship Team', event: 'Sunday Service', month: 'MARCH 2026' },
  { url: 'https://images.unsplash.com/photo-1759893025633-1de7a4da5d6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Gospel Crusade', event: 'Crusade', month: 'MARCH 2026' },
  { url: 'https://images.unsplash.com/photo-1717201611909-0f75ee9b0b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Outdoor Gathering', event: 'Crusade', month: 'MARCH 2026' },
  { url: 'https://images.unsplash.com/photo-1765947382559-93260e5d6c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Community Outreach', event: 'Crusade', month: 'MARCH 2026' },

  // April 2026
  { url: 'https://images.unsplash.com/photo-1630467267476-c67b34ffc837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Recharge Service', event: 'Recharge Service', month: 'APRIL 2026' },
  { url: 'https://images.unsplash.com/photo-1760367121608-79219f1c9d2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Worship & Praise', event: 'Recharge Service', month: 'APRIL 2026' },
  { url: 'https://images.unsplash.com/photo-1758272960816-6126b6607596?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Powerful Worship', event: 'Recharge Service', month: 'APRIL 2026' },
  { url: 'https://images.unsplash.com/photo-1758599668244-f5fc72199313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Community Gathering', event: 'Recharge Service', month: 'APRIL 2026' },
  { url: 'https://images.unsplash.com/photo-1610070835951-156b6921281d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Fellowship Time', event: 'Recharge Service', month: 'APRIL 2026' },
  { url: 'https://images.unsplash.com/photo-1604443830970-05ac4193ada9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Sunday Service', event: 'Sunday Service', month: 'APRIL 2026' },

  // May 2026
  { url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Women\'s Fellowship', event: 'Women\'s Ministry', month: 'MAY 2026' },
  { url: 'https://images.unsplash.com/photo-1573496774426-fe3db3dd1731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Prayer Circle', event: 'Women\'s Ministry', month: 'MAY 2026' },
  { url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Men\'s Breakfast', event: 'Men\'s Ministry', month: 'MAY 2026' },
  { url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Prayer Meeting', event: 'Men\'s Ministry', month: 'MAY 2026' },

  // June 2026
  { url: '', caption: 'Children on Stage with Teacher', event: 'Sunday School', month: 'JUNE 2026' },
  { url: '', caption: 'Learning God\'s Word Together', event: 'Sunday School', month: 'JUNE 2026' },
  { url: '', caption: 'Active Kids Ministry', event: 'Sunday School', month: 'JUNE 2026' },
  { url: '', caption: 'Classroom Bible Study', event: 'Sunday School', month: 'JUNE 2026' },
  { url: '', caption: 'Teacher Leading Sunday School', event: 'Sunday School', month: 'JUNE 2026' },
  { url: '', caption: 'Children Seated in Classroom', event: 'Sunday School', month: 'JUNE 2026' },
  { url: '', caption: 'Young Student Reading Scripture', event: 'Sunday School', month: 'JUNE 2026' },
  { url: '', caption: 'Focused Student at Work', event: 'Sunday School', month: 'JUNE 2026' },
];

const months = ['ALL', 'JANUARY 2026', 'FEBRUARY 2026', 'MARCH 2026', 'APRIL 2026', 'MAY 2026', 'JUNE 2026'];

// Renders an image if src is provided, otherwise shows a styled placeholder
function ImageWithFallback({ src, alt, className }: { src?: string; alt?: string; className?: string }) {
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
  return <img src={src} alt={alt ?? ''} className={className} />;
}

export function Gallery() {
  const [selectedMonth, setSelectedMonth] = useState('ALL');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  // Filter images based on selected month
  const filteredImages = selectedMonth === 'ALL' 
    ? galleryImages 
    : galleryImages.filter(img => img.month === selectedMonth);

  // Get visible images (for load more)
  const visibleImages = filteredImages.slice(0, visibleCount);

  // Navigate in lightbox
  const goToPrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < filteredImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') setSelectedImageIndex(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1762303928693-db677877afeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="LPC Gallery"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/40 via-[#C94A1A]/50 to-[#7A1A0A]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/70 to-[#1A0500]/80"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] opacity-40"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumbs */}
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

      {/* Intro Text */}
      <section className="py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1A0500]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#7A1A0A]/10 to-transparent"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="font-['Montserrat'] text-lg text-white/90 leading-relaxed">
            Explore moments from services, events and community life at Lilongwe Pentecostal Church. Select a month to view photos and relive what God is doing at LPC.
          </p>
        </div>
      </section>

      {/* Month Filter Bar */}
      <section className="py-8 px-4 sticky top-0 z-30 backdrop-blur-md bg-[#1A0500]/90 border-b border-[#E8821A]/20">
        <div className="relative z-10 max-w-7xl mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex justify-center gap-3 min-w-max px-4">
            {months.map((month) => (
              <button
                key={month}
                onClick={() => {
                  setSelectedMonth(month);
                  setVisibleCount(12); // Reset visible count on filter change
                }}
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

      {/* Month Group View Heading */}
      {selectedMonth !== 'ALL' && (
        <section className="py-12 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#1A0500]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')] opacity-20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h2 className="font-['TAN-BUSTER'] text-3xl sm:text-4xl text-white mb-3 tracking-wider">
              {selectedMonth} GALLERY
            </h2>
            <p className="font-['Montserrat'] text-white/80 mb-2">
              Photos from services and events in {selectedMonth.split(' ')[0]} 2026
            </p>
            <p className="font-['Montserrat'] text-sm text-[#E8821A]">
              {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'}
            </p>
          </div>
        </section>
      )}

      {/* Image Grid (Instagram Style) */}
      <section className="py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#7A1A0A]/20 to-[#1A0500]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')] opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {visibleImages.length > 0 ? (
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
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <Eye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                  </div>
                </button>
              ))}
            </div>
          ) : (
            // Empty State
            <div className="text-center py-24">
              <h3 className="font-['TAN-BUSTER'] text-3xl text-white mb-4 tracking-wider">
                NO PHOTOS AVAILABLE
              </h3>
              <p className="font-['Montserrat'] text-white/80 max-w-md mx-auto">
                Photos for this month will be uploaded soon. Check back later.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Load More Button */}
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

      {/* Featured Event Strip (for April - Recharge Service) */}
      {selectedMonth === 'APRIL 2026' && (
        <section className="py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#E8821A] via-[#C94A1A] to-[#7A1A0A]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-20"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h3 className="font-['TAN-BUSTER'] text-3xl sm:text-4xl text-white mb-4 tracking-wider">
              RECHARGE SERVICE — APRIL 2026
            </h3>
            <p className="font-['Montserrat'] text-lg text-white/90 mb-6">
              A powerful night of praise and worship at LPC
            </p>
            <button
              onClick={() => {
                const rechargeImages = filteredImages.filter(img => img.event === 'Recharge Service');
                if (rechargeImages.length > 0) {
                  const firstIndex = filteredImages.indexOf(rechargeImages[0]);
                  setSelectedImageIndex(firstIndex);
                }
              }}
              className="px-10 py-4 bg-white text-[#E8821A] rounded-full font-['Montserrat'] font-bold hover:bg-white/90 transition-all duration-300 shadow-lg hover:scale-105"
            >
              View Photos
            </button>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1A0500]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8821A]/10 via-[#7A1A0A]/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')] opacity-20"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white mb-6 tracking-wider">
            BE PART OF THE MOMENTS
          </h2>
          <p className="font-['Montserrat'] text-lg text-white/90 mb-8 leading-relaxed">
            Join us this Sunday and be part of what God is doing at LPC.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/connect/plan-your-visit"
              className="px-10 py-4 bg-[#E8821A] text-white rounded-full font-['Montserrat'] font-bold hover:bg-[#C94A1A] transition-all duration-300 shadow-lg hover:scale-105"
            >
              Join Us This Sunday
            </Link>
            <Link 
              to="/connect/plan-your-visit"
              className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-['Montserrat'] font-bold hover:bg-white/10 transition-all duration-300 shadow-lg hover:scale-105"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          >
            <X size={24} />
          </button>

          {/* Previous Button */}
          {selectedImageIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Next Button */}
          {selectedImageIndex < filteredImages.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Image Container */}
          <div 
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={filteredImages[selectedImageIndex].url}
              alt={filteredImages[selectedImageIndex].caption}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Image Caption */}
            <div className="mt-6 text-center bg-[#1A0500]/80 backdrop-blur-sm rounded-lg p-4">
              <p className="font-['TAN-BUSTER'] text-xl text-white mb-2 tracking-wide">
                {filteredImages[selectedImageIndex].event}
              </p>
              <p className="font-['Montserrat'] text-white/90">
                {filteredImages[selectedImageIndex].caption}
              </p>
              <p className="font-['Montserrat'] text-sm text-[#E8821A] mt-2">
                {filteredImages[selectedImageIndex].month}
              </p>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <p className="font-['Montserrat'] text-sm text-white">
                {selectedImageIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Custom scrollbar styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}