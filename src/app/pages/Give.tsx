import { LPCLogo } from '../components/LPCLogo';

export function Give() {
  return (
    <div className="min-h-screen">
      {/* Give and Tithes */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/40 via-[#C94A1A]/30 to-[#7A1A0A]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/20 to-[#1A0500]/60"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yNSIvPjwvc3ZnPg==')] opacity-30"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-['TAN-BUSTER'] text-5xl sm:text-6xl md:text-7xl text-white mb-4 tracking-wider">
            TITHES
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 border-4 border-white rounded-full font-['TAN-BUSTER'] text-xl sm:text-2xl text-white">
              &
            </span>
          </div>
          <h2 className="font-['TAN-BUSTER'] text-5xl sm:text-6xl md:text-7xl text-white mb-12 tracking-wider">
            OFFERING
          </h2>

          <p className="font-['Montserrat'] text-lg text-white/90 mb-12 max-w-2xl mx-auto">
            "Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this," 
            says the LORD Almighty, "and see if I will not throw open the floodgates of heaven and pour out 
            so much blessing that there will not be room enough to store it." — Malachi 3:10
          </p>

          <div className="bg-[#1A0500]/60 backdrop-blur-sm border-2 border-[#E8821A] rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#E8821A] rounded-lg flex items-center justify-center text-white font-bold">
                    AM
                  </div>
                  <div>
                    <p className="font-['Montserrat'] font-bold text-white">Airtel Money</p>
                    <p className="font-['Montserrat'] text-sm text-white/70">Mobile Payment</p>
                  </div>
                </div>
                <p className="font-['Montserrat'] text-lg text-white">+265 XXX XXX XXX</p>
                <p className="font-['Montserrat'] text-sm text-white/70 mt-2">Send to: LPC Lilongwe</p>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#E8821A] rounded-lg flex items-center justify-center text-white font-bold">
                    SB
                  </div>
                  <div>
                    <p className="font-['Montserrat'] font-bold text-white">Standard Bank</p>
                    <p className="font-['Montserrat'] text-sm text-white/70">Bank Transfer</p>
                  </div>
                </div>
                <p className="font-['Montserrat'] text-lg text-white">Account: XXXX XXXX XXXX</p>
                <p className="font-['Montserrat'] text-sm text-white/70 mt-2">Name: Lilongwe Pentecostal Church</p>
              </div>
            </div>
          </div>

          <button className="px-10 py-4 bg-[#E8821A] text-white rounded-full font-['Montserrat'] font-bold text-lg hover:bg-[#C94A1A] transition-colors">
            Give Now
          </button>

          <div className="absolute bottom-8 right-8 hidden lg:block">
            <LPCLogo size={60} />
          </div>
        </div>
      </section>

      {/* Giving Information */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#7A1A0A]/60 to-[#1A0500]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] opacity-40"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h3 className="font-['TAN-BUSTER'] text-3xl text-white text-center mb-12 tracking-wider">
            WHY WE GIVE
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "OBEDIENCE",
                description: "We give because God commands us to honor Him with our firstfruits."
              },
              {
                title: "WORSHIP",
                description: "Giving is an act of worship and demonstrates our trust in God's provision."
              },
              {
                title: "KINGDOM IMPACT",
                description: "Your giving supports ministry, outreach, and advancing God's Kingdom."
              }
            ].map((reason, index) => (
              <div
                key={index}
                className="bg-gradient-radial from-[#E8821A]/20 via-[#C94A1A]/10 to-transparent backdrop-blur-sm border-2 border-[#E8821A] rounded-lg p-6 text-center"
              >
                <h4 className="font-['TAN-BUSTER'] text-2xl text-white mb-4 tracking-wide">
                  {reason.title}
                </h4>
                <p className="font-['Montserrat'] text-white/80">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
