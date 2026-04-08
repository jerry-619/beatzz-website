import { Link } from 'react-router-dom';
import { FadeInUp } from '../components/ScrollAnimation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import ParticlesBackground from '../components/ParticlesBackground';

const NotFound = () => {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden flex items-center justify-center">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <FadeInUp>
            <div className="relative inline-block mb-12">
              <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter uppercase leading-none opacity-10 select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight gradient-text uppercase">
                  LOST IN <br /> RHYTHM
                </h2>
              </div>
            </div>
            
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-md mx-auto font-light">
              The frequency you're looking for doesn't exist. Let's get you back to the main station.
            </p>
            
            <Link
              to="/"
              className="gradient-button neon-accent px-10 py-5 rounded-2xl font-black text-lg inline-flex items-center gap-3 hover:scale-105 transition-all duration-500 group"
            >
              <ArrowLeftIcon className="h-6 w-6 transition-transform group-hover:-translate-x-1" />
              BACK TO BEATZZ
            </Link>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
};

export default NotFound;