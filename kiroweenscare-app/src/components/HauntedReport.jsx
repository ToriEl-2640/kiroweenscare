const MONSTERS = {
  ghost: { emoji: '👻', name: 'Ghost', color: 'from-purple-400 to-purple-300', glow: 'rgba(168, 85, 247, 0.3)' },
  zombie: { emoji: '🧟', name: 'Zombie', color: 'from-emerald-400 to-teal-300', glow: 'rgba(16, 185, 129, 0.3)' },
  vampire: { emoji: '🧛', name: 'Vampire', color: 'from-pink-400 to-rose-300', glow: 'rgba(236, 72, 153, 0.3)' },
  demon: { emoji: '😈', name: 'Demon', color: 'from-orange-400 to-amber-300', glow: 'rgba(251, 146, 60, 0.3)' },
  witch: { emoji: '🧙', name: 'Witch', color: 'from-purple-400 to-pink-300', glow: 'rgba(192, 132, 252, 0.3)' },
  skeleton: { emoji: '💀', name: 'Skeleton', color: 'from-slate-300 to-gray-200', glow: 'rgba(148, 163, 184, 0.3)' }
}

const SEVERITY_COLORS = {
  critical: 'bg-gradient-to-br from-red-950/60 to-pink-950/60 border-red-500/40',
  high: 'bg-gradient-to-br from-orange-950/60 to-amber-950/60 border-orange-500/40',
  medium: 'bg-gradient-to-br from-yellow-950/60 to-amber-950/60 border-yellow-500/40',
  low: 'bg-gradient-to-br from-blue-950/60 to-cyan-950/60 border-blue-500/40'
}

export default function HauntedReport({ analysis }) {
  const totalIssues = analysis.issues.length
  const criticalCount = analysis.issues.filter(i => i.severity === 'critical').length

  return (
    <div className="max-w-6xl mx-auto mt-16" style={{fontFamily: 'Inter, sans-serif'}}>
      <div className="glass-panel neon-glow rounded-3xl shadow-2xl p-12 border border-purple-500/30">
        <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 mb-12 text-center tracking-tight" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
          ANALYSIS REPORT
        </h2>
        
        <div className="grid grid-cols-3 gap-8 mb-16">
          <div className="stats-card glass-panel p-8 rounded-2xl text-center border border-purple-500/30 neon-glow">
            <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{totalIssues}</div>
            <div className="text-purple-300 mt-3 font-semibold tracking-wide uppercase text-sm">Issues Found</div>
          </div>
          <div className="stats-card glass-panel p-8 rounded-2xl text-center border border-pink-500/30 neon-glow" style={{animationDelay: '0.2s'}}>
            <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400">{criticalCount}</div>
            <div className="text-pink-300 mt-3 font-semibold tracking-wide uppercase text-sm">Critical</div>
          </div>
          <div className="stats-card glass-panel p-8 rounded-2xl text-center border border-blue-500/30 neon-glow" style={{animationDelay: '0.4s'}}>
            <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{analysis.linesAnalyzed}</div>
            <div className="text-blue-300 mt-3 font-semibold tracking-wide uppercase text-sm">Lines Analyzed</div>
          </div>
        </div>

        {totalIssues === 0 ? (
          <div className="text-center py-20">
            <div className="text-9xl mb-8">✨</div>
            <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-bold tracking-tight" style={{fontFamily: 'Space Grotesk, sans-serif'}}>CODE CLEAN</p>
            <p className="text-purple-300 mt-4">No issues detected</p>
          </div>
        ) : (
          <div className="space-y-6">
            {analysis.issues.map((issue, idx) => {
              const monster = MONSTERS[issue.monster]
              return (
                <div 
                  key={idx}
                  className={`monster-card p-8 rounded-2xl border-2 backdrop-blur-xl ${SEVERITY_COLORS[issue.severity]}`}
                  style={{animationDelay: `${idx * 0.15}s`, boxShadow: `0 10px 40px ${monster.glow}`}}
                >
                  <div className="flex items-start gap-8">
                    <div className="monster-emoji text-7xl">{monster.emoji}</div>
                    <div className="flex-1">
                      <h3 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${monster.color} mb-3 tracking-tight`} style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                        {monster.name}: {issue.title}
                      </h3>
                      <p className="text-purple-200 mb-5 leading-relaxed text-lg">{issue.description}</p>
                      {issue.line && (
                        <p className="text-sm text-purple-300 mb-5">
                          📍 Line {issue.line}: <code className="bg-slate-900/80 px-4 py-2 rounded-lg font-mono text-purple-200 shadow-lg border border-purple-500/20">{issue.code}</code>
                        </p>
                      )}
                      <div className="mt-4">
                        <span className={`text-xs font-bold px-5 py-2.5 rounded-full shadow-lg tracking-wider uppercase ${
                          issue.severity === 'critical' ? 'bg-red-600/90 text-white' :
                          issue.severity === 'high' ? 'bg-orange-600/90 text-white' :
                          issue.severity === 'medium' ? 'bg-yellow-600/90 text-white' :
                          'bg-blue-600/90 text-white'
                        }`}>
                          {issue.severity}
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
