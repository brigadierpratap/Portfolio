import React from "react";
import Typewriter from "typewriter-effect";
export default function TypewriterEffect() {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            "An Undergrad Student",
            "A Web Developer.",
            "A Javaphile.",
            "A Linux Enthusiast.",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </>
  );
}
