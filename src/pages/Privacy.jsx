import { FadeInUp } from '../components/ScrollAnimation';
import ParticlesBackground from '../components/ParticlesBackground';

const Privacy = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-50 rounded-3xl" />
          <div className="relative z-10 py-12">
            <FadeInUp>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Your privacy is important to us. This policy outlines how we handle your data.
              </p>
            </FadeInUp>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <FadeInUp delay={0.1}>
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Information Collection</h2>
                <p className="text-gray-300 leading-relaxed">
                  Beatzz does not collect any personal information from its users. The application functions entirely offline and does not require any user registration or data submission.
                </p>
              </section>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Data Storage</h2>
                <p className="text-gray-300 leading-relaxed">
                  All music files and playlists are stored locally on your device. We do not upload or store any of your data on our servers. Your music library remains private and under your control.
                </p>
              </section>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
                <p className="text-gray-300 leading-relaxed">
                  When you use our application to stream or download music, you may interact with third-party services like YouTube. These services have their own privacy policies, and we recommend reviewing them.
                </p>
              </section>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Updates & Changes</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this privacy policy from time to time. Any changes will be posted on this page. By continuing to use Beatzz, you accept the terms of this privacy policy.
                </p>
              </section>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about our privacy policy, please contact us through our <a href="https://t.me/beatzzApp" target="_blank" rel="noopener noreferrer" className="text-[#0088cc] hover:text-[#0099dd] transition-colors duration-300">Telegram community</a>.
                </p>
              </section>
            </FadeInUp>
          </div>
          <div className="text-center mt-12 text-gray-400 text-sm">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
      <ParticlesBackground />
    </div>
  );
};

export default Privacy; 