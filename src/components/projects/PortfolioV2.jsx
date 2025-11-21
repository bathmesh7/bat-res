import { motion } from "framer-motion";

const PortfolioV2 = () => {
  const features = [
    "Dark theme with animations",
    "Responsive across all devices",
    "Smooth page transitions",
    "Interactive project showcase",
    "Contact form integration",
    "SEO optimized",
  ];

  const techStack = [
    "React",
    "Framer Motion",
    "Tailwind CSS",
    "React Router",
    "Vite",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card-hover"
    >
      {/* Project Image */}
      <div className="relative w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-6 overflow-hidden group">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-8xl opacity-50">💼</span>
        </div>
        <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/70 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
            <a
              href="https://portfolio-v2-demo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/yourusername/portfolio-v2"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-dark px-6 py-2 rounded-lg hover:bg-lightGray transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
        Portfolio Website V2
      </h3>

      <p className="text-lightGray mb-4 leading-relaxed">
        The second iteration of my personal portfolio website featuring a modern
        dark theme, smooth animations, and improved user experience. Showcases
        my projects, skills, and professional journey with an emphasis on clean
        design and performance.
      </p>

      {/* Features */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2 text-primary">Key Features:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-lightGray text-sm flex items-start">
              <span className="text-primary mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-4 border-t border-primary/10">
        <a
          href="https://portfolio-v2-demo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center btn-primary py-2 text-sm"
        >
          View Live
        </a>
        <a
          href="https://github.com/yourusername/portfolio-v2"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center btn-secondary py-2 text-sm"
        >
          Source Code
        </a>
      </div>
    </motion.div>
  );
};

export default PortfolioV2;
