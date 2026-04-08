import { FadeInUp } from '../components/ScrollAnimation';
import ParticlesBackground from '../components/ParticlesBackground';

const Terms = () => {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-x-hidden">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 pt-32 md:pt-48 pb-24 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <FadeInUp>
            <span className="text-[#165f68] font-black tracking-[0.3em] uppercase text-xs mb-6 block italic">User Agreement</span>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
              Terms of <br />
              <span className="gradient-text">Service</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light italic">
              "By using Beatzz, you join a community built on respect and musical freedom."
            </p>
          </FadeInUp>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              title: "Acceptance of Terms",
              content: "By downloading and using Beatzz, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not use our application. We reserve the right to restrict access to anyone violating these community standards."
            },
            {
              title: "Free Use License",
              content: "Beatzz is free software for personal, non-commercial use. You are granted a limited, non-exclusive license to use the app to manage your personal music library and discover new rhythms across supported platforms."
            },
            {
              title: "Proprietary Rights",
              content: "While we provide the tools to listen, we do not own the music streamed through third-party APIs. Users must respect all copyright laws and use the application responsibly for content they have the right to access."
            },
            {
              title: "Disclaimer & Liability",
              content: "The software is provided 'as is' without warranty. Beatzz is a tool for personal entertainment, and we are not liable for any data loss or misuse of the platform. Always maintain a backup of your local playlists."
            }
          ].map((section, idx) => (
            <FadeInUp key={idx} delay={idx * 0.1}>
              <section className="glass-card-premium p-8 md:p-12 hover:border-[#165f68]/30 transition-all duration-500">
                <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6 uppercase italic text-[#165f68]">
                  {section.title}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed font-light">
                  {section.content}
                </p>
              </section>
            </FadeInUp>
          ))}
          
          <div className="text-center mt-16 text-gray-500 text-sm font-black uppercase tracking-widest opacity-50">
            <p>Last updated: April 8, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
 