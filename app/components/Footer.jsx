import { FaEnvelope, FaGithub, FaLinkedin, FaXing } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white/10 backdrop-blur-md py-8 mt-16" id="contact">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>


        <div className="flex justify-center gap-6 mb-6">
          <a href="mailto:sebastian.riedel0589@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-2xl text-gray-400 hover:text-white transition" />
          </a>
          <a href="https://github.com/SebastianR0589" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-400 hover:text-white transition" />
          </a>
          <a href="https://www.linkedin.com/in/sebastian-riedel-3132bb21b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-gray-400 hover:text-white transition" />
          </a>
           <a href="https://www.xing.com/profile/Sebastian_Riedel64/web_profiles" target="_blank" rel="noopener noreferrer">
            <FaXing className="text-2xl text-gray-400 hover:text-white transition" />
          </a>
        </div>

   
        <p className="text-sm text-gray-500">
          © 2025 Created by <span className="text-gray-300">Sebastian Riedel</span>
        </p>
      </div>
    </footer>
  );
}
