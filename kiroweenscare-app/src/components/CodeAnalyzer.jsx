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
    <div className="code-input max-w-5xl mx-auto bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-purple-500/30">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-6">
        🔮 Submit Your Code for Haunting
      </h2>
      
      <div className="mb-6">
        <label className="block text-purple-200 mb-3 text-sm font-medium">Language:</label>
        <select 
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full bg-purple-950/50 text-purple-100 px-5 py-3 rounded-xl border border-purple-500/30 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-purple-200 mb-3 text-sm font-medium">Paste Your Code:</label>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="// Paste your cursed code here..."
          className="w-full h-72 bg-purple-950/50 text-purple-100 px-5 py-4 rounded-xl border border-purple-500/30 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50 font-mono text-sm transition-all placeholder-purple-400/50"
        />
      </div>

      <button
        onClick={handleAnalyze}
        disabled={!code.trim() || analyzing}
        className="btn-primary w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg shadow-lg disabled:cursor-not-allowed"
      >
        {analyzing ? '👻 Summoning Spirits...' : '💀 Unleash the Haunting'}
      </button>
    </div>
  )
}
