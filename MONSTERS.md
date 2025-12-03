# 👻 Kiroweenscare Monster Guide

## Monster Types & Detection Patterns

### 👻 Ghost - Phantom Variables
**What it detects:** Unused variables haunting your codebase

**Pattern:**
```javascript
const unusedVar = "I'm never used"; // Ghost detected!
let phantom = 42; // Ghost detected!
```

**Severity:** Low  
**Why it matters:** Clutters code, confuses developers, wastes memory

---

### 🧟 Zombie - Undead Code
**What it detects:** Commented code that refuses to die

**Pattern:**
```javascript
// function oldFunction() {
//   return "This should be deleted";
// }
```

**Severity:** Low  
**Why it matters:** Makes code harder to read, creates confusion about what's active

---

### 🧛 Vampire - Memory Drainers
**What it detects:** Memory leaks from uncleaned event listeners and timers

**Pattern:**
```javascript
// Vampire: No cleanup!
addEventListener('click', handler);
setInterval(() => {}, 1000);

// Good: Proper cleanup
const id = setInterval(() => {}, 1000);
clearInterval(id);
```

**Severity:** High  
**Why it matters:** Drains memory over time, causes performance issues

---

### 😈 Demon - Security Threats
**What it detects:** Dangerous code patterns that invite attacks

**Patterns:**
```javascript
eval('alert("XSS")'); // Demon!
element.innerHTML = userInput; // Demon!
document.write(data); // Demon!

// Missing error handling
fetch('/api').then(r => r.json()); // Demon!
```

**Severity:** Critical  
**Why it matters:** Opens security vulnerabilities, enables XSS attacks

---

### 🧙 Witch - Magic Number Curses
**What it detects:** Mysterious hardcoded numbers without context

**Pattern:**
```javascript
if (age > 18 && score > 100 && level > 50) {
  // What do these numbers mean?!
}

// Better:
const ADULT_AGE = 18;
const PASSING_SCORE = 100;
const MAX_LEVEL = 50;
```

**Severity:** Medium  
**Why it matters:** Makes code hard to understand and maintain

---

### 💀 Skeleton - Empty Functions
**What it detects:** Functions with no body, just bare bones

**Pattern:**
```javascript
function emptyFunction() {}
const skeleton = () => {};
```

**Severity:** Medium  
**Why it matters:** Indicates incomplete implementation, dead code

---

## Severity Levels

### 🔴 Critical
- Security vulnerabilities
- Data exposure risks
- Immediate action required

### 🟠 High
- Memory leaks
- Performance issues
- Should fix soon

### 🟡 Medium
- Code quality issues
- Maintainability concerns
- Fix when convenient

### 🔵 Low
- Minor improvements
- Code cleanliness
- Nice to have fixes

---

## Example: Cursed Code

```javascript
function fetchUserData() {
  const unusedVariable = "ghost"; // 👻 Ghost
  
  // Old implementation
  // return "zombie code"; // 🧟 Zombie
  
  fetch('/api/users')
    .then(r => r.json()); // 😈 Demon (no error handling)
  
  eval('process(data)'); // 😈 Demon (eval)
  
  if (user.age > 18) { // 🧙 Witch (magic number)
    element.innerHTML = user.name; // 😈 Demon (XSS risk)
  }
  
  addEventListener('click', handler); // 🧛 Vampire (no cleanup)
}

function empty() {} // 💀 Skeleton
```

**Monsters Found:** 7  
**Critical Issues:** 3 Demons  
**Haunting Level:** EXTREMELY CURSED 🔥

---

## How to Exorcise Monsters

### Remove Ghosts
```javascript
// Before
const unused = "ghost";
console.log("Hello");

// After
console.log("Hello");
```

### Bury Zombies
```javascript
// Before
// const old = "zombie";
const current = "alive";

// After
const current = "alive";
```

### Stake Vampires
```javascript
// Before
addEventListener('click', handler);

// After
const cleanup = () => {
  removeEventListener('click', handler);
};
```

### Banish Demons
```javascript
// Before
eval(code);
element.innerHTML = data;

// After
// Don't use eval!
element.textContent = data; // Safe
```

### Break Witch Curses
```javascript
// Before
if (x > 100) {}

// After
const THRESHOLD = 100;
if (x > THRESHOLD) {}
```

### Give Skeletons Bodies
```javascript
// Before
function empty() {}

// After
function implemented() {
  return "I do something!";
}
```

---

## Future Monster Types (Coming Soon)

- 🕷️ **Spider** - Tangled dependencies
- 🦇 **Bat** - Code that only works at night (timezone bugs)
- 🎃 **Jack-o'-lantern** - Hollow implementations
- 🕸️ **Cobweb** - Outdated dependencies
- ⚰️ **Coffin** - Deprecated API usage
- 🌙 **Werewolf** - Code that behaves differently in production

---

Built with 💀 for Kiroween Hackathon 2025
