export default function SkillsTabsModel({ skills }) {
  return (
    <div className="flex flex-col gap-2">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex justify-center items-center gap-6"
        >
       
          <span className="text-left w-40">{skill.name}</span>       
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i <= skill.level
                    ? "bg-white"
                    : "bg-black border border-white"
                }`}
              ></span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
