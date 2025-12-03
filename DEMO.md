# Kiroweenscare Demo Guide

## Quick Start

1. **Install and Run**
   ```bash
   cd kiroweenscare-app
   npm install
   npm run dev
   ```

2. **Open Browser**
   Navigate to `http://localhost:5173`

## Demo Script (3 minutes)

### Introduction (30 seconds)
"Welcome to Kiroweenscare - a haunted code review tool that transforms boring bug reports into a spooky experience. Instead of generic error messages, your code issues become supernatural monsters!"

### Feature Showcase (2 minutes)

**1. The Interface (15 seconds)**
- Show the dark, atmospheric UI with fog effects
- Point out the flickering title and spooky animations
- Highlight the Halloween-themed color scheme

**2. Code Analysis (45 seconds)**
- Paste the example cursed code from `example-cursed-code.js`
- Click "Unleash the Haunting"
- Show the "Summoning Spirits..." loading animation
- Reveal the Haunted Report with statistics

**3. Monster Types (45 seconds)**
Walk through each detected monster:
- 👻 **Ghost**: Unused variable `unusedVariable`
- 🧟 **Zombie**: Commented dead code
- 🧛 **Vampire**: Memory leaks from event listeners and intervals
- 😈 **Demon**: Security issues (eval, innerHTML)
- 🧙 **Witch**: Magic numbers (18, 100, 50)
- 💀 **Skeleton**: Empty functions

**4. Severity Levels (15 seconds)**
- Show color-coded severity badges
- Highlight critical issues (Demons) vs. low issues (Ghosts)

### Kiro Features (30 seconds)

**Show the `.kiro` directory:**
- **Specs**: Defined monster detection patterns
- **Steering**: Maintained Halloween theme consistency
- **Hooks**: Automated quality checks

"Built entirely with Kiro AI in under 2 hours using vibe coding, spec-driven development, and steering docs!"

## Sample Code to Demo

Use `example-cursed-code.js` or paste this live:

```javascript
function badCode() {
  const unused = "ghost";
  
  // Old code
  // return "zombie";
  
  fetch('/api/data')
    .then(r => r.json());
  
  eval('alert("demon")');
  
  if (x > 100) {
    document.innerHTML = data;
  }
}

function empty() {}
```

## Key Points to Emphasize

1. **Costume Contest Category**: Polished, themed UI
2. **Educational**: Makes code review fun and memorable
3. **Practical**: Real pattern detection for common issues
4. **Kiro-Powered**: Rapid development with AI assistance
5. **Open Source**: MIT licensed, ready to extend

## Video Recording Tips

- Record in 1080p or higher
- Show browser and code side-by-side
- Use smooth transitions
- Keep it under 3 minutes
- Add spooky background music (optional)
- Include text overlays for key features
