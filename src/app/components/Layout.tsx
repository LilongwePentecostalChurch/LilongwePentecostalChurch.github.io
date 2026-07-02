import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { Menu, X, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { SocialIcon } from './SocialIcon';
import { FloatingSocialBar } from './FloatingSocialBar';
import { LPCLogo } from './LPCLogo';
import { MinistriesDropdown } from './MinistriesDropdown';
import { AboutDropdown } from './AboutDropdown';
import { SermonsDropdown } from './SermonsDropdown';
import { EventsDropdown } from './EventsDropdown';
import { ConnectDropdown } from './ConnectDropdown';
import { CommunityDropdown } from './CommunityDropdown';
import { GiveDropdown } from './GiveDropdown';

const socialLinks = [
  { platform: 'tiktok' as const, label: 'TikTok', url: 'https://www.tiktok.com/@llpentecostalchurch?is_from_webapp=1&sender_device=pc' },
  { platform: 'youtube' as const, label: 'YouTube', url: 'https://youtube.com/@lilongwepentecostalchurch-l1u?si=vbWjtir34kbr5grZ' },
  { platform: 'facebook' as const, label: 'Facebook', url: 'https://web.facebook.com/lilongwepentecostalchurch' },
  { platform: 'instagram' as const, label: 'Instagram', url: 'https://instagram.com/lpc' },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '#', hasDropdown: true, dropdown: 'about' },
  { name: 'Sermons', path: '#', hasDropdown: true, dropdown: 'sermons' },
  { name: 'Ministries', path: '#', hasDropdown: true, dropdown: 'ministries' },
  { name: 'Events', path: '#', hasDropdown: true, dropdown: 'events' },
  { name: 'Connect', path: '#', hasDropdown: true, dropdown: 'connect' },
  { name: 'Community', path: '#', hasDropdown: true, dropdown: 'community' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Give', path: '#', hasDropdown: true, dropdown: 'give' },
];

const mobileSubLinks: Record<string, { name: string; path: string }[]> = {
  about: [
    { name: 'About LPC', path: '/about' },
    { name: 'Our Story', path: '/about/our-story' },
    { name: 'Our Lead Pastor', path: '/about/lead-pastor' },
    { name: 'Leadership Team', path: '/about/leadership-team' },
    { name: 'What We Believe', path: '/about/what-we-believe' },
    { name: 'LPC At A Glance', path: '/about/lpc-at-a-glance' },
    { name: 'Staff', path: '/about/staff' },
  ],
  sermons: [
    { name: 'Sermons', path: '/sermons' },
    { name: 'Bible Study Notes', path: '/sermons/bible-study-notes' },
    { name: 'Devotionals', path: '/sermons/devotionals' },
  ],
  ministries: [
    { name: 'All Ministries', path: '/ministries' },
    { name: "Sunday School", path: '/ministries/sunday-school' },
    { name: "Women's Ministry", path: '/ministries/womens-ministry' },
    { name: 'Youth Ministry', path: '/ministries/youth-ministry' },
    { name: "Men's Ministry", path: '/ministries/mens-ministry' },
    { name: 'Couples Ministry', path: '/ministries/couples-ministry' },
    { name: 'Evangelism', path: '/ministries/evangelism' },
    { name: 'Intercessors', path: '/ministries/intercessors' },
  ],
  events: [
    { name: 'Upcoming Events', path: '/events/upcoming' },
    { name: 'Annual Events', path: '/events/annual' },
    { name: 'Past Events', path: '/events/past' },
  ],
  connect: [
    { name: 'Plan Your Visit', path: '/connect/plan-your-visit' },
    { name: 'Care Groups', path: '/connect/care-groups' },
    { name: 'Counselling & Prayer', path: '/connect/counselling-prayer' },
    { name: 'Membership Class', path: '/connect/membership' },
    { name: 'Volunteer', path: '/connect/volunteer' },
  ],
  community: [
    { name: 'City Outreach', path: '/community/city-outreach' },
    { name: 'Care and Welfare', path: '/community/care-and-welfare' },
  ],
  give: [
    { name: 'Tithes & Offering', path: '/give/tithes-and-offering' },
    { name: 'Testimony of Giving', path: '/give/testimony-of-giving' },
  ],
};

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const PAGE_TITLES: Record<string, string> = {
      '/': 'Lilongwe Pentecostal Church',
      '/about': 'About LPC',
      '/about/our-story': 'Our Story',
      '/about/lead-pastor': 'Our Lead Pastor',
      '/about/leadership-team': 'Leadership Team',
      '/about/what-we-believe': 'What We Believe',
      '/about/lpc-at-a-glance': 'LPC At A Glance',
      '/about/staff': 'Staff',
      '/sermons': 'Sermons',
      '/sermons/bible-study-notes': 'Bible Study Notes',
      '/sermons/devotionals': 'Devotionals',
      '/ministries': 'Ministries',
      '/events': 'Events',
      '/events/upcoming': 'Upcoming Events',
      '/events/annual': 'Annual Events',
      '/events/past': 'Past Events',
      '/connect/plan-your-visit': 'Plan Your Visit',
      '/connect/care-groups': 'Care Groups',
      '/connect/counselling-prayer': 'Counselling & Prayer',
      '/connect/volunteer': 'Volunteer',
      '/connect/membership': 'Membership Class',
      '/community/city-outreach': 'City Outreach',
      '/community/care-and-welfare': 'Care & Welfare',
      '/gallery': 'Gallery',
      '/give/tithes-and-offering': 'Tithes & Offering',
      '/give/testimony-of-giving': 'Testimony of Giving',
      '/leadership': 'Leadership',
      '/leadership/lead-pastor': 'Our Lead Pastor',
      '/leadership/pastoral-team': 'Pastoral Team',
    };
    const SITE = 'Lilongwe Pentecostal Church';
    const pageTitle = PAGE_TITLES[location.pathname];
    document.title = pageTitle && pageTitle !== SITE
      ? `${pageTitle} | ${SITE}`
      : SITE;
  }, [location.pathname]);

  // Click outside to close
  useEffect(() => {
    if (!activeDropdown) return;
    const handleClick = (e: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [activeDropdown]);

  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 400);
  }, [cancelClose]);

  const handleNavMouseEnter = (dropdown: string) => {
    cancelClose();
    setActiveDropdown(dropdown);
  };

  const handleContainerMouseLeave = () => {
    scheduleClose();
  };

  const handleDropdownMouseEnter = () => {
    cancelClose();
  };

  const closeAllDropdowns = () => {
    cancelClose();
    setActiveDropdown(null);
  };

  return (
    <div className="min-h-screen bg-[#1A0500] font-['Montserrat'] text-white overflow-x-hidden">
      <FloatingSocialBar />

      {/* Entire nav + dropdown zone */}
      <div
        ref={navContainerRef}
        className="fixed top-0 left-0 right-0 z-40"
        onMouseLeave={handleContainerMouseLeave}
      >
        {/* Nav bar */}
        <nav
          className={`border-b border-[#E8821A] transition-all duration-300 ${
            scrolled ? 'bg-[#1A0500]' : 'bg-[#1A0500]/90 backdrop-blur-md'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="flex-shrink-0">
                <LPCLogo size={55} />
              </Link>

              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => {
                  if (link.hasDropdown) {
                    return (
                      <button
                        key={link.name}
                        className={`flex items-center gap-1 transition-colors font-medium ${
                          activeDropdown === link.dropdown ? 'text-[#E8821A]' : 'text-white hover:text-[#E8821A]'
                        }`}
                        onMouseEnter={() => handleNavMouseEnter(link.dropdown!)}
                        onClick={() => {
                          cancelClose();
                          setActiveDropdown(prev => prev === link.dropdown ? null : link.dropdown!);
                        }}
                      >
                        {link.name}
                        <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.dropdown ? 'rotate-180' : ''}`} />
                      </button>
                    );
                  }
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-white hover:text-[#E8821A] transition-colors font-medium"
                      onMouseEnter={() => scheduleClose()}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <div className="hidden md:flex items-center">
                <Link
                  to="/connect/plan-your-visit"
                  className="px-6 py-2 bg-[#E8821A] text-white rounded-full font-bold hover:bg-[#C94A1A] transition-colors"
                >
                  Join Us Sunday
                </Link>
              </div>

              <button
                onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setMobileExpanded(null); }}
                className="md:hidden text-[#E8821A]"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-[#1A0500] border-t border-[#E8821A]">
              <div className="px-4 py-6 space-y-1">
                {navLinks.map((link) => {
                  if (!link.hasDropdown) {
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block text-[#E8821A] hover:text-white transition-colors font-medium py-3 border-b border-white/10"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    );
                  }
                  const isExpanded = mobileExpanded === link.dropdown;
                  const subLinks = mobileSubLinks[link.dropdown!] ?? [];
                  return (
                    <div key={link.name}>
                      <button
                        className="w-full flex items-center justify-between text-[#E8821A] hover:text-white transition-colors font-medium py-3 border-b border-white/10"
                        onClick={() => setMobileExpanded(isExpanded ? null : link.dropdown!)}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {isExpanded && (
                        <div className="pl-4 pb-2 space-y-1">
                          {subLinks.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className="block text-white/70 hover:text-[#E8821A] transition-colors text-sm py-2"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileExpanded(null);
                              }}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
                <div className="flex gap-3 pt-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${social.label}`}
                      className="w-10 h-10 rounded-full bg-[#E8821A] flex items-center justify-center text-white"
                    >
                      <SocialIcon platform={social.platform} size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Dropdown panels — rendered directly below nav, inside the same hover container */}
        {activeDropdown && (
          <div
            className="relative"
            onMouseEnter={handleDropdownMouseEnter}
          >
            <AboutDropdown isOpen={activeDropdown === 'about'} onClose={closeAllDropdowns} />
            <MinistriesDropdown isOpen={activeDropdown === 'ministries'} onClose={closeAllDropdowns} />
            <SermonsDropdown isOpen={activeDropdown === 'sermons'} onClose={closeAllDropdowns} />
            <EventsDropdown isOpen={activeDropdown === 'events'} onClose={closeAllDropdowns} />
            <ConnectDropdown isOpen={activeDropdown === 'connect'} onClose={closeAllDropdowns} />
            <CommunityDropdown isOpen={activeDropdown === 'community'} onClose={closeAllDropdowns} />
            <GiveDropdown isOpen={activeDropdown === 'give'} onClose={closeAllDropdowns} />
          </div>
        )}
      </div>

      {/* Backdrop overlay — separate, pointer-events only for clicking to close */}
      {activeDropdown && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          style={{ top: '80px' }}
          onClick={closeAllDropdowns}
        />
      )}

      <main className="pt-20">
        <Outlet />
      </main>

      <footer className="bg-[#100300] py-16 px-4 relative border-t-2 border-[#E8821A]">
        <div className="max-w-7xl mx-auto mb-12">
          <div className="bg-[#1A0500]/80 border border-[#E8821A] rounded-lg py-8 px-6">
            <p className="font-['Montserrat'] text-white text-center mb-6">
              Connect with us on all platforms:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-[#E8821A] text-white rounded-full font-['Montserrat'] font-bold hover:bg-[#C94A1A] transition-colors"
                >
                  <SocialIcon platform={social.platform} size={20} />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-[#E8821A] mb-12 max-w-7xl mx-auto"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <LPCLogo size={120} />
            <p className="font-['Montserrat'] italic text-white/80 mt-4">
              Christ Is The Answer
            </p>
          </div>
          <div>
            <h3 className="font-['TAN-BUSTER'] text-xl text-white mb-4 tracking-wide">
              QUICK LINKS
            </h3>
            <div className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About LPC', path: '/about' },
                { name: 'Sermons', path: '/sermons' },
                { name: 'Events', path: '/events' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Leadership', path: '/about/leadership-team' },
                { name: 'Plan Your Visit', path: '/connect/plan-your-visit' },
                { name: 'Give / Tithes & Offering', path: '/give/tithes-and-offering' },
                { name: 'Bible Study Notes', path: '/sermons/bible-study-notes' },
                { name: 'Devotionals', path: '/sermons/devotionals' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block font-['Montserrat'] text-white/80 hover:text-[#E8821A] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-['TAN-BUSTER'] text-xl text-white mb-4 tracking-wide">
              CONTACT
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="text-[#E8821A]" size={18} />
                <p className="font-['Montserrat'] text-white/80 text-sm">Lilongwe, Malawi</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#E8821A]" size={18} />
                <p className="font-['Montserrat'] text-white/80 text-sm">+265 XXX XXX XXX</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#E8821A]" size={18} />
                <p className="font-['Montserrat'] text-white/80 text-sm">info@lpc.org.mw</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-[#E8821A] mb-8 max-w-7xl mx-auto"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-['Montserrat'] text-sm text-white/60">
            © 2026 Lilongwe Pentecostal Church. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.label}`}
                className="w-8 h-8 rounded-full bg-[#E8821A] flex items-center justify-center text-white hover:bg-[#C94A1A] transition-colors"
              >
                <SocialIcon platform={social.platform} size={14} />
              </a>
            ))}
          </div>
          <div className="text-right">
            <div className="font-['TAN-BUSTER'] text-white text-xs tracking-wider">
              GROWING STRONGER
            </div>
            <div className="font-['TAN-BUSTER'] text-white text-xs tracking-wider flex items-center gap-1 justify-end">
              <span className="inline-flex items-center justify-center w-3 h-3 border border-white rounded-full text-[6px]">IN</span>
              <span>CHRIST</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}