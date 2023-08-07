import React, { useState } from "react";

function Skill() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const skills = [
    { category: "Language", name: "JavaScript", level: 90 },
    { category: "Language", name: "TypeScript", level: 80 },
    { category: "Language", name: "C++", level: 80 },
    { category: "Front-end", name: "React JS", level: 90 },
    { category: "Front-end", name: "NEXT Js", level: 80 },
    { category: "Front-end", name: "Tailwind CSS", level: 90 },
    { category: "Back-end", name: "NodeJS", level: 90 },
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

  return (
    <div id="skill" className="container px-5">
      <div className="pt-4 pb-4 title d-flex justify-content-center align-items-center">
        <h2>My Skills</h2>
      </div>

      <div className="mb-3 d-flex align-items-center">
        <label htmlFor="categorySelect" className="form-label me-2 mr-2">
          Select Category :
        </label>
        <select
          id="categorySelect"
          className="form-select btn btn-primary-outline"
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

      <div className="row">
        {filteredSkills.map((skill, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card bg-transparent border-0 shadow-sm">
              <div className="card-body ">
                <h4 className="card-title text-dark font-weight-bold ">{skill.name}</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span className="visually-hidden">{skill.level}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
