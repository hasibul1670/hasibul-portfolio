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
    website: "https://e-medicine007.vercel.app/",
    frontEndRepo: "https://github.com/hasibul1670/E-Medicine-Shop",
    image: emedicine,
  },
  {
    title: "Notes organizer Website",
    description:
      "Fullstack Note Organizer website with React, Redux, Tailwind, NodeJS, MongoDB.",
    website: "https://clientnotes.vercel.app/",
    frontEndRepo: "https://github.com/hasibul1670/note-organizer-application",
    backEndRepo: "https://github.com/hasibul1670/note-organizer-application",
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
    <div id="project" className="container align-items-center ">
      <div className="pt-4 pb-4 title d-flex justify-content-center align-items-center">
        <h2>My Projects</h2>
      </div>

      <div className="card-deck">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Project;
