# Interactive Terminal Guide 🖥️

## Overview
Your portfolio now features a fully interactive command-line terminal that users can type commands into! It's styled like a MacOS terminal with navigation capabilities.

## Available Commands

### Navigation Commands
- **`cd home`** - Scroll to the Hero section (top of page)
- **`cd features`** - Scroll to the Features section
- **`cd defense`** - Stay on the Defense/Terminal section
- **`cd info`** - Scroll to the Info section
- **`cd contact`** - Scroll to the Contact form

### Information Commands
- **`help`** - Display all available commands
- **`ls`** - List all available sections to navigate to
- **`whoami`** - Display current user information
- **`status`** - Show system security status with stats
- **`clear`** - Clear the terminal screen

## Features

### ✨ Interactive Features
- **Real-time typing** - Type commands just like a real terminal
- **Command history** - Use ↑/↓ arrow keys to navigate through previous commands
- **Auto-complete** - Press Tab to auto-complete commands
- **Smooth scrolling** - Navigates to sections with smooth scroll animation
- **Color-coded output**:
  - 🟣 Purple = Your commands
  - ⚪ Gray = System output
  - 🔴 Red = Error messages

### 🎨 Terminal Design
- MacOS-style window with red, yellow, green buttons
- Black background with purple accents
- Custom scrollbar with purple theme
- Responsive design (works on mobile too!)
- Click anywhere on terminal to focus input

## How to Use

1. **Open your browser** → http://localhost:3000
2. **Scroll down** to the "Interactive Terminal Experience" section
3. **Click on the terminal** to focus it
4. **Type a command** (e.g., `help` or `cd home`)
5. **Press Enter** to execute

## Example Session

```bash
$ help
Available commands:
  cd <section>    - Navigate to a section
  ls              - List all available sections
  clear           - Clear terminal screen
  whoami          - Display current user info
  status          - Show system security status
  help            - Show this help message

$ ls
Available sections:
  📁 home
  📁 features
  📁 defense
  📁 info
  📁 contact

$ cd home
Navigating to home...

$ status
🛡️  System Security Status:
  ✔ Firewall: Active
  ✔ Antivirus: Running
  ✔ Encryption: Enabled
  ✔ Threats Blocked: 1,247
  ✔ Uptime: 99.99%
```

## Technical Details

### Files Created
- `components/ui/interactive-terminal.tsx` - Main interactive terminal component
- `components/ui/terminal.tsx` - Original animated terminal (still available)

### Section IDs Added
All sections now have IDs for navigation:
- `#hero` - Hero section
- `#features` - Features section
- `#defense` - Defense/Terminal section
- `#info` - Info section
- `#contact` - Contact section

## Customization

### Adding New Commands
Edit `components/ui/interactive-terminal.tsx` and add to the `commands` object:

```typescript
commands: {
  mycommand: (args: string[]) => {
    addOutput(["Your output here"]);
  }
}
```

### Adding New Sections
1. Add the section ID to your component: `<section id="newsection">`
2. Update the `sections` object in the terminal:
```typescript
const sections = {
  newsection: "newsection",
};
```

## Tips
- Try typing `status` for a cool security dashboard view
- Use `clear` if the terminal gets too full
- Press ↑ to quickly repeat the last command
- The terminal hint at the bottom helps new users get started

Enjoy your interactive terminal! 🚀

