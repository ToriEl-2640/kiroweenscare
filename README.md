# 👻 Kiroweenscare - Haunted Code Review

A spooky code analysis tool that transforms boring bug reports into a haunted experience. Built for the Kiroween Hackathon 2025.

## 🎃 Category
**Costume Contest** - A haunting user interface that makes code review unforgettable.

## 🦇 What It Does

Kiroweenscare analyzes your code and identifies common issues, presenting them as supernatural monsters:

- 👻 **Ghost** - Unused variables haunting your codebase
- 🧟 **Zombie** - Dead commented code that refuses to die
- 🧛 **Vampire** - Memory leaks draining your resources
- 😈 **Demon** - Critical security vulnerabilities
- 🧙 **Witch** - Magic numbers cursing your code
- 💀 **Skeleton** - Empty functions with no body

## 🔮 Features

- Real-time code analysis with spooky animations
- Severity-based issue categorization (Critical, High, Medium, Low)
- Dark, atmospheric UI with fog effects and flickering text
- Support for JavaScript, Python, Java, and more
- Line-by-line issue tracking
- Haunted statistics dashboard

## 🕷️ Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS with custom spooky animations
- **Analysis**: Regex-based pattern matching
- **Deployment**: Vercel/Netlify ready

## 🧪 How Kiro Was Used

### Vibe Coding
Used conversational development with Kiro to rapidly prototype the entire application in under 2 hours. Kiro helped:
- Generate the React component structure
- Create spooky CSS animations and effects
- Build the code analysis engine with regex patterns
- Design the monster categorization system

### Spec-Driven Development
Created detailed specs in `.kiro/specs/code-analyzer.md` defining:
- Monster types and detection patterns
- Severity levels and categorization
- Analysis output structure
- Implementation requirements

This spec-driven approach ensured consistent monster behavior and made it easy to extend with new detection patterns.

### Steering Docs
Implemented `.kiro/steering/spooky-theme.md` to maintain consistent Halloween theming:
- Defined spooky terminology (bugs → monsters, issues → hauntings)
- Established color palette and animation style
- Created emoji mapping for each monster type
- Set tone guidelines for playful-scary balance

### Agent Hooks
Created `.kiro/hooks/pre-commit.sh` to automate quality checks:
- Lint code before commits
- Detect console.log statements (Console Vampires!)
- Find TODO/FIXME comments
- Ensure code quality standards

## 🎬 Demo

**Live App:** https://kiroweenscare.vercel.app/

**GitHub:** https://github.com/ToriEl-2640/kiroweenscare

**Demo Video:** [Coming soon]

## 🚀 Installation

```bash
cd kiroweenscare-app
npm install
npm run dev
```

Visit `http://localhost:5173` to start haunting your code!

## 📦 Deployment

```bash
npm run build
# Deploy the dist/ folder to Vercel, Netlify, or any static host
```

## 🏆 Kiroween Hackathon

Built with ❤️ and 👻 for the Kiroween Hackathon 2025.

**Category**: Costume Contest  
**License**: MIT

## 🧛 Future Enhancements

- AI-powered suggestions for fixing each monster
- GitHub integration for automated PR reviews
- More monster types for additional code patterns
- Sound effects for each monster discovery
- Multiplayer "haunted code" challenges
- Export haunting reports as shareable images
