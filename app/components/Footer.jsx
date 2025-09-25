import { FaEnvelope, FaGithub, FaLinkedin, FaXing } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full px-8 py-16" id="contact">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>

        <div className="flex justify-center gap-6 mb-6">
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
        </div>

        <p className="text-sm text-gray-500">
          © 2025 Created by <span className="text-gray-300">Sebastian Riedel</span>
        </p>
      </div>
    </footer>
  );
}
