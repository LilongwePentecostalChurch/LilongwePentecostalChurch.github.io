import { useState, useEffect, useRef } from 'react';
import { Music, Book, Hand, Zap, Flower, Shield, Globe, Calendar, Camera, Grid3x3, Expand } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { LPCLogo } from './LPCLogo';
import { SocialIcon } from './SocialIcon';
import { SectionFooter } from './SectionFooter';

const socialLinks = [
  { platform: 'tiktok' as const, url: 'https://www.tiktok.com/@llpentecostalchurch?is_from_webapp=1&sender_device=pc' },
  { platform: 'youtube' as const, url: 'https://youtube.com/@lilongwepentecostalchurch-l1u?si=vbWjtir34kbr5grZ' },
  { platform: 'facebook' as const, url: 'https://web.facebook.com/lilongwepentecostalchurch' },
  { platform: 'instagram' as const, url: 'https://instagram.com/lpc' },
];

const tabs = [
  { id: 'all', label: 'ALL', icon: Grid3x3 },
  { id: 'worship', label: 'WORSHIP', icon: Music },
  { id: 'bible', label: 'BIBLE STUDY', icon: Book },
  { id: 'prayer', label: 'PRAYER', icon: Hand },
  { id: 'youth', label: 'YOUTH', icon: Zap },
  { id: 'women', label: 'WOMEN', icon: Flower },
  { id: 'men', label: 'MEN', icon: Shield },
  { id: 'outreach', label: 'OUTREACH', icon: Globe },
  { id: 'events', label: 'EVENTS', icon: Calendar },
  { id: 'behind', label: 'BEHIND THE SCENES', icon: Camera },
];

