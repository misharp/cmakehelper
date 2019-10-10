# cmakehelper README

This plugin helps compiling C/C++ files using the common environment using cmake.

## Features

Enables f7 to build the current folder if you have a C or C++ file open, or if the file is called CMakeLists.txt

You can also right click on a folder or file in the explorer to build that folder.

## Extension Settings

This extension contributes the following settings:

* `cmakehelper.builddirectory`: Path to store the build files.

## Known Issues

Needs vscode to have been launched from an activated environment.

## Release Notes

### 0.0.1

Initial release of CmakeHelper. Relies heavily on the environment variables from the common environment.
