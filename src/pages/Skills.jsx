import { FaArrowTurnDown } from "react-icons/fa6";

function Skills() {
    const skills = [
        { name: 'HTML', category: 'User Interface', icon: 'https://img.icons8.com/color/48/000000/html-5.png' },
        { name: 'Figma', category: 'Design tool', icon: 'https://img.icons8.com/color/48/figma--v1.png' },
        { name: 'CSS', category: 'User Interface', icon: 'https://img.icons8.com/color/48/000000/css3.png' },
        { name: 'JavaScript', category: 'Interaction', icon: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000' },
        { name: 'NodeJS', category: 'Web Server', icon: 'https://img.icons8.com/fluency/50/node-js.png' },
        { name: 'ExpressJS', category: 'Node Framework', icon: 'https://img.icons8.com/office/40/express-js.png' },
        { name: 'MongoDB', category: 'Database', icon: 'https://img.icons8.com/color/48/000000/mongodb.png' },
        { name: 'React', category: 'Framework', icon: 'https://img.icons8.com/?size=100&id=123603&format=png&color=000000' },
        { name: 'TailwindCSS', category: 'User Interface', icon: 'https://img.icons8.com/color/48/tailwindcss.png' },
        { name: 'Bootstrap', category: 'UI Framework', icon: 'https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000' },
        { name: 'VS Code', category: 'IDE', icon: 'https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000' },
        { name: 'Command Line', category: 'Tool', icon: 'https://img.icons8.com/?size=100&id=2EbawKhhFdxd&format=png&color=000000' },
        { name: 'Git', category: 'Version Control', icon: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000' },
        { name: 'GitHub', category: 'Version Control', icon: 'https://img.icons8.com/?size=100&id=21276&format=png&color=000000' },
        { name: 'GSAP', category: 'Animation', icon: 'https://static.cdnlogo.com/logos/g/31/gsap-greensock.svg' },
        { name: 'Framer', category: 'Animation', icon: 'https://img.icons8.com/?size=100&id=ZZNsPaonr90b&format=png&color=000000' },
      ];
      
      
  return (
    <div className="p-10 bg-[#141516] text-zinc-100 text-6xl font-mono">
    <div  className="max-w-6xl mx-auto ">
    <h2 className="mx-auto text-6xl font-mono py-10  flex items-center">
          <FaArrowTurnDown className="mr-2 mt-6" /> Skills
    </h2>
      <h2 className="text-xl mb-16">Essential Tools I use</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="hover:bg-zinc-800 relative p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 hover:border-zinc-700 transition-all duration-300"
          >
            <div className="flex items-center gap-4 ">
              <span className="text-2xl ">
                {typeof skill.icon === 'string' ? (
                  <img width="48" height="48" src={skill.icon} alt={skill.name} />
                ) : (
                  skill.icon
                )}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>
                <p className="text-sm text-zinc-400">{skill.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Skills