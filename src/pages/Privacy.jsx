import { FadeInUp } from '../components/ScrollAnimation';
import ParticlesBackground from '../components/ParticlesBackground';

const Privacy = () => {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-x-hidden">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 pt-32 md:pt-48 pb-24 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <FadeInUp>
            <span className="text-[#165f68] font-black tracking-[0.3em] uppercase text-xs mb-6 block italic">Legal Information</span>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
              Privacy <br />
              <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light italic">
              "Your privacy is our priority. We believe in complete transparency and data ownership."
            </p>
          </FadeInUp>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              title: "Information Collection",
              content: "Beatzz does not collect any personal information from its users. The application functions entirely offline and does not require any user registration or data submission. We don't track your listening habits or personal identity."
            },
            {
              title: "Data Storage & Security",
              content: "All music files and playlists are stored locally on your device. We do not upload or store any of your data on our servers. Your music library remains private and under your control. We implement standard local encryption for play history."
            },
            {
              title: "Third-Party Services",
              content: "When you use our application to stream or download music, you may interact with third-party services like YouTube. These services have their own privacy policies, and we recommend reviewing them. We are not responsible for their data practices."
            },
            {
              title: "Contact & Community",
              content: "If you have any questions about our privacy policy, please contact us through our Telegram community. We are committed to maintaining a safe and private environment for our users."
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
            <p>Last updated: April 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
 