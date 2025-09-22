"use client";

import { useState } from "react";
import SkillsTabsModel from "./SkillsTabsModel";

export default function Skills() {
 const [activeTab, setActiveTab] = useState("frontend");

 const categories = ["frontend", "backend", "databases","devops", "softwaredevelopment", "operatingsystems", "platforms", "testing", "languages", ];

  const skills = {
  frontend: [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 5 },
    { name: "JavaScript", level: 5 },
    { name: "React", level: 5 },
    { name: "Angular", level: 4 },
    { name: "Next.js", level: 3 },
    { name: "TypeScript", level: 4 },
    { name: "Sass", level: 2 },
    { name: "Tailwind CSS", level: 3 },
    { name: "Bootstrap", level: 2 },
  ],
  backend: [
    { name: "Node.js", level: 2 },
    { name: "Express.js", level: 2 },
    { name: "Nest.js", level: 2 },
    { name: "Java Spring Boot", level: 1 },
    { name: "REST API", level: 3 },
    { name: "GraphQL", level: 3 },
  ],
  databases: [
    { name: "MongoDB", level: 2 },
    { name: "MySQL", level: 2 },
    { name: "PostgreSQL", level: 2 },
  ],
  devops: [
    { name: "Git", level: 4 },
    { name: "CI/CD (Jenkins)", level: 1 },
  ],
  softwaredevelopment: [
    {name: "C++", level: 3},
    {name: "Java", level: 1},
  ],
  operatingsystems: [
    {name: "Windows", level: 5},
    {name: "Linux", level: 2},
    {name: "MacOS", level: 2},
  ],
  platforms: [
    {name: "Microsoft PowerApps", level: 2},
    {name: "Cplace", level: 2},
    {name: "Wordpress", level: 3},
    {name: "Archer", level: 2},
  ],
  testing: [
    {name: "Jest", level: 1},
    {name: "Cypress", level: 1},
    {name: "Selenium", level: 1},
  ],
  languages:[
    {name: "German", level: 5},
    {name: "English", level: 4},
  ]
};
  return (
   <section className="w-full min-h-screen px-8 py-20" id="skills">
      <h1 className="text-3xl font-bold mb-8 text-center">My Skills</h1>

<div className="flex justify-center mb-4">
  <div className="inline-flex border-b-2 border-gray-700">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => setActiveTab(cat)}
        className={`px-4 py-2 text-sm font-medium transition ${
          activeTab === cat
            ? "border-b-2 border-white text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        {cat.charAt(0).toUpperCase() + cat.slice(1)}
      </button>
    ))}
  </div>
  </div>

   
<div className="flex justify-center mt-4">
  <div className="w-full max-w-sm text-gray-300">     
       {activeTab === "frontend" && <SkillsTabsModel skills={skills.frontend} />}
        {activeTab === "backend" && <SkillsTabsModel skills={skills.backend} />}
         {activeTab === "databases" && <SkillsTabsModel skills={skills.databases} />}
          {activeTab === "devops" && <SkillsTabsModel skills={skills.devops} />}
           {activeTab === "softwaredevelopment" && <SkillsTabsModel skills={skills.softwaredevelopment} />}
            {activeTab === "operatingsystems" && <SkillsTabsModel skills={skills.operatingsystems} />}
             {activeTab === "platforms" && <SkillsTabsModel skills={skills.platforms} />}
              {activeTab === "testing" && <SkillsTabsModel skills={skills.testing} />}
        {activeTab === "languages" && <SkillsTabsModel skills={skills.languages} />}
      </div>
      </div>
 
    </section>
  );
}