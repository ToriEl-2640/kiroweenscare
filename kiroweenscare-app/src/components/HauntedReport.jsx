const MONSTERS = {
  ghost: { emoji: '👻', name: 'Ghost', color: 'from-purple-400 to-purple-300' },
  zombie: { emoji: '🧟', name: 'Zombie', color: 'from-emerald-400 to-teal-300' },
  vampire: { emoji: '🧛', name: 'Vampire', color: 'from-pink-400 to-rose-300' },
  demon: { emoji: '😈', name: 'Demon', color: 'from-orange-400 to-amber-300' },
  witch: { emoji: '🧙', name: 'Witch', color: 'from-purple-400 to-pink-300' },
  skeleton: { emoji: '💀', name: 'Skeleton', color: 'from-slate-400 to-gray-300' }
}

const SEVERITY_COLORS = {
  critical: 'bg-gradient-to-br from-red-100/80 to-pink-100/80 border-red-300/50',
  high: 'bg-gradient-to-br from-orange-100/80 to-amber-100/80 border-orange-300/50',
  medium: 'bg-gradient-to-br from-yellow-100/80 to-amber-100/80 border-yellow-300/50',
  low: 'bg-gradient-to-br from-sky-100/80 to-cyan-100/80 border-sky-300/50'
}

export default function HauntedReport({ analysis }) {
  const totalIssues = analysis.issues.length
  const criticalCount = analysis.issues.filter(i => i.severity === 'critical').length

  return (
    <div className="max-w-5xl mx-auto mt-12" style={{fontFamily: 'Nunito, sans-serif'}}>
      <div className="glass-panel rounded-3xl shadow-2xl p-10 border border-white/40">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-sky-400 mb-10 text-center">
          ⚰️ Haunting Report ⚰️
        </h2>
        
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="stats-card bg-white/50 backdrop-blur p-6 rounded-2xl text-center border border-purple-200/50 shadow-lg">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400">{totalIssues}</div>
            <div className="text-purple-600 mt-2 font-semibold">Monsters Found</div>
          </div>
          <div className="stats-card bg-white/50 backdrop-blur p-6 rounded-2xl text-center border border-pink-200/50 shadow-lg" style={{animationDelay: '0.2s'}}>
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">{criticalCount}</div>
            <div className="text-pink-600 mt-2 font-semibold">Critical Hauntings</div>
          </div>
          <div className="stats-card bg-white/50 backdrop-blur p-6 rounded-2xl text-center border border-sky-200/50 shadow-lg" style={{animationDelay: '0.4s'}}>
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400">{analysis.linesAnalyzed}</div>
            <div className="text-sky-600 mt-2 font-semibold">Lines Cursed</div>
          </div>
        </div>

        {totalIssues === 0 ? (
          <div className="text-center py-16">
            <div className="text-8xl mb-6 animate-pulse">✨</div>
            <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400 font-bold">Your code is blessed! No monsters found.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {analysis.issues.map((issue, idx) => {
              const monster = MONSTERS[issue.monster]
              return (
                <div 
                  key={idx}
                  className={`monster-card p-7 rounded-2xl border-2 backdrop-blur shadow-lg ${SEVERITY_COLORS[issue.severity]}`}
                  style={{animationDelay: `${idx * 0.15}s`}}
                >
                  <div className="flex items-start gap-6">
                    <div className="monster-emoji text-7xl">{monster.emoji}</div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${monster.color} mb-3`}>
                        {monster.name}: {issue.title}
                      </h3>
                      <p className="text-purple-700 mb-4 leading-relaxed">{issue.description}</p>
                      {issue.line && (
                        <p className="text-sm text-purple-600 mb-4">
                          📍 Line {issue.line}: <code className="bg-white/60 px-3 py-1.5 rounded-xl font-mono text-purple-800 shadow-sm">{issue.code}</code>
                        </p>
                      )}
                      <div className="mt-3">
                        <span className={`text-xs font-bold px-4 py-2 rounded-full shadow-sm ${
                          issue.severity === 'critical' ? 'bg-red-400/80 text-white' :
                          issue.severity === 'high' ? 'bg-orange-400/80 text-white' :
                          issue.severity === 'medium' ? 'bg-yellow-400/80 text-white' :
                          'bg-sky-400/80 text-white'
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
