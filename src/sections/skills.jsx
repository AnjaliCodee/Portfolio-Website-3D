const techSkills = [
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "Docker", icon: "docker" },
  { name: "Python", icon: "python" },
  { name: "Java", icon: "openjdk" },
  { name: "GitHub", icon: "github" },
  { name: "Figma", icon: "figma" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
  { name: "SQL", icon: "mysql" },
  { name: "Git", icon: "git" },
  { name: "Vercel", icon: "vercel" },
  { name: "Firebase", icon: "firebase" },
  { name: "Three.js", icon: "threedotjs" },
];

const positionedSkills = techSkills.map((skill, index) => {
  const total = techSkills.length;
  const phi = Math.acos(1 - (2 * (index + 0.5)) / total);
  const theta = Math.PI * (1 + Math.sqrt(5)) * index;

  return {
    ...skill,
    x: Math.cos(theta) * Math.sin(phi),
    y: Math.cos(phi),
    z: Math.sin(theta) * Math.sin(phi),
  };
});

function Skills() {
  return (
    <section className="glass-skills" id="skills">
      <div className="glass-skills-heading">
        <span>MY DIGITAL TOOLKIT · 01</span>
        <h2>
          Things I <i>build with.</i>
        </h2>
        <p>My growing world of technology.</p>
      </div>

      <div className="glass-universe">
        <div className="glass-orb">
          <div className="orb-rotation">
            {positionedSkills.map((skill) => (
              <div
                className="orb-skill"
                key={skill.name}
                style={{
                  left: `${50 + skill.x * 38}%`,
                  top: `${50 + skill.y * 38}%`,
                  "--depth": `${skill.z * 155}px`,
                }}
                title={skill.name}
              >
                <div className="orb-skill-inner">
                  <img
                    src={`https://cdn.simpleicons.org/${skill.icon}`}
                    alt=""
                    loading="lazy"
                  />
                  <span>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="orb-glass-shell" />
          <div className="orb-glass-reflection" />
          <div className="orb-glass-rim" />
        </div>
      </div>

      <div className="glass-skills-bottom">
        <span>LEARNING BY BUILDING</span>
        <span className="skills-bottom-line" />
        <span>ALWAYS EVOLVING ↗️</span>
      </div>
    </section>
  );
}

export default Skills;