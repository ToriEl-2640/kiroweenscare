const MONSTERS = {
  ghost: { emoji: '👻', name: 'Ghost', bg: 'bg-purple-100', border: 'border-purple-400', text: 'text-purple-700' },
  zombie: { emoji: '🧟', name: 'Zombie', bg: 'bg-green-100', border: 'border-green-400', text: 'text-green-700' },
  vampire: { emoji: '🧛', name: 'Vampire', bg: 'bg-red-100', border: 'border-red-400', text: 'text-red-700' },
  demon: { emoji: '😈', name: 'Demon', bg: 'bg-orange-100', border: 'border-orange-400', text: 'text-orange-700' },
  witch: { emoji: '🧙', name: 'Witch', bg: 'bg-pink-100', border: 'border-pink-400', text: 'text-pink-700' },
  skeleton: { emoji: '💀', name: 'Skeleton', bg: 'bg-gray-100', border: 'border-gray-400', text: 'text-gray-700' }
}

export default function HauntedReport({ analysis }) {
  const totalIssues = analysis.issues.length
  const criticalCount = analysis.issues.filter(i => i.severity === 'critical').length

  return (
    <div className="max-w-5xl mx-auto mt-12" style={{fontFamily: 'Fredoka, sans-serif'}}>
      <div className="bg-white rounded-3xl shadow-2xl p-10 border-8 border-pink-400">
        <h2 className="text-5xl font-black text-pink-600 mb-10 text-center">
          ⚰️ Monster Report! ⚰️
        </h2>
        
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="stats-card bg-purple-200 p-6 rounded-2xl text-center border-4 border-purple-500 shadow-xl">
            <div className="text-6xl font-black text-purple-700">{totalIssues}</div>
            <div className="text-purple-700 mt-2 font-bold text-lg">Monsters!</div>
          </div>
          <div className="stats-card bg-red-200 p-6 rounded-2xl text-center border-4 border-red-500 shadow-xl" style={{animationDelay: '0.2s'}}>
            <div className="text-6xl font-black text-red-700">{criticalCount}</div>
            <div className="text-red-700 mt-2 font-bold text-lg">Critical!</div>
          </div>
          <div className="stats-card bg-blue-200 p-6 rounded-2xl text-center border-4 border-blue-500 shadow-xl" style={{animationDelay: '0.4s'}}>
            <div className="text-6xl font-black text-blue-700">{analysis.linesAnalyzed}</div>
            <div className="text-blue-700 mt-2 font-bold text-lg">Lines!</div>
          </div>
        </div>

        {totalIssues === 0 ? (
          <div className="text-center py-16 bg-green-100 rounded-3xl border-4 border-green-400">
            <div className="text-9xl mb-6">✨</div>
            <p className="text-4xl text-green-700 font-black">All Clear!</p>
            <p className="text-xl text-green-600 font-bold mt-2">No monsters found! 🎉</p>
          </div>
        ) : (
          <div className="space-y-6">
            {analysis.issues.map((issue, idx) => {
              const monster = MONSTERS[issue.monster]
              return (
                <div 
                  key={idx}
                  className={`monster-card p-8 rounded-2xl border-4 ${monster.bg} ${monster.border} shadow-xl`}
                  style={{animationDelay: `${idx * 0.15}s`}}
                >
                  <div className="flex items-start gap-6">
                    <div className="monster-emoji text-8xl">{monster.emoji}</div>
                    <div className="flex-1">
                      <h3 className={`text-3xl font-black ${monster.text} mb-3`}>
                        {monster.name}: {issue.title}
                      </h3>
                      <p className={`${monster.text} mb-4 leading-relaxed text-lg font-semibold`}>{issue.description}</p>
                      {issue.line && (
                        <p className={`text-base ${monster.text} mb-4 font-bold`}>
                          📍 Line {issue.line}: <code className="bg-white px-3 py-2 rounded-lg font-mono border-2 border-purple-300">{issue.code}</code>
                        </p>
                      )}
                      <div className="mt-4">
                        <span className={`text-sm font-black px-5 py-2 rounded-full shadow-lg ${
                          issue.severity === 'critical' ? 'bg-red-500 text-white' :
                          issue.severity === 'high' ? 'bg-orange-500 text-white' :
                          issue.severity === 'medium' ? 'bg-yellow-500 text-white' :
                          'bg-blue-500 text-white'
                        }`}>
                          {issue.severity.toUpperCase()}!
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
