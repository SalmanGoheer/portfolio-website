"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section id="home" className="mt-20 pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 100, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="mb-5 font-extrabold text-4xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400">
              Hello, I am <br />{" "}
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Salman Akhtar",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Ui/Ux Designer",
                1000,
                "Content Creator",
                1000,
              ]}
              wrapper="span"
              speed={20}
              style={{
                fontSize: "1em",
                display: "inline-block",
                lineHeight: "1.5",
              }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-slate-400 text-lg lg:text-xl mb-5">
            Empowering Ideas and Crafting Digital Dreams with Code Magic.
          </p>
          <div className="mt-10">
            <button className="w-full h-full sm:w-fit px-1 bg-gradient-to-r from-purple-400 to-yellow-400 hover:bg-gradient-to-l sm:px-5 py-4 rounded-full m-2 font-bold text-gray-800 hover:text-white ">
              Hire Me
            </button>
            <button className="w-full h-full sm:w-fit px-1 bg-gradient-to-r from-purple-400 to-yellow-400 hover:bg-gradient-to-l sm:px-1 py-1 rounded-full m-2 font-bold text-gray-400 hover:text-white">
              <span className="block bg-gradient-to-l from-gray-700 via-gray-900 to-black rounded-full px-3 py-3 ">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 100, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4"
        >
          <div className="rounded-full bg-gradient-to-r from-gray-700 via-gray-900 to-black w-[250px] h-[250px] relative ">
            <img
              src="/images/hero-sec-dp.png"
              alt="hero-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
