import { useState, useEffect } from 'react';
import { ArrowDownTrayIcon, InformationCircleIcon, CheckCircleIcon, ClockIcon, MusicalNoteIcon } from '@heroicons/react/24/outline';
import { FadeInUp, FadeInLeft, FadeInRight, ScaleIn } from '../components/ScrollAnimation';
import ParticlesBackground from '../components/ParticlesBackground';
import '../styles/main.css';

const Download = () => {
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const parseChangelog = (body) => {
    if (!body) return [];
    
    // Find the index of "What's Changed:"
    const whatsChangedIndex = body.indexOf("What's Changed:");
    if (whatsChangedIndex === -1) return [];
    
    // Get the content after "What's Changed:"
    const contentAfterWhatsChanged = body.slice(whatsChangedIndex + "What's Changed:".length);
    
    const features = [];
    const lines = contentAfterWhatsChanged.split('\n');
    
    lines.forEach(line => {
      const trimmedLine = line.trim();
      
      // Skip empty lines, headers, and section markers
      if (!trimmedLine || trimmedLine === "What's Changed:") {
        return;
      }
      
      // If line starts with #### (level 4 header), add it as a feature
      if (trimmedLine.startsWith('####')) {
        const feature = trimmedLine.substring(4).trim();
        if (feature) {
          features.push(feature);
        }
      }
    });
    
    return features.filter(f => f.length > 0);
  };

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/jerry-619/beatzz-website/releases');
        if (!response.ok) throw new Error('Failed to fetch releases');
        const data = await response.json();
        
        const formattedVersions = data.map(release => ({
          id: release.id.toString(),
          version: release.tag_name,
          name: release.name || release.tag_name,
          date: new Date(release.published_at).toLocaleDateString(),
          features: parseChangelog(release.body),
          downloadUrl: release.assets[0]?.browser_download_url || release.zipball_url
        }));

        setVersions(formattedVersions);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchReleases();
  }, []);

  const latestVersion = versions[0];
  const previousVersions = versions.slice(1);

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

  if (loading) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#165f68] mx-auto mb-4"></div>
          <p className="text-xl text-gray-300">Loading releases...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="text-red-500 text-xl mb-4">Error: {error}</div>
          <button 
            onClick={() => window.location.reload()} 
            className="gradient-button px-6 py-3 rounded-xl font-semibold"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen relative">
      <ParticlesBackground variant="features" />
      <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-50 rounded-3xl" />
          <BackgroundEffects />
          <div className="relative z-10 py-16">
            <FadeInUp>
              <button 
                onClick={() => {
                  document.getElementById('latest-version').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="gradient-icon w-24 h-24 mx-auto mb-10 cursor-pointer hover:scale-110 transition-transform duration-300"
                aria-label="Scroll to latest version"
              >
                <div className="gradient-icon-inner">
                  <ArrowDownTrayIcon className="h-12 w-12 text-white" />
                </div>
              </button>
              <h1 className="title-text gradient-text mb-8">
                Download Beatzz
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Get the latest version of Beatzz Music Player and experience music like never before
              </p>
            </FadeInUp>
          </div>
        </div>

        {/* Latest Version */}
        {latestVersion && (
          <FadeInUp delay={0.2}>
            <div id="latest-version" className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 mb-20 border border-white/10 relative overflow-hidden scroll-mt-32">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                  <div>
                    <span style={{'background': 'linear-gradient(229deg,rgba(22, 95, 104, .2) 18%, rgba(30, 100, 109, .2) 88%)', color: '#165f68'}} className=" px-6 py-2 rounded-full text-lg font-medium mb-6 inline-block">
                      Latest Release
                    </span>
                    <h2 className="text-4xl font-bold mb-4">{latestVersion.name}</h2>
                    <div className="flex items-center text-gray-400 text-lg">
                      <ClockIcon className="h-6 w-6 mr-3" />
                      <span>Released on {latestVersion.date}</span>
                    </div>
                  </div>
                  <a
                    href={latestVersion.downloadUrl}
                    className="gradient-button px-12 py-5 rounded-2xl font-bold text-xl flex items-center gap-3 mt-8 md:mt-0 w-full sm:w-auto justify-center"
                    rel="noopener noreferrer"
                  >
                    <ArrowDownTrayIcon className="h-7 w-7" />
                    Download Latest
                  </a>
                </div>
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <InformationCircleIcon className="h-8 w-8 " style={{'color': '#165f68'}}/>
                    What's New
                  </h3>
                  <ul className="space-y-4">
                    {latestVersion.features.length > 0 ? (
                      latestVersion.features.map((feature, index) => (
                        <FadeInLeft delay={index * 0.1} key={index}>
                          <li className="flex items-start gap-4">
                            <CheckCircleIcon className="h-7 w-7 text-green-400 flex-shrink-0 mt-1" />
                            <span className="text-gray-300 text-lg">{feature}</span>
                          </li>
                        </FadeInLeft>
                      ))
                    ) : (
                      <li className="text-gray-400 text-lg">
                        No changes listed for this version.
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </FadeInUp>
        )}

        {/* Previous Versions */}
        {previousVersions.length > 0 && (
          <div>
            <FadeInUp>
              <h2 className="text-3xl font-bold mb-10 gradient-text">
                Previous Versions
              </h2>
            </FadeInUp>
            <div className="space-y-8">
              {previousVersions.map((version, idx) => (
                <ScaleIn delay={idx * 0.1} key={version.id}>
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                        <div>
                          <h3 className="text-2xl font-bold mb-3">{version.name}</h3>
                          <div className="flex items-center text-gray-400 text-lg">
                            <ClockIcon className="h-5 w-5 mr-2" />
                            <span>Released on {version.date}</span>
                          </div>
                        </div>
                        <a
                          href={version.downloadUrl}
                          rel="noopener noreferrer"
                          className="bg-white/10 hover:bg-white/20 border border-white/10 px-8 py-3 rounded-xl font-semibold text-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 mt-6 sm:mt-0 w-full sm:w-auto justify-center"
                        >
                          <ArrowDownTrayIcon className="h-6 w-6" />
                          Download
                        </a>
                      </div>
                      <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6">
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <InformationCircleIcon className="h-6 w-6" style={{'color': '#165f68'}}/>
                          Changes in this version:
                        </h4>
                        <ul className="space-y-3">
                          {version.features.length > 0 ? (
                            version.features.map((feature, featureIndex) => (
                              <FadeInLeft delay={featureIndex * 0.1} key={featureIndex}>
                                <li className="flex items-start gap-3">
                                  <CheckCircleIcon className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                                  <span className="text-gray-400 text-lg">{feature}</span>
                                </li>
                              </FadeInLeft>
                            ))
                          ) : (
                            <li className="text-gray-400 text-lg">
                              No changes listed for this version.
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Download; 