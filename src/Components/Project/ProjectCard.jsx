/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function ProjectCard({
  title,
  description,
  website,
  frontEndRepo,
  image,
}) {
  return (
    <article className="minimal-card overflow-hidden p-4 sm:p-5">
      <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-100">
        <img
          className="h-56 w-full object-cover object-top transition duration-500 hover:scale-[1.02]"
          src={image}
          alt={title}
        />
      </div>

      <div className="mt-5 space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
            {title}
          </h3>
          <p className="text-sm leading-7 text-zinc-600 sm:text-base">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            target="_blank"
            rel="noreferrer"
            href={website}
            className="btn1 inline-flex rounded-full px-4 py-2 text-sm"
          >
            Live Site
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href={frontEndRepo}
            className="btn1 inline-flex rounded-full px-4 py-2 text-sm"
          >
            Source Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
