"use client";
import React, { useState, useTransition } from "react";
import { TypeAnimation } from "react-type-animation";
import TabButton from "./TabButton";
import TAB_DATA from "./TabData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref, inView } = useInView({
    triggerOnce: false, // This ensures the animation triggers only once
    threshold: 0.1, // 0.1 means 10% of the element is visible
  });

  const animationImage = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 1, opacity: 1 },
  };

  const animationText = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 1, opacity: 1 },
  };

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const onHandleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="mt-10 pt-10">
      <div className="py-8">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 via-gray-50 to-teal-300">
          About Me
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          ref={ref}
          initial={inView ? "visible" : "hidden"}
          animate={inView ? "visible" : "hidden"}
          variants={animationImage}
          transition={{ duration: 1 }}
          className="col-span-5 mt-4"
        >
          <img
            src="/images/about-image.png"
            alt="hero-image"
            className="abc "
            width={400}
            height={400}
          />
        </motion.div>

        <motion.div
          ref={ref}
          initial={inView ? "visible" : "hidden"}
          animate={inView ? "visible" : "hidden"}
          variants={animationText}
          transition={{ duration: 0.5 }}
          className="col-span-7 px-10 sm:px-2 place-self-center sm:text-left"
        >
          <p className=" mt-5 text-justify text-slate-400 text-lg lg:text-xl mb-5">
            I’m a skilled Full-Stack Developer and a talented Content Writer.
            With expertise in both fields, I bring a unique blend of technical
            proficiency and creative flair. My passion lies in crafting
            compelling stories and writing efficient code. As a versatile
            professional, I thrive on challenges and believe in the power of
            innovation to solve real-world problems. My enthusiasm for
            technology is matched only by my dedication to delivering
            exceptional results.
          </p>
          <div className="flex justify-left">
            <div className="flex items-center sm:gap-5">
              <TabButton
                selectTab={() => onHandleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>

              <TabButton
                selectTab={() => onHandleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>

              <TabButton
                selectTab={() => onHandleTabChange("certifications")}
                active={tab === "certifications"}
              >
                {" "}
                Certifications{" "}
              </TabButton>
            </div>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
