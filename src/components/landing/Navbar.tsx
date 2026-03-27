import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const navLinks = [
  { label: 'Shop', href: '/#benefits' },
  { label: 'Our Story', href: '/#scent-story' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'FAQ', href: '/#faq' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}
      `}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 h-16 md:h-18 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-heading text-xl md:text-2xl font-bold text-midnight tracking-tight hover:text-sage transition-colors duration-200">
          Stillwell
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-sage transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-sage/10 transition-colors duration-200 cursor-pointer"
            aria-label="Shopping bag"
          >
            <ShoppingBag className="w-5 h-5 text-midnight" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-sage text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-sage/10 transition-colors duration-200 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5 text-midnight" /> : <Menu className="w-5 h-5 text-midnight" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${mobileOpen ? 'max-h-64 border-b border-cream-dark' : 'max-h-0'}
          bg-cream/95 backdrop-blur-md
        `}
      >
        <div className="px-5 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-medium text-midnight hover:text-sage transition-colors duration-200 py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
