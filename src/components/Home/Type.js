import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          ".NET C# Enthusiast",
          "AI and Machine Learning Lover 📊",
          "AWS AI and Machine Learning scholar 22' and 23'",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;
