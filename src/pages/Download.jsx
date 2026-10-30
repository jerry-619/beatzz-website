import { useState, useEffect } from 'react';
import { ArrowDownTrayIcon, InformationCircleIcon, CheckCircleIcon, ClockIcon, MusicalNoteIcon, SparklesIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { FadeInUp, FadeInLeft, ScaleIn } from '../components/ScrollAnimation';
import ParticlesBackground from '../components/ParticlesBackground';
import '../styles/main.css';
import { motion } from 'framer-motion';

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

  const getNotesCount = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 8 : 15;
    }
    return 8;
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
            <motion.div
              key={`note-${i}`}
              className="absolute particle-note"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.7, 0],
                y: [0, -100],
                x: [0, (Math.random() - 0.5) * 50]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear"
              }}
              style={{
                ...position,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              <MusicalNoteIcon className="h-4 w-4 md:h-6 md:w-6 text-[#165f68] opacity-70" />
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

const Download = () => {
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const parseChangelog = (body) => {
    if (!body) return [];
    const whatsChangedIndex = body.indexOf("What's Changed:");
    if (whatsChangedIndex === -1) return [];
    
    const contentAfterWhatsChanged = body.slice(whatsChangedIndex + "What's Changed:".length);
    const features = [];
    const lines = contentAfterWhatsChanged.split('\n');
    
    lines.forEach(line => {
      const trimmedLine = line.trim();
      if (!trimmedLine || trimmedLine === "What's Changed:") return;
      if (trimmedLine.startsWith('####')) {
        const feature = trimmedLine.substring(4).trim();
        if (feature) features.push(feature);
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
        
        const formattedVersions = data.map(release => {
          const apkAsset = release.assets.find(asset => asset.name.endsWith('.apk')) || release.assets[0];
          return {
            id: release.id.toString(),
            version: release.tag_name,
            name: release.name || release.tag_name,
            date: new Date(release.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            features: parseChangelog(release.body),
            downloadUrl: apkAsset?.browser_download_url || release.zipball_url,
            size: apkAsset?.size,
            downloadCount: apkAsset?.download_count || 0
          };
        });

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
  const totalDownloads = versions.reduce((sum, v) => sum + (v.downloadCount || 0), 0);
  const formattedTotalDownloads = totalDownloads > 1000 ? `${(totalDownloads / 1000).toFixed(1)}K+` : totalDownloads;

  if (loading) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center relative overflow-hidden">
        <BackgroundEffects />
        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="relative">
            <div className="w-24 h-24 border-2 border-[#165f68]/10 border-t-[#165f68] rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <MusicalNoteIcon className="w-8 h-8 text-[#165f68] animate-pulse" />
            </div>
          </div>
          <span className="text-[#165f68] font-black tracking-widest uppercase text-xs animate-pulse">Checking for Updates...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen relative overflow-x-hidden pt-32 pb-24">
      <BackgroundEffects />
      <ParticlesBackground variant="features" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-5xl mx-auto">
          <FadeInUp>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full bg-[#165f68]/10 border border-[#165f68]/20">
              <SparklesIcon className="h-4 w-4 text-[#165f68]" />
              <span className="text-[#165f68] font-black tracking-[0.2em] uppercase text-[10px] italic">Official Releases</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-none">
              Get Beatzz <span className="gradient-text">Latest</span>
            </h1>
            <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-10">
              Step into the future of music streaming. Premium features, zero cost, and an experience built for you.
            </p>
            
            {/* Hero Stats */}
            <div className="flex justify-center gap-8 opacity-50 mb-12">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-white">{formattedTotalDownloads}k</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">Downloads</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-white">{latestVersion?.version}</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">Latest Build</span>
              </div>
            </div>

            {/* Quick Action Download Section */}
            {latestVersion && (
              <div className="flex justify-center">
                <a
                  href={latestVersion.downloadUrl}
                  className="gradient-button neon-accent px-8 py-4 rounded-xl font-black text-lg flex items-center gap-3 transition-transform hover:scale-105 active:scale-95"
                  rel="noopener noreferrer"
                >
                  <ArrowDownTrayIcon className="h-6 w-6" />
                  DOWNLOAD NOW
                </a>
              </div>
            )}
          </FadeInUp>
        </div>

        {/* Latest Version Card */}
        {latestVersion && (
          <FadeInUp delay={0.2}>
            <div id="latest-version" className="glass-card-premium p-6 md:p-12 mb-24 relative group overflow-hidden border-[#165f68]/20 shadow-[0_0_80px_rgba(22,95,104,0.15)]">
              {/* Animated background accent */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#165f68]/5 blur-[120px] -z-10 rounded-full translate-x-1/3 -translate-y-1/3" />
              
              <div className="flex flex-col lg:flex-row justify-between items-start gap-12 relative z-10">
                <div className="flex-1 space-y-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#165f68]/10 text-[#165f68] text-[9px] font-black uppercase tracking-widest border border-[#165f68]/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#165f68] animate-pulse" />
                      Latest Release
                    </div>
                    <span className="text-gray-500 font-bold text-[10px] tracking-widest uppercase flex items-center gap-2">
                       <ClockIcon className="h-3 w-3" />
                       {latestVersion.date}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-3 uppercase">{latestVersion.name}</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#165f68] to-transparent rounded-full" />
                  </div>
                  
                  <div className="pt-6 space-y-6">
                    <h3 className="text-sm font-black uppercase tracking-widest flex items-center gap-3 text-white/90">
                      <div className="p-1.5 rounded-lg bg-[#165f68]/10">
                        <InformationCircleIcon className="h-5 w-5 text-[#165f68]" />
                      </div>
                      What's New
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {latestVersion.features.length > 0 ? (
                        latestVersion.features.map((feature, index) => (
                          <div 
                            key={index}
                            className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#165f68]/30 transition-all duration-300"
                          >
                            <CheckCircleIcon className="h-4 w-4 text-[#165f68] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-400 font-light leading-snug text-sm">{feature}</span>
                          </div>
                        ))
                      ) : (
                        <div className="col-span-2 p-6 rounded-xl border border-dashed border-white/10 text-center">
                           <p className="text-gray-500 font-light italic text-sm">General performance stability and security enhancements.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-80 flex flex-col items-center gap-6 lg:sticky lg:top-24">
                  <div className="w-full glass-card-premium p-6 border-white/10 bg-white/5 flex flex-col items-center">
                    <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#165f68] to-[#0a2e33] flex items-center justify-center shadow-[0_15px_30px_rgba(22,95,104,0.3)]">
                      <ArrowDownTrayIcon className="h-8 w-8 text-white" />
                    </div>
                    
                    <a
                      href={latestVersion.downloadUrl}
                      className="gradient-button neon-accent px-8 py-4 rounded-xl font-black text-lg flex items-center gap-4 group w-full justify-center"
                      rel="noopener noreferrer"
                    >
                      DOWNLOAD
                    </a>
                    
                    <div className="mt-6 pt-6 border-t border-white/5 w-full flex flex-col gap-3">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="text-gray-500 font-bold uppercase tracking-widest">Platform</span>
                        <span className="text-white font-black italic">Android</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="text-gray-500 font-bold uppercase tracking-widest">Downloads</span>
                        <span className="text-white font-black italic">{latestVersion.downloadCount}</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="text-gray-500 font-bold uppercase tracking-widest">File size</span>
                        <span className="text-white font-black italic">
                          {latestVersion.size ? `${(latestVersion.size / (1024 * 1024)).toFixed(1)} MB` : '35.2 MB'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        )}

        {/* Previous Releases Grid */}
        {previousVersions.length > 0 && (
          <div className="space-y-16">
            <FadeInUp>
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 px-4">
                <div>
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                    Release <br />
                    <span className="gradient-text">History</span>
                  </h2>
                </div>
                <p className="text-gray-500 font-light max-w-sm text-lg italic">
                  Looking for an older version? Browse our archive of stable releases.
                </p>
              </div>
            </FadeInUp>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {previousVersions.map((version, idx) => (
                <ScaleIn delay={idx * 0.1} key={version.id}>
                  <div className="glass-card-premium p-8 group hover:scale-[1.02] hover:bg-white/[0.04] transition-all duration-500 border-white/5 flex flex-col h-full border-b-[#165f68]/30 border-b-2">
                    <div className="flex justify-between items-start mb-10">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-[#165f68] mb-1">Stable Release</div>
                        <h3 className="text-3xl font-black tracking-tight uppercase group-hover:text-[#165f68] transition-colors">{version.version}</h3>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-1">{version.date}</p>
                      </div>
                      <a
                        href={version.downloadUrl}
                        rel="noopener noreferrer"
                        className="p-4 bg-white/5 hover:bg-[#165f68] border border-white/10 rounded-2xl transition-all duration-300 group/btn"
                        title="Download Build"
                      >
                        <ArrowDownTrayIcon className="h-6 w-6 group-hover/btn:scale-110 transition-transform" />
                      </a>
                    </div>
                    
                    <div className="space-y-6 flex-grow">
                      <div className="flex items-center gap-2">
                         <div className="h-px flex-grow bg-white/10" />
                         <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Highlights</span>
                         <div className="h-px flex-grow bg-white/10" />
                      </div>
                      <ul className="space-y-4">
                        {(version.features.length > 0 ? version.features.slice(0, 3) : ["Optimized core engine", "UI stability improvements", "Database migrations"]).map((feature, i) => (
                          <li key={i} className="text-sm text-gray-400 font-light flex items-start gap-3">
                            <div className="mt-1.5 w-1 h-1 rounded-full bg-[#165f68]" />
                            <span className="line-clamp-2">{feature}</span>
                          </li>
                        ))}
                      </ul>
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
