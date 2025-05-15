import { FadeInUp } from '../components/ScrollAnimation';
import ParticlesBackground from '../components/ParticlesBackground';

const Terms = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-50 rounded-3xl" />
          <div className="relative z-10 py-12">
            <FadeInUp>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Please read these terms carefully before using Beatzz.
              </p>
            </FadeInUp>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <FadeInUp delay={0.1}>
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  By downloading and using Beatzz, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not use our application.
                </p>
              </section>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Use License</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Beatzz is free software that you can use for personal, non-commercial purposes. This license includes:
                </p>
                <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
                  <li>Downloading and playing music for personal use</li>
                  <li>Creating and managing personal playlists</li>
                  <li>Using all available features within the application</li>
                </ul>
              </section>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Restrictions</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You are not allowed to:
                </p>
                <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
                  <li>Modify or distribute the application for commercial purposes</li>
                  <li>Remove any copyright or proprietary notices</li>
                  <li>Use the application for any illegal activities</li>
                  <li>Redistribute downloaded content without proper authorization</li>
                </ul>
              </section>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
                <p className="text-gray-300 leading-relaxed">
                  Beatzz is provided "as is" without any warranties. We are not responsible for any content accessed through the application. Users are responsible for ensuring they have the right to download and play music through our application.
                </p>
              </section>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users of any changes by updating the date at the bottom of this page. Continued use of Beatzz after changes means you accept the new terms.
                </p>
              </section>
            </FadeInUp>

            <FadeInUp delay={0.6}>
              <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Contact</h2>
                <p className="text-gray-300 leading-relaxed">
                  For any questions about these Terms of Service, please reach out through our <a href="https://t.me/beatzzApp" target="_blank" rel="noopener noreferrer" className="text-[#0088cc] hover:text-[#0099dd] transition-colors duration-300">Telegram community</a>.
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

export default Terms; 