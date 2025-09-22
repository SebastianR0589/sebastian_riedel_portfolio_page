"use client";

import { useState } from "react";
import ProjectsTabsModel from "./ProjectsTabsModel";
import { projects } from "../data/projects"; 

export default function Projects() {
  const categories = ["frontend", "fullstack", "backend"];
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className="w-full max-w-6xl mx-auto" id="projects">
      {/* Tabs */}
      <div className="flex justify-center mb-6 border-b border-gray-700">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 font-medium transition ${
              activeTab === cat
                ? "border-b-2 border-white text-white"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects[activeTab].map((project) => (
          <ProjectsTabsModel key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
