import About from './components/About';
import Container from './components/Container';
import WorkExperience from './components/WorkExperience';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <About />
        <WorkExperience />
      </Container>
    </>
  );
}

export default App;
