import { useState } from 'react'
import CodeAnalyzer from './components/CodeAnalyzer'
import HauntedReport from './components/HauntedReport'
import Guide from './components/Guide'
import './App.css'

function App() {
  const [analysis, setAnalysis] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 relative overflow-hidden">
      {/* Cosmic background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-900/20 via-transparent to-transparent"></div>
      
      {/* Floating liquid orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 liquid-shape blur-3xl floating-orb"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 liquid-shape blur-3xl floating-orb" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-pink-600/15 to-purple-600/15 liquid-shape blur-3xl floating-orb" style={{animationDelay: '6s'}}></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
      
      <header className="text-center py-20 relative z-10">
        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 haunted-title mb-6" style={{fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em'}}>
          KIROWEENSCARE
        </h1>
        <p className="text-2xl text-purple-300/90 haunted-subtitle font-light tracking-wide" style={{fontFamily: 'Inter, sans-serif'}}>
          Haunted Code Review — Where Bugs Become Monsters
        </p>
      </header>

      <main className="container mx-auto px-6 pb-24 relative z-10 max-w-7xl">
        <CodeAnalyzer onAnalyze={setAnalysis} />
        {analysis && <HauntedReport analysis={analysis} />}
        <Guide />
      </main>

      <footer className="text-center py-10 text-purple-400/50 text-sm relative z-10 tracking-wide" style={{fontFamily: 'Inter, sans-serif'}}>
        Built with Kiro AI for Kiroween Hackathon 2025 ✨
      </footer>
    </div>
  )
}

export default App
