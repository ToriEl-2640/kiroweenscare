const MONSTERS = {
  ghost: { emoji: '👻', name: 'Ghost', color: 'from-purple-400 to-purple-200' },
  zombie: { emoji: '🧟', name: 'Zombie', color: 'from-teal-400 to-teal-200' },
  vampire: { emoji: '🧛', name: 'Vampire', color: 'from-pink-400 to-pink-200' },
  demon: { emoji: '😈', name: 'Demon', color: 'from-yellow-400 to-yellow-200' },
  witch: { emoji: '🧙', name: 'Witch', color: 'from-purple-400 to-pink-400' },
  skeleton: { emoji: '💀', name: 'Skeleton', color: 'from-gray-300 to-gray-100' }
}

const SEVERITY_COLORS = {
  critical: 'bg-gradient-to-br from-red-900/50 to-pink-900/50 border-red-500/50',
  high: 'bg-gradient-to-br from-orange-900/50 to-yellow-900/50 border-orange-500/50',
  medium: 'bg-gradient-to-br from-yellow-900/50 to-amber-900/50 border-yellow-500/50',
  low: 'bg-gradient-to-br from-teal-900/50 to-cyan-900/50 border-teal-500/50'
}

export default function HauntedReport({ analysis }) {
  const totalIssues = analysis.issues.length
  const criticalCount = analysis.issues.filter(i => i.severity === 'critical').length

  return (
    <div className="max-w-5xl mx-auto mt-12">
      <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-purple-500/30">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 mb-8 text-center">
          ⚰️ Haunting Report ⚰️
        </h2>
        
        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="stats-card bg-gradient-to-br from-purple-800/50 to-purple-900/50 backdrop-blur p-6 rounded-2xl text-center border border-purple-500/30 hover:scale-105 transition-transform">
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">{totalIssues}</div>
            <div className="text-purple-200 mt-2 font-medium">Monsters Found</div>
          </div>
          <div className="stats-card bg-gradient-to-br from-pink-800/50 to-red-900/50 backdrop-blur p-6 rounded-2xl text-center border border-pink-500/30 hover:scale-105 transition-transform" style={{animationDelay: '0.1s'}}>
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-red-300">{criticalCount}</div>
            <div className="text-pink-200 mt-2 font-medium">Critical Hauntings</div>
          </div>
          <div className="stats-card bg-gradient-to-br from-teal-800/50 to-cyan-900/50 backdrop-blur p-6 rounded-2xl text-center border border-teal-500/30 hover:scale-105 transition-transform" style={{animationDelay: '0.2s'}}>
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">{analysis.linesAnalyzed}</div>
            <div className="text-teal-200 mt-2 font-medium">Lines Cursed</div>
          </div>
        </div>

        {totalIssues === 0 ? (
          <div className="text-center py-12">
            <div className="text-7xl mb-6">✨</div>
            <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300 font-semibold">Your code is blessed! No monsters found.</p>
          </div>
        ) : (
          <div className="space-y-5">
            {analysis.issues.map((issue, idx) => {
              const monster = MONSTERS[issue.monster]
              return (
                <div 
                  key={idx}
                  className={`monster-card p-6 rounded-2xl border-2 backdrop-blur ${SEVERITY_COLORS[issue.severity]}`}
                  style={{animationDelay: `${idx * 0.1}s`}}
                >
                  <div className="flex items-start gap-5">
                    <div className="text-6xl">{monster.emoji}</div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${monster.color} mb-2`}>
                        {monster.name}: {issue.title}
                      </h3>
                      <p className="text-purple-100 mb-3 leading-relaxed">{issue.description}</p>
                      {issue.line && (
                        <p className="text-sm text-purple-300 mb-3">
                          📍 Line {issue.line}: <code className="bg-purple-950/70 px-3 py-1 rounded-lg font-mono text-purple-200">{issue.code}</code>
                        </p>
                      )}
                      <div className="mt-3">
                        <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                          issue.severity === 'critical' ? 'bg-red-600/80 text-red-100' :
                          issue.severity === 'high' ? 'bg-orange-600/80 text-orange-100' :
                          issue.severity === 'medium' ? 'bg-yellow-600/80 text-yellow-100' :
                          'bg-teal-600/80 text-teal-100'
                        }`}>
                          {issue.severity.toUpperCase()}
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
