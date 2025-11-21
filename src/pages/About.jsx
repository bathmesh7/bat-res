import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
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
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-lightGray text-lg max-w-2xl mx-auto">
              Get to know more about my journey, skills, and experience
            </p>
          </motion.div>

          {/* Bio Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl opacity-20 blur-2xl animate-pulse"></div>

                {/* Image Container with Border Animation */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full bg-darkGray rounded-2xl overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-all duration-500"
                >
                  {/* Animated Border Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20 opacity-50"></div>

                  {/* Profile Image */}
                  <img
                    src="/profile-photo.jpg"
                    alt="Bathmesh S - Web Developer"
                    className="relative w-full h-full object-cover"
                    style={{ filter: "brightness(1.05) contrast(1.1)" }}
                  />

                  {/* Overlay Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>

                {/* Experience Badge with Animation */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary to-secondary text-white p-6 rounded-2xl shadow-2xl cursor-pointer"
                >
                  <div className="text-4xl font-bold">🎓</div>
                  <div className="text-sm font-semibold">College</div>
                  <div className="text-sm">Student</div>
                </motion.div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/50 rounded-bl-lg"></div>
              </div>
            </motion.div>

            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-3 mb-6">About My Journey</h2>
              <p className="text-lightGray mb-4 leading-relaxed">
                Hi, I'm Bathmesh S, a dedicated and enthusiastic Junior Web
                Developer from Pollachi. I am passionate about creating
                real-time, practical, and user-friendly web applications that
                solve real-world problems.
              </p>
              <p className="text-lightGray mb-4 leading-relaxed">
                My journey in tech began during my B.Sc. Computer Science degree
                at Sree Saraswathi Thyagaraja College, where I became deeply
                interested in how websites and applications work behind the
                scenes. Over time, this curiosity turned into a strong
                commitment to learning modern web technologies and building
                impactful digital solutions.
              </p>
              <p className="text-lightGray mb-6 leading-relaxed">
                I enjoy developing full-stack applications using technologies
                like HTML, CSS, JavaScript, React.js, Node.js, Python, and
                databases such as SQL and MongoDB. I love working on real-time
                projects such as blood donation systems, PDF makers, and finance
                management tools, which help me continuously improve my skills.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="/skills" className="btn-primary">
                  View Skills
                </a>
                <a
                  href="/resume.pdf"
                  download="Bathmesh_Resume.pdf"
                  className="btn-secondary flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-darkGray/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">Education & Learning</h2>
            <p className="text-lightGray text-lg">
              My academic journey and continuous learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-hover"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Bachelor's in Computer Science
              </h3>
              <div className="text-primary font-semibold mb-2">
                [Your University Name] | Currently Pursuing
              </div>
              <p className="text-lightGray">
                Focused on software engineering, web development, and
                programming fundamentals while building practical projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-hover"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Self-Learning & Online Courses
              </h3>
              <div className="text-primary font-semibold mb-2">
                Various Platforms | Ongoing
              </div>
              <ul className="text-lightGray space-y-1">
                <li>• Modern Web Development</li>
                <li>• React & Frontend Frameworks</li>
                <li>• UI/UX Design Principles</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
