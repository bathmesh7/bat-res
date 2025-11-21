import { motion } from "framer-motion";
import SkillsMasonry from "../components/SkillsMasonry";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="heading-1 mb-4">
              My <span className="text-gradient">Skills</span>
            </h1>
            <p className="text-lightGray text-lg max-w-2xl mx-auto">
              Technologies and tools I work with to build amazing web
              applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Masonry Layout */}
      <section className="section-padding bg-darkGray/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-primary text-2xl">✨</span>
              <span className="text-lightGray text-sm">
                Organized by category for better clarity
              </span>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <SkillsMasonry />

          {/* Learning Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 max-w-4xl mx-auto"
          >
            <div className="card-hover text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Continuously Learning</h3>
              <p className="text-lightGray leading-relaxed mb-6">
                I'm always exploring new technologies and improving my skills.
                Currently diving deeper into advanced React patterns, backend
                development with Node.js, and modern database solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-darkGray/50 rounded-full text-sm border border-primary/20">
                  Next.js
                </span>
                <span className="px-4 py-2 bg-darkGray/50 rounded-full text-sm border border-primary/20">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-darkGray/50 rounded-full text-sm border border-primary/20">
                  Docker
                </span>
                <span className="px-4 py-2 bg-darkGray/50 rounded-full text-sm border border-primary/20">
                  AWS
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Skills;
