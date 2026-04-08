import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowDownTrayIcon, BookOpenIcon, MusicalNoteIcon, CloudArrowDownIcon, BoltIcon, UserGroupIcon, SparklesIcon, ShieldCheckIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { FadeInUp, FadeInLeft, FadeInRight } from '../components/ScrollAnimation';
import ParticlesBackground from '../components/ParticlesBackground';
import '../styles/main.css';
import { motion, AnimatePresence } from 'framer-motion';

const BackgroundEffects = () => {
  const generateRandomPosition = () => {
    const centerX = 50;
    const centerY = 50;
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 30 + 20;
    
    return {
      left: `${centerX + Math.cos(angle) * distance}%`,
      top: `${centerY + Math.sin(angle) * distance}%`,
    };
  };

  // Get the number of notes based on screen size
  const getNotesCount = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 12 : 25; // Increased number of particles
    }
    return 12;
  };

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div className="illusion-container">
          {[...Array(3)].map((_, i) => (
            <div key={`circle-${i}`} className="illusion-circle" style={{ animationDelay: `${i * 0.5}s` }} />
          ))}
        </div>
        <div className="illusion-overlay" />
      </div>
      <div className="notes-container">
        {[...Array(getNotesCount())].map((_, i) => {
          const position = generateRandomPosition();
          return (
            <div
              key={`note-${i}`}
              className="absolute particle-note"
              style={{
                ...position,
                animationDelay: `${(i * 0.3)}s`, // Faster sequence of notes
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: 0
              }}
            >
              <MusicalNoteIcon className="h-4 w-4 md:h-6 md:w-6 text-[#165f68] opacity-70" />
            </div>
          );
        })}
      </div>
    </>
  );
};

