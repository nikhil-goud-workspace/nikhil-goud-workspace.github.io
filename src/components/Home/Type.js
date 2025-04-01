import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer at Deleg8",
          "Master's Graduate in Computer Science from Illinois Institute of Technology",
          "Ex Software Engineer Intern at BMO",
          "Ex Software Engineer II at NCR Voyix",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        delay: 100
      }}
    />
  );
}

export default Type;
