"use client"

import { useState } from "react"
import Image from "next/image";


export default function Hero() {
const [lang, setLang] = useState("de");

const text = {
  de: "Meine Leidenschaft für das Programmieren begann während meines Studiums der Technischen Informatik. Besonders im Frontend-Bereich fühle ich mich zuhause – ich liebe es, Designs zum Leben zu erwecken und nutzerfreundliche Oberflächen zu entwickeln. Gleichzeitig fasziniert mich auch der Fullstack-Bereich. Erste Erfahrungen in Backend-Technologien haben mein Interesse daran geweckt, noch tiefer in die Entwicklung gesamter Anwendungen einzutauchen. Derzeit bin ich auf der Suche nach neuen Herausforderungen, in denen ich meine Frontend-Stärken einsetzen und gleichzeitig meine Kenntnisse im Fullstack-Bereich weiter ausbauen kann.",
  en:"My passion for programming began during my studies in computer engineering. I feel particularly at home in the front-end area – I love bringing designs to life and developing user-friendly interfaces. At the same time, I'm also fascinated by the full-stack area. Initial experiences with back-end technologies have sparked my interest in delving even deeper into developing entire applications. I'm currently looking for new challenges where I can utilize my front-end strengths while further expanding my knowledge in the full-stack area."
}

  return (
<section className="flex flex-col md:flex-row items-center justify-center gap-8 min-h-screen p-8 bg-black" id="about">

  <img
    src="/Profilbild.jpg"
    alt="Your Name"
    className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-[0_0_30px_rgba(255,255,255,0.2)]"
    
  />


  <div className="flex flex-col items-start max-w-xl w-full">
    <h1 className="text-4xl font-bold text-white mb-2">Sebastian Riedel</h1>
    <h2 className="text-xl text-gray-200 mb-4">Frontend Developer | Fullstack Developer</h2>

    <div className="bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-lg rounded-3xl p-8 mt-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <p className="text-gray-200 leading-relaxed">
     {text[lang]}
      </p>
        
<div className="flex gap-2 justify-end mt-4">
  <button onClick={() => setLang("de")}>
    <Image
      src="/flags/germany_flag.svg"
      alt="DE"
      width={32}
      height={32}
      className={`${lang === "de" ? "grayscale-0 opacity-100" : "grayscale opacity-50"} transition duration-300`}
    />
  </button>

  <button onClick={() => setLang("en")}>
    <Image
      src="/flags/uk_flag.svg"
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