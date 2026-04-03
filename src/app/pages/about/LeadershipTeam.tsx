import { Link } from 'react-router';
import { SectionFooter } from '../../components/SectionFooter';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Shield, UserCog, Users, Church, Cross, ArrowDown } from 'lucide-react';
import { ministriesData } from '../../data/ministriesData';

export function LeadershipTeam() {
  // Elders data (13 elders)
  const elders = [
    { name: 'Rex Kuyeli', image: 'https://images.unsplash.com/photo-1742436448498-94c4790e846d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwY2h1cmNoJTIwZWxkZXIlMjBtYW58ZW58MXx8fHwxNzc1MDM2ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Trevor Hiwa', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwbGVhZGVyJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzUwMzY4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Mcdonald Chikoja', image: 'https://images.unsplash.com/photo-1686628092262-2ac7bc415e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwcGFzdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc1MDM2ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Chawanangwa Jana', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwbGVhZGVyJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzUwMzY4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Bickiel Sinoya', image: 'https://images.unsplash.com/photo-1742436448498-94c4790e846d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwY2h1cmNoJTIwZWxkZXIlMjBtYW58ZW58MXx8fHwxNzc1MDM2ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Stanford Mwanyongo', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwbGVhZGVyJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzUwMzY4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Nyokase Phiri', image: 'https://images.unsplash.com/photo-1686628092262-2ac7bc415e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwcGFzdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc1MDM2ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Saul Kamanga', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwbGVhZGVyJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzUwMzY4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Monalisa Mushava', image: 'https://images.unsplash.com/photo-1742436448498-94c4790e846d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwY2h1cmNoJTIwZWxkZXIlMjBtYW58ZW58MXx8fHwxNzc1MDM2ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Chikondi Kabwadza', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwbGVhZGVyJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzUwMzY4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Tina Rebello', image: 'https://images.unsplash.com/photo-1686628092262-2ac7bc415e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwcGFzdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc1MDM2ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Susan Mtuwa', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwbGVhZGVyJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzUwMzY4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Doreen Matonga', image: 'https://images.unsplash.com/photo-1742436448498-94c4790e846d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwY2h1cmNoJTIwZWxkZXIlMjBtYW58ZW58MXx8fHwxNzc1MDM2ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  ];

  // Deacons data (13 deacons)
  const deacons = [
    { name: 'Elsie Chitedze', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwbGVhZGVyJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzUwMzY4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Tingo Mipando', image: 'https://images.unsplash.com/photo-1742436448498-94c4790e846d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwY2h1cmNoJTIwZWxkZXIlMjBtYW58ZW58MXx8fHwxNzc1MDM2ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Vita Sinoya', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwbGVhZGVyJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzUwMzY4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Yanja Chigamba', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwbGVhZGVyJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzUwMzY4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Gift Njoloma', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwbGVhZGVyJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzUwMzY4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Snowden Bulla', image: 'https://images.unsplash.com/photo-1742436448498-94c4790e846d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwY2h1cmNoJTIwZWxkZXIlMjBtYW58ZW58MXx8fHwxNzc1MDM2ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Yowoyani Chinoko', image: 'https://images.unsplash.com/photo-1686628092262-2ac7bc415e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwcGFzdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc1MDM2ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Molly Chikoja', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwbGVhZGVyJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzUwMzY4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Davies Kapenga', image: 'https://images.unsplash.com/photo-1742436448498-94c4790e846d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwY2h1cmNoJTIwZWxkZXIlMjBtYW58ZW58MXx8fHwxNzc1MDM2ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Chikhu Iyombe', image: 'https://images.unsplash.com/photo-1686628092262-2ac7bc415e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwcGFzdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc1MDM2ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Ivy Chihana', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwbGVhZGVyJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzUwMzY4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Diana Nkhulambe', image: 'https://images.unsplash.com/photo-1742436448498-94c4790e846d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwY2h1cmNoJTIwZWxkZXIlMjBtYW58ZW58MXx8fHwxNzc1MDM2ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Pharnice Bushuru', image: 'https://images.unsplash.com/photo-1758117637332-70e2d5a0b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwbGVhZGVyJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzUwMzY4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  ];

  // Ministry Leaders - pulled from ministriesData
  const ministryLeaders = ministriesData.map(ministry => ({
    ministry: ministry.name,
    leader: ministry.leaderName,
    description: ministry.leaderTitle,
    image: ministry.leaderPhoto,
    icon: ministry.icon,
    link: `/ministries/${ministry.id}`
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1750284743576-d600a45d6165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Leadership Team"
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
            <Link to="/about" className="hover:text-[#E8821A] transition-colors">About</Link>
            <span>›</span>
            <span className="text-[#E8821A]">Leadership</span>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="font-['Signature'] text-3xl text-[#E8821A] mb-4">Serving with vision, integrity and faith</p>
            <h1 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl lg:text-6xl text-white mb-6 tracking-wider leading-tight">
              LEADERSHIP TEAM
            </h1>
            <div className="w-20 h-1 bg-[#E8821A] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Intro Strip */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1A0500]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#7A1A0A]/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="font-['Montserrat'] text-lg text-white/90 leading-relaxed">
            Lilongwe Pentecostal Church is led by a dedicated team of spiritual leaders committed to shepherding, serving and building the body of Christ. Each leader plays a vital role in advancing the mission — <span className="text-[#E8821A] font-bold">Where Christ Is The Answer</span>.
          </p>
        </div>
      </section>

      {/* Leadership Structure */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#7A1A0A]/40 to-[#1A0500]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yNSIvPjwvc3ZnPg==')] opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-['Signature'] text-3xl text-[#E8821A] mb-4">Leadership Structure</p>
            <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white tracking-wider">
              HOW LPC IS LED
            </h2>
          </div>

          {/* Flowchart Container */}
          <div className="max-w-4xl mx-auto">
            {/* Lead Pastor - Top */}
            <div className="flex justify-center mb-8">
              <Link to="/about/lead-pastor" className="relative group">
                <div className="bg-gradient-to-br from-[#E8821A] to-[#C94A1A] p-8 rounded-lg shadow-[0_0_40px_rgba(232,130,26,0.5)] border-2 border-[#E8821A] max-w-sm w-full text-center transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1686628092262-2ac7bc415e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwcGFzdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc1MDM2ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Bishop David Chigamba"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mb-3 inline-block bg-white/20 px-3 py-1 rounded-full">
                    <p className="font-['Montserrat'] text-xs text-white font-bold tracking-wider">LEAD PASTOR</p>
                  </div>
                  <h3 className="font-['TAN-BUSTER'] text-2xl text-white mb-2 tracking-wide">BISHOP DAVID CHIGAMBA</h3>
                  <p className="font-['Montserrat'] text-sm text-white/90">Providing spiritual oversight, vision and leadership for LPC</p>
                </div>
              </Link>
            </div>

            {/* Connecting Line */}
            <div className="flex justify-center mb-8">
              <div className="w-px h-16 bg-gradient-to-b from-[#E8821A] to-[#E8821A]/50 shadow-[0_0_10px_rgba(232,130,26,0.5)]"></div>
            </div>

            {/* Horizontal Divider */}
            <div className="flex justify-center mb-8">
              <div className="relative w-full max-w-2xl">
                <div className="h-px bg-gradient-to-r from-transparent via-[#E8821A] to-transparent shadow-[0_0_10px_rgba(232,130,26,0.5)]"></div>
                <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-px h-16 bg-[#E8821A]/50"></div>
                <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-px h-16 bg-[#E8821A]/50"></div>
              </div>
            </div>

            {/* Second Level - Elders and Deacons Preview */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#E8821A]/20 rounded-full border-2 border-[#E8821A] mb-4">
                  <Shield className="text-[#E8821A]" size={36} />
                </div>
                <h3 className="font-['TAN-BUSTER'] text-2xl text-white mb-2 tracking-wide">ELDERS</h3>
                <p className="font-['Montserrat'] text-sm text-white/80">Spiritual oversight & doctrine</p>
                <p className="font-['Montserrat'] text-xs text-[#E8821A] mt-2">13 Elders</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#E8821A]/20 rounded-full border-2 border-[#E8821A] mb-4">
                  <UserCog className="text-[#E8821A]" size={36} />
                </div>
                <h3 className="font-['TAN-BUSTER'] text-2xl text-white mb-2 tracking-wide">DEACONS</h3>
                <p className="font-['Montserrat'] text-sm text-white/80">Practical ministry & service</p>
                <p className="font-['Montserrat'] text-xs text-[#E8821A] mt-2">13 Deacons</p>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center my-8">
              <ArrowDown className="text-[#E8821A] animate-bounce" size={32} />
            </div>

            {/* Ministry Leaders Preview */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#E8821A]/20 rounded-full border-2 border-[#E8821A] mb-4">
                <Users className="text-[#E8821A]" size={36} />
              </div>
              <h3 className="font-['TAN-BUSTER'] text-2xl text-white mb-2 tracking-wide">MINISTRY LEADERS</h3>
              <p className="font-['Montserrat'] text-sm text-white/80">Department champions & volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Elders Section */}
      <section className="py-24 px-4 relative overflow-hidden" id="elders">
        <div className="absolute inset-0 bg-[#1A0500]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7A1A0A]/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yNSIvPjwvc3ZnPg==')] opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-['Signature'] text-3xl text-[#E8821A] mb-4">Spiritual Oversight</p>
            <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white tracking-wider mb-4">
              ELDERS
            </h2>
            <p className="font-['Montserrat'] text-white/80 max-w-2xl mx-auto">
              Providing spiritual guidance, doctrinal oversight and wisdom for the church family
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {elders.map((elder, index) => (
              <div 
                key={index}
                className="group relative bg-[#1A0500]/80 backdrop-blur-sm rounded-lg overflow-hidden border-2 border-[#E8821A]/30 hover:border-[#E8821A] hover:shadow-[0_0_30px_rgba(232,130,26,0.4)] transition-all duration-300 hover:scale-103"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <ImageWithFallback
                    src={elder.image}
                    alt={elder.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0500] via-[#1A0500]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-[#E8821A]/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Cross className="text-white" size={20} />
                  </div>
                </div>
                
                <div className="p-4 text-center">
                  <h3 className="font-['TAN-BUSTER'] text-lg text-white mb-1 tracking-wide">{elder.name}</h3>
                  <p className="font-['Montserrat'] text-sm text-[#E8821A] mb-2">Elder</p>
                  <p className="font-['Montserrat'] text-xs text-white/70">Spiritual guidance and oversight</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deacons Section */}
      <section className="py-24 px-4 relative overflow-hidden" id="deacons">
        <div className="absolute inset-0 bg-gradient-radial from-[#7A1A0A]/40 via-[#1A0500] to-[#1A0500]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yNSIvPjwvc3ZnPg==')] opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-['Signature'] text-3xl text-[#E8821A] mb-4">Service Ministry</p>
            <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white tracking-wider mb-4">
              DEACONS
            </h2>
            <p className="font-['Montserrat'] text-white/80 max-w-2xl mx-auto">
              Supporting church operations and service ministries with dedication and excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {deacons.map((deacon, index) => (
              <div 
                key={index}
                className="group relative bg-[#1A0500]/80 backdrop-blur-sm rounded-lg overflow-hidden border-2 border-[#E8821A]/20 hover:border-[#E8821A]/70 hover:shadow-[0_0_25px_rgba(232,130,26,0.3)] transition-all duration-300 hover:scale-103"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <ImageWithFallback
                    src={deacon.image}
                    alt={deacon.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0500] via-[#1A0500]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-[#C94A1A]/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <UserCog className="text-white" size={20} />
                  </div>
                </div>
                
                <div className="p-4 text-center">
                  <h3 className="font-['TAN-BUSTER'] text-lg text-white mb-1 tracking-wide">{deacon.name}</h3>
                  <p className="font-['Montserrat'] text-sm text-[#C94A1A] mb-2">Deacon</p>
                  <p className="font-['Montserrat'] text-xs text-white/70">Supporting church operations and service ministries</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Leaders Section */}
      <section className="py-24 px-4 relative overflow-hidden" id="ministry-leaders">
        <div className="absolute inset-0 bg-[#1A0500]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8821A]/10 via-[#7A1A0A]/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yNSIvPjwvc3ZnPg==')] opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-['Signature'] text-3xl text-[#E8821A] mb-4">Ministry Leadership</p>
            <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white tracking-wider mb-4">
              MINISTRY LEADERS
            </h2>
            <p className="font-['Montserrat'] text-white/80 max-w-2xl mx-auto">
              Champions of specific ministries, recruiting and training volunteers to serve with excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {ministryLeaders.map((ministry, index) => {
              const IconComponent = ministry.icon;
              return (
                <Link
                  key={index}
                  to={ministry.link}
                  className="group relative bg-[#1A0500]/80 backdrop-blur-sm rounded-lg overflow-hidden border-2 border-[#E8821A]/30 hover:border-[#E8821A] hover:shadow-[0_0_30px_rgba(232,130,26,0.4)] transition-all duration-300 hover:scale-103 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <ImageWithFallback
                      src={ministry.image}
                      alt={ministry.ministry}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0500] via-[#1A0500]/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-[#E8821A] backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="text-white" size={24} />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-['TAN-BUSTER'] text-xl text-white mb-2 tracking-wide">{ministry.ministry}</h3>
                      <p className="font-['Signature'] text-lg text-[#E8821A] mb-2">{ministry.leader}</p>
                      <p className="font-['Montserrat'] text-sm text-white/90">{ministry.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <SectionFooter />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8821A] via-[#C94A1A] to-[#7A1A0A]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] opacity-20"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white mb-6 tracking-wider">
            SERVE WITH US AT LPC
          </h2>
          <p className="font-['Montserrat'] text-lg text-white/90 mb-8 leading-relaxed">
            God has given every believer a gift. There is a place for you to serve.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/get-involved"
              className="font-['Montserrat'] px-8 py-4 bg-white text-[#E8821A] rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Join a Ministry
            </Link>
            <Link 
              to="/contact"
              className="font-['Montserrat'] px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}