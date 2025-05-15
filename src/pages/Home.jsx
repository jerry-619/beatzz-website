import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowDownTrayIcon, BookOpenIcon, MusicalNoteIcon, CloudArrowDownIcon, BoltIcon, UserGroupIcon, SparklesIcon, ShieldCheckIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { FadeInUp, FadeInLeft, FadeInRight, ScaleIn } from '../components/ScrollAnimation';
import ParticlesBackground from '../components/ParticlesBackground';
import '../styles/main.css';

const BackgroundEffects = () => {
  const generateRandomPosition = () => {
    const centerX = 50;
    const centerY = 50;
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 30 + 20; // 20-50% from center
    
    return {
      left: `${centerX + Math.cos(angle) * distance}%`,
      top: `${centerY + Math.sin(angle) * distance}%`,
    };
  };

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div className="illusion-container">
          {[...Array(5)].map((_, i) => (
            <div key={`circle-${i}`} className="illusion-circle" style={{ animationDelay: `${i * 0.5}s` }} />
          ))}
        </div>
        <div className="illusion-overlay" />
      </div>
      <div className="notes-container">
        {[...Array(20)].map((_, i) => {
          const position = generateRandomPosition();
          return (
            <div
              key={`note-${i}`}
              className="absolute animate-float"
              style={{
                ...position,
                animationDelay: `${(i * 0.4)}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: 0
              }}
            >
              <MusicalNoteIcon className="h-8 w-8 text-[#165f68] opacity-60" />
            </div>
          );
        })}
      </div>
    </>
  );
};

const MockupSection = () => {
  const [selectedImage, setSelectedImage] = useState('/src/assets/mockups/home.png');
  
  const mockups = [
    { src: '/src/assets/mockups/home.png', title: 'Home' },
    { src: '/src/assets/mockups/library.png', title: 'Library' },
    { src: '/src/assets/mockups/player.png', title: 'Player' },
    { src: '/src/assets/mockups/playlist.png', title: 'Playlist' },
    { src: '/src/assets/mockups/search.png', title: 'Search' }
  ];

  return (
    <section className="py-20 md:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <FadeInUp>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 gradient-text">
            Beautiful Interface
          </h2>
          <p className="text-xl text-gray-300 text-center mb-20 max-w-3xl mx-auto">
            Experience our sleek and intuitive design across all screens
          </p>
        </FadeInUp>
        
        <div className="max-w-4xl mx-auto">
          {/* Main Preview */}
          <FadeInUp delay={0.1}>
            <div className="mb-8 md:mb-12 transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src={selectedImage}
                alt="Screen Preview" 
                className="w-full h-auto rounded-3xl shadow-2xl mx-auto"
                style={{ maxWidth: '100%', width: '400px' }}
              />
            </div>
          </FadeInUp>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 px-2 md:px-4 max-w-3xl mx-auto">
            {mockups.map((mockup, index) => (
              <div 
                key={mockup.title}
                className="cursor-pointer hover:scale-105 transition-transform duration-300 relative"
                onClick={() => setSelectedImage(mockup.src)}
              >
                <img 
                  src={mockup.src}
                  alt={`${mockup.title} Screen`}
                  className={`w-full h-auto rounded-xl shadow-lg opacity-${selectedImage === mockup.src ? '100' : '70'} hover:opacity-100 transition-opacity duration-300`}
                  style={{ maxWidth: '100%', width: '120px', margin: '0 auto' }}
                />
                {selectedImage === mockup.src && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-white text-lg">
                    ▼
                  </div>
                )}
                <p className="text-center mt-2 text-xs font-medium">{mockup.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 md:pt-32 pb-16 md:pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-50" />
        <BackgroundEffects />
        <div className="relative z-10">
          <FadeInUp>
            <h1 className="title-text gradient-text mb-8">
            The Best Music Experience
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Beatzz is a minimalistic and easy-to-use music streaming application like Spotify/YouTube Music, but free, and no ads forever.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.4}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link 
                to="/download" 
                className="gradient-button px-12 py-5 rounded-2xl font-bold text-xl flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <ArrowDownTrayIcon className="h-7 w-7" />
                Download
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-blue-500/10 opacity-30" />
        <ParticlesBackground variant="features" />
        <div className="relative z-10">
          <FadeInUp>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 gradient-text">
              Why Choose Beatzz?
            </h2>
            <p className="text-xl text-gray-300 text-center mb-20 max-w-3xl mx-auto">
              Experience music streaming like never before with our powerful features
            </p>
          </FadeInUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            <ScaleIn delay={0.1}>
              <FeatureCard
                icon={<SparklesIcon className="h-10 w-10" />}
                title="Intuitive UI"
                description="Minimalistic, unique and intuitive user interface with a dark overall color scheme for a night-ready slick design"
              />
            </ScaleIn>
            <ScaleIn delay={0.2}>
              <FeatureCard
                icon={<CloudArrowDownIcon className="h-10 w-10" />}
                title="Massive Library"
                description="Access YouTube Music's massive song library with options to download videos as audio and create custom playlists"
              />
            </ScaleIn>
            <ScaleIn delay={0.3}>
              <FeatureCard
                icon={<ShieldCheckIcon className="h-10 w-10" />}
                title="Free Forever"
                description="Always free of charge, ad-free, and supported by optional donations. No hidden costs or subscriptions"
              />
            </ScaleIn>
            <ScaleIn delay={0.4}>
              <FeatureCard
                icon={<BoltIcon className="h-10 w-10" />}
                title="Customizable"
                description="Choose between Download, Stream, or Both modes for your perfect listening experience"
              />
            </ScaleIn>
            <ScaleIn delay={0.5}>
              <FeatureCard
                icon={<WrenchScrewdriverIcon className="h-10 w-10" />}
                title="Thoughtful UX"
                description="Well-organized categories for Songs, Albums, and Playlists ensuring an uncluttered experience"
              />
            </ScaleIn>
            <ScaleIn delay={0.6}>
              <FeatureCard
                icon={<MusicalNoteIcon className="h-10 w-10" />}
                title="Custom Playlists"
                description="Create and share unlimited custom playlists from your song library with just a click"
              />
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Mockups Section */}
      <MockupSection />

      {/* Community Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-blue-500/10 opacity-30" />
        <ParticlesBackground variant="community" />
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <FadeInLeft>
              <div className="text-left">
                <span className="font-medium mb-4 inline-block px-4 py-1.5 bg-[#165f68]/10 rounded-full text-sm"
                style={{'background': 'linear-gradient(229deg,rgba(22, 95, 104, .2) 18%, rgba(30, 100, 109, .2) 88%)', color: '#165f68'}}>Join Our Community</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
                  Get Support & Updates
                </h2>
                <p className="text-lg text-gray-400 mb-8">
                  Join our Telegram community for instant support, latest updates, and discussions. We accept all suggestions and provide support for issues. Help us make Beatzz even better!
                </p>
                <a
                  href="https://t.me/BeatzzApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" px-8 py-3 rounded-lg font-medium text-base inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
                   style={{'background': 'linear-gradient(229deg,rgba(22, 95, 104, 1) 18%, rgba(30, 100, 109, 1) 88%)'}}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
                  </svg>
                  Join Telegram Community
                </a>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="bg-[#1e2732] rounded-2xl overflow-hidden border border-white/10" style={{borderColor: '#165f68', borderWidth: '3px'}}>
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
      <section className="container mx-auto px-4 py-20 md:py-32 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-30" />
        <ParticlesBackground />
        <div className="relative z-10">
          <FadeInUp>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
              Ready to Experience Better Music?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join thousands of users enjoying ad-free music streaming with Beatzz
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/download"
                className="gradient-button px-12 py-5 rounded-2xl font-bold text-xl inline-flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <ArrowDownTrayIcon className="h-7 w-7" />
                Download Now
              </Link>
              <Link
                to="/download#versions"
                className="bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 px-12 py-5 rounded-2xl font-bold text-xl inline-flex items-center gap-3 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
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

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 border border-white/10 group">
      <div className="gradient-icon w-16 h-16 mb-6">
        <div className="gradient-icon-inner">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
    </div>
  );
};

export default Home; 