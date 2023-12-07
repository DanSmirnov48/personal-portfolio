"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science, </span> I&apos;m pursuing my
        passion for web development. I&apos;m actively learning new things on the web and completing some personal{" "}
        <span className="font-medium">full-stack projects</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">like</span>{" "}
        figuring things out, see how to make something work and find a solution to a problem. My favourite 
        tech is: {" "} <span className="font-medium">TypeScript, React, Next, Node.</span>{" "}
        I also have experience with C# (.NET) and Java. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software developer.
      </p>

      <p>
        <span className="italic">In addition to coding, </span>I love hanging out with my beloved dog ❤,
        cycling, and mountain biking. <br />I would also like to get into{" "}
        <span className="font-medium">photography 📸</span> in the future. <br />
        Please reach out to me if you want to talk.
      </p>
    </motion.section>
  );
}