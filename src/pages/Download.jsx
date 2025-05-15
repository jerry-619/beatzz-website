import { useState } from 'react';
import { ArrowDownTrayIcon, InformationCircleIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';
import { FadeInUp, FadeInLeft, FadeInRight, ScaleIn } from '../components/ScrollAnimation';
import '../styles/main.css';

const Download = () => {
  // Mock data - in a real app, you'd fetch this from GitHub API or a backend
  const [versions] = useState([
    {
      id: "latest",
      version: "v1.2.0",
      date: "2024-03-15",
      tag: "Latest Release",
      features: [
        "Sleek new UI design for improved navigation",
        "Enhanced audio engine for crystal-clear sound",
        "Fixed several critical bugs for a smoother experience",
        "Optimized for lower battery consumption"
      ],
      downloadUrl: "https://github.com/beatzz/releases/v1.2.0"
    },
    {
      id: "1.1.0",
      version: "v1.1.0",
      date: "2024-02-28",
      tag: "Previous Version",
      features: [
        "Added support for creating and managing custom playlists",
        "Improved overall application performance and startup time",
        "Minor bug fixes and stability enhancements"
      ],
      downloadUrl: "https://github.com/beatzz/releases/v1.1.0"
    },
    {
      id: "1.0.0",
      version: "v1.0.0",
      date: "2024-01-20",
      tag: "Previous Version",
      features: [
        "Initial release of Beatzz Music Player",
        "Core music playback functionalities",
        "Basic library management"
      ],
      downloadUrl: "https://github.com/beatzz/releases/v1.0.0"
    }
  ]);

  const latestVersion = versions[0];
  const previousVersions = versions.slice(1);

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 pt-32 pb-24">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-50 rounded-3xl" />
          <div className="relative z-10 py-16">
            <FadeInUp>
              <div className="gradient-icon w-24 h-24 mx-auto mb-10">
                <div className="gradient-icon-inner">
                  <ArrowDownTrayIcon className="h-12 w-12 text-white" />
                </div>
              </div>
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
        <FadeInUp delay={0.2}>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 mb-20 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                <div>
                  <span className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 px-6 py-2 rounded-full text-lg font-medium mb-6 inline-block">
                    {latestVersion.tag}
                  </span>
                  <h2 className="text-4xl font-bold mb-4">{latestVersion.version}</h2>
                  <div className="flex items-center text-gray-400 text-lg">
                    <ClockIcon className="h-6 w-6 mr-3" />
                    <span>Released on {latestVersion.date}</span>
                  </div>
                </div>
                <a
                  href={latestVersion.downloadUrl}
                  className="gradient-button px-12 py-5 rounded-2xl font-bold text-xl flex items-center gap-3 mt-8 md:mt-0 w-full sm:w-auto justify-center"
                >
                  <ArrowDownTrayIcon className="h-7 w-7" />
                  Download Latest
                </a>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <InformationCircleIcon className="h-8 w-8 text-blue-400" />
                  What's New
                </h3>
                <ul className="space-y-4">
                  {latestVersion.features.map((feature, index) => (
                    <FadeInLeft delay={index * 0.1} key={index}>
                      <li className="flex items-start gap-4">
                        <CheckCircleIcon className="h-7 w-7 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300 text-lg">{feature}</span>
                      </li>
                    </FadeInLeft>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Previous Versions */}
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
                        <h3 className="text-2xl font-bold mb-3">{version.version}</h3>
                        <div className="flex items-center text-gray-400 text-lg">
                          <ClockIcon className="h-5 w-5 mr-2" />
                          <span>Released on {version.date}</span>
                        </div>
                      </div>
                      <a
                        href={version.downloadUrl}
                        className="bg-white/10 hover:bg-white/20 border border-white/10 px-8 py-3 rounded-xl font-semibold text-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 mt-6 sm:mt-0 w-full sm:w-auto justify-center"
                      >
                        <ArrowDownTrayIcon className="h-6 w-6" />
                        Download
                      </a>
                    </div>
                    <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <InformationCircleIcon className="h-6 w-6 text-blue-400" />
                        Changes in this version:
                      </h4>
                      <ul className="space-y-3">
                        {version.features.map((feature, featureIndex) => (
                          <FadeInLeft delay={featureIndex * 0.1} key={featureIndex}>
                            <li className="flex items-start gap-3">
                              <CheckCircleIcon className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                              <span className="text-gray-400 text-lg">{feature}</span>
                            </li>
                          </FadeInLeft>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download; 