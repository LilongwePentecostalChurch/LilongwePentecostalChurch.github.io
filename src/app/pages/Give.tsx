import { useState, useEffect } from 'react';
import { LPCLogo } from '../components/LPCLogo';
import { sanityClient } from '../lib/sanityClient';

interface GivingMethod {
  method: string;
  details?: string;
  accountName?: string;
  accountNumber?: string;
  bankName?: string;
}

interface GivingInfo {
  pageTitle?: string;
  pageSubtitle?: string;
  introText?: string;
  givingMethods?: GivingMethod[];
  onlineGiveUrl?: string;
}

const fallbackMethods: GivingMethod[] = [
  { method: 'Airtel Money', bankName: 'Mobile Payment', accountNumber: '+265 XXX XXX XXX', accountName: 'LPC Lilongwe' },
  { method: 'Standard Bank', bankName: 'Bank Transfer', accountNumber: 'XXXX XXXX XXXX', accountName: 'Lilongwe Pentecostal Church' },
];

// Short label for the icon badge (first 2 letters)
function methodBadge(name: string) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

export function Give() {
  const [givingInfo, setGivingInfo] = useState<GivingInfo>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "givingInfo"][0] { pageTitle, pageSubtitle, introText, givingMethods, onlineGiveUrl }`)
      .then((data: GivingInfo) => {
        if (data) setGivingInfo(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const methods = givingInfo.givingMethods && givingInfo.givingMethods.length > 0
    ? givingInfo.givingMethods
    : fallbackMethods;

  return (
    <div className="min-h-screen">
      {/* Give and Tithes */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/40 via-[#C94A1A]/30 to-[#7A1A0A]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/20 to-[#1A0500]/60"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yNSIvPjwvc3ZnPg==')] opacity-30"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="font-['TAN-BUSTER'] text-5xl sm:text-6xl md:text-7xl text-white mb-4 tracking-wider">
            {givingInfo.pageTitle?.split(' ')[0] ?? 'TITHES'}
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 border-4 border-white rounded-full font-['TAN-BUSTER'] text-xl sm:text-2xl text-white">&</span>
          </div>
          <h2 className="font-['TAN-BUSTER'] text-5xl sm:text-6xl md:text-7xl text-white mb-12 tracking-wider">
            OFFERING
          </h2>

          {/* Intro text */}
          <p className="font-['Montserrat'] text-lg text-white/90 mb-12 max-w-2xl mx-auto">
            {givingInfo.introText ?? `"Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this," says the LORD Almighty, "and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it." — Malachi 3:10`}
          </p>

          {/* Giving Methods */}
          <div className="bg-[#1A0500]/60 backdrop-blur-sm border-2 border-[#E8821A] rounded-lg p-8 mb-8">
            <div className={`grid gap-8 ${methods.length === 1 ? '' : 'md:grid-cols-2'}`}>
              {methods.map((m, index) => (
                <div key={index} className="text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#E8821A] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {methodBadge(m.method)}
                    </div>
                    <div>
                      <p className="font-['Montserrat'] font-bold text-white">{m.method}</p>
                      <p className="font-['Montserrat'] text-sm text-white/70">{m.bankName}</p>
                    </div>
                  </div>
                  {m.accountNumber && (
                    <p className="font-['Montserrat'] text-lg text-white">{m.accountNumber}</p>
                  )}
                  {m.accountName && (
                    <p className="font-['Montserrat'] text-sm text-white/70 mt-2">Name: {m.accountName}</p>
                  )}
                  {m.details && (
                    <p className="font-['Montserrat'] text-sm text-white/70 mt-2">{m.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Give Now button */}
          <a
            href={givingInfo.onlineGiveUrl ?? '#'}
            target={givingInfo.onlineGiveUrl ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#E8821A] text-white rounded-full font-['Montserrat'] font-bold text-lg hover:bg-[#C94A1A] transition-colors"
          >
            Give Now
          </a>

          <div className="absolute bottom-8 right-8 hidden lg:block">
            <LPCLogo size={60} />
          </div>
        </div>
      </section>

      {/* Why We Give */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#7A1A0A]/60 to-[#1A0500]"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h3 className="font-['TAN-BUSTER'] text-3xl text-white text-center mb-12 tracking-wider">
            WHY WE GIVE
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "OBEDIENCE", description: "We give because God commands us to honor Him with our firstfruits." },
              { title: "WORSHIP", description: "Giving is an act of worship and demonstrates our trust in God's provision." },
              { title: "KINGDOM IMPACT", description: "Your giving supports ministry, outreach, and advancing God's Kingdom." },
            ].map((reason, index) => (
              <div key={index} className="bg-gradient-radial from-[#E8821A]/20 via-[#C94A1A]/10 to-transparent backdrop-blur-sm border-2 border-[#E8821A] rounded-lg p-6 text-center">
                <h4 className="font-['TAN-BUSTER'] text-2xl text-white mb-4 tracking-wide">{reason.title}</h4>
                <p className="font-['Montserrat'] text-white/80">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
