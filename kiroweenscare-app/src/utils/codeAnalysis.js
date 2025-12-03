export function analyzeCode(code, language) {
  const lines = code.split('\n')
  const issues = []

  // Ghost: Unused variables
  const varPattern = /(?:var|let|const)\s+(\w+)\s*=/g
  const usedVars = new Set()
  let match
  
  while ((match = varPattern.exec(code)) !== null) {
    const varName = match[1]
    const usageCount = (code.match(new RegExp(`\\b${varName}\\b`, 'g')) || []).length
    if (usageCount <= 1) {
      issues.push({
        monster: 'ghost',
        title: 'Phantom Variable',
        description: `Variable "${varName}" is declared but never used. It haunts your code like a restless spirit.`,
        severity: 'low',
        line: code.substring(0, match.index).split('\n').length,
        code: match[0]
      })
    }
  }

  // Zombie: Dead/commented code
  lines.forEach((line, idx) => {
    if (line.trim().startsWith('//') && line.length > 20) {
      issues.push({
        monster: 'zombie',
        title: 'Undead Code',
        description: 'Commented code that refuses to die. Remove it or bring it back to life!',
        severity: 'low',
        line: idx + 1,
        code: line.trim()
      })
    }
  })

  // Vampire: Memory leaks (event listeners, intervals)
  if (/addEventListener|setInterval|setTimeout/.test(code) && 
      !/removeEventListener|clearInterval|clearTimeout/.test(code)) {
    issues.push({
      monster: 'vampire',
      title: 'Memory Vampire',
      description: 'Event listeners or timers that drain memory. They feed on your resources!',
      severity: 'high',
      code: 'addEventListener/setInterval without cleanup'
    })
  }

  // Demon: Security issues
  if (/eval\(|innerHTML\s*=|document\.write/.test(code)) {
    issues.push({
      monster: 'demon',
      title: 'Security Demon',
      description: 'Dangerous code patterns detected! eval(), innerHTML, or document.write can summon XSS demons.',
      severity: 'critical',
      code: 'eval/innerHTML/document.write'
    })
  }

  // Witch: Magic numbers
  const magicNumbers = code.match(/\b\d{2,}\b/g)
  if (magicNumbers && magicNumbers.length > 3) {
    issues.push({
      monster: 'witch',
      title: 'Magic Numbers Curse',
      description: 'Too many magic numbers! The witch has cursed your code with mysterious constants.',
      severity: 'medium',
      code: magicNumbers.slice(0, 3).join(', ') + '...'
    })
  }

  // Skeleton: Empty functions
  const emptyFuncPattern = /function\s+\w+\s*\([^)]*\)\s*\{\s*\}/g
  while ((match = emptyFuncPattern.exec(code)) !== null) {
    issues.push({
      monster: 'skeleton',
      title: 'Skeleton Function',
      description: 'Empty function with no body. Just bare bones!',
      severity: 'medium',
      line: code.substring(0, match.index).split('\n').length,
      code: match[0]
    })
  }

  // Demon: No error handling
  if (/fetch\(|axios\.|\.then\(/.test(code) && !/catch\(|try\s*\{/.test(code)) {
    issues.push({
      monster: 'demon',
      title: 'Error Demon',
      description: 'Async operations without error handling. Demons thrive in unhandled chaos!',
      severity: 'high',
      code: 'Missing .catch() or try/catch'
    })
  }

  // Vampire: Console.log left in code
  const consoleMatches = code.match(/console\.log/g)
  if (consoleMatches && consoleMatches.length > 2) {
    issues.push({
      monster: 'vampire',
      title: 'Console Vampire',
      description: `${consoleMatches.length} console.log statements sucking performance. Remove them before production!`,
      severity: 'low',
      code: `${consoleMatches.length} console.log calls`
    })
  }

  return {
    issues,
    linesAnalyzed: lines.length,
    language
  }
}
