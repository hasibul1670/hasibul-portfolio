import React, { useEffect, useMemo, useState } from "react";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";
import DotFieldBackground from "./DotFieldBackground";

const navItems = [
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

const experiences = [
  {
    period: "2025 — Present",
    company: "illuminance Solutions",
    role: "Software Engineer",
    meta: "Full-time",
    location: "Perth, Western Australia, Australia · Remote",
    focus:
      "Dynamics 365 CRM, .NET, Azure Functions, Service Bus integrations, and API-driven backend delivery.",
  },
  {
    period: "2023 — Present",
    company: "ImpleVista",
    role: "Software Engineer",
    meta: "Full-time",
    location: "Dhaka, Bangladesh · Remote",
    focus:
      "Scalable backend systems, clean architecture, TypeScript services, microservice patterns, and production APIs.",
  },
  {
    period: "2022 — 2023",
    company: "SILKTECH LTD",
    role: "Junior Software Engineer",
    meta: "Full-time",
    location: "Narayanganj District, Dhaka, Bangladesh · On-site",
    focus:
      "Built inventory platforms with Node.js, Express.js, MongoDB, Firebase, and practical full stack delivery.",
  },
];

const stack = [
  "React",
  "Next.js",
  "Angular",
  "TypeScript",
  "Node.js",
  "NestJS",
  "C# / .NET",
  "PostgreSQL",
  "MongoDB",
  "Azure",
  "REST APIs",
  "Microservices",
  "System Design",
  "Distributed Systems",
  "Message Queues",
  "Azure Service Bus",
  "Redis Caching",
  "Docker",
  "CI/CD Pipelines",
  "Event-Driven Architecture",
  "API Security",
];

function Home() {
  const [activeSection, setActiveSection] = useState("experience");

  const socialLinks = useMemo(
    () => [
      {
        label: "GitHub",
        href: "https://github.com/hasibul1670",
        icon: FaGithub,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/hasibul-islam-6060541b3",
        icon: FaLinkedinIn,
      },
      {
        label: "Medium",
        href: "https://hasibulislam1670.medium.com/",
        icon: FaMediumM,
      },
    ],
    []
  );

  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");
    const sectionElements = document.querySelectorAll("[data-section]");

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.65],
        rootMargin: "-10% 0px -45% 0px",
      }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
    sectionElements.forEach((element) => sectionObserver.observe(element));

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const root = document.documentElement;

    const updatePointer = (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;

      root.style.setProperty("--pointer-x", `${x}%`);
      root.style.setProperty("--pointer-y", `${y}%`);
    };

    const updateScroll = () => {
      const scrollTop = window.scrollY || 0;
      const scrollRange =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollRange > 0 ? scrollTop / scrollRange : 0;

      root.style.setProperty("--scroll-progress", `${progress}`);
      root.style.setProperty(
        "--scroll-shift",
        `${Math.min(scrollTop * 0.08, 48)}px`
      );
    };

    updateScroll();
    window.addEventListener("pointermove", updatePointer);
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="site-effects" aria-hidden="true">
        <DotFieldBackground />
        <div className="cursor-aura" />
        <div className="scroll-wash" />
        <div className="scroll-progress-bar" />
      </div>
      <div className="page-shell mx-auto max-w-[1450px] px-5 py-5 sm:px-8 lg:px-10 lg:py-8">
        <div className="portfolio-layout grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="portfolio-sidebar lg:sticky lg:top-8 lg:self-start">
            <div
              data-dot-frame
              className="sidebar-shell flex h-full flex-col justify-between gap-10 p-6 sm:p-7"
            >
              <div className="space-y-10">
                <div data-reveal className="reveal space-y-5">
                  <div className="space-y-3">
                    <p className="eyebrow">Dhaka / Backend Focused Full Stack Engineer</p>
                    <h1 className="max-w-[10ch] font-display text-[3.45rem] uppercase leading-[0.88] tracking-[-0.08em] sm:text-[4.4rem]">
                      Hasibul
                      <br />
                      Islam
                    </h1>
                  </div>

                  <p className="max-w-xs text-sm leading-7 text-[var(--muted)] sm:text-[0.96rem]">
                    Backend-focused engineer building reliable APIs, integrations, and service architecture with calm product thinking.
                  </p>
                </div>

                <nav data-reveal className="reveal space-y-2">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;

                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`nav-link ${isActive ? "is-active" : ""}`}
                      >
                        <span>{item.label}</span>
                        <span className="nav-index">
                          {String(navItems.indexOf(item) + 1).padStart(2, "0")}
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div data-reveal className="reveal space-y-5">
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        className="social-chip"
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          <main className="portfolio-main space-y-14 lg:space-y-20">
            <section
              data-dot-frame
              data-reveal
              className="reveal hero-open overflow-hidden pt-4 sm:pt-8 lg:pt-12"
            >
              <div className="grid gap-10 xl:grid-cols-[1.12fr_0.88fr] xl:items-center">
                <div className="space-y-6 hero-copy">
                  <div className="space-y-4">
                    <h2 className="max-w-[12ch] font-display text-[2.7rem] uppercase leading-[0.9] tracking-[-0.08em] sm:text-[4rem] lg:text-[5rem]">
                      Backend-first,
                      <br />
                      built with depth.
                    </h2>
                    <p className="max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                      I design backend systems that stay readable under pressure: APIs, integrations, queues, cloud workflows, and production-grade service architecture.
                    </p>
                  </div>
                </div>

                <div className="hero-visual">
                  <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                    <div className="hero-stat">
                      <span className="hero-stat-value">3+</span>
                      <span className="hero-stat-label">Years building</span>
                    </div>
                    <div className="hero-stat">
                      <span className="hero-stat-value">18+</span>
                      <span className="hero-stat-label">Core tools</span>
                    </div>
                    <div className="hero-stat">
                      <span className="hero-stat-value">Remote</span>
                      <span className="hero-stat-label">Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="experience"
              data-dot-frame
              data-section
              className="section-open scroll-mt-24 py-2"
            >
              <div data-reveal className="reveal section-head">
                <p className="eyebrow">Experience</p>
                <h2 className="section-title">Backend roles, clearly shown.</h2>
              </div>

              <div className="mt-8 space-y-4">
                {experiences.map((item, index) => (
                  <article
                    key={`${item.company}-${item.period}`}
                    data-reveal
                    className="reveal experience-row"
                    style={{ transitionDelay: `${index * 90}ms` }}
                  >
                    <p className="experience-period">{item.period}</p>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-[var(--text)]">
                        {item.role}
                      </h3>
                      <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
                        {item.company} · {item.meta}
                      </p>
                      <p className="text-sm leading-7 text-[var(--muted)]">
                        {item.location}
                      </p>
                    </div>
                    <p className="text-sm leading-7 text-[var(--muted)] sm:text-[0.95rem]">
                      {item.focus}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section
              id="stack"
              data-dot-frame
              data-dot-shape="brackets"
              data-section
              className="stack-highlight section-open scroll-mt-24 py-6 px-5 sm:px-7 lg:px-8"
            >
              <div data-reveal className="reveal section-head">
                <p className="eyebrow">Stack</p>
                <h2 className="section-title">Backend tools I use most.</h2>
              </div>

              <div data-reveal className="reveal mt-8 flex flex-wrap gap-3">
                {stack.map((item, index) => (
                  <span
                    key={item}
                    className="stack-chip"
                    style={{ transitionDelay: `${index * 45}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section
              id="contact"
              data-dot-frame
              data-section
              className="contact-open scroll-mt-24 py-2"
            >
              <div data-reveal className="reveal grid gap-8 xl:grid-cols-[1fr_auto] xl:items-end">
                <div className="space-y-4">
                  <p className="eyebrow">Contact</p>
                  <h2 className="section-title max-w-[12ch]">
                    Open to backend product work.
                  </h2>
                  <a
                    href="mailto:hasibul.dcc@gmail.com"
                    className="inline-flex items-center gap-2 text-base font-medium text-[var(--text)] transition hover:text-[var(--accent)] sm:text-lg"
                  >
                    hasibul.dcc@gmail.com
                    <FaArrowRight className="text-xs" />
                  </a>
                </div>

                <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">
                  Backend engineering, integrations, service architecture, and API-heavy product systems.
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;
