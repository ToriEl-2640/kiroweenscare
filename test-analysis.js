// Test the code analysis function
const testCode = `
const unusedVar = 5;
const usedVar = 10;
console.log(usedVar);
console.log("test");
console.log("test2");

// This is a long commented line that should be detected as zombie code

function emptyFunction() {}

document.innerHTML = "<div>test</div>";

addEventListener('click', () => {});

const magic = 12345;
const magic2 = 67890;
`;

function analyzeCode(code, language) {
  const lines = code.split('\n')
  const issues = []

  // Ghost: Unused variables
  const varPattern = /(?:var|let|const)\s+(\w+)\s*=/g
  let match
  
  while ((match = varPattern.exec(code)) !== null) {
    const varName = match[1]
    const usageCount = (code.match(new RegExp(`\\b${varName}\\b`, 'g')) || []).length
    if (usageCount <= 1) {
      issues.push({
        monster: 'ghost',
        title: 'Phantom Variable',
        description: `Variable "${varName}" is declared but never used.`,
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
        description: 'Commented code that refuses to die.',
        severity: 'low',
        line: idx + 1,
        code: line.trim()
      })
    }
  })

  // Vampire: Memory leaks
  if (/addEventListener|setInterval|setTimeout/.test(code) && 
      !/removeEventListener|clearInterval|clearTimeout/.test(code)) {
    issues.push({
      monster: 'vampire',
      title: 'Memory Vampire',
      description: 'Event listeners or timers without cleanup.',
      severity: 'high',
      code: 'addEventListener/setInterval without cleanup'
    })
  }

  // Demon: Security issues
  if (/eval\(|innerHTML\s*=|document\.write/.test(code)) {
    issues.push({
      monster: 'demon',
      title: 'Security Demon',
      description: 'Dangerous code patterns detected!',
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
      description: 'Too many magic numbers!',
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
      description: 'Empty function with no body.',
      severity: 'medium',
      line: code.substring(0, match.index).split('\n').length,
      code: match[0]
    })
  }

  // Vampire: Console.log
  const consoleMatches = code.match(/console\.log/g)
  if (consoleMatches && consoleMatches.length > 2) {
    issues.push({
      monster: 'vampire',
      title: 'Console Vampire',
      description: `${consoleMatches.length} console.log statements.`,
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

const result = analyzeCode(testCode, 'javascript');
console.log('Analysis Result:');
console.log(JSON.stringify(result, null, 2));
console.log(`\nTotal monsters found: ${result.issues.length}`);
