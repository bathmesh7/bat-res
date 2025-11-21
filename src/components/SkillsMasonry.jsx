import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SkillsMasonry = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          emoji: "🌐",
          color: "from-orange-500/20 to-red-500/20",
        },
        {
          name: "CSS",
          emoji: "🎨",
          color: "from-blue-500/20 to-indigo-500/20",
        },
        {
          name: "JavaScript",
          emoji: "⚡",
          color: "from-yellow-500/20 to-amber-500/20",
        },
        {
          name: "React.js",
          emoji: "⚛️",
          color: "from-blue-500/20 to-cyan-500/20",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          emoji: "🟢",
          color: "from-green-600/20 to-lime-500/20",
        },
        {
          name: "Python",
          emoji: "🐍",
          color: "from-blue-400/20 to-yellow-400/20",
        },
        {
          name: "Java",
          emoji: "☕",
          color: "from-red-500/20 to-orange-500/20",
        },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "SQL", emoji: "🗄️", color: "from-blue-500/20 to-sky-500/20" },
        {
          name: "MongoDB",
          emoji: "🍃",
          color: "from-green-500/20 to-teal-500/20",
        },
        { name: "Neon", emoji: "💠", color: "from-cyan-500/20 to-blue-600/20" },
        {
          name: "Supabase",
          emoji: "🟩",
          color: "from-green-400/20 to-emerald-600/20",
        },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", emoji: "🔧", color: "from-orange-600/20 to-red-500/20" },
        {
          name: "GitHub",
          emoji: "🐙",
          color: "from-gray-700/20 to-slate-600/20",
        },
        {
          name: "Excel",
          emoji: "📊",
          color: "from-green-600/20 to-emerald-500/20",
        },
        {
          name: "Power BI",
          emoji: "📈",
          color: "from-yellow-500/20 to-orange-500/20",
        },
        {
          name: "Tableau",
          emoji: "📉",
          color: "from-blue-600/20 to-indigo-600/20",
        },
      ],
    },
  ];

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="w-full space-y-12">
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          variants={categoryVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Category Title */}
          <h3 className="text-2xl font-bold text-primary text-center mb-6">
            {category.title}
          </h3>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {category.skills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                className="skill-card"
              >
                <div
                  className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${skill.color} backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 group cursor-pointer h-full`}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <motion.div
                      className="text-5xl mb-3"
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.5 },
                      }}
                    >
                      {skill.emoji}
                    </motion.div>
                    <h4 className="text-base font-bold text-white">
                      {skill.name}
                    </h4>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-primary/5 rounded-bl-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsMasonry;
