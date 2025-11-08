import { useEffect } from 'react';
import Hero from './components/Hero';
import Team from './components/Team';
import { Navbar, Footer } from './components/NavFooter';
import { AboutSection, ServicesSection, FocusAreasSection, ProjectsSection, ContactSection } from './components/Sections';

function App() {
  useEffect(() => {
    // Basic SEO metadata without extra packages
    document.title = 'Arohan — Partners for Advancing Health Systems';

    const ensureMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    ensureMeta(
      'description',
      'AROHAN Partners collaborates with governments, funders, and communities across India and Southeast Asia to strengthen primary health care through co-created, locally rooted solutions.'
    );

    const og = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    og('og:title', 'Arohan — Partners for Advancing Health Systems');
    og('og:description', 'Strengthening primary health care with inclusive, locally rooted solutions.');
    og('og:type', 'website');
  }, []);

  return (
    <div className="min-h-screen text-gray-900 scroll-smooth">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 bg-white border border-gray-300 rounded px-3 py-2 shadow">Skip to content</a>
      <Navbar />
      <main id="main" className="pt-16 [scroll-margin-top:5rem]">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <FocusAreasSection />
        <Team />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
