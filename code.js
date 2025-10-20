"use strict";
////
////
// Display the plugin's user interface (UI)
// __html__ is a special variable that contains the content of the ui.html file
// This creates an iframe in Figma where the HTML UI will be rendered
figma.showUI(__html__);
////
// Object to organize all Figma event handlers
const figmaOn = {
    // Handle selection changes in Figma
    selectionChange: () => {
        const { selection } = figma.currentPage;
        if (selection.length) {
            const node = selection[0];
            const nodeInfo = {
                id: node.id,
                name: node.name,
                type: node.type,
            };
            // Only extract CSS properties for TEXT elements
            if (node.type === "TEXT") {
                nodeInfo.characters = node.characters;
                // Extract CSS-related properties from TEXT node
                const fontName = node.fontName;
                const fontWeight = typeof fontName === "object" ? fontName.style : "normal";
                nodeInfo.cssProperties = {
                    fontSize: node.fontSize,
                    fontName,
                    fontWeight,
                    letterSpacing: node.letterSpacing,
                    lineHeight: node.lineHeight,
                    textAlignHorizontal: node.textAlignHorizontal,
                    textAlignVertical: node.textAlignVertical,
                    textDecoration: node.textDecoration,
                    textCase: node.textCase,
                    fills: node.fills,
                    opacity: node.opacity,
                    blendMode: node.blendMode,
                };
            }
            figma.ui.postMessage(nodeInfo);
        }
        else {
            figma.ui.postMessage({ message: "No selection" });
        }
    },
    // Handle messages from the UI
    uiMessage: (uiMessage) => {
        console.log("Received message from UI:", uiMessage);
    },
};
////
// Set up all event listeners using the organized handlers
figma.on("selectionchange", figmaOn.selectionChange);
figma.ui.onmessage = figmaOn.uiMessage;
