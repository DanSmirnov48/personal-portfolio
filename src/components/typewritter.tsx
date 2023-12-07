"use client";
import React from "react";
import Typewriter from "typewriter-effect";

type Props = {};

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Full-Stack Software Developer")
          .pauseFor(2000)
          .deleteAll()
          .typeString("Web Developer Enthusiast")
          .pauseFor(1000)
          .start();
      }}
    />
  );
};

export default TypewriterTitle;
