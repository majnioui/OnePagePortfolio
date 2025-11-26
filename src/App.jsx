import Hero from './components/Hero';
import Projects from './components/Projects';
import Background from './components/Background';

function App() {
  return (
    <main className="min-h-screen relative selection:bg-white/20 overflow-hidden">
      <Background />
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 md:py-32 flex flex-col gap-24 md:gap-32">
        <Hero />
        <Projects />
        <footer className="text-zinc-800 text-sm font-mono">
          © {new Date().getFullYear()} majnioui.xyz
        </footer>
      </div>
    </main>
  )
}

export default App
