# Code Analyzer Spec

## Purpose
Analyze user-submitted code and identify common issues, bugs, and anti-patterns, presenting them as spooky "monsters" for the Kiroweenscare Haunted Code Review application.

## Monster Types

### 👻 Ghost - Unused Variables
- **Detection**: Variables declared but never used
- **Severity**: Low
- **Pattern**: `var|let|const` declarations with single occurrence

### 🧟 Zombie - Dead Code
- **Detection**: Commented out code blocks
- **Severity**: Low
- **Pattern**: Lines starting with `//` that are substantial (>20 chars)

### 🧛 Vampire - Memory Leaks
- **Detection**: Event listeners, intervals, or timers without cleanup
- **Severity**: High
- **Pattern**: `addEventListener|setInterval|setTimeout` without corresponding removal

### 😈 Demon - Security Issues
- **Detection**: Dangerous code patterns
- **Severity**: Critical
- **Patterns**: 
  - `eval()` usage
  - `innerHTML` assignments
  - `document.write()`
  - Async operations without error handling

### 🧙 Witch - Magic Numbers
- **Detection**: Hardcoded numeric constants
- **Severity**: Medium
- **Pattern**: Multiple numeric literals (2+ digits) without context

### 💀 Skeleton - Empty Functions
- **Detection**: Function declarations with no body
- **Severity**: Medium
- **Pattern**: `function name() {}`

## Analysis Output

```javascript
{
  issues: [
    {
      monster: 'ghost' | 'zombie' | 'vampire' | 'demon' | 'witch' | 'skeleton',
      title: string,
      description: string,
      severity: 'critical' | 'high' | 'medium' | 'low',
      line?: number,
      code: string
    }
  ],
  linesAnalyzed: number,
  language: string
}
```

## Implementation Requirements
- Regex-based pattern matching for speed
- Line number tracking for precise issue location
- Severity-based prioritization
- Support for JavaScript, Python, Java (extensible)
