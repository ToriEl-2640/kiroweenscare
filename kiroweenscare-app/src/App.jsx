import { useState } from 'react'
import CodeAnalyzer from './components/CodeAnalyzer'
import HauntedReport from './components/HauntedReport'
import Guide from './components/Guide'
import './App.css'

function App() {
  const [analysis, setAnalysis] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-200 relative overflow-hidden">
      {/* Fun floating shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400 rounded-full opacity-20 floating-shape"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-pink-400 rounded-full opacity-20 floating-shape" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-yellow-400 rounded-full opacity-20 floating-shape" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-blue-400 rounded-full opacity-20 floating-shape" style={{animationDelay: '3s'}}></div>
      
      <header className="text-center py-16 relative z-10">
        <h1 className="text-8xl font-black text-purple-600 haunted-title mb-4" style={{fontFamily: 'Fredoka, sans-serif'}}>
          👻 Kiroweenscare
        </h1>
        <p className="text-3xl text-pink-600 font-bold" style={{fontFamily: 'Bubblegum Sans, sans-serif'}}>
          Where Bugs Become Monsters! 🎃
        </p>
      </header>

      <main className="container mx-auto px-6 pb-20 relative z-10 max-w-6xl">
        <CodeAnalyzer onAnalyze={setAnalysis} />
        {analysis && <HauntedReport analysis={analysis} />}
        <Guide />
      </main>

      <footer className="text-center py-8 text-purple-500 text-lg font-bold relative z-10" style={{fontFamily: 'Fredoka, sans-serif'}}>
        Built with Kiro AI ✨
      </footer>
    </div>
  )
}

export default App
