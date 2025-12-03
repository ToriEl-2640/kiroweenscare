import { useState } from 'react'
import CodeAnalyzer from './components/CodeAnalyzer'
import HauntedReport from './components/HauntedReport'
import Guide from './components/Guide'
import './App.css'

function App() {
  const [analysis, setAnalysis] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 relative overflow-hidden flex flex-col items-center py-8">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 animate-pulse"></div>
      
      {/* Fun floating shapes */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-30 blur-2xl floating-shape"></div>
      <div className="absolute top-40 right-20 w-52 h-52 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-30 blur-2xl floating-shape" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-gradient-to-br from-pink-400 to-red-400 rounded-full opacity-30 blur-2xl floating-shape" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-30 blur-2xl floating-shape" style={{animationDelay: '3s'}}></div>
      
      {/* HEADER CARD */}
      <header className="relative z-10 w-full max-w-6xl px-4 mb-8">
        <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-10 border-8 border-purple-500 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent haunted-title mb-4 text-center drop-shadow-lg" style={{fontFamily: 'Fredoka, sans-serif'}}>
            👻 Kiroweenscare
          </h1>
          <p className="text-2xl md:text-3xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-bold text-center drop-shadow-md" style={{fontFamily: 'Bubblegum Sans, sans-serif'}}>
            Where Bugs Become Monsters! 🎃
          </p>
        </div>
      </header>

      {/* CODE INPUT CARD */}
      <div className="w-full max-w-6xl px-4 mb-8 relative z-10">
        <CodeAnalyzer onAnalyze={setAnalysis} />
      </div>

      {/* RESULTS CARD */}
      {analysis && (
        <div className="w-full max-w-6xl px-4 mb-8 relative z-10">
          <HauntedReport analysis={analysis} />
        </div>
      )}

      {/* GUIDE CARD */}
      <div className="w-full max-w-6xl px-4 mb-8 relative z-10">
        <Guide />
      </div>

      {/* FOOTER CARD */}
      <footer className="relative z-10 w-full max-w-6xl px-4 mb-8">
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-8 border-8 border-blue-500 transform hover:scale-105 transition-transform duration-300">
          <p className="text-base md:text-lg bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-bold text-center drop-shadow-md" style={{fontFamily: 'Fredoka, sans-serif'}}>
            Built with Kiro AI for Kiroween Hackathon 2025 ✨
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
