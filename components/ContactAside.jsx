import { FaEnvelope, FaGithub, FaLinkedin, FaXing } from "react-icons/fa";

export default function AsideMenu() {
  return (
  <aside className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 flex-col items-center gap-6">
      {/* Top line */}
      <div className="w-px h-32 bg-gray-500/50"></div>

      <a href="mailto:sebastian.riedel0589@gmail.com" className="text-gray-400 hover:text-white transition">
        <FaEnvelope size={28} />
      </a>
      <a href="https://github.com/SebastianR0589" target="_blank" className="text-gray-400 hover:text-white transition">
        <FaGithub size={28} />
      </a>
      <a href="https://www.linkedin.com/in/sebastian-riedel-3132bb21b/" target="_blank" className="text-gray-400 hover:text-white transition">
        <FaLinkedin size={28} />
      </a>
      <a href="https://www.xing.com/profile/Sebastian_Riedel64/web_profiles" target="_blank" className="text-gray-400 hover:text-white transition">
        <FaXing size={28} />
      </a>

      {/* Bottom line */}
      <div className="w-px h-32 bg-gray-500/50"></div>
    </aside>
  );
}