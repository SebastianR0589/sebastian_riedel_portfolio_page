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
<section
  className="flex flex-col md:flex-row items-center justify-center gap-8 min-h-screen px-8"
  id="about"
>
  <div className="z-10 flex flex-col md:items-end text-left md:text-right md:w-1/2 md:pr-6">
    <h1 className="text-6xl font-extrabold text-white mb-4 leading-tight">
      Sebastian Riedel
    </h1>
    <h2 className="text-2xl text-gray-300 mb-6">
      Frontend Developer | Fullstack Developer
    </h2>

    <p className="text-lg text-gray-300 leading-relaxed max-w-xl mb-6">
      {text[lang]}
    </p>

    <div className="flex gap-3 justify-end">
      <button onClick={() => setLang("de")}>
        <Image
          src="/flags/germany_flag.svg"
          alt="DE"
          width={32}
          height={32}
          className={`${
            lang === "de"
              ? "grayscale-0 opacity-100"
              : "grayscale opacity-50"
          } transition duration-300`}
        />
      </button>
      <button onClick={() => setLang("en")}>
        <Image
          src="/flags/uk_flag.svg"
          alt="EN"
          width={32}
          height={32}
          className={`${
            lang === "en"
              ? "grayscale-0 opacity-100"
              : "grayscale opacity-50"
          } transition duration-300`}
        />
      </button>
    </div>
  </div>

  <div className="relative w-full md:w-1/2 flex justify-center md:justify-start hover-3d">
    <img
      src="/profile_image.png"
      alt="Sebastian Riedel"
      className="max-h-[80vh] w-auto object-contain drop-shadow-[0_0_40px_rgba(51,161,253,0.4)] profile-image"
    />
  </div>
</section>





  )}