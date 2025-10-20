# Figma Inspector

A Figma plugin designed for learning and teaching Figma plugin development. This project serves as a practical example for workshops, demonstrating core concepts and best practices for building Figma plugins with TypeScript.

## What is Figma Inspector?

Figma Inspector is an educational plugin that helps developers understand how to interact with the Figma API. It demonstrates key plugin development concepts including:

- Node inspection and traversal
- Plugin UI creation
- Communication between plugin code and UI
- TypeScript integration in Figma plugins
- Working with the Figma Plugin API

This plugin is specifically designed as a teaching tool for workshops and can be used as a starting point for building your own Figma plugins.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/en/download/)
- **npm** (comes with Node.js)
- **TypeScript** - Install globally with `npm install -g typescript`
- **Code Editor** - We recommend [Visual Studio Code](https://code.visualstudio.com/)

## Getting Started

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/danielsalinasmerino/figma-inspector.git
   cd figma-inspector
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Figma plugin type definitions:
   ```bash
   npm install --save-dev @figma/plugin-typings
   ```

### Development Setup

#### Using Visual Studio Code (Recommended)

1. Open the project folder in VS Code
2. Run the build task:
   - Press `Cmd+Shift+B` (Mac) or `Ctrl+Shift+B` (Windows/Linux)
   - Select **"npm: watch"** from the list
   - This will compile TypeScript to JavaScript automatically on every save

#### Manual Compilation

If you prefer not to use VS Code, compile TypeScript manually:

```bash
npm run build
```

For watch mode:

```bash
npm run watch
```

### Loading the Plugin in Figma

1. Open Figma Desktop App
2. Go to **Plugins** → **Development** → **Import plugin from manifest...**
3. Select the `manifest.json` file from your project folder
4. The plugin will now appear in your Plugins menu

## Project Structure

```
figma-inspector/
├── manifest.json      # Plugin configuration and metadata
├── code.ts           # Main plugin logic (backend)
├── ui.html           # Plugin user interface
├── package.json      # Node.js dependencies and scripts
├── tsconfig.json     # TypeScript configuration
└── README.md         # This file
```

## Understanding the Code

### Plugin Backend (`code.ts`)

This file contains the main plugin logic that runs in the Figma plugin sandbox. It has access to the Figma document and API but cannot access browser APIs directly.

Key concepts demonstrated:

- Accessing the current selection
- Reading node properties
- Sending messages to the UI

### Plugin UI (`ui.html`)

The user interface runs in an iframe and has access to browser APIs but not the Figma document directly. Communication between the UI and the plugin code happens through message passing.

## Workshop Learning Path

If you're using this plugin for learning, here's a suggested path through the code:

1. **Start with `manifest.json`** - Understand plugin configuration
2. **Explore `code.ts`** - See how to interact with Figma's API
3. **Review `ui.html`** - Learn about plugin UI and messaging
4. **Experiment** - Modify the code and see what happens!

## Development Tips

- **Hot Reload**: The watch task automatically recompiles on file changes, but you'll need to close and reopen the plugin in Figma to see updates
- **Console Logging**: Use `console.log()` in `code.ts` - logs appear in Figma's plugin console (Plugins → Development → Open Console)
- **Debugging UI**: Right-click in the plugin UI and select "Inspect Element" to open browser DevTools
- **Type Definitions**: TypeScript will provide autocomplete for Figma API - explore what's available!

## Common Issues

**Plugin doesn't load**

- Ensure `manifest.json` is valid JSON
- Check that the `main` field in manifest points to the correct compiled JavaScript file

**TypeScript errors**

- Make sure `@figma/plugin-typings` is installed
- Check your `tsconfig.json` configuration

**Changes not reflecting**

- Close and reopen the plugin in Figma after recompiling
- Clear the plugin cache: Plugins → Development → Clear cache and restart

## Resources

- [Figma Plugin Documentation](https://www.figma.com/plugin-docs/)
- [Figma Plugin API Reference](https://www.figma.com/plugin-docs/api/api-reference/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Figma Community Plugins](https://www.figma.com/community/plugins) - Get inspired!

## Workshop Materials

This plugin is designed to be used in workshops teaching Figma plugin development. Feel free to fork this repository and modify it for your own learning or teaching purposes.

## Next Steps

After understanding this basic plugin structure, you can:

- Add more complex UI interactions
- Implement different node inspection features
- Create reusable components
- Add plugin storage capabilities
- Publish to the Figma Community

## Questions or Issues?

If you encounter any problems or have questions about plugin development, check the [Figma Plugin Documentation](https://www.figma.com/plugin-docs/) or the [Figma Community Forum](https://forum.figma.com/).

---

Built with ❤️ for learning Figma plugin development
