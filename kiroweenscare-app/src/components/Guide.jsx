export default function Guide() {
  return (
    <div className="max-w-6xl mx-auto mt-20 glass-panel neon-glow rounded-3xl shadow-2xl p-12 border border-purple-500/30" style={{fontFamily: 'Inter, sans-serif'}}>
      <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-12 text-center tracking-tight" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
        MONSTER GUIDE
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="guide-card p-6 glass-panel backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-lg hover:shadow-purple-500/30">
          <div className="text-5xl mb-4">👻</div>
          <h3 className="text-2xl font-bold text-purple-300 mb-3 tracking-tight" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Ghost</h3>
          <p className="text-purple-400 text-sm leading-relaxed">Unused variables haunting your codebase. Declared but never referenced.</p>
        </div>

        <div className="guide-card p-6 glass-panel backdrop-blur-xl rounded-2xl border border-emerald-500/30 shadow-lg hover:shadow-emerald-500/30" style={{animationDelay: '0.1s'}}>
          <div className="text-5xl mb-4">🧟</div>
          <h3 className="text-2xl font-bold text-emerald-300 mb-3 tracking-tight" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Zombie</h3>
          <p className="text-emerald-400 text-sm leading-relaxed">Dead commented code refusing to die. Remove for cleaner codebase.</p>
        </div>

        <div className="guide-card p-6 glass-panel backdrop-blur-xl rounded-2xl border border-pink-500/30 shadow-lg hover:shadow-pink-500/30" style={{animationDelay: '0.2s'}}>
          <div className="text-5xl mb-4">🧛</div>
          <h3 className="text-2xl font-bold text-pink-300 mb-3 tracking-tight" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Vampire</h3>
          <p className="text-pink-400 text-sm leading-relaxed">Memory leaks draining resources. Event listeners without cleanup.</p>
        </div>

        <div className="guide-card p-6 glass-panel backdrop-blur-xl rounded-2xl border border-orange-500/30 shadow-lg hover:shadow-orange-500/30" style={{animationDelay: '0.3s'}}>
          <div className="text-5xl mb-4">😈</div>
          <h3 className="text-2xl font-bold text-orange-300 mb-3 tracking-tight" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Demon</h3>
          <p className="text-orange-400 text-sm leading-relaxed">Critical security vulnerabilities. Dangerous patterns like eval() or innerHTML.</p>
        </div>

        <div className="guide-card p-6 glass-panel backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-lg hover:shadow-purple-500/30" style={{animationDelay: '0.4s'}}>
          <div className="text-5xl mb-4">🧙</div>
          <h3 className="text-2xl font-bold text-purple-300 mb-3 tracking-tight" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Witch</h3>
          <p className="text-purple-400 text-sm leading-relaxed">Magic numbers cursing readability. Use named constants instead.</p>
        </div>

        <div className="guide-card p-6 glass-panel backdrop-blur-xl rounded-2xl border border-slate-500/30 shadow-lg hover:shadow-slate-500/30" style={{animationDelay: '0.5s'}}>
          <div className="text-5xl mb-4">💀</div>
          <h3 className="text-2xl font-bold text-slate-300 mb-3 tracking-tight" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Skeleton</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Empty functions with no body. Implement or remove them.</p>
        </div>
      </div>

      <div className="mt-12 p-8 glass-panel backdrop-blur-xl rounded-2xl border border-purple-500/30">
        <h3 className="text-2xl font-bold text-purple-300 mb-6 tracking-tight" style={{fontFamily: 'Space Grotesk, sans-serif'}}>SEVERITY LEVELS</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <span className="inline-block px-6 py-3 rounded-full bg-red-600/90 text-white font-bold text-xs shadow-lg tracking-wider uppercase">Critical</span>
            <p className="text-xs text-purple-400 mt-3">Fix immediately</p>
          </div>
          <div className="text-center">
            <span className="inline-block px-6 py-3 rounded-full bg-orange-600/90 text-white font-bold text-xs shadow-lg tracking-wider uppercase">High</span>
            <p className="text-xs text-purple-400 mt-3">Fix soon</p>
          </div>
          <div className="text-center">
            <span className="inline-block px-6 py-3 rounded-full bg-yellow-600/90 text-white font-bold text-xs shadow-lg tracking-wider uppercase">Medium</span>
            <p className="text-xs text-purple-400 mt-3">Fix when convenient</p>
          </div>
          <div className="text-center">
            <span className="inline-block px-6 py-3 rounded-full bg-blue-600/90 text-white font-bold text-xs shadow-lg tracking-wider uppercase">Low</span>
            <p className="text-xs text-purple-400 mt-3">Nice to fix</p>
          </div>
        </div>
      </div>
    </div>
  )
}
