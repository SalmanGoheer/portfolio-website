"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';


const Services = () => {

  const { ref, inView } = useInView({
        triggerOnce: true, // This ensures the animation triggers only once

      });

      const animationText = {
        hidden: { y: 100, opacity: 0 },
    visible: { y: 1, opacity: 100 },
      };
  

     


  return (
    <section id="services" className="mt-10 pt-10">
      <div className="py-8 flex flex-col text-center w-full ">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 via-gray-50 to-teal-300">
          Services
        </h2>
      </div>

      <motion.div 
          ref={ref}
          initial={inView ? "visible" : "hidden"}
          animate={inView ? "visible" : "hidden"}
          variants={animationText}
          transition={{duration: 2 }}
      >
      <div className="mb-20 gap-8 items-center px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-3  lg:px-6 ">
        <img
          className="col-span-1"
          src="/images/frontend-pic.png"
          alt="dashboard image"
          width={300}
        />
        <div className="mt-4 md:mt-0 col-span-2">
          <h2 className="w-fit mb-4 text-4xl tracking-tight font-extrabold text-white">
            Frontend Development
          </h2>
          <p className="mb-6 font-light  md:text-lg text-gray-400">
            Experienced Frontend Developer passionate about crafting beautiful
            and intuitive user interfaces. Skilled in HTML, CSS, Bootstrap,
            Tailwind, JavaScript, and React.js, I collaborate effectively with
            designers and developers. With a keen eye for detail, I bring
            projects to life through effective communication and teamwork. Eager
            to tackle new challenges, I continuously learn and grow. If you need
            a talented Frontend Developer, I am the perfect choice.
          </p>
        </div>
      </div>

      <div className="mb-20   gap-8 items-center px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-3  lg:px-6 ">
        <img
          className="col-span-1 block sm:hidden"
          src="/images/backend-pic.png"
          alt="dashboard image"
          width={300}
        />
        <div className="mt-4 md:mt-0 col-span-2">
          <h2 className="w-fit mb-4 text-4xl tracking-tight font-extrabold text-white">
            Backend Development
          </h2>
          <p className="mb-6 font-light  md:text-lg text-gray-400">
            Experienced Backend Developer skilled in building scalable
            applications using Express.js and Django frameworks. Proficient in
            MongoDB and MySQL, I create efficient database designs. With strong
            problem-solving abilities, I enhance application performance and
            functionality. If you need a talented Backend Developer proficient
            in Node.js and Python, I am the ideal choice.
          </p>
        </div>
        <img
          className="col-span-1 hidden sm:block"
          src="/images/backend-pic.png"
          alt="dashboard image"
          width={300}
        />
      </div>

      <div className="mb-20  gap-8 items-center px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-3  lg:px-6 ">
        <img
          className="col-span-1"
          src="/images/copywriter.png"
          alt="dashboard image"
          width={300}
        />
        <div className="mt-4 md:mt-0 col-span-2">
          <h2 className="w-fit mb-4 text-4xl tracking-tight font-extrabold text-white">
            Content Writing
          </h2>
          <p className="mb-6 font-light  md:text-lg text-gray-400">
            I'm a passionate content writer skilled in crafting engaging
            narratives that inspire. My expertise in creative writing, thorough
            research, and SEO optimization brings words to life on diverse
            platforms. I adapt my versatile writing style to suit different
            industries, ensuring impactful communication for your target
            audience. Let's collaborate to turn your ideas into influential
            stories. Reach out today for content that leaves a lasting
            impression.
          </p>
        </div>
      </div>
      </motion.div>
      
    </section>
  );
};

export default Services;
