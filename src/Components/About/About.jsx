import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";

function About() {
  return (
    <section id="contact" className="scroll-mt-24 pb-6">
      <div className="minimal-card p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-5">
            <p className="section-label">Contact</p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Let&apos;s build something clear, useful, and well-crafted.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
              I am open to frontend and full stack opportunities where product
              quality matters. If you want to discuss a role, project, or
              collaboration, the best place to start is with my resume or social
              links below.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://drive.google.com/file/d/1kBZwNrh84gHjClnsTiIckCoQnADGWTyA/view?usp=sharing"
                className="btn1 inline-flex rounded-full px-5 py-2.5 text-sm"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
              <a
                href="mailto:hasibulcse@gmail.com"
                className="inline-flex rounded-full border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900"
              >
                Email Me
              </a>
            </div>

            <div className="flex items-center gap-5 pt-2 text-xl">
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
                href="https://www.linkedin.com/in/hasibul-islam-6060541b3"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="about-img"
              >
                <FaLinkedinIn />
              </a>
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
                href="https://hasibulislam1670.medium.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Medium"
                className="about-img"
              >
                <FaMediumM />
              </a>
            </div>
          </div>

          <div className="space-y-4 rounded-[1.5rem] bg-zinc-50 p-5">
            <div className="space-y-3 text-sm leading-7 text-zinc-600">
              <p className="section-label !tracking-[0.16em]">Currently</p>
              <p>
                I care about calm interfaces, readable systems, and product work
                that feels intentional rather than noisy.
              </p>
              <p>
                Current focus: React, Next.js, TypeScript, Node.js, API
                architecture, and polished frontend implementation.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Based in
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-900">
                Dhaka, Bangladesh
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Open to
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-900">
                Frontend and full stack opportunities
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t soft-divider pt-5 text-sm text-zinc-500">
          Hasibul Islam Initiative. © 2026 All Rights Reserved
        </div>
      </div>
    </section>
  );
}

export default About;
