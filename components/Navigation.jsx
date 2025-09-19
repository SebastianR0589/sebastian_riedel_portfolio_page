// components/Navbar.jsx (fancy animated underline)
const items = ["about", "skills", "projects", "contact"];

export default function Navigation() {
  return (
    <nav className="w-full sticky top-0 bg-black/50 backdrop-blur-md z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-4 px-6 border-b border-gray-700">
        <h1 className="text-xl font-bold text-white">Sebastian Riedel Portfolio</h1>

        <ul className="flex gap-6 text-gray-300">
          {items.map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item}`}
                className="inline-block hover:text-white transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>

              {/* UNDERLINE — pointer-events-none so it doesn't block clicks */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
