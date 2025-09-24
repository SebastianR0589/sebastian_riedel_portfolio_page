"use client";

import { useEffect, useState } from "react";

export default function AsideMenu() {
  const sections = ["about", "skills", "projects", "contact"];
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
       { threshold: [0.25, 0.5, 0.75] }  
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`relative text-lg font-bold transition
            ${active === id 
              ? "text-[#33A1FD] drop-shadow-[0_0_6px_#33A1FD]" 
              : "text-gray-400"} 
            hover:text-[#FF3355] hover:drop-shadow-[0_0_6px_#FF3355]`}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
          {active === id && (
            <span
              className="absolute left-1/2 -bottom-1 w-2 h-2 rounded-full bg-[#33A1FD] blur-sm"
              style={{ transform: "translateX(-50%)" }}
            />
          )}
        </a>
      ))}
    </aside>
  );
}
