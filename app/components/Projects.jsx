"use client";

import { useState } from "react";
import ProjectsTabsModel from "./ProjectsTabsModel";
import { projects } from "../data/projects"; 

export default function Projects() {
  const categories = ["frontend", "fullstack", "backend"];
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className="w-full min-h-screen px-8 py-16" id="projects">
 
<div className="flex justify-center mb-6">
  <div className="flex border-b border-gray-700">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 font-medium transition hover-3d ${
              activeTab === cat
                ? "text-[#33A1FD] drop-shadow-[0_0_6px_#33A1FD]"
                : "text-gray-400 hover:text-[#e63946] hover:drop-shadow-[0_0_6px_#e63946] transition"
            }`}
            onClick={() => setActiveTab(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
        {projects[activeTab].map((project) => (
          <ProjectsTabsModel key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
