import { useState } from 'react'
import { analyzeCode } from '../utils/codeAnalysis'

export default function CodeAnalyzer({ onAnalyze }) {
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState('javascript')
  const [analyzing, setAnalyzing] = useState(false)

  const handleAnalyze = () => {
    if (!code.trim()) return
    
    setAnalyzing(true)
    setTimeout(() => {
      const result = analyzeCode(code, language)
      onAnalyze(result)
      setAnalyzing(false)
    }, 1500)
  }

  return (
    <div className="code-input max-w-5xl mx-auto glass-panel rounded-3xl shadow-2xl p-10 border border-white/40" style={{fontFamily: 'Nunito, sans-serif'}}>
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400 mb-8">
        🔮 Submit Your Code for Haunting
      </h2>
      
      <div className="mb-6">
        <label className="block text-purple-700 mb-3 text-sm font-semibold">Language:</label>
        <select 
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full bg-white/60 backdrop-blur text-purple-900 px-5 py-3 rounded-2xl border border-purple-200/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300/50 transition-all shadow-sm"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-8">
        <label className="block text-purple-700 mb-3 text-sm font-semibold">Paste Your Code:</label>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="// Paste your cursed code here..."
          className="w-full h-72 bg-white/60 backdrop-blur text-purple-900 px-5 py-4 rounded-2xl border border-purple-200/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300/50 font-mono text-sm transition-all placeholder-purple-400/60 shadow-sm"
        />
      </div>

      <button
        onClick={handleAnalyze}
        disabled={!code.trim() || analyzing}
        className="btn-primary w-full bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 hover:from-purple-500 hover:via-pink-500 hover:to-sky-500 disabled:from-gray-300 disabled:to-gray-400 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 text-lg shadow-lg disabled:cursor-not-allowed"
      >
        {analyzing ? '👻 Summoning Spirits...' : '💀 Unleash the Haunting'}
      </button>
    </div>
  )
}
