import React, { useState } from "react";

function Skill() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const skills = [
    { category: "Language", name: "C++", level: 80 },
    { category: "Language", name: "JavaScript", level: 90 },
    { category: "Language", name: "TypeScript", level: 80 },
    { category: "Front-end", name: "Angular", level: 80 },
    { category: "Front-end", name: "React JS", level: 90 },
    { category: "Front-end", name: "Next Js", level: 80 },
    { category: "Back-end", name: "NodeJS", level: 90 },
    { category: "Back-end", name: "NestJs", level: 90 },
    { category: "Back-end", name: "ExpressJS", level: 90 },
    { category: "Back-end", name: "Json Web Token [ JWT ] ", level: 90 },
    { category: "Back-end", name: "RESTful API Design", level: 90 },
    {
      category: "Back-end",
      name: "MVC (Model-View-Controller) Pattern",
      level: 80,
    },
    { category: "Back-end", name: "Modular Pattern", level: 100 },

    { category: "Database", name: "Non-SQL [ MongoDB ]", level: 90 },
    { category: "Database", name: "SQL [ PostgreSQL ]", level: 90 },
    { category: "Database", name: "Prisma", level: 75 },

    { category: "Others", name: "Problem Solving", level: 90 },
    { category: "Others", name: "Git Version Control ", level: 90 },
    { category: "Others", name: " Agile Methodologies", level: 90 },
    { category: "Others", name: " Project Management [ Jira ] ", level: 80 },
    // Add more skills as needed
  ];

  const categories = [
    "All",
    "Language",
    "Front-end",
    "Back-end",
    "Database",
    "Others",
  ];

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const groupedSkills = filteredSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skill" className="scroll-mt-24 border-b soft-divider pb-14 lg:pb-20">
      <div className="mb-8 space-y-3">
        <p className="section-label">Skills</p>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          Capabilities
        </h2>
        <p className="max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg">
          A practical snapshot of the tools and systems I use most often across
          product development.
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <label htmlFor="categorySelect" className="section-label !tracking-[0.16em]">
          Filter
        </label>
        <select
          id="categorySelect"
          className="w-full max-w-xs rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 shadow-sm outline-none transition focus:border-zinc-900"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="minimal-card p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-zinc-900">{category}</h3>
              <span className="text-sm text-zinc-500">{categorySkills.length} skills</span>
            </div>

            <div className="space-y-5">
              {categorySkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-sm font-medium text-zinc-800 sm:text-base">
                      {skill.name}
                    </h4>
                    <span className="text-sm text-zinc-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-zinc-100">
                    <div
                      className="h-2 rounded-full bg-zinc-900"
                      role="progressbar"
                      style={{ width: `${skill.level}%` }}
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
