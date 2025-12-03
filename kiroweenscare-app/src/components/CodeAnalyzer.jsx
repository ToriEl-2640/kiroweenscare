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
    <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-80 rounded-lg shadow-2xl p-6 border-2 border-purple-600">
      <h2 className="text-2xl font-bold text-purple-400 mb-4">
        🔮 Submit Your Code for Haunting
      </h2>
      
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Language:</label>
        <select 
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full bg-gray-700 text-gray-100 px-4 py-2 rounded border border-gray-600 focus:border-purple-500 focus:outline-none"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Paste Your Code:</label>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="// Paste your cursed code here..."
          className="w-full h-64 bg-gray-700 text-gray-100 px-4 py-3 rounded border border-gray-600 focus:border-purple-500 focus:outline-none font-mono text-sm"
        />
      </div>

      <button
        onClick={handleAnalyze}
        disabled={!code.trim() || analyzing}
        className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white font-bold py-3 px-6 rounded transition-colors duration-300 text-lg"
      >
        {analyzing ? '👻 Summoning Spirits...' : '💀 Unleash the Haunting'}
      </button>
    </div>
  )
}
