"use client";
import { useState, useEffect } from "react";

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = project.images || ["/Profilbild.jpg"];
  const icon = project.icon || null;
  const color = project.color || "white";

  useEffect(() => {
    if (!hovered || images.length <= 1) return;
    const interval = setInterval(
      () => setCurrentImage((prev) => (prev + 1) % images.length),
      1500
    );
    return () => clearInterval(interval);
  }, [hovered, images.length]);

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group bg-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition w-72 h-72 hover-3d"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={images[currentImage]}
        alt={project.name}
        className="w-full h-full object-cover transition-transform group-hover:scale-105"
      />
      <div
        className={`absolute inset-0 bg-black/60 flex flex-col justify-between p-4 transition ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex items-center gap-2 text-lg font-bold" style={{ color }}>
          {icon}
          <span>{project.framework}</span>
        </div>
        <span className="text-white text-xl font-bold text-center">
          {project.name}
        </span>
      </div>
    </a>
  );
}
