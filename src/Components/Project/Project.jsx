import React from "react";
import ejournal from "../../images/projectImg/ejournal.png";
import emedicine from "../../images/projectImg/emdicine.png";
import noteApp from "../../images/projectImg/noteapp.png";
import pcbuild from "../../images/projectImg/pcbuild.png";
import sunlight from "../../images/projectImg/sunlight.png";
import ProjectCard from "./ProjectCard"; // Import the new component

const projects = [
  {
    title: "E-Medicine Website ",
    description:
      "Fullstack E-Commerce site with React, Redux, Tailwind, NodeJS, MongoDB, etc",
    website: "https://ecare-admin007.vercel.app/",
    frontEndRepo: "https://github.com/hasibul1670/E-Medicine-Shop",
    image: emedicine,
  },
  {
    title: "Notes organizer Website",
    description:
      "Fullstack Note Organizer website with React, Redux, Tailwind, NodeJS, MongoDB.",
    website: "https://note007.vercel.app/login",
    frontEndRepo: "https://github.com/hasibul1670/Task-Management-Application",
    backEndRepo: "https://github.com/hasibul1670/Task-Management-Application",
    image: noteApp,
  },

  {
    title: "Electronic Journal",
    description:
      "Fullstack E-Journal site with React,Ant Design, Bootstarp, NodeJS, MongoDB, etc.",
    website: "https://electronic-journal-client.vercel.app/",
    frontEndRepo: "https://github.com/hasibul1670/Electronic-Journal-client",
    image: ejournal,
  },

  {
    title: "Techland",
    description:
      "Fullstack Pc-Bulding site with NextJs, Redux, Tailwind, NodeJS, MongoDB, etc.",
    website: "https://client-azure-alpha.vercel.app",
    frontEndRepo: "https://github.com/hasibul1670/techland/tree/main",
    image: pcbuild,
  },
  {
    title: "SunLight Academy",
    description:
      "Fullstack E-Commerce site with React, Redux, Tailwind, NodeJS, MongoDB, etc.",
    website: "https://summer-school-camp.netlify.app/",
    frontEndRepo: "https://github.com/hasibul1670/Client-Summer-Camp-School",
    backEndRepo: "https://github.com/hasibul1670/summer-camp-school-server",
    image: sunlight,
  },
];

function Project() {
  return (
    <section id="project" className="scroll-mt-24 border-b soft-divider pb-14 lg:pb-20">
      <div className="mb-8 space-y-3">
        <p className="section-label">Projects</p>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          Selected work
        </h2>
        <p className="max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg">
          A few projects that reflect my current direction in product
          engineering, frontend architecture, and full stack development.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Project;
