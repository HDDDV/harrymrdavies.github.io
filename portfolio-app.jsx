// Top-level composition of the portfolio page.

function App() {
  return (
    <React.Fragment>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Runner />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Career />
        <Writing />
        <Beyond />
        <Contact />
      </main>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
