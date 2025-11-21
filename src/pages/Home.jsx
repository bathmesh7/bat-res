import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ElectricBorder from "../components/ElectricBorder";

const Home = () => {
  const [count, setCount] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { projects: 0, clients: 0, experience: 0 };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCount({
        projects: Math.floor((targets.projects / steps) * currentStep),
        clients: Math.floor((targets.clients / steps) * currentStep),
        experience: Math.floor((targets.experience / steps) * currentStep),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: "Projects Completed", value: count.projects, suffix: "" },
  ];

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
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Geometric Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="geometric-shape w-96 h-96 rounded-full top-20 -right-48 animate-pulse-slow"></div>
          <div className="geometric-shape w-64 h-64 rotate-45 bottom-20 -left-32 animate-bounce-slow"></div>
          <div className="geometric-shape w-80 h-80 rotate-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="container-custom section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="mb-4">
                <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-semibold">
                  Welcome to my Portfolio
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="heading-1 mb-6">
                Hi, I'm <span className="text-gradient">Bathmesh</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-lightGray mb-8"
              >
                A Passionate Web Developer
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-lightGray mb-10 max-w-xl"
              >
                I like to build projects that are based on real-time problems
                and practical use cases. I focus on creating clean, responsive,
                and user-friendly websites that deliver real value.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Link to="/projects" className="btn-primary">
                  View Projects
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:flex justify-center items-center"
            >
              <div className="relative w-96 h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <ElectricBorder
                  color="#FF5722"
                  speed={1.5}
                  chaos={0.7}
                  thickness={3}
                  style={{ borderRadius: "50%", width: "100%", height: "100%" }}
                >
                  <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full overflow-hidden p-1">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src="/profile-photo.jpg"
                        alt="Bathmesh S"
                        className="w-full h-full rounded-full"
                        style={{
                          filter: "brightness(1.05) contrast(1.08)",
                          objectFit: "cover",
                          objectPosition: "center center",
                          aspectRatio: "1/1",
                        }}
                      />
                    </div>
                  </div>
                </ElectricBorder>
                {/* Geometric Overlays */}
                <div className="absolute top-0 right-0 w-32 h-32 border-2 border-primary/20 rotate-45 animate-float"></div>
                <div
                  className="absolute bottom-10 left-0 w-24 h-24 border-2 border-primary/20 -rotate-12 animate-float"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-3 bg-primary rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-darkGray/50">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="card-hover text-center bg-primary"
            >
              <div className="text-5xl font-bold mb-2 text-white">Fresher</div>
              <div className="text-lg text-white">Status</div>
            </motion.div>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="card-hover text-center bg-primary"
              >
                <div className="text-5xl font-bold mb-2 text-white">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-lg text-white">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="heading-2 mb-4">Projects</h2>
            <p className="text-lightGray text-lg mb-12">
              I'm currently working on exciting projects to showcase here
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="card max-w-md mx-auto"
            >
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Building Portfolio</h3>
              <p className="text-lightGray mb-6">
                Stay tuned for amazing projects coming soon!
              </p>
              <Link to="/projects" className="btn-primary inline-block">
                View Projects Page
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="heading-2 mb-4 text-white">Let's Connect!</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              I'm always eager to learn and collaborate on exciting projects.
              Feel free to reach out if you'd like to connect!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-dark hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