const galleryImages = {
  all: [
    { url: 'https://images.unsplash.com/photo-1717201611909-0f75ee9b0b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwc2VydmljZSUyMGNyb3dkfGVufDF8fHx8MTc3NDAzNzc5NHww&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Sunday Worship Service', height: 'h-64' },
    { url: 'https://images.unsplash.com/photo-1553404954-7858899788e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwcHJhaXNlJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc0MDM3Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Praise & Worship', height: 'h-80' },
    { url: 'https://images.unsplash.com/photo-1575516662637-99214ea59f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5aW5nJTIwaGFuZHMlMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzc0MDM3MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Prayer Night', height: 'h-72' },
    { url: 'https://images.unsplash.com/photo-1769755411779-e4c43e7b7742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB5b3V0aCUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NzQwMzc3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Youth Ministry', height: 'h-64' },
    { url: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwZ3JvdXB8ZW58MXx8fHwxNzc0MDA0NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Bible Study', height: 'h-76' },
    { url: 'https://images.unsplash.com/photo-1604443830970-05ac4193ada9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb25ncmVnYXRpb24lMjB3b3JzaGlwfGVufDF8fHx8MTc3Mzk1MDQ3NHww&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Congregation Worship', height: 'h-80' },
    { url: 'https://images.unsplash.com/photo-1765947382559-93260e5d6c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzc0MDA5Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Community Outreach', height: 'h-64' },
    { url: 'https://images.unsplash.com/photo-1759893025633-1de7a4da5d6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3NwZWwlMjBjcnVzYWRlJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzQwMzc3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Gospel Crusade', height: 'h-72' },
    { url: 'https://images.unsplash.com/photo-1628716957555-f88f182aadfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwdGVhbSUyMHNpbmdpbmd8ZW58MXx8fHwxNzczOTkwNDIyfDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Worship Team', height: 'h-64' },
    { url: 'https://images.unsplash.com/photo-1765947386414-5e63c7887830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBiYXB0aXNtJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzc0MDM3Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Baptism Service', height: 'h-80' },
    { url: 'https://images.unsplash.com/photo-1649163572174-01e4d79d03d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjBmZWxsb3dzaGlwJTIwbWVhbHxlbnwxfHx8fDE3NzQwMzc3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Fellowship Meal', height: 'h-72' },
    { url: 'https://images.unsplash.com/photo-1560279800-8b23f487ce83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGFzdG9yJTIwcHJlYWNoaW5nfGVufDF8fHx8MTc3NDAzNzIxOHww&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Sunday Preaching', height: 'h-64' },
  ],
  worship: [
    { url: 'https://images.unsplash.com/photo-1553404954-7858899788e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwcHJhaXNlJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc0MDM3Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Praise & Worship', height: 'h-80' },
    { url: 'https://images.unsplash.com/photo-1628716957555-f88f182aadfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwdGVhbSUyMHNpbmdpbmd8ZW58MXx8fHwxNzczOTkwNDIyfDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Worship Team', height: 'h-64' },
    { url: 'https://images.unsplash.com/photo-1604443830970-05ac4193ada9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb25ncmVnYXRpb24lMjB3b3JzaGlwfGVufDF8fHx8MTc3Mzk1MDQ3NHww&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Congregation Worship', height: 'h-72' },
  ],
  bible: [
    { url: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwZ3JvdXB8ZW58MXx8fHwxNzc0MDA0NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Bible Study', height: 'h-64' },
    { url: 'https://images.unsplash.com/photo-1560279800-8b23f487ce83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGFzdG9yJTIwcHJlYWNoaW5nfGVufDF8fHx8MTc3NDAzNzIxOHww&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Teaching Session', height: 'h-80' },
  ],
  prayer: [
    { url: 'https://images.unsplash.com/photo-1575516662637-99214ea59f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5aW5nJTIwaGFuZHMlMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzc0MDM3MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Prayer Night', height: 'h-72' },
    { url: 'https://images.unsplash.com/photo-1765947382559-93260e5d6c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzc0MDA5Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Intercession', height: 'h-64' },
  ],
  youth: [
    { url: 'https://images.unsplash.com/photo-1769755411779-e4c43e7b7742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB5b3V0aCUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NzQwMzc3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Youth Ministry', height: 'h-80' },
    { url: 'https://images.unsplash.com/photo-1553404954-7858899788e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwcHJhaXNlJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc0MDM3Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Youth Worship', height: 'h-64' },
  ],
  women: [
    { url: 'https://images.unsplash.com/photo-1604443830970-05ac4193ada9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb25ncmVnYXRpb24lMjB3b3JzaGlwfGVufDF8fHx8MTc3Mzk1MDQ3NHww&ixlib=rb-4.1.0&q=80&w=1080', caption: "Women's Fellowship", height: 'h-72' },
  ],
  men: [
    { url: 'https://images.unsplash.com/photo-1717201611909-0f75ee9b0b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwc2VydmljZSUyMGNyb3dkfGVufDF8fHx8MTc3NDAzNzc5NHww&ixlib=rb-4.1.0&q=80&w=1080', caption: "Men's Ministry", height: 'h-64' },
  ],
  outreach: [
    { url: 'https://images.unsplash.com/photo-1765947382559-93260e5d6c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzc0MDA5Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Community Outreach', height: 'h-80' },
    { url: 'https://images.unsplash.com/photo-1759893025633-1de7a4da5d6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3NwZWwlMjBjcnVzYWRlJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzQwMzc3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Gospel Crusade', height: 'h-72' },
  ],
  events: [
    { url: 'https://images.unsplash.com/photo-1765947386414-5e63c7887830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBiYXB0aXNtJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzc0MDM3Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Baptism Service', height: 'h-80' },
    { url: 'https://images.unsplash.com/photo-1649163572174-01e4d79d03d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjBmZWxsb3dzaGlwJTIwbWVhbHxlbnwxfHx8fDE3NzQwMzc3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Fellowship Meal', height: 'h-64' },
  ],
  behind: [
    { url: 'https://images.unsplash.com/photo-1628716957555-f88f182aadfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwdGVhbSUyMHNpbmdpbmd8ZW58MXx8fHwxNzczOTkwNDIyfDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Media Team Setup', height: 'h-72' },
  ],
};

export function DiscoveryGalleryBar() {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [progress, setProgress] = useState(0);
  const [visibleImages, setVisibleImages] = useState(12);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const currentImages = galleryImages[tabs[activeTab].id as keyof typeof galleryImages] || [];
  const totalImages = currentImages.length;

  useEffect(() => {
    if (!isAutoRotating) return;

    const rotateTab = () => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
      setProgress(0);
    };

    timerRef.current = setInterval(rotateTab, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoRotating]);

  useEffect(() => {
    if (!isAutoRotating) return;

    progressRef.current = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + (100 / 30)));
    }, 100);

    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [isAutoRotating, activeTab]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setIsAutoRotating(false);
    setProgress(0);
    setTimeout(() => setIsAutoRotating(true), 2000);
  };

  const handleLoadMore = () => {
    setVisibleImages(prev => Math.min(prev + 12, currentImages.length));
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#7A1A0A]/70 via-[#1A0500]/90 to-[#000000]"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4zNSIvPjwvc3ZnPg==')] opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-['Signature'] text-3xl text-[#E8821A] italic mb-4">Explore Our World</p>
          <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white mb-6 tracking-wider">
            DISCOVER MORE
          </h2>
          <div className="w-32 h-1 bg-[#E8821A] mx-auto"></div>
        </div>

        {/* Tab Bar */}
        <div className="mb-8">
          <div
            className="bg-[#1A0500] border-t border-b border-[#E8821A] py-4 px-4 overflow-x-auto"
            onMouseEnter={() => setIsAutoRotating(false)}
            onMouseLeave={() => setTimeout(() => setIsAutoRotating(true), 2000)}
          >
            <div className="flex gap-3 min-w-max justify-center">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(index)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-200 ${
                      activeTab === index
                        ? 'bg-[#E8821A] text-white shadow-[0_4px_20px_rgba(232,130,26,0.4)]'
                        : 'bg-[#2A0A00]/60 text-white hover:border hover:border-[#E8821A] hover:text-[#E8821A]'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-['Montserrat'] font-bold text-sm whitespace-nowrap">
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-1 bg-[#2A0A00]">
            <div
              className="h-full bg-[#E8821A] transition-all duration-100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-12">
          {currentImages.slice(0, visibleImages).map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group cursor-pointer ${image.height}`}
              onClick={() => setLightboxImage(image.url)}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7A1A0A]/70 to-transparent opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
              
              {/* Hover Caption */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4 bg-gradient-to-t from-[#1A0500] to-transparent">
                <p className="font-['TAN-BUSTER'] text-white text-lg tracking-wide">
                  {image.caption}
                </p>
              </div>

              {/* Expand Icon */}
              <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#E8821A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Expand className="text-white" size={18} />
              </div>

              {/* LPC Badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <LPCLogo size={30} />
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {visibleImages < totalImages && (
          <div className="text-center mb-12">
            <p className="font-['Montserrat'] text-white mb-4">
              Showing {visibleImages} of {totalImages} photos
            </p>
            <button
              onClick={handleLoadMore}
              className="px-10 py-4 border-2 border-[#E8821A] text-white rounded-full font-['Montserrat'] font-bold hover:bg-[#E8821A] transition-colors"
            >
              Load More
            </button>
          </div>
        )}

        {/* Social Prompt */}
        <div className="bg-[#1A0500] border-t border-[#E8821A] py-8 px-6 rounded-lg mb-12">
          <p className="font-['Montserrat'] text-white text-center mb-6">
            Share your LPC moments — tag us on social media
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-['Montserrat'] font-bold transition-colors ${
                  social.platform === 'tiktok' || social.platform === 'instagram'
                    ? 'bg-[#E8821A] text-white hover:bg-[#C94A1A]'
                    : 'border-2 border-white text-white hover:bg-white hover:text-[#1A0500]'
                }`}
              >
                <SocialIcon platform={social.platform} size={18} />
                {social.platform.charAt(0).toUpperCase() + social.platform.slice(1)}
              </a>
            ))}
          </div>
        </div>

        {/* Section Footer */}
        <SectionFooter />
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-[#1A0500]/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl font-bold hover:text-[#E8821A] transition-colors"
            >
              ×
            </button>
            <div className="relative border-4 border-[#E8821A] rounded-lg overflow-hidden">
              <img src={lightboxImage} alt="Gallery" className="w-full h-auto" />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}