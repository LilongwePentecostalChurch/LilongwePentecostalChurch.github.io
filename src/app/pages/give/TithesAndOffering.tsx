import { Link } from 'react-router';
import { SectionFooter } from '../../components/SectionFooter';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { CreditCard, Smartphone, Landmark, Heart } from 'lucide-react';

export function TithesAndOffering() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/40 via-[#C94A1A]/30 to-[#7A1A0A]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/20 to-[#1A0500]/60"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')] opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-white/60 mb-8 font-['Montserrat'] text-sm">
            <Link to="/" className="hover:text-[#E8821A] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/give" className="hover:text-[#E8821A] transition-colors">Give</Link>
            <span>/</span>
            <span className="text-[#E8821A]">Tithes & Offering</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="font-['Signature'] text-3xl text-[#E8821A] mb-4">Worship Through Giving</p>
              <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl lg:text-6xl text-white mb-6 tracking-wider leading-tight">
                TITHES & OFFERING
              </h2>
              <div className="w-20 h-1 bg-[#E8821A] mb-6"></div>
              <p className="font-['Montserrat'] text-lg text-white/90 leading-relaxed mb-6">
                Giving is an act of worship, an expression of our gratitude to God, and a testament to our trust in His provision. Through your generous tithes and offerings, Lilongwe Pentecostal Church is able to sustain its ministries, maintain our facilities, and reach our community with the Gospel.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-[#E8821A]"></div>
                <p className="font-['Montserrat'] text-sm tracking-widest text-white/80 italic">
                  2 CORINTHIANS 9:7
                </p>
                <div className="h-px w-12 bg-[#E8821A]"></div>
              </div>
              <p className="font-['Montserrat'] text-[#E8821A] italic">
                "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
              </p>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden border-2 border-[#E8821A] shadow-[0_0_30px_rgba(232,130,26,0.3)]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1744118943568-824d72846056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXRoaW5nJTIwb2ZmZXJpbmd8ZW58MXx8fHwxNzc1MDM0ODY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Offering basket"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0500] to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#7A1A0A]/40 to-[#1A0500]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yNSIvPjwvc3ZnPg==')] opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white text-center mb-16 tracking-wider">
            WAYS TO GIVE
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#1A0500]/80 backdrop-blur-sm border-2 border-[#E8821A]/50 p-8 rounded-lg hover:border-[#E8821A] hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-[#E8821A]/20 rounded-full flex items-center justify-center mb-6">
                <Landmark className="text-[#E8821A]" size={32} />
              </div>
              <h3 className="font-['TAN-BUSTER'] text-2xl text-white mb-4 tracking-wide">BANK TRANSFER</h3>
              <p className="font-['Montserrat'] text-white/80 mb-6 leading-relaxed">
                Directly transfer your tithes and offering into the church's bank account.
              </p>
              <div className="bg-[#E8821A]/10 p-4 rounded border border-[#E8821A]/30">
                <p className="font-['Montserrat'] text-sm text-[#E8821A] mb-1">Bank Name</p>
                <p className="font-['Montserrat'] text-white font-bold mb-3">National Bank of Malawi</p>
                <p className="font-['Montserrat'] text-sm text-[#E8821A] mb-1">Account Name</p>
                <p className="font-['Montserrat'] text-white font-bold mb-3">Lilongwe Pentecostal Church</p>
                <p className="font-['Montserrat'] text-sm text-[#E8821A] mb-1">Account Number</p>
                <p className="font-['Montserrat'] text-white font-bold mb-3">1000XXXXXXX</p>
                <p className="font-['Montserrat'] text-sm text-[#E8821A] mb-1">Branch</p>
                <p className="font-['Montserrat'] text-white font-bold">Capital City</p>
              </div>
            </div>

            <div className="bg-[#1A0500]/80 backdrop-blur-sm border-2 border-[#E8821A]/50 p-8 rounded-lg hover:border-[#E8821A] hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-[#E8821A]/20 rounded-full flex items-center justify-center mb-6">
                <Smartphone className="text-[#E8821A]" size={32} />
              </div>
              <h3 className="font-['TAN-BUSTER'] text-2xl text-white mb-4 tracking-wide">MOBILE MONEY</h3>
              <p className="font-['Montserrat'] text-white/80 mb-6 leading-relaxed">
                Quick and convenient giving via Airtel Money and TNM Mpamba.
              </p>
              <div className="space-y-4">
                <div className="bg-[#E8821A]/10 p-4 rounded border border-[#E8821A]/30">
                  <p className="font-['Montserrat'] text-sm text-[#E8821A] mb-1">Airtel Money</p>
                  <p className="font-['Montserrat'] text-white font-bold">+265 99X XXX XXX</p>
                  <p className="font-['Montserrat'] text-xs text-white/60 mt-1">Name: LPC Offering</p>
                </div>
                <div className="bg-[#E8821A]/10 p-4 rounded border border-[#E8821A]/30">
                  <p className="font-['Montserrat'] text-sm text-[#E8821A] mb-1">TNM Mpamba</p>
                  <p className="font-['Montserrat'] text-white font-bold">+265 88X XXX XXX</p>
                  <p className="font-['Montserrat'] text-xs text-white/60 mt-1">Name: LPC Offering</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A0500]/80 backdrop-blur-sm border-2 border-[#E8821A]/50 p-8 rounded-lg hover:border-[#E8821A] hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-[#E8821A]/20 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-[#E8821A]" size={32} />
              </div>
              <h3 className="font-['TAN-BUSTER'] text-2xl text-white mb-4 tracking-wide">IN PERSON</h3>
              <p className="font-['Montserrat'] text-white/80 mb-6 leading-relaxed">
                Give during our Sunday services or drop off your giving at the church office.
              </p>
              <div className="bg-[#E8821A]/10 p-4 rounded border border-[#E8821A]/30">
                <p className="font-['Montserrat'] text-sm text-[#E8821A] mb-1">Services</p>
                <p className="font-['Montserrat'] text-white mb-3">Sundays 9:00 AM & 11:00 AM</p>
                <p className="font-['Montserrat'] text-sm text-[#E8821A] mb-1">Envelopes</p>
                <p className="font-['Montserrat'] text-white mb-3">Tithe and offering envelopes are available in the foyer.</p>
              </div>
            </div>
          </div>

          <SectionFooter />
        </div>
      </section>
    </div>
  );
}