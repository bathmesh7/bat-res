import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import DomeGallery from "../components/DomeGallery";
import ClickSpark from "../components/ClickSpark";
import FoodDeliveryApp from "../components/projects/FoodDeliveryApp";
import EcommercePlatform from "../components/projects/EcommercePlatform";
import MobileShop from "../components/projects/MobileShop";
import BankingUIUX from "../components/projects/BankingUIUX";
import PortfolioV2 from "../components/projects/PortfolioV2";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsAutoScrolling(false);
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    if (scrollContainerRef.current) {
      e.preventDefault();
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => container.removeEventListener("wheel", handleWheel);
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isAutoScrolling) return;

    const scroll = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
    };

    autoScrollRef.current = setInterval(scroll, 20);

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isAutoScrolling]);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "uiux", label: "UI/UX Design" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const projectsData = [
    {
      id: 1,
      title: "PDF Toolkit Pro",
      description:
        "Your complete solution for PDF processing, file compression, and document conversion with 13+ powerful tools.",
      category: "Web Development",
      categories: ["all", "web", "fullstack"],
      tech: ["React", "Node.js", "PDF Generation"],
      icon: "📄",
      image:
        "https://batr-pdf-git-main-bathmesh7s-projects.vercel.app/og-image.png",
      link: "https://batr-pdf-git-main-bathmesh7s-projects.vercel.app",
      github: "https://github.com/bathmesh7",
    },
    {
      id: 2,
      title: "BAT Food Delivery",
      description:
        "Experience the best burgers, pizzas, and fries in town. Made fresh daily with premium ingredients and fast delivery.",
      category: "Full Stack",
      categories: ["all", "web", "fullstack"],
      tech: ["React", "Node.js", "MongoDB"],
      icon: "🍔",
      image: "https://bat-food.vercel.app/og-image.png",
      link: "https://bat-food.vercel.app",
      github: "https://github.com/bathmesh7",
    },
  ];

  const filteredProjects = projectsData.filter((project) =>
    project.categories.includes(activeFilter)
  );

  // Duplicate projects for infinite scroll
  const infiniteProjects = [
    ...filteredProjects,
    ...filteredProjects,
    ...filteredProjects,
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
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="pt-20"
    >
      {/* Header Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="heading-1 mb-4">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-lightGray text-lg max-w-2xl mx-auto">
              Explore my recent projects showcasing web development and
              full-stack applications
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                    : "bg-darkGray text-lightGray hover:bg-darkGray/80 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Dome Gallery Section */}
      <section className="py-16 bg-dark/30">
        <ClickSpark
          sparkColor="#FF5722"
          sparkSize={30}
          sparkRadius={55}
          sparkCount={16}
          duration={750}
          extraScale={2.0}
        >
          <div style={{ height: "700px", position: "relative" }}>
            <DomeGallery
              images={filteredProjects.map((project) => ({
                src: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='g${
                  project.id
                }' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgba(255,87,34,0.3)'/%3E%3Cstop offset='100%25' style='stop-color:rgba(255,111,60,0.3)'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g${
                  project.id
                })'/%3E%3Ctext x='50%25' y='40%25' font-size='120' text-anchor='middle' dominant-baseline='middle' opacity='0.95'%3E${
                  project.icon
                }%3C/text%3E%3Ctext x='50%25' y='65%25' font-size='36' font-weight='bold' fill='%23ffffff' text-anchor='middle' dominant-baseline='middle'%3E${encodeURIComponent(
                  project.title
                )}%3C/text%3E%3Ctext x='50%25' y='76%25' font-size='18' fill='%23ff5722' text-anchor='middle' dominant-baseline='middle'%3E${encodeURIComponent(
                  project.category
                )}%3C/text%3E%3C/svg%3E`,
                alt: project.title,
              }))}
              fit={0.55}
              minRadius={550}
              segments={30}
              dragSensitivity={18}
              imageBorderRadius="20px"
              overlayBlurColor="#0a0a0f"
              grayscale={false}
            />
          </div>
        </ClickSpark>
      </section>

      {/* Projects Detail Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 text-center mb-12"
          >
            Project Details
          </motion.h2>
          <motion.div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-darkGray rounded-xl overflow-hidden border border-primary/20 hover:border-primary/60 transition-all duration-500 group"
              >
                <div className="h-52 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden relative flex items-center justify-center">
                  <div className="text-7xl opacity-90">{project.icon}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-darkGray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-5">
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-extrabold mt-2 mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-lightGray text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-dark/50 border border-primary/20 rounded-full text-xs text-lightGray"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-primary hover:bg-primary/80 text-white rounded-lg transition-colors text-sm font-semibold"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-darkGray/80 hover:bg-darkGray text-white rounded-lg transition-colors text-sm"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No Projects Found</h3>
              <p className="text-lightGray">
                Try selecting a different category to view projects
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-darkGray/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-2xl mx-auto"
          >
            <div className="card">
              <div className="text-4xl font-bold text-gradient mb-2">
                Fresher
              </div>
              <div className="text-lightGray">Status</div>
            </div>
            <div className="card">
              <div className="text-4xl font-bold text-gradient mb-2">2</div>
              <div className="text-lightGray">Projects Completed</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-hover text-center bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20"
          >
            <h2 className="heading-3 mb-4">Have a Project in Mind?</h2>
            <p className="text-lightGray mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new projects and bring ideas to
              life. Let's collaborate and build something amazing together!
            </p>
            <a href="/contact" className="btn-primary inline-block">
              Let's Work Together
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
