import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";

function Navbar() {
  return (
    <aside className="flex flex-col gap-10 py-8 lg:sticky lg:top-0 lg:h-screen lg:justify-between lg:py-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <a href="#home" className="inline-block">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
              Hasibul Islam
            </h1>
          </a>
          <div className="space-y-2">
            <p className="text-xl font-medium text-zinc-900">Full Stack Developer</p>
            <p className="max-w-sm text-base leading-7 text-zinc-600">
              I build clean, reliable web products with a focus on clarity,
              usability, and modern frontend architecture.
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 lg:flex-col lg:gap-4">
          <a className="section-label hover:text-zinc-900" href="#about">
            About
          </a>
          <a className="section-label hover:text-zinc-900" href="#project">
            Projects
          </a>
          <a className="section-label hover:text-zinc-900" href="#skill">
            Skills
          </a>
          <a className="section-label hover:text-zinc-900" href="#contact">
            Contact
          </a>
        </nav>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://drive.google.com/file/d/1kBZwNrh84gHjClnsTiIckCoQnADGWTyA/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn1 inline-flex rounded-full px-5 py-2.5 text-sm"
          >
            Resume
          </a>
          <a
            href="#project"
            className="inline-flex rounded-full border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900"
          >
            Selected Work
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4 text-lg">
        <a
          href="https://github.com/hasibul1670"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="about-img"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/hasibul-islam-6060541b3"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="about-img"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.facebook.com/hasibulcse"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="about-img"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://hasibulislam1670.medium.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Medium"
          className="about-img"
        >
          <FaMediumM />
        </a>
      </div>
    </aside>
  );
}

export default Navbar;
