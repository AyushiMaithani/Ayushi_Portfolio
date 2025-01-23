import Resume from '../../assets/Ayushi_Resume.pdf'
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [style, setStyle] = useState('');
  const [cvStyle, setCvStyle] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            if (section === 'home' || section === 'about') {
              setStyle('bg-zinc-200');
              setCvStyle('border-black hover:bg-zinc-400');
            } else {
              setStyle('bg-zinc-800 text-white');
              setCvStyle('border-white hover:bg-zinc-100/50');
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="relative">

      <nav className='fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 md:py-6 '>
        <div className="container mx-auto px-4">
          <div className="relative flex items-center justify-end gap-3 ">
            <div>
            <a href="#home" className="font-mon bg-zinc-200 rounded-full w-fit p-3 px-6 lg:hidden">Resume</a>
            </div>
            {/* Mobile Menu Button */}
           <div>
             <button 
              className="lg:hidden z-90 bg-zinc-200 rounded-full w-fit p-3"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button></div>

            {/* Desktop Navigation */}
            <div className={`hidden lg:block absolute left-1/2 -translate-x-1/2 ${style} backdrop-blur-sm rounded-full px-6 py-4 mt-10 bg-zinc-200`}>
              <div className="flex space-x-2">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <a
                    href={`#${item.toLowerCase()}`}
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-4 py-2 rounded-full text-sm font-mono transition-all ${
                      activeSection === item.toLowerCase() && 'bg-white text-zinc-900'
                    }`}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href={Resume}
                  download="Ayushi's Resume"
                  className={`px-4 py-2 rounded-full text-sm font-mono border ${cvStyle} transition-all duration-300`}
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`lg:hidden fixed inset-0 bg-zinc-900/95 backdrop-blur-sm transition-all duration-300 ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <a
                    href={`#${item.toLowerCase()}`}
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-4 py-2 text-xl font-mono transition-all text-white ${
                      activeSection === item.toLowerCase() && 'text-blue-400'
                    }`}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href={Resume}
                  download="Ayushi's Resume"
                  className="px-6 py-3 rounded-full text-lg font-mono border border-white text-white hover:bg-white/10 transition-all duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;