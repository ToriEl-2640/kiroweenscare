const MONSTERS = {
  ghost: { emoji: '👻', name: 'Ghost', color: 'text-gray-300' },
  zombie: { emoji: '🧟', name: 'Zombie', color: 'text-green-400' },
  vampire: { emoji: '🧛', name: 'Vampire', color: 'text-red-400' },
  demon: { emoji: '😈', name: 'Demon', color: 'text-orange-400' },
  witch: { emoji: '🧙', name: 'Witch', color: 'text-purple-400' },
  skeleton: { emoji: '💀', name: 'Skeleton', color: 'text-white' }
}

const SEVERITY_COLORS = {
  critical: 'bg-red-900 border-red-600',
  high: 'bg-orange-900 border-orange-600',
  medium: 'bg-yellow-900 border-yellow-600',
  low: 'bg-blue-900 border-blue-600'
}

export default function HauntedReport({ analysis }) {
  const totalIssues = analysis.issues.length
  const criticalCount = analysis.issues.filter(i => i.severity === 'critical').length

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="bg-gray-800 bg-opacity-90 rounded-lg shadow-2xl p-6 border-2 border-red-600">
        <h2 className="text-3xl font-bold text-red-500 mb-4 text-center">
          ⚰️ Haunting Report ⚰️
        </h2>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-700 p-4 rounded text-center">
            <div className="text-3xl font-bold text-purple-400">{totalIssues}</div>
            <div className="text-gray-300">Monsters Found</div>
          </div>
          <div className="bg-gray-700 p-4 rounded text-center">
            <div className="text-3xl font-bold text-red-400">{criticalCount}</div>
            <div className="text-gray-300">Critical Hauntings</div>
          </div>
          <div className="bg-gray-700 p-4 rounded text-center">
            <div className="text-3xl font-bold text-green-400">{analysis.linesAnalyzed}</div>
            <div className="text-gray-300">Lines Cursed</div>
          </div>
        </div>

        {totalIssues === 0 ? (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">✨</div>
            <p className="text-xl text-green-400">Your code is blessed! No monsters found.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {analysis.issues.map((issue, idx) => {
              const monster = MONSTERS[issue.monster]
              return (
                <div 
                  key={idx}
                  className={`monster-card p-4 rounded-lg border-2 ${SEVERITY_COLORS[issue.severity]}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{monster.emoji}</div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold ${monster.color} mb-1`}>
                        {monster.name}: {issue.title}
                      </h3>
                      <p className="text-gray-300 mb-2">{issue.description}</p>
                      {issue.line && (
                        <p className="text-sm text-gray-400">
                          📍 Line {issue.line}: <code className="bg-gray-900 px-2 py-1 rounded">{issue.code}</code>
                        </p>
                      )}
                      <div className="mt-2">
                        <span className={`text-xs px-2 py-1 rounded ${
                          issue.severity === 'critical' ? 'bg-red-700' :
                          issue.severity === 'high' ? 'bg-orange-700' :
                          issue.severity === 'medium' ? 'bg-yellow-700' :
                          'bg-blue-700'
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
