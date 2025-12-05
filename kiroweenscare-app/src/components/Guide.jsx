export default function Guide() {
  return (
    <div className="bg-gradient-to-br from-white to-yellow-50 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-10 transform hover:scale-[1.02] transition-transform duration-300" style={{fontFamily: 'Fredoka, sans-serif'}}>
      <h2 className="text-4xl font-black bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-10 text-center drop-shadow-md">
        📖 Meet the Monsters!
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="guide-card p-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl border-4 border-purple-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all">
          <div className="text-6xl mb-3 drop-shadow-lg">👻</div>
          <h3 className="text-2xl font-black text-purple-700 mb-2 drop-shadow-sm">Ghost</h3>
          <p className="text-purple-600 font-semibold">Unused variables haunting your code!</p>
        </div>

        <div className="guide-card p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl border-4 border-green-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all" style={{animationDelay: '0.1s'}}>
          <div className="text-6xl mb-3 drop-shadow-lg">🧟</div>
          <h3 className="text-2xl font-black text-green-700 mb-2 drop-shadow-sm">Zombie</h3>
          <p className="text-green-600 font-semibold">Dead code that won't go away!</p>
        </div>

        <div className="guide-card p-6 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl border-4 border-red-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all" style={{animationDelay: '0.2s'}}>
          <div className="text-6xl mb-3 drop-shadow-lg">🧛</div>
          <h3 className="text-2xl font-black text-red-700 mb-2 drop-shadow-sm">Vampire</h3>
          <p className="text-red-600 font-semibold">Memory leaks draining your app!</p>
        </div>

        <div className="guide-card p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl border-4 border-orange-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all" style={{animationDelay: '0.3s'}}>
          <div className="text-6xl mb-3 drop-shadow-lg">😈</div>
          <h3 className="text-2xl font-black text-orange-700 mb-2 drop-shadow-sm">Demon</h3>
          <p className="text-orange-600 font-semibold">Scary security problems!</p>
        </div>

        <div className="guide-card p-6 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl border-4 border-pink-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all" style={{animationDelay: '0.4s'}}>
          <div className="text-6xl mb-3 drop-shadow-lg">🧙</div>
          <h3 className="text-2xl font-black text-pink-700 mb-2 drop-shadow-sm">Witch</h3>
          <p className="text-pink-600 font-semibold">Magic numbers everywhere!</p>
        </div>

        <div className="guide-card p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl border-4 border-gray-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all" style={{animationDelay: '0.5s'}}>
          <div className="text-6xl mb-3 drop-shadow-lg">💀</div>
          <h3 className="text-2xl font-black text-gray-700 mb-2 drop-shadow-sm">Skeleton</h3>
          <p className="text-gray-600 font-semibold">Empty functions with no body!</p>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 rounded-2xl border-4 border-purple-500 shadow-xl">
        <h3 className="text-xl font-black text-purple-700 mb-4 text-center drop-shadow-sm">How Bad Is It?</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="text-center transform hover:scale-110 transition-transform">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white font-black text-xs shadow-lg">CRITICAL</span>
            <p className="text-xs text-purple-700 mt-1 font-bold">Fix NOW</p>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-black text-xs shadow-lg">HIGH</span>
            <p className="text-xs text-purple-700 mt-1 font-bold">Fix Soon</p>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-black text-xs shadow-lg">MEDIUM</span>
            <p className="text-xs text-purple-700 mt-1 font-bold">Fix Later</p>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-black text-xs shadow-lg">LOW</span>
            <p className="text-xs text-purple-700 mt-1 font-bold">No Rush</p>
          </div>
        </div>
      </div>
    </div>
  )
}
