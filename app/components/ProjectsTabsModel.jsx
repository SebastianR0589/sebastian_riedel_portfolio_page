"use client";
import { useState, useEffect } from "react";
import { SiVercel, SiGithub} from "react-icons/si";

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
    <div
      className="relative bg-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition w-72 h-72 hover-3d"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      <img
        src={images[currentImage]}
        alt={project.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div
        className={`absolute inset-0 bg-black/60 flex flex-col justify-between p-4 transition-opacity duration-500 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <div
          className="flex items-center gap-2 text-lg font-bold"
          style={{ color }}
        >
          {icon}
          <span>{project.framework}</span>
        </div>
        <span className="text-white text-xl font-bold text-center">
          {project.name}
        </span>
      </div>

      {hovered && (
     <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 transition-opacity duration-500">
  {project.vercel ? (
    <>
      <div className="w-20 h-px bg-white/50 scale-x-0 animate-[growLine_0.4s_ease-out_forwards]"></div>

      <a
        href={project.vercel}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-1/2 -translate-y-[160%] px-3 py-2 rounded-full bg-black/50 text-white hover:scale-110 transition-transform flex items-center gap-2"
      >
        <SiVercel size={24} />
        <span className="text-sm font-medium">Demo</span>
      </a>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-1/2 translate-y-[60%] px-3 py-2 rounded-full bg-black/50 text-white hover:scale-110 transition-transform flex items-center gap-2"
      >
        <SiGithub size={26} />
        <span className="text-sm font-medium">Repo</span>
      </a>
    </>
  ) : (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-1/2 -translate-y-1/2 px-3 py-2 rounded-full bg-black/50 text-white hover:scale-110 transition-transform flex items-center gap-2"
    >
      <SiGithub size={30} />
      <span className="text-sm font-medium">Repo</span>
    </a>
  )}
</div>

      )}
    </div>
  );
}