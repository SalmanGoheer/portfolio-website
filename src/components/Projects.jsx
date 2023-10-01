import React from "react";
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <section id="projects" className="container pt-10 mt-10">
      <div className="py-8 flex flex-col text-center w-full ">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 via-gray-50 to-teal-300">
          Projects
        </h2>
      </div>

      <div className="flex flex-wrap m-auto">
        <ProjectCards
          imgUrlCard="images/projects/uv-pf.png"
          altCard="urduversity-pic"
          title="Urduversity"
          codeUrl="https://github.com/SalmanGoheer/Urduversity.git"
          details="Urduversity is a urdu literature web app built using Node.js and MongoDB."
        />

        <ProjectCards
          imgUrlCard="images/projects/tindog-pf.png"
          altCard="tindog-pic"
          title="TinDog"
          codeUrl="https://github.com/SalmanGoheer/TinDog-Dummy-Web.git"
          details="TinDog is a dummy website created just for fun using Bootstrap and JavaScript. "
        />

        <ProjectCards
          imgUrlCard="images/projects/3.png"
          altCard="abc"
          title="portfolio2"
          codeUrl="#"
          details="Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Its a project portfolio"
        />
      </div>
    </section>
  );
}

export default Projects;
