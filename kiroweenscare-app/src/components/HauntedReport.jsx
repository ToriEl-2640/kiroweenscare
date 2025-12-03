const MONSTERS = {
  ghost: { emoji: '👻', name: 'Ghost', bg: 'bg-gradient-to-br from-purple-100 to-purple-200', border: 'border-purple-500', text: 'text-purple-700' },
  zombie: { emoji: '🧟', name: 'Zombie', bg: 'bg-gradient-to-br from-green-100 to-green-200', border: 'border-green-500', text: 'text-green-700' },
  vampire: { emoji: '🧛', name: 'Vampire', bg: 'bg-gradient-to-br from-red-100 to-red-200', border: 'border-red-500', text: 'text-red-700' },
  demon: { emoji: '😈', name: 'Demon', bg: 'bg-gradient-to-br from-orange-100 to-orange-200', border: 'border-orange-500', text: 'text-orange-700' },
  witch: { emoji: '🧙', name: 'Witch', bg: 'bg-gradient-to-br from-pink-100 to-pink-200', border: 'border-pink-500', text: 'text-pink-700' },
  skeleton: { emoji: '💀', name: 'Skeleton', bg: 'bg-gradient-to-br from-gray-100 to-gray-200', border: 'border-gray-500', text: 'text-gray-700' }
}

export default function HauntedReport({ analysis }) {
  const totalIssues = analysis.issues.length
  const criticalCount = analysis.issues.filter(i => i.severity === 'critical').length

  return (
    <div className="w-full" style={{fontFamily: 'Fredoka, sans-serif'}}>
      <div className="bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-8 md:p-10 border-8 border-pink-400 transform hover:scale-[1.02] transition-transform duration-300">
        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-10 text-center drop-shadow-md">
          ⚰️ Monster Report! ⚰️
        </h2>
        
        <div className="grid grid-cols-3 gap-3 md:gap-6 mb-12">
          <div className="stats-card bg-gradient-to-br from-purple-200 to-purple-300 p-4 md:p-6 rounded-2xl text-center border-4 border-purple-600 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all">
            <div className="text-4xl md:text-6xl font-black text-purple-700 drop-shadow-md">{totalIssues}</div>
            <div className="text-purple-700 mt-2 font-bold text-sm md:text-lg drop-shadow-sm">Monsters!</div>
          </div>
          <div className="stats-card bg-gradient-to-br from-red-200 to-red-300 p-4 md:p-6 rounded-2xl text-center border-4 border-red-600 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all" style={{animationDelay: '0.2s'}}>
            <div className="text-4xl md:text-6xl font-black text-red-700 drop-shadow-md">{criticalCount}</div>
            <div className="text-red-700 mt-2 font-bold text-sm md:text-lg drop-shadow-sm">Critical!</div>
          </div>
          <div className="stats-card bg-gradient-to-br from-blue-200 to-blue-300 p-4 md:p-6 rounded-2xl text-center border-4 border-blue-600 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all" style={{animationDelay: '0.4s'}}>
            <div className="text-4xl md:text-6xl font-black text-blue-700 drop-shadow-md">{analysis.linesAnalyzed}</div>
            <div className="text-blue-700 mt-2 font-bold text-sm md:text-lg drop-shadow-sm">Lines!</div>
          </div>
        </div>

        {totalIssues === 0 ? (
          <div className="text-center py-12 md:py-16 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl border-4 border-green-500 shadow-xl">
            <div className="text-7xl md:text-9xl mb-6 animate-bounce">✨</div>
            <p className="text-3xl md:text-4xl text-green-700 font-black drop-shadow-md">All Clear!</p>
            <p className="text-lg md:text-xl text-green-600 font-bold mt-2 drop-shadow-sm">No monsters found! 🎉</p>
          </div>
        ) : (
          <div className="space-y-6">
            {analysis.issues.map((issue, idx) => {
              const monster = MONSTERS[issue.monster]
              return (
                <div 
                  key={idx}
                  className={`monster-card p-6 md:p-8 rounded-2xl border-4 ${monster.bg} ${monster.border} shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all`}
                  style={{animationDelay: `${idx * 0.15}s`}}
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="monster-emoji text-6xl md:text-8xl flex-shrink-0 drop-shadow-lg">{monster.emoji}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-2xl md:text-3xl font-black ${monster.text} mb-3 break-words drop-shadow-md`}>
                        {monster.name}: {issue.title}
                      </h3>
                      <p className={`${monster.text} mb-4 leading-relaxed text-base md:text-lg font-semibold`}>{issue.description}</p>
                      {issue.line && (
                        <p className={`text-sm md:text-base ${monster.text} mb-4 font-bold break-all`}>
                          📍 Line {issue.line}: <code className="bg-white px-2 md:px-3 py-1 md:py-2 rounded-lg font-mono border-2 border-purple-400 text-xs md:text-sm shadow-md">{issue.code}</code>
                        </p>
                      )}
                      <div className="mt-4">
                        <span className={`text-xs md:text-sm font-black px-4 md:px-5 py-1.5 md:py-2 rounded-full shadow-lg ${
                          issue.severity === 'critical' ? 'bg-gradient-to-r from-red-500 to-red-600 text-white' :
                          issue.severity === 'high' ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' :
                          issue.severity === 'medium' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white' :
                          'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
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
