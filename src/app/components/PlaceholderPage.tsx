import { Breadcrumb } from './Breadcrumb';

interface PlaceholderPageProps {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; path?: string }[];
}

export function PlaceholderPage({ title, description = '', breadcrumbs = [] }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1200&q=80"
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A0500]/80 via-[#7A1A0A]/70 to-[#1A0500]"></div>
          
          {/* Smoky glow effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E8821A]/20 via-[#C94A1A]/10 to-transparent opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-['TAN-BUSTER'] text-5xl md:text-7xl text-white mb-4 tracking-wide drop-shadow-lg">
            {title}
          </h1>
          <p className="font-['Montserrat'] text-xl text-white/90 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <Breadcrumb items={breadcrumbs} />

        <div className="bg-[#1A0500]/60 border border-[#E8821A] rounded-xl p-12">
          <p className="font-['Montserrat'] text-white/80 text-lg text-center mb-8">
            This page is currently under construction. Check back soon for updates!
          </p>
          <div className="text-center">
            <a
              href="/"
              className="inline-block px-8 py-3 bg-[#E8821A] text-white rounded-full font-['Montserrat'] font-bold hover:bg-[#C94A1A] transition-colors"
            >
              Return Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
