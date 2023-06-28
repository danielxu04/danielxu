"use client"

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine, Container } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function ParticleAnimation() {

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await container;
  }, []);

  return (
    <Particles className="fixed top-0 left-0 w-full h-full block -z-10" id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={{
    autoPlay: true,
    background: {
        color: {
          value: "rgba(0,0,0,0.5)",
        },
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
          attract: {
            distance: 200,
            duration: 0.4,
            easing: "ease-out-quad",
            factor: 1,
            maxSpeed: 50,
            speed: 1
          },
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
    }} />
  );
};