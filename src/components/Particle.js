import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params= {{
          fpsLimit: 60,
          background: {
            color: "#0b032d"
          },
          backgroundMode: {
            enable: true
          },
          particles: {
            color: {
              value: ["#f67e7d", "#843b62", "#621940"]
            },
            links: {
              color: "#ffb997",
              enable: true
            },
            move: {
              enable: true,
              speed: 6
            },
            size: {
              value: 5,
              random: {
                enable: true,
                minimumValue: 1
              },
              animation: {
                enable: true,
                speed: 2.5,
                minimumValue: 1
              }
            },
            opacity: {
              value: 0.8,
              random: {
                enable: true,
                minimumValue: 0.4
              }
            }
      }}
    }
    />
  );
}

export default Particle;
