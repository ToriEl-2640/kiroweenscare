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
    <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-8 md:p-10 border-8 border-purple-400 transform hover:scale-[1.02] transition-transform duration-300" style={{fontFamily: 'Fredoka, sans-serif'}}>
      <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-8 text-center drop-shadow-md">
        🔮 Submit Your Code!
      </h2>
      
      <div className="mb-6 p-5 md:p-6 border-4 border-pink-400 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 shadow-lg">
        <label className="block text-pink-700 mb-3 text-base md:text-lg font-bold drop-shadow-sm">Pick a Language:</label>
        <select 
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full bg-white text-purple-700 px-4 md:px-5 py-3 md:py-4 rounded-xl border-4 border-purple-300 focus:border-purple-500 focus:outline-none text-base md:text-lg font-bold shadow-xl hover:shadow-2xl transition-shadow"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-8 p-5 md:p-6 border-4 border-yellow-400 rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg">
        <label className="block text-yellow-700 mb-3 text-base md:text-lg font-bold drop-shadow-sm">Paste Your Code:</label>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="// Paste your spooky code here! 👻"
          rows="15"
          className="w-full bg-white text-purple-700 px-4 md:px-5 py-3 md:py-4 rounded-xl border-4 border-yellow-300 focus:border-yellow-500 focus:outline-none font-mono text-sm md:text-base shadow-xl placeholder-purple-400 hover:shadow-2xl transition-shadow resize-y"
        />
      </div>

      <button
        onClick={handleAnalyze}
        disabled={!code.trim() || analyzing}
        className="btn-primary w-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 hover:from-purple-700 hover:via-pink-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-black py-4 md:py-5 px-6 md:px-8 rounded-2xl transition-all duration-300 text-xl md:text-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] disabled:cursor-not-allowed border-4 border-purple-700 hover:shadow-[0_15px_40px_rgba(168,85,247,0.5)] transform hover:-translate-y-1"
      >
        {analyzing ? '👻 Finding Monsters...' : '🚀 Find the Monsters!'}
      </button>
    </div>
  )
}
