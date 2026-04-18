import React, { useEffect, useMemo, useState } from "react";
import {
  FaArrowRight,
  FaChevronDown,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaMediumM,
} from "react-icons/fa";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const experiences = [
  {
    role: "Software Engineer",
    company: "illuminance Solutions",
    type: "Full-time",
    period: "Mar 2025 - Present",
    duration: "1 yr 2 mos",
    location: "Perth, Western Australia, Australia · Remote",
    title: "Dynamics 365 CRM & Backend Engineer",
    summary:
      "Backend engineer focused on Dynamics 365 CRM, .NET, and Azure-based systems.",
    highlights: [
      "Customized D365 CRM with plugins, workflows, and custom actions",
      "Built Azure Functions and Service Bus integrations for asynchronous processing",
      "Designed REST APIs and third-party integrations across cloud systems",
    ],
    skills: ".NET Framework, MS Technologies, Azure, Dynamics 365 CRM",
  },
  {
    role: "Software Engineer",
    company: "ImpleVista",
    type: "Full-time",
    period: "Sep 2023 - Present",
    duration: "2 yrs 8 mos",
    location: "Dhaka, Dhaka, Bangladesh · Remote",
    title: "Backend-focused Engineer",
    summary:
      "Backend-focused engineer working on scalable systems, integrations, and service architecture.",
    highlights: [
      "Built backend systems using C#, .NET, and TypeScript",
      "Applied clean architecture patterns across core services",
      "Worked on modular and microservices-based backend platforms",
    ],
    skills: "C#, .NET, TypeScript, Microservices, Clean Architecture",
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "C++"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "REST API Design", "JWT"],
  },
  {
    title: "Data & Tools",
    items: ["MongoDB", "PostgreSQL", "Prisma", "Git", "Jira"],
  },
];

