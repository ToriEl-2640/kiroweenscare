import { useState } from 'react'
import CodeAnalyzer from './components/CodeAnalyzer'
import HauntedReport from './components/HauntedReport'
import Guide from './components/Guide'
import './App.css'

function App() {
  const [analysis, setAnalysis] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-200 relative overflow-hidden flex flex-col items-center py-8">
      {/* Fun floating shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400 rounded-full opacity-20 floating-shape"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-pink-400 rounded-full opacity-20 floating-shape" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-yellow-400 rounded-full opacity-20 floating-shape" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-blue-400 rounded-full opacity-20 floating-shape" style={{animationDelay: '3s'}}></div>
      
      {/* HEADER CARD */}
      <header className="relative z-10 w-full max-w-6xl px-4 mb-8">
        <div className="bg-white rounded-3xl shadow-2xl p-10 border-8 border-purple-500">
          <h1 className="text-7xl md:text-8xl font-black text-purple-600 haunted-title mb-4 text-center" style={{fontFamily: 'Fredoka, sans-serif'}}>
            👻 Kiroweenscare
          </h1>
          <p className="text-2xl md:text-3xl text-pink-600 font-bold text-center" style={{fontFamily: 'Bubblegum Sans, sans-serif'}}>
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
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-8 border-blue-500">
          <p className="text-base md:text-lg text-purple-600 font-bold text-center" style={{fontFamily: 'Fredoka, sans-serif'}}>
            Built with Kiro AI for Kiroween Hackathon 2025 ✨
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
