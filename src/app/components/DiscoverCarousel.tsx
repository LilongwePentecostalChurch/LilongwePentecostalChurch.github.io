import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CarouselCard {
  eyebrow: string;
  heading: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
}

const carouselCards: CarouselCard[] = [
  {
    eyebrow: 'LISTEN TO OUR SERMONS',
    heading: 'GROWING STRONGER IN CHRIST',
    subtitle: 'Available on YouTube and all platforms',
    buttonText: 'Listen Now',
    buttonLink: '/sermons',
    imageUrl: 'https://images.unsplash.com/photo-1560279800-8b23f487ce83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGFzdG9yJTIwcHJlYWNoaW5nfGVufDF8fHx8MTc3NDAzNzIxOHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    eyebrow: 'JOIN US ONLINE',
    heading: 'EXPERIENCE LIVE WORSHIP',
    subtitle: 'Stream every Sunday on YouTube and TikTok',
    buttonText: 'Watch Now',
    buttonLink: '/sermons',
    imageUrl: 'https://images.unsplash.com/photo-1553404954-7858899788e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwcHJhaXNlJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc0MDM3Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    eyebrow: 'WEDNESDAY NIGHTS',
    heading: 'STRONGER IN THE WORD',
    subtitle: 'Deep Scripture. Sound Doctrine. Real Community.',
    buttonText: 'Join Us',
    buttonLink: '/connect/plan-your-visit#contact',
    imageUrl: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwZ3JvdXB8ZW58MXx8fHwxNzc0MDA0NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    eyebrow: 'FRIDAY NIGHTS',
    heading: 'STRONGER IN PRAYER',
    subtitle: 'Intercession. Fasting. Spiritual Warfare.',
    buttonText: 'Learn More',
    buttonLink: '/about',
    imageUrl: 'https://images.unsplash.com/photo-1575516662637-99214ea59f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5aW5nJTIwaGFuZHMlMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzc0MDM3MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    eyebrow: 'LPC YOUTH',
    heading: 'THE NEXT GENERATION IS RISING',
    subtitle: 'Bold faith for young people in Lilongwe',
    buttonText: 'Get Involved',
    buttonLink: '/connect/plan-your-visit#contact',
    imageUrl: 'https://images.unsplash.com/photo-1769755411779-e4c43e7b7742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB5b3V0aCUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NzQwMzc3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    eyebrow: 'CITY GOSPEL OUTREACH',
    heading: 'STRONGER IN PURPOSE',
    subtitle: 'Evangelism and Church Planting across Malawi',
    buttonText: 'Join the Mission',
    buttonLink: '/about',
    imageUrl: 'https://images.unsplash.com/photo-1765947382559-93260e5d6c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzc0MDA5Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function DiscoverCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isAutoRotating) return;

    timerRef.current = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoRotating, activeIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % carouselCards.length);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + carouselCards.length) % carouselCards.length);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning || index === activeIndex) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setIsAutoRotating(false);
    setTimeout(() => {
      setIsTransitioning(false);
      setTimeout(() => setIsAutoRotating(true), 3000);
    }, 400);
  };

  const handleArrowClick = (direction: 'prev' | 'next') => {
    setIsAutoRotating(false);
    if (direction === 'prev') {
      handlePrev();
    } else {
      handleNext();
    }
    setTimeout(() => setIsAutoRotating(true), 3000);
  };

  const handleMouseEnter = () => {
    setIsAutoRotating(false);
  };

  const handleMouseLeave = () => {
    setTimeout(() => setIsAutoRotating(true), 3000);
  };

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#7A1A0A]/60 to-[#1A0500]"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] opacity-50"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-['Signature'] text-3xl text-[#E8821A] italic mb-4">Explore Our World</p>
          <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white mb-6 tracking-wider">
            DISCOVER MORE
          </h2>
          <div className="w-32 h-1 bg-[#E8821A] mx-auto"></div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative h-[280px] sm:h-[360px] lg:h-[480px] max-w-[1600px] mx-auto">
            {/* Carousel Track */}
            <div className="relative h-full flex items-center justify-center px-4 sm:px-8 lg:px-16">
              {/* Previous Card Peek */}
              <div className="absolute left-0 top-0 bottom-0 w-[60px] hidden lg:block overflow-hidden">
                <div
                  className="relative h-full w-[800px] rounded-lg overflow-hidden opacity-40 hover:opacity-60 transition-opacity cursor-pointer"
                  onClick={handlePrev}
                >
                  <ImageWithFallback
                    src={carouselCards[(activeIndex - 1 + carouselCards.length) % carouselCards.length].imageUrl}
                    alt="Previous"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1A0500]/40 to-[#7A1A0A]/80"></div>
                </div>
              </div>

              {/* Active Card */}
              <div className="relative w-full max-w-4xl h-full mx-auto">
                <div
                  key={activeIndex}
                  className="relative h-full rounded-lg overflow-hidden shadow-[0_0_60px_rgba(232,130,26,0.3)] animate-slide-in"
                >
                  {/* Background Image */}
                  <ImageWithFallback
                    src={carouselCards[activeIndex].imageUrl}
                    alt={carouselCards[activeIndex].heading}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1A0500]/30 to-[#7A1A0A]/80"></div>

                  {/* Content Block - Bottom Left */}
                  <div className="absolute bottom-0 left-0 p-8 sm:p-12 lg:p-16 max-w-2xl">
                    <div className="space-y-4 animate-content-slide-up">
                      {/* Eyebrow Label */}
                      <p
                        className="font-['Montserrat'] font-bold text-white text-xs sm:text-sm tracking-widest uppercase opacity-0 animate-fade-slide-up"
                        style={{ animationDelay: '0ms' }}
                      >
                        {carouselCards[activeIndex].eyebrow}
                      </p>

                      {/* Heading */}
                      <h3
                        className="font-['TAN-BUSTER'] text-3xl sm:text-4xl lg:text-5xl text-white leading-tight tracking-wide opacity-0 animate-fade-slide-up"
                        style={{ animationDelay: '100ms' }}
                      >
                        {carouselCards[activeIndex].heading}
                      </h3>

                      {/* Subtitle */}
                      <p
                        className="font-['Signature'] text-xl sm:text-2xl text-white opacity-0 animate-fade-slide-up"
                        style={{ animationDelay: '200ms' }}
                      >
                        {carouselCards[activeIndex].subtitle}
                      </p>

                      {/* CTA Button */}
                      <a
                        href={carouselCards[activeIndex].buttonLink}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A0500]/60 border-2 border-white text-white rounded-full font-['Montserrat'] font-bold hover:bg-[#E8821A] hover:border-[#E8821A] transition-all duration-200 opacity-0 animate-fade-slide-up"
                        style={{ animationDelay: '300ms' }}
                      >
                        {carouselCards[activeIndex].buttonText}
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Card Peek */}
              <div className="absolute right-0 top-0 bottom-0 w-[60px] hidden lg:block overflow-hidden">
                <div
                  className="relative h-full w-[800px] -ml-[740px] rounded-lg overflow-hidden opacity-40 hover:opacity-60 transition-opacity cursor-pointer"
                  onClick={handleNext}
                >
                  <ImageWithFallback
                    src={carouselCards[(activeIndex + 1) % carouselCards.length].imageUrl}
                    alt="Next"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1A0500]/40 to-[#7A1A0A]/80"></div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => handleArrowClick('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1A0500]/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#E8821A] hover:scale-110 transition-all duration-200 shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => handleArrowClick('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1A0500]/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#E8821A] hover:scale-110 transition-all duration-200 shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {carouselCards.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-5 h-1.5 bg-[#E8821A] rounded-full'
                    : 'w-1.5 h-1.5 bg-white/40 rounded-full hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-slide-up {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.4s ease-out forwards;
        }

        .animate-fade-slide-up {
          animation: fade-slide-up 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
