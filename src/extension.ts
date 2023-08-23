// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
// async function formatCodeBlocks() {
//     const editor = vscode.window.activeTextEditor;

//     if (editor) {
//         const document = editor.document;
//         const text = document.getText();

//         // Patrón de bloque de código XML o JSON en Markdown
//         const pattern = /```(xml|json)\n([\s\S]*?)\n```/g;

//         const newText = text.replace(pattern, (_match, lang, code) => {
//             return `<code-group>\n<code-block title="${lang.toUpperCase()}" active>\n\`\`\`${lang}\n${code}\n\`\`\`\n</code-block>\n</code-group>`;
//         });

//         if (newText !== text) {
//             const edit = new vscode.WorkspaceEdit();
//             edit.replace(document.uri, new vscode.Range(0, 0, document.lineCount, 0), newText);
//             await vscode.workspace.applyEdit(edit);
//         }
//     }
// }
// async function formatCodeBlocks() {
//     const editor = vscode.window.activeTextEditor;

//     if (editor) {
//         const document = editor.document;
//         const text = document.getText();

//         // Patrón de bloque de código XML o JSON en Markdown
//         const pattern = /```(xml|json)\n([\s\S]*?)\n```/g;

//         const newText = text.replace(pattern, (_match, lang, code) => {
//             const isActive = lang === 'xml' ? ' active' : '';
//             return `<code-group>\n<code-block title="${lang.toUpperCase()}"${isActive}>\n\`\`\`${lang}\n${code}\n\`\`\`\n</code-block>\n</code-group>`;
//         });

//         if (newText !== text) {
//             const edit = new vscode.WorkspaceEdit();
//             edit.replace(document.uri, new vscode.Range(0, 0, document.lineCount, 0), newText);
//             await vscode.workspace.applyEdit(edit);
//         }
//     }
//}

// async function formatCodeBlocks() {
//     const editor = vscode.window.activeTextEditor;

//     if (editor) {
//         const document = editor.document;
//         const text = document.getText();

//         // Patrón de bloque de código XML o JSON en Markdown
//         const pattern = /```(xml|json)\n([\s\S]*?)\n```/g;

//         let newText = text.replace(pattern, (_match, lang, code) => {
//             const title = lang.toUpperCase();
//             const isActive = lang === 'xml' ? ' active' : '';
//             return `<code-group>\n<code-block title="${title}"${isActive}>\n\`\`\`${lang}\n${code}\n\`\`\`\n</code-block>`;
//         });

//         // Reemplazar el cierre de tags </code-group> con un único cierre
//         newText = newText.replace(/<\/code-block>\n<\/code-group>/g, '</code-block>\n</code-group>');

//         if (newText !== text) {
//             const edit = new vscode.WorkspaceEdit();
//             edit.replace(document.uri, new vscode.Range(0, 0, document.lineCount, 0), newText);
//             await vscode.workspace.applyEdit(edit);
//         }
//     }
// }



// async function formatCodeBlocks() {
//     const editor = vscode.window.activeTextEditor;

//     if (editor) {
//         const document = editor.document;
//         const text = document.getText();

//         // Patrón de bloque de código XML o JSON en Markdown
//         const pattern = /```(xml|json)\n([\s\S]*?)\n```/g;

//         let newText = text.replace(pattern, (_match, lang, code) => {
//             const title = lang.toUpperCase();
//             const isActive = lang === 'xml' ? ' active' : '';
//             return `<code-group>\n<code-block title="${title}"${isActive}>\n\`\`\`${lang}\n${code}\n\`\`\`\n</code-block>\n</code-group>`;
//         });

//          // Reemplazar secuencia "</code-group>\n<code-group>" por un espacio
//         newText = newText.replace(/<\/code-group>\n<code-group>/g, ' ');

//         // Reemplazar cierre de tag </code-group> seguido de apertura <code-group> por un espacio
//         newText = newText.replace(/<\/code-group>\s*<code-group>/g, ' ');
         
//         if (newText !== text) {
//             const edit = new vscode.WorkspaceEdit();
//             edit.replace(document.uri, new vscode.Range(0, 0, document.lineCount, 0), newText);
//             await vscode.workspace.applyEdit(edit);
//         }
//     }
// }

async function formatCodeBlocks() {
    const editor = vscode.window.activeTextEditor;

    if (editor) {
        const document = editor.document;
        const text = document.getText();

        // Patrón de bloque de código XML o JSON en Markdown
        const pattern = /```(xml|json)\n([\s\S]*?)\n```/g;

        let newText = text.replace(pattern, (_match, lang, code) => {
            const title = lang.toUpperCase();
            const isActive = lang === 'xml' ? ' active' : '';
            return `<code-group>\n<code-block title="${title}"${isActive}>\n\`\`\`${lang}\n${code}\n\`\`\`\n</code-block>\n</code-group>`;
        });

        // Reemplazar secuencia "</code-group>\n<code-group>" por un espacio
        newText = newText.replace(/<\/code-group>\n<code-group>/g, ' ');

        // Reemplazar cierre de tag </code-group> seguido de apertura <code-group> por un espacio
        newText = newText.replace(/<\/code-group>\s*<code-group>/g, ' ');

        if (newText !== text) {
            const edit = new vscode.WorkspaceEdit();
            edit.replace(document.uri, new vscode.Range(0, 0, document.lineCount, 0), newText);
            await vscode.workspace.applyEdit(edit);
        }
    }
}


export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "apibanking" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('apibanking.format', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Format documente md by ApiBanking v1!');
		formatCodeBlocks();
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
