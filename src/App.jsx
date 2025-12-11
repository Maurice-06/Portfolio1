import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/project';
import Education from './components/education';
import Contact from './components/contact';
import Footer from './components/footer';


function App() {
  console.log('App component rendering');
  return (
    <div className="App min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


export default App;
