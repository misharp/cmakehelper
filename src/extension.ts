// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
var currentBuildPath = "";
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(vscode.commands.registerCommand('cmakehelper.getcurrentbuildpath' , GetCurrentBuildPath));

	context.subscriptions.push(vscode.commands.registerCommand('cmakehelper.setcurrentbuildpath' , (uri: vscode.Uri) => {
		SetCurrentBuildPath(uri);
		ConfigureCmake();
	}));
}

// this method is called when your extension is deactivated
export function deactivate() {}

function ConfigureCmake(){
	vscode.commands.executeCommand("cmake.configure");
}

async function GetCurrentBuildPath() {
	if (currentBuildPath === "" && vscode.workspace.workspaceFolders !== undefined){
		currentBuildPath = vscode.workspace.workspaceFolders[0].uri.fsPath;
	}
	return currentBuildPath;
}

function SetCurrentBuildPath(uri: vscode.Uri){
	const path = require('path');
	const fs = require('fs');
	var isDirectory: boolean | undefined = uri === undefined ? undefined : fs.lstatSync(uri.fsPath).isDirectory();

	if (isDirectory === true) {
		currentBuildPath = uri.fsPath;
    }
    else if (isDirectory === false) {
		currentBuildPath = path.dirname(uri.fsPath);
	}
}
