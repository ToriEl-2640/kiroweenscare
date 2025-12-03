import { useState } from 'react'
import CodeAnalyzer from './components/CodeAnalyzer'
import HauntedReport from './components/HauntedReport'
import './App.css'

function App() {
  const [analysis, setAnalysis] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-lavender-50 to-mint-100 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #e0f2fe 0%, #f3e8ff 50%, #d1fae5 100%)'}}>
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-2xl floating-orb"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-sky-200/40 to-cyan-200/40 rounded-full blur-2xl floating-orb" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-gradient-to-br from-mint-200/40 to-emerald-200/40 rounded-full blur-2xl floating-orb" style={{animationDelay: '4s'}}></div>
      
      {/* Mist layers */}
      <div className="mist-layer absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
      
      <header className="text-center py-16 relative z-10">
        <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-sky-400 haunted-title mb-4" style={{fontFamily: 'Nunito, sans-serif'}}>
          👻 Kiroweenscare
        </h1>
        <p className="text-2xl text-purple-600/80 haunted-subtitle font-light" style={{fontFamily: 'Nunito, sans-serif'}}>
          Haunted Code Review - Where Bugs Become Monsters
        </p>
      </header>

      <main className="container mx-auto px-6 pb-20 relative z-10 max-w-6xl">
        <CodeAnalyzer onAnalyze={setAnalysis} />
        {analysis && <HauntedReport analysis={analysis} />}
      </main>

      <footer className="text-center py-8 text-purple-400/60 text-sm relative z-10" style={{fontFamily: 'Nunito, sans-serif'}}>
        Built with Kiro AI for Kiroween Hackathon 2025 ✨
      </footer>
    </div>
  )
}

export default App