const MockupSection = () => {
  const [selectedImage, setSelectedImage] = useState('/mockups/home.png');
  
  const mockups = [
    { src: '/mockups/home.png', title: 'Home', desc: 'Personalized dashboard for your music' },
    { src: '/mockups/library.png', title: 'Library', desc: 'Organize your favorite tracks and albums' },
       { src: '/mockups/stats.png', title: 'Stats', desc: 'Track your listening habits and trends' },
    { src: '/mockups/player.png', title: 'Player', desc: 'Immersive playback with dynamic art' },
    { src: '/mockups/playlist.png', title: 'Playlist', desc: 'Create and share unlimited playlists' },
    { src: '/mockups/search.png', title: 'Search', desc: 'Find any song from YouTube Music' }
  ];

  return (
    <section className="py-24 md:py-48 bg-black relative overflow-hidden" id="interface">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#165f68]/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Side: Mockup Preview */}
          <div className="flex-1 w-full order-2 lg:order-1 flex justify-center">
            <div className="relative group">
              {/* Decorative elements around phone */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-10 border border-[#165f68]/20 rounded-full border-dashed"
              />
              
              {/* Phone Frame Decoration */}
              <div 
                className="relative p-2.5 rounded-[3rem] bg-zinc-900 border-[6px] border-zinc-800 shadow-[0_0_50px_rgba(22,95,104,0.3)] overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700" 
                style={{ width: 'min(90vw, 300px)', height: 'min(180vw, 600px)' }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-b-2xl z-20" />
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={selectedImage}
                    src={selectedImage}
                    alt="App Mockup"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover rounded-[2rem]"
                  />
                </AnimatePresence>
              </div>
              
              {/* Main Glow */}
              <div className="absolute -inset-20 bg-[#165f68]/15 blur-[80px] -z-10 rounded-full" />
            </div>
          </div>

          {/* Right Side: Content & Controls */}
          <div className="flex-1 order-1 lg:order-2 text-center lg:text-left w-full overflow-hidden">
            <FadeInRight>
              <h2 className="text-3xl sm:text-4xl md:text-7xl font-black mb-6 md:mb-8 tracking-tighter uppercase leading-tight md:leading-none break-words">
                Experience <br className="hidden sm:block" />
                <span className="gradient-text">The Rhythm</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-lg mb-8 md:mb-12 max-w-md mx-auto lg:mx-0 font-light px-4 lg:px-0">
                Every screen is designed with precision to provide the most immersive music streaming experience.
              </p>
              
              {/* Desktop Vertical List / Mobile Horizontal Scroll */}
              <div className="flex lg:flex-col gap-3 overflow-x-auto pb-6 lg:pb-0 scrollbar-hide snap-x w-screen -mx-4 px-4 lg:w-full lg:mx-0 lg:px-0">
                {mockups.map((mockup) => (
                  <button
                    key={mockup.title}
                    onClick={() => setSelectedImage(mockup.src)}
                    className={`flex-shrink-0 snap-center min-w-[120px] sm:min-w-[140px] lg:w-full group cursor-pointer p-4 lg:p-5 rounded-2xl transition-all duration-500 border text-left ${
                      selectedImage === mockup.src 
                      ? 'glass-card-premium border-[#165f68]/40 bg-[#165f68]/10' 
                      : 'border-white/5 bg-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center lg:gap-4">
                      <div className={`hidden lg:block w-2 h-2 rounded-full transition-all duration-300 ${
                        selectedImage === mockup.src ? 'bg-[#165f68] scale-150 neon-accent' : 'bg-zinc-800'
                      }`} />
                      <div className="flex-grow text-center lg:text-left">
                        <div className="flex lg:justify-between items-center">
                          <h3 className={`text-xs lg:text-lg font-bold uppercase tracking-tight w-full lg:w-auto ${
                            selectedImage === mockup.src ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                          }`}>{mockup.title}</h3>
                          {selectedImage === mockup.src && (
                            <motion.span layoutId="arrow" className="hidden lg:block text-[#165f68]">→</motion.span>
                          )}
                        </div>
                        {selectedImage === mockup.src && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="hidden lg:block text-gray-400 text-sm mt-1 font-light"
                          >
                            {mockup.desc}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </FadeInRight>
          </div>
        </div>
      </div>
    </section>
  );
};

const CountUp = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useState(false);
  const nodeRef = React.useRef(null);

  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const endVal = parseInt(end);
      if (start === endVal) return;

      let totalMiliseconds = duration * 1000;
      let incrementTime = (totalMiliseconds / endVal);

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === endVal) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <span 
      ref={(node) => {
        if (node) {
          const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) inView === false && setCount(0) || inView === false && (true); // Simple trigger
            if (entry.isIntersecting) {
              // Trigger animation only once
              observer.disconnect();
              setCount(0);
              // We need a mechanism to set inView to true
            }
          });
          // observer.observe(node);
        }
      }}
    >
      {count}{suffix}
    </span>
  );
};

// Ultra-Minimal Symbols for Hero
const FloatingStat = ({ symbol, value, className, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -15, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: delay 
        }
      }}
      className={`absolute z-30 bg-black/60 backdrop-blur-3xl border border-white/10 h-10 px-4 rounded-full flex items-center gap-2 shadow-[0_0_30px_rgba(0,0,0,0.5)] whitespace-nowrap ${className}`}
    >
      <span className="text-[#165f68] text-xs font-black">{symbol}</span>
      <span className="text-white font-bold text-[10px] tracking-tight">{value}</span>
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-28 md:pt-48 pb-16 md:pb-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#165f68]/20 to-transparent opacity-60" />
        <BackgroundEffects />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-12 min-h-[80vh] lg:min-h-0">
          {/* Left Side: Content */}
          <div className="w-full lg:flex-1 text-center lg:text-left z-20">
            <FadeInUp>
              <span className="text-[#165f68] font-black tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 md:mb-6 block italic opacity-80">Premium Experience</span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 tracking-tighter uppercase leading-[0.85] break-words">
                The Ultimate <br className="hidden sm:block" />
                <span className="gradient-text">Music Vibes</span>
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={0.2}>
              <p className="text-base md:text-xl mb-8 md:mb-12 text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light px-4 lg:px-0">
                Beatzz is a minimalist and ad-free music streaming application. Experience the rhythm of YouTube Music with zero distractions.
              </p>
            </FadeInUp>
            
            <FadeInUp delay={0.4}>
              <div className="flex flex-row justify-center lg:justify-start items-center gap-3 md:gap-6 px-4 lg:px-0">
                <Link 
                  to="/download" 
                  className="gradient-button px-6 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-sm md:text-lg flex items-center gap-2 md:gap-3 flex-1 sm:flex-none justify-center neon-accent group overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out"></div>
                  <ArrowDownTrayIcon className="h-5 w-5 md:h-6 md:w-6" />
                  GET APP
                </Link>
                <a 
                  href="https://t.me/beatzzApp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-card-premium px-6 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-sm md:text-lg flex items-center gap-2 md:gap-3 flex-1 sm:flex-none justify-center hover:bg-white/5 transition-all duration-300 border border-white/10"
                >
                  <svg className="h-5 w-5 md:h-6 md:w-6 text-[#0088cc]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0C5.344 0 0 5.344 0 11.944c0 6.6 5.344 11.944 11.944 11.944 6.6 0 11.944-5.344 11.944-11.944C23.888 5.344 18.544 0 11.944 0zm5.66 8.161l-1.92 9.06c-.14.63-.51.78-1.04.49l-2.92-2.15-1.41 1.36c-.16.16-.29.29-.59.29l.21-2.98 5.43-4.91c.24-.21-.05-.33-.37-.12l-6.72 4.23-2.88-.9c-.63-.2-.64-.63.13-.93l11.26-4.34c.52-.2.98.11.81.9z"/>
                  </svg>
                  JOIN
                </a>
              </div>
            </FadeInUp>
          </div>

          {/* Right Side: 3D Mockup - Overlapping on Mobile */}
          <div className="w-full lg:flex-1 relative mt-[-20px] lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.3 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.2, 
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative z-10 origin-center lg:scale-125 lg:origin-left"
            >
              <div className="absolute inset-0 bg-[#165f68]/10 blur-[120px] rounded-full -z-10 animate-pulse" />
              <img 
                src="/mockups/heroframe.png" 
                alt="Beatzz Experience" 
                className="w-full h-auto drop-shadow-[0_40px_100px_rgba(22,95,104,0.2)] md:drop-shadow-[0_60px_120px_rgba(22,95,104,0.3)] transition-all duration-700"
              />
              
              {/* Visual Depth Accents - Mobile Adjusted */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-teal-500/5 blur-[80px] rounded-full lg:w-96 lg:h-96 lg:blur-[140px]" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/5 blur-[80px] rounded-full lg:w-96 lg:h-96 lg:blur-[140px]" />
            </motion.div>
            
            {/* Mobile Floating Badges - Minimal Chips */}
            <div className="flex sm:hidden justify-center gap-2 mt-6">
              {[
                { v: "5K+", l: "Downloads" },
                { v: "100%", l: "Ad-Free" },
                { v: "250+", l: "Active" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md border border-white/5 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span className="text-white font-bold text-[10px]">{stat.v}</span>
                  <span className="text-xs text-gray-600 uppercase font-medium">{stat.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="container mx-auto px-4 py-24 md:py-48 relative overflow-hidden" id="why-beatzz">
        <div className="absolute inset-0 bg-gradient-to-b from-[#165f68]/5 via-transparent to-[#165f68]/5 opacity-30" />
        <ParticlesBackground variant="features" />
        
        <div className="relative z-10">
          <FadeInUp>
            <div className="text-center mb-16 md:mb-24">
              <span className="text-[#165f68] font-black tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 block italic opacity-80">The Comparison</span>
              <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-none">
                Why Choose <span className="gradient-text">Beatzz</span>?
              </h2>
              <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto font-light">
                See how Beatzz stacks up against the industry giants. We built this for the community, not for profit.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="max-w-4xl mx-auto">
              {/* Simplified Glass Table with Rounded Corners */}
              <div className="bg-black/40 backdrop-blur-3xl border border-white/20 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-6 md:p-8 text-xs font-bold uppercase tracking-widest text-[#165f68]">Feature</th>
                      <th className="p-6 md:p-8 text-center text-white">Beatzz</th>
                      <th className="p-6 md:p-8 text-center text-gray-500">Others</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { f: "Ad-Free Experience", b: true, s: false },
                      { f: "Offline Downloads", b: true, s: false },
                      { f: "Background Play", b: true, s: false },
                      { f: "High Quality Audio", b: true, s: false },
                      { f: "Full Music Library", b: true, s: true },
                      { f: "Monthly Price", b: "FREE", s: "$10.99" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="p-6 md:p-8 text-sm md:text-base font-medium text-gray-300">{row.f}</td>
                        <td className="p-6 md:p-8 text-center">
                          {row.b === true ? (
                            <div className="flex justify-center">
                              <svg className="w-6 h-6 text-[#165f68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          ) : (
                            <span className="text-white font-bold">{row.b}</span>
                          )}
                        </td>
                        <td className="p-6 md:p-8 text-center text-gray-600">
                          {row.s === true ? (
                            <div className="flex justify-center">
                               <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          ) : row.s === false ? (
                            <div className="flex justify-center">
                              <svg className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </div>
                          ) : (
                            <span className="font-medium">{row.s}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm italic font-light">Supported by community donations. No corporate strings attached.</p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>


      {/* Mockups Section */}
      <MockupSection />

      {/* Community Section */}
      <section className="container mx-auto px-2 sm:px-4 py-16 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-blue-500/10 opacity-30" />
        <ParticlesBackground variant="community" />
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <FadeInLeft>
              <div className="text-left px-2">
                <span className="font-medium mb-4 inline-block px-4 py-1.5 bg-[#165f68]/10 rounded-full text-sm"
                style={{'background': 'linear-gradient(229deg,rgba(22, 95, 104, .2) 18%, rgba(30, 100, 109, .2) 88%)', color: '#165f68'}}>Join Our Community</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 mt-4">
                  Get Support & Updates
                </h2>
                <p className="text-base sm:text-lg text-gray-400 mb-8">
                  Join our Telegram community for instant support, latest updates, and discussions. We accept all suggestions and provide support for issues. Help us make Beatzz even better!
                </p>
                <a
                  href="https://t.me/BeatzzApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-3 rounded-lg font-medium text-base inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
                  style={{'background': 'linear-gradient(229deg,rgba(22, 95, 104, 1) 18%, rgba(30, 100, 109, 1) 88%)'}}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
                  </svg>
                  Join Telegram Community
                </a>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="bg-[#1e2732] rounded-2xl overflow-hidden border border-white/10 mx-2" style={{borderColor: '#165f68', borderWidth: '3px'}}>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <img src="/logo.png" alt="Beatzz Logo" className="w-10 h-10 object-cover"  />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Beatzz</h3>
                      <p className="text-gray-400 text-sm">@BeatzzApp</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-[#2a2a2a]/50 rounded-lg p-4">
                      <p className="text-base">🎉 New version available with improved performance!</p>
                      <p className="text-gray-500 text-sm mt-2">Today 02:25 AM</p>
                    </div>
                    <div className="bg-[#2a2a2a]/50 rounded-lg p-4">
                      <p className="text-base">Thanks for 5000+ downloads! More features coming soon.</p>
                      <p className="text-gray-500 text-sm mt-2">Yesterday 08:00 PM</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-gray-500 text-sm">
                    <span>5,000+ users</span>
                    <span>250+ online</span>
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-2 sm:px-4 py-16 md:py-32 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-30" />
        <ParticlesBackground />
        <div className="relative z-10">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 gradient-text px-2">
              Ready to Experience Better Music?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto px-2">
              Join thousands of users enjoying ad-free music streaming with Beatzz
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-2">
              <Link
                to="/download"
                className="gradient-button px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl inline-flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <ArrowDownTrayIcon className="h-6 w-6 sm:h-7 sm:w-7" />
                Download Now
              </Link>
              <Link
                to="/download#versions"
                className="bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl inline-flex items-center gap-3 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
              >
                View Updates
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
};


export default Home; 