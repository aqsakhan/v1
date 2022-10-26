import React from 'react';
import { Layout } from './layout/Layout';
import { ThemeProvider } from 'styled-components';
import theme from './themes/default';
import { GlobalStyles } from './styles/globals';
import Hero from './components/Hero/Hero';
import BackgroundAnimation from './components/BackgrooundAnimation/BackgroundAnimation';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import { Section } from './styles/GlobalComponents/index';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Layout>
          <Section grid>
            <Hero />
            <BackgroundAnimation />
          </Section>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
