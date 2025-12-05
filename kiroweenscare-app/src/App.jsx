import { useState } from 'react'
import CodeAnalyzer from './components/CodeAnalyzer'
import HauntedReport from './components/HauntedReport'
import Guide from './components/Guide'
import './index.css'

function App() {
  const [analysis, setAnalysis] = useState(null)

  return (
    <div className="app-root">
      <header className="header appear">
        <h1>👻 Kiroweenscare</h1>
        <div className="sub">
          <span>Where Bugs Become Monsters!</span>
          <span aria-hidden="true">🎃</span>
        </div>
      </header>

      <main className="sections">
        <section className="submit-panel appear">
          <CodeAnalyzer onAnalyze={setAnalysis} />
        </section>

        {analysis && (
          <section className="appear">
            <HauntedReport analysis={analysis} />
          </section>
        )}

        <section className="appear">
          <Guide />
        </section>
      </main>

      <footer className="appear" style={{ textAlign: 'center', marginTop: '2rem', color: '#5e2f80', fontWeight: 600 }}>
        Built with Kiro AI for Kiroween Hackathon 2025 ✨
      </footer>
    </div>
  )
}

export default App
