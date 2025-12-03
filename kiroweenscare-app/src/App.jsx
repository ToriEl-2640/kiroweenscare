import { useState } from 'react'
import CodeAnalyzer from './components/CodeAnalyzer'
import HauntedReport from './components/HauntedReport'
import './App.css'

function App() {
  const [analysis, setAnalysis] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
      
      <header className="text-center py-12 relative z-10">
        <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 haunted-title mb-4">
          👻 KIROWEENSCARE
        </h1>
        <p className="text-2xl text-purple-200 haunted-subtitle font-light">
          Haunted Code Review - Where Bugs Become Monsters
        </p>
      </header>

      <main className="container mx-auto px-4 pb-16 relative z-10 max-w-6xl">
        <CodeAnalyzer onAnalyze={setAnalysis} />
        {analysis && <HauntedReport analysis={analysis} />}
      </main>

      <footer className="text-center py-8 text-purple-400 text-sm relative z-10">
        Built with Kiro AI for Kiroween Hackathon 2025 ✨
      </footer>
    </div>
  )
}

export default App
