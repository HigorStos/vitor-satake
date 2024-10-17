import About from './components/About';
import Container from './components/Container';
import WorkExperience from './components/WorkExperience';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
      </Container>
    </>
  );
}

export default App;
