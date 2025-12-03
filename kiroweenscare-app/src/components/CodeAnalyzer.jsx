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
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-8 border-purple-400" style={{fontFamily: 'Fredoka, sans-serif'}}>
      <h2 className="text-3xl md:text-4xl font-black text-purple-600 mb-8 text-center">
        🔮 Submit Your Code!
      </h2>
      
      <div className="mb-6 p-5 md:p-6 border-4 border-pink-300 rounded-2xl bg-pink-50">
        <label className="block text-pink-700 mb-3 text-base md:text-lg font-bold">Pick a Language:</label>
        <select 
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full bg-white text-purple-700 px-4 md:px-5 py-3 md:py-4 rounded-xl border-4 border-purple-300 focus:border-purple-500 focus:outline-none text-base md:text-lg font-bold shadow-lg"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-8 p-5 md:p-6 border-4 border-yellow-300 rounded-2xl bg-yellow-50">
        <label className="block text-yellow-700 mb-3 text-base md:text-lg font-bold">Paste Your Code:</label>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="// Paste your spooky code here! 👻"
          className="w-full h-64 md:h-72 bg-white text-purple-700 px-4 md:px-5 py-3 md:py-4 rounded-xl border-4 border-yellow-300 focus:border-yellow-500 focus:outline-none font-mono text-sm md:text-base shadow-lg placeholder-purple-400"
        />
      </div>

      <button
        onClick={handleAnalyze}
        disabled={!code.trim() || analyzing}
        className="btn-primary w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-black py-4 md:py-5 px-6 md:px-8 rounded-2xl transition-all duration-300 text-xl md:text-2xl shadow-2xl disabled:cursor-not-allowed border-4 border-purple-700"
      >
        {analyzing ? '👻 Finding Monsters...' : '🚀 Find the Monsters!'}
      </button>
    </div>
  )
}
