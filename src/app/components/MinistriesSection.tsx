import { Book, Flower2, Zap, Shield, Heart, Globe, Hand } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SectionFooter } from './SectionFooter';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const ministries = [
  {
    id: 'sunday-school',
    name: 'Sunday School',
    icon: Book,
    tagline: 'Building Faith From The Foundation',
    description: 'Sunday School at LPC is where faith begins. We provide age-appropriate Bible teaching for children and adults every Sunday morning before the main service.',
    highlights: [
      'Children and adult classes available',
      'Every Sunday from 8:00 AM to 9:00 AM',
      'Experienced and passionate teachers',
      'Scripture memory and discipleship focus'
    ],
    meetingTime: 'Every Sunday 9:00 AM',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwZ3JvdXB8ZW58MXx8fHwxNzc0MDA0NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    leaderName: 'Elder Elsie Chitedze',
    leaderTitle: 'Ministry Leader',
    leaderPhoto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    id: 'women',
    name: "Women's Ministry",
    icon: Flower2,
    tagline: 'Women of Strength and Purpose',
    description: "The LPC Women's Ministry exists to empower, equip and connect women of all ages in their walk with God. Through fellowship, prayer and the Word we are building women who are strong in faith.",
    highlights: [
      "Monthly women's fellowship meetings",
      'Prayer circles and Bible study groups',
      'Community outreach and charity work',
      "Annual women's conference"
    ],
    meetingTime: 'Every second Saturday 9:00 AM',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    leaderName: 'Sister Mary Phiri',
    leaderTitle: 'Ministry Leader',
    leaderPhoto: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    id: 'youth',
    name: 'Youth Ministry',
    icon: Zap,
    tagline: 'The Next Generation Is Rising',
    description: 'LPC Youth is a vibrant community for young people aged 13 to 35. We create a space where young people encounter God, build genuine friendships and discover their God-given purpose.',
    highlights: [
      'Weekly youth service every Friday night',
      'Youth camps and retreats',
      'Leadership development programme',
      'Worship band and creative arts team'
    ],
    meetingTime: 'Every Friday 6:00 PM',
    image: 'https://images.unsplash.com/photo-1769755411779-e4c43e7b7742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB5b3V0aCUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NzQwMzc3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    leaderName: 'Brother Emmanuel Chirwa',
    leaderTitle: 'Ministry Leader',
    leaderPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    id: 'men',
    name: "Men's Ministry",
    icon: Shield,
    tagline: 'Men of God Standing Strong',
    description: "The LPC Men's Ministry is building men of integrity, faith and purpose. We gather to sharpen one another, study the Word, pray together and become the husbands, fathers and leaders God has called us to be.",
    highlights: [
      "Monthly men's breakfast and fellowship",
      'Accountability groups and mentorship',
      'Community service projects',
      "Annual men's retreat"
    ],
    meetingTime: 'Every first Saturday 7:00 AM',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    leaderName: 'Pastor David Mbewe',
    leaderTitle: 'Ministry Leader',
    leaderPhoto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    id: 'couples',
    name: 'Couples Ministry',
    icon: Heart,
    tagline: 'Stronger Together in Christ',
    description: 'The LPC Couples Ministry is dedicated to building strong Christ-centred marriages and families. We believe the family is the foundation of the church.',
    highlights: [
      'Monthly couples fellowship evenings',
      'Marriage enrichment seminars',
      'Pre-marital counselling programme',
      'Annual couples retreat'
    ],
    meetingTime: 'Every third Saturday 5:00 PM',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    leaderName: 'Pastor John & Sister Ruth Kamoto',
    leaderTitle: 'Ministry Leaders',
    leaderPhoto: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    id: 'evangelism',
    name: 'Evangelism',
    icon: Globe,
    tagline: 'Taking the Gospel to Lilongwe and Beyond',
    description: 'The LPC Evangelism ministry is on a mission to bring the Gospel of Jesus Christ to every corner of Lilongwe and beyond. Through city outreaches and door to door ministry we are fulfilling the Great Commission.',
    highlights: [
      'Weekly city gospel outreaches',
      'Door to door evangelism teams',
      'Church planting in surrounding areas',
      'Evangelism training and equipping'
    ],
    meetingTime: 'Every Saturday 8:00 AM',
    image: 'https://images.unsplash.com/photo-1765947382559-93260e5d6c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzc0MDA5Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    leaderName: 'Pastor Steven Phiri',
    leaderTitle: 'Ministry Leader',
    leaderPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  {
    id: 'intercessors',
    name: 'Intercessors',
    icon: Hand,
    tagline: 'Standing in the Gap for Lilongwe',
    description: 'The LPC Intercessors are the prayer engine of the church. We are a dedicated team of men and women committed to intercession, spiritual warfare and covering the church, the city and the nation in prayer.',
    highlights: [
      'Daily prayer chain covering the church',
      'Weekly corporate intercession meetings',
      'Prayer and fasting programmes',
      '24 hour prayer initiatives'
    ],
    meetingTime: 'Every Tuesday and Thursday 6:00 AM',
    image: 'https://images.unsplash.com/photo-1575516662637-99214ea59f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5aW5nJTIwaGFuZHMlMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzc0MDM3MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    leaderName: 'Sister Faith Chisale',
    leaderTitle: 'Ministry Leader',
    leaderPhoto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  }
];

export function MinistriesSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#E8821A]/40 via-[#C94A1A]/30 to-[#7A1A0A]/20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A0500]/20 to-[#1A0500]/60"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-['Signature'] text-3xl text-[#E8821A] italic mb-4">
            Serving Together in Christ
          </p>
          <h2 className="font-['TAN-BUSTER'] text-4xl sm:text-5xl text-white mb-6 tracking-wider">
            OUR MINISTRIES
          </h2>
          <div className="w-32 h-1 bg-[#E8821A] mx-auto mb-6"></div>
          <p className="font-['Montserrat'] text-white/90 text-lg">
            Find your place. Grow your faith. Serve your purpose.
          </p>
        </div>

        {/* Ministries Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {ministries.map((ministry) => {
                const Icon = ministry.icon;
                return (
                  <CarouselItem key={ministry.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="group relative h-[600px] rounded-2xl overflow-hidden bg-[#1A0500] border-2 border-[#E8821A]/30 hover:border-[#E8821A] transition-all duration-300 shadow-[0_0_30px_rgba(232,130,26,0.2)] hover:shadow-[0_0_50px_rgba(232,130,26,0.4)]">
                      {/* Ministry Image */}
                      <div className="relative h-[280px] overflow-hidden">
                        <ImageWithFallback
                          src={ministry.image}
                          alt={ministry.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0500] via-[#1A0500]/60 to-transparent"></div>
                        
                        {/* Icon Badge */}
                        <div className="absolute top-4 right-4 w-14 h-14 rounded-full bg-[#E8821A] flex items-center justify-center shadow-lg">
                          <Icon className="text-white" size={28} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 pb-24 space-y-4">
                        <div>
                          <p className="font-['Signature'] text-[#E8821A] text-lg italic mb-1">
                            {ministry.tagline}
                          </p>
                          <h3 className="font-['TAN-BUSTER'] text-2xl text-white tracking-wide">
                            {ministry.name.toUpperCase()}
                          </h3>
                        </div>

                        <p className="font-['Montserrat'] text-white/80 text-sm leading-relaxed line-clamp-3">
                          {ministry.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-2">
                          {ministry.highlights.slice(0, 2).map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <Icon className="text-[#E8821A] flex-shrink-0 mt-0.5" size={16} />
                              <p className="font-['Montserrat'] text-white/70 text-xs leading-snug">
                                {highlight}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <button className="w-full px-6 py-2.5 bg-[#E8821A] text-white rounded-full font-['Montserrat'] font-bold hover:bg-[#C94A1A] transition-all duration-200 text-sm">
                          Join Ministry
                        </button>
                      </div>

                      {/* Leader Badge - Now positioned better */}
                      <div className="absolute bottom-4 left-4 right-4 bg-[#1A0500]/95 backdrop-blur-md border border-[#E8821A]/50 rounded-lg p-3 flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#E8821A] flex-shrink-0">
                          <ImageWithFallback
                            src={ministry.leaderPhoto}
                            alt={ministry.leaderName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-['Montserrat'] font-bold text-white text-xs truncate">
                            {ministry.leaderName}
                          </p>
                          <p className="font-['Montserrat'] text-white/60 text-[10px]">
                            {ministry.leaderTitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-[#E8821A] hover:bg-[#C94A1A] text-white border-none h-12 w-12" />
              <CarouselNext className="static translate-y-0 bg-[#E8821A] hover:bg-[#C94A1A] text-white border-none h-12 w-12" />
            </div>
          </Carousel>
        </div>

        {/* Join A Ministry CTA Strip */}
        <div className="bg-gradient-to-r from-[#E8821A] via-[#C94A1A] to-[#7A1A0A] rounded-2xl p-12 text-center mt-16 mb-12">
          <h3 className="font-['TAN-BUSTER'] text-3xl sm:text-4xl text-white mb-4 tracking-wider">
            FIND YOUR PLACE IN THE BODY
          </h3>
          <p className="font-['Montserrat'] text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Every member has a role. Every gift has a purpose. Find your ministry home at LPC.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <button className="px-10 py-4 bg-[#1A0500] text-white rounded-full font-['Montserrat'] font-bold hover:bg-[#E8821A] hover:scale-105 transition-all duration-200 shadow-lg">
              Explore All Ministries
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-['Montserrat'] font-bold hover:bg-white hover:text-[#7A1A0A] transition-all duration-200">
              Contact Us
            </button>
          </div>
          <p className="font-['Montserrat'] text-white/80 text-sm">
            Speak to any of our pastors after Sunday service to get connected.
          </p>
        </div>

        {/* Section Footer */}
        <SectionFooter />
      </div>
    </section>
  );
}