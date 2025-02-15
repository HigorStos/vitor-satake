import About from './components/About';
import Container from './components/Container';
import WorkExperience from './components/WorkExperience';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Container>
        <Header />
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
        <Footer />
      </Container>
    </LanguageProvider>
  );
}

export default App;
