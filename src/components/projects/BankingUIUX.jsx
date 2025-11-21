import { motion } from "framer-motion";

const BankingUIUX = () => {
  const features = [
    "Modern dashboard design",
    "Transaction history view",
    "Account management interface",
    "Interactive charts & graphs",
    "Secure authentication flow",
    "Mobile-first approach",
  ];

  const techStack = ["Figma", "Adobe XD", "React", "Chart.js", "Material-UI"];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card-hover"
    >
      {/* Project Image */}
      <div className="relative w-full h-64 bg-gradient-to-br from-indigo-500/20 to-pink-500/20 rounded-lg mb-6 overflow-hidden group">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-8xl opacity-50">🏦</span>
        </div>
        <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/70 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
            <a
              href="https://banking-uiux-demo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors"
            >
              View Design
            </a>
            <a
              href="https://figma.com/banking-project"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-dark px-6 py-2 rounded-lg hover:bg-lightGray transition-colors"
            >
              Figma File
            </a>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
        Banking App UI/UX
      </h3>

      <p className="text-lightGray mb-4 leading-relaxed">
        A comprehensive UI/UX design for a modern banking application. Focused
        on creating an intuitive, secure, and visually appealing interface for
        managing finances, viewing transactions, and performing banking
        operations with ease.
      </p>

      {/* Features */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2 text-primary">Design Features:</h4>
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
          href="https://banking-uiux-demo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center btn-primary py-2 text-sm"
        >
          View Design
        </a>
        <a
          href="https://figma.com/banking-project"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center btn-secondary py-2 text-sm"
        >
          Figma Link
        </a>
      </div>
    </motion.div>
  );
};

export default BankingUIUX;
