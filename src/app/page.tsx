import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import SkillsShowcase from './components/SkillsShowcase';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import StarsBackground from './components/StarsBackground';

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <StarsBackground />
      <div className="relative z-10 pt-20">
        {/* Navbar Component */}
        <Navbar />

        {/* Introduction Component */}
        <Introduction />

        {/* About Me Component */}
        <AboutMe />

        {/* Skills Showcase Component */}
        <SkillsShowcase />
        
        <Projects/>
        <ContactMe/>
        <Footer/>
      </div>
    </div>
  );
}
