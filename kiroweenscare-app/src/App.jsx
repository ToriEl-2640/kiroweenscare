import { useState } from 'react'
import CodeAnalyzer from './components/CodeAnalyzer'
import HauntedReport from './components/HauntedReport'
import './App.css'

function App() {
  const [analysis, setAnalysis] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black">
      <div className="haunted-fog"></div>
      
      <header className="text-center py-8 relative z-10">
        <h1 className="text-6xl font-bold text-red-600 haunted-title mb-2">
          👻 KIROWEENSCARE 👻
        </h1>
        <p className="text-xl text-gray-300 haunted-subtitle">
          Haunted Code Review - Where Bugs Become Monsters
        </p>
      </header>

      <main className="container mx-auto px-4 pb-12 relative z-10">
        <CodeAnalyzer onAnalyze={setAnalysis} />
        {analysis && <HauntedReport analysis={analysis} />}
      </main>

      <footer className="text-center py-6 text-gray-500 text-sm relative z-10">
        Built with Kiro AI for Kiroween Hackathon 2025
      </footer>
    </div>
  )
}

export default App
