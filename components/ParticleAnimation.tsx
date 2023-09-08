"use client"

import { useCallback, useContext } from "react";
import { LightModeContext } from '../contexts/LightMode';
import Particles from "react-tsparticles";
import type { Engine, Container } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function ParticleAnimation() {

  const lightModeState = useContext(LightModeContext);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await container;
  }, []);

  return (
    <>
      { (lightModeState.isLightMode === 'light') &&
      (<Particles className="fixed top-0 left-0 w-full h-full block -z-10" id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={{
        autoPlay: true,
        background: {
          color: {
            value: "#000000",
          },
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
          opacity: 1
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
              parallax: {
                  enable: true,
                  force: 60,
                  smooth: 10
              }
            },
            resize: true,
          },
          modes: {
            connect: {
              distance: 60,
              links: {
                  opacity: 0.5
              },
              radius: 60
            },
            grab: {
              distance: 200,
              links: {
                  blink: false,
                  consent: false,
                  opacity: 1
              }
            },
          },
        },
        particles: {
          color: {
            value: "#761491",
          },
          links: {
            color: "#edadff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 0.7,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 400,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "square",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }} /> )}
      { (lightModeState.isLightMode === 'dark') &&
      (<Particles className="fixed top-0 left-0 w-full h-full block -z-10" id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={{
        autoPlay: true,
        background: {
          color: {
            value: "#fcfdf3",
          },
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
          opacity: 1
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: {
                  enable: false,
                  force: 20,
                  smooth: 10
              }
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 80,
              duration: 0.5,
              speed: 1,
              easing: "ease-out-quad",
              maxSpeed: 50,
            },
          },
        },
        particles: {
          color: {
            value: ["#761491", "#40128B", "#9336B4", "#DD58D6", "#5C469C"],
          },
          links: {
            color: "#db5bff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 0.5,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 400,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 4 },
          },
        },
        detectRetina: true,
      }} /> )}
    </>
  
  );
};