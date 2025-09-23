import { FaEnvelope, FaGithub, FaLinkedin, FaXing } from "react-icons/fa";

export default function AsideMenu() {
  return (
    <aside className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 flex-col items-center gap-6">
      <div className="w-px h-32 bg-gray-500/50"></div>

    
      <a
        href="mailto:sebastian.riedel0589@gmail.com"
        className="text-gray-400 hover:text-[#e63946] hover:drop-shadow-[0_0_6px_#e63946] transition"
      >
        <FaEnvelope size={28} />
      </a>

  
      <a
        href="https://github.com/SebastianR0589"
        target="_blank"
        className="text-gray-400 hover:text-[#457b9d] hover:drop-shadow-[0_0_6px_#457b9d] transition"
      >
        <FaGithub size={28} />
      </a>

      <a
        href="https://www.linkedin.com/in/sebastian-riedel-3132bb21b/"
        target="_blank"
        className="text-gray-400 hover:text-[#1DA1F2] hover:drop-shadow-[0_0_6px_#1DA1F2] transition"
      >
        <FaLinkedin size={28} />
      </a>

         <a
        href="https://www.xing.com/profile/Sebastian_Riedel64/web_profiles"
        target="_blank"
        className="text-gray-400 hover:text-[#2ec4b6] hover:drop-shadow-[0_0_6px_#2ec4b6] transition"
      >
        <FaXing size={28} />
      </a>

      <div className="w-px h-32 bg-gray-500/50"></div>
    </aside>
  );
}
