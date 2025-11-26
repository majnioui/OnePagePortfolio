import Hero from './components/Hero';
import Projects from './components/Projects';
import Socials from './components/Socials';
import Background from './components/Background';

function App() {
  return (
    <main className="min-h-screen text-white relative selection:bg-white/20">
      <Background />
      <div className="relative z-10">
        <Hero />
        <Projects />
        <Socials />
      </div>
    </main>
  )
}

export default App
