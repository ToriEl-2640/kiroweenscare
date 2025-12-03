export default function Guide() {
  return (
    <div className="max-w-5xl mx-auto mt-16 glass-panel rounded-3xl shadow-2xl p-10 border-2 border-purple-300/60" style={{fontFamily: 'Nunito, sans-serif'}}>
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400 mb-8 text-center">
        📖 Monster Guide - What Do They Mean?
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-5 bg-white/50 backdrop-blur rounded-2xl border-2 border-purple-200/60 shadow-sm">
          <div className="text-4xl mb-3">👻 Ghost</div>
          <h3 className="text-xl font-bold text-purple-700 mb-2">Unused Variables</h3>
          <p className="text-purple-600 text-sm">Variables declared but never used. They haunt your code unnecessarily.</p>
        </div>

        <div className="p-5 bg-white/50 backdrop-blur rounded-2xl border-2 border-emerald-200/60 shadow-sm">
          <div className="text-4xl mb-3">🧟 Zombie</div>
          <h3 className="text-xl font-bold text-emerald-700 mb-2">Dead Code</h3>
          <p className="text-emerald-600 text-sm">Commented code that refuses to die. Remove it to keep your codebase clean.</p>
        </div>

        <div className="p-5 bg-white/50 backdrop-blur rounded-2xl border-2 border-pink-200/60 shadow-sm">
          <div className="text-4xl mb-3">🧛 Vampire</div>
          <h3 className="text-xl font-bold text-pink-700 mb-2">Memory Leaks</h3>
          <p className="text-pink-600 text-sm">Event listeners or timers without cleanup. They drain your app's resources.</p>
        </div>

        <div className="p-5 bg-white/50 backdrop-blur rounded-2xl border-2 border-orange-200/60 shadow-sm">
          <div className="text-4xl mb-3">😈 Demon</div>
          <h3 className="text-xl font-bold text-orange-700 mb-2">Security Issues</h3>
          <p className="text-orange-600 text-sm">Dangerous patterns like eval() or innerHTML. Critical security vulnerabilities!</p>
        </div>

        <div className="p-5 bg-white/50 backdrop-blur rounded-2xl border-2 border-purple-200/60 shadow-sm">
          <div className="text-4xl mb-3">🧙 Witch</div>
          <h3 className="text-xl font-bold text-purple-700 mb-2">Magic Numbers</h3>
          <p className="text-purple-600 text-sm">Mysterious hardcoded numbers. Use named constants for better readability.</p>
        </div>

        <div className="p-5 bg-white/50 backdrop-blur rounded-2xl border-2 border-slate-200/60 shadow-sm">
          <div className="text-4xl mb-3">💀 Skeleton</div>
          <h3 className="text-xl font-bold text-slate-700 mb-2">Empty Functions</h3>
          <p className="text-slate-600 text-sm">Functions with no body. Just bare bones - implement or remove them.</p>
        </div>
      </div>

      <div className="mt-10 p-6 bg-gradient-to-r from-purple-100/80 to-pink-100/80 backdrop-blur rounded-2xl border-2 border-purple-300/60">
        <h3 className="text-xl font-bold text-purple-700 mb-4">Severity Levels:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-red-400/80 text-white font-bold text-xs shadow-sm">CRITICAL</span>
            <p className="text-xs text-purple-600 mt-2">Fix immediately</p>
          </div>
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-orange-400/80 text-white font-bold text-xs shadow-sm">HIGH</span>
            <p className="text-xs text-purple-600 mt-2">Fix soon</p>
          </div>
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-yellow-400/80 text-white font-bold text-xs shadow-sm">MEDIUM</span>
            <p className="text-xs text-purple-600 mt-2">Fix when convenient</p>
          </div>
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-sky-400/80 text-white font-bold text-xs shadow-sm">LOW</span>
            <p className="text-xs text-purple-600 mt-2">Nice to fix</p>
          </div>
        </div>
      </div>
    </div>
  )
}
