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
    <div className="code-input max-w-6xl mx-auto glass-panel neon-glow rounded-3xl shadow-2xl p-12 border border-purple-500/30" style={{fontFamily: 'Inter, sans-serif'}}>
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 mb-10" style={{fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.01em'}}>
        🔮 Submit Code for Analysis
      </h2>
      
      <div className="mb-8 p-6 border border-purple-500/20 rounded-2xl bg-slate-900/40 backdrop-blur-xl hover:border-purple-400/40 transition-all">
        <label className="block text-purple-300 mb-4 text-sm font-semibold tracking-wide uppercase">Language</label>
        <select 
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full bg-slate-900/60 backdrop-blur text-purple-100 px-6 py-4 rounded-xl border border-purple-500/30 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all shadow-lg hover:shadow-purple-500/20"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-10 p-6 border border-purple-500/20 rounded-2xl bg-slate-900/40 backdrop-blur-xl hover:border-purple-400/40 transition-all">
        <label className="block text-purple-300 mb-4 text-sm font-semibold tracking-wide uppercase">Code Input</label>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="// Paste your code here for haunted analysis..."
          className="w-full h-80 bg-slate-900/60 backdrop-blur text-purple-100 px-6 py-5 rounded-xl border border-purple-500/30 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50 font-mono text-sm transition-all placeholder-purple-400/40 shadow-lg hover:shadow-purple-500/20"
        />
      </div>

      <button
        onClick={handleAnalyze}
        disabled={!code.trim() || analyzing}
        className="btn-primary w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 disabled:from-slate-700 disabled:to-slate-800 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 text-lg shadow-2xl disabled:cursor-not-allowed border border-purple-400/30 tracking-wide uppercase"
      >
        {analyzing ? '⚡ Analyzing...' : '🚀 Unleash Analysis'}
      </button>
    </div>
  )
}
