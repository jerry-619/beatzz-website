import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

const ParticlesBackground = ({ variant = "default" }) => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const getConfig = (variant) => {
    const baseConfig = {
      fpsLimit: 120,
      particles: {
        color: {
          value: "#165f68"
        },
        move: {
          enable: true,
          direction: "none",
          random: false,
          speed: 2,
          straight: false,
          outModes: {
            default: "bounce"
          },
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 80
        },
        opacity: {
          value: 0.5,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.2,
            sync: false
          }
        },
        shape: {
          type: ["circle"]
        },
        size: {
          value: { min: 1, max: 3 },
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.5,
            sync: false
          }
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse"
          }
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4
          }
        }
      }
    };

    const configs = {
      default: baseConfig,
      features: {
        ...baseConfig,
        particles: {
          ...baseConfig.particles,
          number: { value: 30 },
          shape: {
            type: ["circle"],
            options: {
              circle: {
                particles: {
                  oscillate: {
                    enable: true,
                    frequency: 2,
                    amplitude: 4
                  }
                }
              }
            }
          },
          move: {
            ...baseConfig.particles.move,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce"
            }
          },
          size: {
            value: { min: 2, max: 6 },
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 1,
              sync: false
            }
          }
        }
      },
      community: {
        ...baseConfig,
        particles: {
          ...baseConfig.particles,
          number: { value: 60 },
          move: {
            ...baseConfig.particles.move,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out"
            }
          },
          shape: {
            type: ["circle"],
            options: {
              circle: {
                particles: {
                  wave: {
                    enable: true,
                    frequency: 5,
                    amplitude: 10
                  }
                }
              }
            }
          },
          size: {
            value: { min: 1, max: 4 },
            animation: {
              enable: true,
              speed: 4,
              minimumValue: 0.5,
              sync: true
            }
          },
          opacity: {
            value: 0.6,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1,
              sync: false
            }
          }
        }
      }
    };

    return configs[variant] || baseConfig;
  };

  return (
    <div className="relative">
      <Particles
        className="absolute inset-0"
        init={particlesInit}
        options={getConfig(variant)}
      />
      {/* Equalizer Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="equalizer-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="equalizer-bar"
              style={{
                animationDelay: `${i * 0.1}s`,
                left: `${i * 5}%`,
                backgroundColor: `rgba(22, 95, 104, ${0.3 + (i % 3) * 0.2})`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParticlesBackground; 