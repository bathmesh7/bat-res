import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PillNav from "./components/PillNav";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ClickSpark from "./components/ClickSpark";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import logo from "/logo.svg";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <ClickSpark
      sparkColor="#FF5722"
      sparkSize={28}
      sparkRadius={50}
      sparkCount={14}
      duration={700}
      extraScale={1.8}
      easing="ease-out"
    >
      <div className="relative min-h-screen flex flex-col">
        <CustomCursor />
        <PillNav
          logo={logo}
          logoAlt="Portfolio Logo"
          items={navItems}
          activeHref={location.pathname}
          baseColor="#0a0a0a"
          pillColor="#FF5722"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#ffffff"
        />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </ClickSpark>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
