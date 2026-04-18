import React from "react";
import Typing from "../Typing/Typing";

function Hader() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b soft-divider pb-14 lg:pb-20"
    >
      <p className="section-label mb-6">About</p>
      <div className="grid items-start gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Dhaka, Bangladesh
            </p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl">
              Building modern web experiences with a calm, minimal approach.
            </h2>
            <div className="text-xl text-zinc-600 sm:text-2xl">
              I work as a <Typing />
            </div>
          </div>

          <div className="max-w-3xl space-y-5 text-base leading-8 text-zinc-600 sm:text-lg">
            <p>
              I am a full stack developer focused on shipping thoughtful,
              maintainable products. My work is strongest where clean interfaces,
              solid frontend engineering, and reliable backend architecture meet.
            </p>
            <p>
              I enjoy building practical applications with React, Next.js,
              TypeScript, Node.js, and modern API-driven systems. I care about
              performance, readable code, and experiences that feel easy to use.
            </p>
            <p>
              Right now, I am refining my portfolio and selected work to reflect
              the kind of product engineering I want to be known for in 2026.
            </p>
          </div>
        </div>

        <div className="minimal-card grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
          <div className="rounded-2xl bg-zinc-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Focus
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-700">
              Frontend systems, full stack products, and practical UI
              engineering with a bias toward clarity and maintainability.
            </p>
          </div>
          <div className="rounded-2xl bg-zinc-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Stack
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-700">
              React, Next.js, TypeScript, Node.js, Express, MongoDB, and
              PostgreSQL.
            </p>
          </div>
          <div className="rounded-2xl bg-zinc-50 p-5 sm:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              What I value
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-700">
              Clean interfaces, strong implementation details, and product work
              that feels calm, fast, and easy to trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hader;
