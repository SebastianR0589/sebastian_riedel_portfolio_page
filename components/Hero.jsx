"use client"

import { useState } from "react"
import Image from "next/image";
import german_flag from "../public/german_flag.svg"
import uk_flag from "../public/uk_flag.svg"

export default function Hero() {
const [lang, setLang] = useState("de");

const text = {
  de: "Meine Leidenschaft für das Programmieren begann während meines Studiums der Technischen Informatik. Besonders im Frontend-Bereich fühle ich mich zuhause – ich liebe es, Designs zum Leben zu erwecken und nutzerfreundliche Oberflächen zu entwickeln. Gleichzeitig fasziniert mich auch der Fullstack-Bereich. Erste Erfahrungen in Backend-Technologien haben mein Interesse daran geweckt, noch tiefer in die Entwicklung gesamter Anwendungen einzutauchen. Derzeit bin ich auf der Suche nach neuen Herausforderungen, in denen ich meine Frontend-Stärken einsetzen und gleichzeitig meine Kenntnisse im Fullstack-Bereich weiter ausbauen kann.",
  en:"My passion for programming began during my studies in computer engineering. I feel particularly at home in the front-end area – I love bringing designs to life and developing user-friendly interfaces. At the same time, I'm also fascinated by the full-stack area. Initial experiences with back-end technologies have sparked my interest in delving even deeper into developing entire applications. I'm currently looking for new challenges where I can utilize my front-end strengths while further expanding my knowledge in the full-stack area."
}

  return (
<section className="flex flex-col md:flex-row items-center justify-center gap-14 min-h-screen p-8" id="about">
  {/* Profile image */}
  <img
    src="/Profilbild.jpg"
    alt="Your Name"
    className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover shadow-lg -mb-6 md:mb-0 md:-mr-8"
  />

  {/* Text box */}
  <div className="flex flex-col items-start max-w-xl w-full">
    <h1 className="text-4xl md:text-5xl font-extrabold text-white/90">Sebastian Riedel</h1>
    <h2 className="text-2xl text-indigo-200 mt-1">Frontend Developer | Fullstack Developer</h2>

    <div className="bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-lg rounded-3xl p-8 mt-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <p className="text-gray-200 leading-relaxed">
     {text[lang]}
      </p>
        
<div className="flex gap-2 justify-end mt-4">
  <button onClick={() => setLang("de")}>
    <Image
      src={german_flag}
      alt="DE"
      width={32}
      height={32}
      className={`${lang === "de" ? "grayscale-0 opacity-100" : "grayscale opacity-50"} transition duration-300`}
    />
  </button>

  <button onClick={() => setLang("en")}>
    <Image
      src={uk_flag}
      alt="EN"
      width={32}
      height={32}
      className={`${lang === "en" ? "grayscale-0 opacity-100" : "grayscale opacity-50"} transition duration-300`}
    />
  </button>
</div>


    </div>

  </div>
</section>


  )}