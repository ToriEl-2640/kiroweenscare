export default function Guide() {
  return (
    <div className="max-w-5xl mx-auto mt-16 bg-white rounded-3xl shadow-2xl p-10 border-8 border-yellow-400" style={{fontFamily: 'Fredoka, sans-serif'}}>
      <h2 className="text-4xl font-black text-yellow-600 mb-10 text-center">
        📖 Meet the Monsters!
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="guide-card p-6 bg-purple-100 rounded-2xl border-4 border-purple-400 shadow-lg">
          <div className="text-6xl mb-3">👻</div>
          <h3 className="text-2xl font-black text-purple-700 mb-2">Ghost</h3>
          <p className="text-purple-600 font-semibold">Unused variables haunting your code!</p>
        </div>

        <div className="guide-card p-6 bg-green-100 rounded-2xl border-4 border-green-400 shadow-lg" style={{animationDelay: '0.1s'}}>
          <div className="text-6xl mb-3">🧟</div>
          <h3 className="text-2xl font-black text-green-700 mb-2">Zombie</h3>
          <p className="text-green-600 font-semibold">Dead code that won't go away!</p>
        </div>

        <div className="guide-card p-6 bg-red-100 rounded-2xl border-4 border-red-400 shadow-lg" style={{animationDelay: '0.2s'}}>
          <div className="text-6xl mb-3">🧛</div>
          <h3 className="text-2xl font-black text-red-700 mb-2">Vampire</h3>
          <p className="text-red-600 font-semibold">Memory leaks draining your app!</p>
        </div>

        <div className="guide-card p-6 bg-orange-100 rounded-2xl border-4 border-orange-400 shadow-lg" style={{animationDelay: '0.3s'}}>
          <div className="text-6xl mb-3">😈</div>
          <h3 className="text-2xl font-black text-orange-700 mb-2">Demon</h3>
          <p className="text-orange-600 font-semibold">Scary security problems!</p>
        </div>

        <div className="guide-card p-6 bg-pink-100 rounded-2xl border-4 border-pink-400 shadow-lg" style={{animationDelay: '0.4s'}}>
          <div className="text-6xl mb-3">🧙</div>
          <h3 className="text-2xl font-black text-pink-700 mb-2">Witch</h3>
          <p className="text-pink-600 font-semibold">Magic numbers everywhere!</p>
        </div>

        <div className="guide-card p-6 bg-gray-100 rounded-2xl border-4 border-gray-400 shadow-lg" style={{animationDelay: '0.5s'}}>
          <div className="text-6xl mb-3">💀</div>
          <h3 className="text-2xl font-black text-gray-700 mb-2">Skeleton</h3>
          <p className="text-gray-600 font-semibold">Empty functions with no body!</p>
        </div>
      </div>

      <div className="mt-12 p-8 bg-gradient-to-r from-purple-200 to-pink-200 rounded-2xl border-4 border-purple-400">
        <h3 className="text-2xl font-black text-purple-700 mb-6 text-center">How Bad Is It?</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <span className="inline-block px-5 py-3 rounded-full bg-red-500 text-white font-black text-sm shadow-lg">CRITICAL!</span>
            <p className="text-sm text-purple-700 mt-2 font-bold">Fix NOW!</p>
          </div>
          <div className="text-center">
            <span className="inline-block px-5 py-3 rounded-full bg-orange-500 text-white font-black text-sm shadow-lg">HIGH!</span>
            <p className="text-sm text-purple-700 mt-2 font-bold">Fix Soon!</p>
          </div>
          <div className="text-center">
            <span className="inline-block px-5 py-3 rounded-full bg-yellow-500 text-white font-black text-sm shadow-lg">MEDIUM!</span>
            <p className="text-sm text-purple-700 mt-2 font-bold">Fix Later!</p>
          </div>
          <div className="text-center">
            <span className="inline-block px-5 py-3 rounded-full bg-blue-500 text-white font-black text-sm shadow-lg">LOW!</span>
            <p className="text-sm text-purple-700 mt-2 font-bold">No Rush!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
