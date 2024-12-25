import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import About from "./components/notifcation";
import Projects from "./components/projects";
import SkillSection from "./components/skillSection";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <SkillSection />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;