function Home() {
  const [activeSection, setActiveSection] = useState("about");

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
      {
        label: "Facebook",
        href: "https://www.facebook.com/hasibulcse",
        icon: FaFacebookF,
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
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.75],
        rootMargin: "-20% 0px -45% 0px",
      }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
    sectionElements.forEach((element) => sectionObserver.observe(element));

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto max-w-[1440px] px-6 py-8 sm:px-10 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-[30%_70%] lg:gap-16">
          <aside className="lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] lg:self-start">
            <div className="flex h-full flex-col justify-between gap-10">
              <div className="space-y-10">
                <div
                  data-reveal
                  className="reveal space-y-3"
                >
                  <div className="space-y-3">
                    <h1 className="max-w-sm text-[3.2rem] font-bold leading-[0.95] tracking-[-0.08em] text-[var(--text)] sm:text-[4rem]">
                      Hasibul Islam
                    </h1>
                    <p className="text-[0.9rem] font-medium uppercase tracking-[0.08em] text-[#666]">
                      Full Stack Developer
                    </p>
                    <p className="max-w-sm text-[0.96rem] leading-[1.65] text-[#222]/80">
                      Full stack developer focused on clear interfaces and
                      maintainable systems.
                    </p>
                  </div>
                </div>

                <nav
                  data-reveal
                  className="reveal flex flex-wrap gap-x-6 gap-y-4 lg:flex-col lg:gap-3"
                >
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`group inline-flex items-center gap-3 text-[0.85rem] font-medium uppercase tracking-[0.08em] transition ${
                          isActive ? "text-[var(--text)]" : "text-[#666]"
                        }`}
                      >
                        <span
                          className={`h-2.5 w-2.5 rounded-full transition ${
                            isActive
                              ? "bg-[var(--accent)]"
                              : "bg-black/10 group-hover:bg-black/25"
                          }`}
                        />
                        <span>{item.label}</span>
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div
                data-reveal
                className="reveal flex items-center gap-3"
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[0.85rem] text-[#666] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>

          <main className="w-full max-w-[800px] justify-self-end">
            <section
              id="about"
              data-section
              className="scroll-mt-24 py-20 sm:py-28"
            >
              <div
                data-reveal
                className="reveal space-y-7"
              >
                <h2 className="text-[1rem] font-semibold uppercase tracking-[0.12em] text-[#666]">
                  About
                </h2>

                <div className="max-w-2xl space-y-5 text-[0.96rem] leading-[1.75] text-[#222]/82">
                  <p>
                    I build frontend-focused full stack products with an emphasis
                    on clarity, readability, and dependable implementation.
                  </p>
                  <p>
                    I work mainly with React, Next.js, TypeScript, Node.js, and
                    API-driven systems. Based in Dhaka, Bangladesh. Open to
                    frontend and full stack opportunities.
                  </p>
                </div>
              </div>
            </section>

            <section
              id="experience"
              data-section
              className="scroll-mt-24 border-t border-black/8 py-20 sm:py-28"
            >
              <div
                data-reveal
                className="reveal mb-10 space-y-3"
              >
                <h2 className="text-[1rem] font-semibold uppercase tracking-[0.12em] text-[#666]">
                  Experience
                </h2>
                <p className="max-w-xl text-[0.95rem] leading-[1.7] text-[#222]/76">
                  Selected roles across backend engineering, CRM systems, and
                  scalable service architecture.
                </p>
              </div>

              <div className="space-y-12">
                {experiences.map((experience, index) => (
                  <article
                    key={`${experience.company}-${experience.role}`}
                    data-reveal
                    className="reveal border-l border-black/10 pl-6 sm:pl-8"
                    style={{ transitionDelay: `${index * 90}ms` }}
                  >
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                          <h3 className="text-[1.4rem] font-semibold tracking-[-0.05em] text-[var(--text)]">
                            {experience.role}
                          </h3>
                          <p className="text-[0.82rem] font-medium uppercase tracking-[0.08em] text-[#666]">
                            {experience.period}
                          </p>
                        </div>
                        <p className="text-[0.98rem] leading-[1.65] text-[#222]/86">
                          {experience.company} · {experience.type}
                        </p>
                        <p className="text-[0.9rem] leading-[1.7] text-[#666]">
                          {experience.location}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <p className="text-[0.82rem] font-medium uppercase tracking-[0.08em] text-[#666]">
                          {experience.title}
                        </p>
                        <p className="max-w-2xl text-[0.94rem] leading-[1.7] text-[#222]/76">
                          {experience.summary}
                        </p>
                      </div>

                      <ul className="space-y-1.5 text-[0.92rem] leading-[1.65] text-[#222]/74">
                        {experience.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3">
                            <span className="mt-[0.52rem] h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="inline-flex items-center gap-2 text-[0.84rem] font-medium text-[var(--accent)]">
                        <span>{experience.skills}</span>
                        <FaArrowRight className="text-[0.72rem]" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section
              id="skills"
              data-section
              className="scroll-mt-24 border-t border-black/8 py-20 sm:py-28"
            >
              <div
                data-reveal
                className="reveal space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-[1rem] font-semibold uppercase tracking-[0.12em] text-[#666]">
                    Skills
                  </h2>
                  <p className="max-w-xl text-[0.95rem] leading-[1.7] text-[#222]/76">
                    Core tools grouped by discipline.
                  </p>
                </div>

                <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
                  {skillGroups.map((group, index) => (
                    <div
                      key={group.title}
                      data-reveal
                      className="reveal space-y-4"
                      style={{ transitionDelay: `${index * 70}ms` }}
                    >
                      <h3 className="text-[1rem] font-bold text-[var(--text)]">
                        {group.title}
                      </h3>
                      <ul className="space-y-1.5 text-[0.92rem] leading-[1.65] text-[#222]/74">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section
              id="contact"
              data-section
              className="scroll-mt-24 border-t border-black/8 py-20 sm:py-28"
            >
              <div
                data-reveal
                className="reveal space-y-6"
              >
                <h2 className="text-[1rem] font-semibold uppercase tracking-[0.12em] text-[#666]">
                  Contact
                </h2>

                <div className="space-y-4 text-[0.95rem] leading-[1.7] text-[#222]/78">
                  <p>
                    Available for selected frontend and full stack opportunities.
                  </p>

                  <div className="flex flex-wrap gap-6 text-[0.95rem] font-medium">
                    <a
                      href="mailto:hasibulcse@gmail.com"
                      className="text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
                    >
                      hasibulcse@gmail.com
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1kBZwNrh84gHjClnsTiIckCoQnADGWTyA/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#222]/65 transition hover:text-[var(--text)]"
                    >
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <footer className="border-t border-black/8 py-10 text-[0.82rem] text-[#666]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p>Hasibul Islam © 2026</p>
                <div className="flex items-center gap-3">
                  {["GH", "LI", "MD", "FB"].map((label) => (
                    <span
                      key={label}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-[0.66rem] font-medium tracking-[0.16em] text-[#666]"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>

      <a
        href="#experience"
        aria-label="Scroll to experience"
        className="fixed bottom-8 right-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#666] shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] lg:right-10"
      >
        <FaChevronDown />
      </a>
    </div>
  );
}

export default Home;
