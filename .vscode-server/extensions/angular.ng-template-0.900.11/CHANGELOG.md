# v0.900.11

This release upgrades `@angular/language-service` to v9.0.0.
For a complete change log see [here](https://github.com/angular/angular/blob/master/CHANGELOG.md#900-2020-02-06).

# v0.900.10

This release upgrades `@angular/language-service` to v9.0.0-rc.14.
For a complete change log see [here](https://github.com/angular/angular/blob/master/CHANGELOG.md#900-rc14-2020-02-03).

# v0.900.9

This release upgrades `@angular/language-service` to v9.0.0-rc.13.
For a complete change log see [here](https://github.com/angular/angular/blob/master/CHANGELOG.md#900-rc13-2020-02-01).

Bug fixes:
- more accurate and specific binding scopes (#598)
- check that a language service exists for discovered projects (#562)

# v0.900.8

This release upgrades `@angular/language-service` to v9.0.0-rc.12.
For a complete change log see [here](https://github.com/angular/angular/blob/master/CHANGELOG.md#900-rc12-2020-01-30).

New features:
- completions for output $event properties in (#34570) (2a53727)
- provide completion for $event variable (#34570) (c246787)
- provide hover for microsyntax in structural directive (#34847) (baf4a63)

Bug fixes:
- prune duplicate returned definitions (#34995) (71f5417)
- remove repeated symbol definitions for structural directive (#34847) (35916d3)
- warn, not error, on missing context members (#35036) (0e76821)
- enable debug mode only when it is strictly turned on

# v0.900.7

This release upgrades `@angular/language-service` to v9.0.0-rc.11.
For a complete change log see [here](https://github.com/angular/angular/blob/master/CHANGELOG.md#900-rc11-2020-01-24).

New features:
- Specific suggestions for template context diags (#34751) (cc7fca4)
- Support multiple symbol definitions (#34782) (2f2396c)

Bug fixes:
- Diagnostic span should point to class name (#34932) (c9db7bd)

# v0.900.6

This release upgrades `@angular/language-service` to v9.0.0-rc.10.
For a complete change log see [here](https://github.com/angular/angular/blob/master/CHANGELOG.md#900-rc10-2020-01-22).

It also upgrades `vscode-languageclient` and `vscode-languageserver` to major
version 6.

New features:
- Completions support for template reference variables
- Provide completion for $event variable
- Support hover/definitions for structural directive
- Add grammar for template bindings

# v0.900.5

This release upgrades `@angular/language-service` to v9.0.0-rc.9.
For a complete change log see [here](https://github.com/angular/angular/blob/master/CHANGELOG.md#900-rc9-2020-01-15).

It also upgrades `typescript` to v3.7.4.

New features:
- Support hover/definitions for structural directive
- More detailed grammar scopes for template property binding syntax
- Textmate grammar for template event bindings
- Reenable probing language service and tsserver from active workspace
- Priortize workspace version when resolving ts and ng
- Add grammar for two-way bindings
- Trigger autocomplete on '$' character
- Upgrade `vscode-jsonrpc` to major version v5

Bug fixes:
- Language service works with HTML without TS files open
- Fix CRLF offset in inline template
- Do not use an i18n parser for templates
- Require min typescript v3.7

# v0.900.4

This release upgrades `@angular/language-service` to v9.0.0-rc.8.
For a complete change log see [here](https://github.com/angular/angular/blob/master/CHANGELOG.md#900-rc8-2020-01-08).

New features:
- Append symbol type to hover tooltip (#34515) (381b895)
- Show documentation on hover (#34506) (1660095)
- Add textmate grammar for template property bindings

Bug fixes:
- completions after "let x of |" in ngFor (#34473) (ca8b584)
- correctly parse expressions in an attribute (#34517) (7a0d6e7)
- pipe method should not include parentheses (#34485) (2845596)
- whitelist all html elements

# v0.900.3

This release upgrades `@angular/language-service` to v9.0.0-rc.7.
For a complete change log see [here](https://github.com/angular/angular/blob/master/CHANGELOG.md#900-rc7-2019-12-18).

New features:
- add textmate grammar for inline CSS styles
- add syntax highlighting grammar for interpolations

Bug fixes:
- reset loading status when the language service fails to load the project
- correctly specify embedded languages in an Angular template
- HTML path should include last node before cursor
- Proper completions for properties and events

# v0.900.2

This release upgrades `@angular/language-service` to v9.0.0-rc.6.
For a complete change log see [here](https://github.com/angular/angular/blob/master/CHANGELOG.md#900-rc6-2019-12-11).

Bug fixes:
- Fixed accessing a string index signature using dot notation
- Remove `getExternalFiles()`
- Fixed JS primitive type name
- Simplify resolution logic in banner

# v0.900.1

Bug fixes:
- Fixed crash when extension is loaded in VSCode Insiders
- Fixed error message `No metadata found for component`
- Fixed indexed type errors in template
- Fixed error message `Unknown method "bind"`
- Fixed type of exported values in `ngFor`
- Fixed error message `Component is not included in a module`

New features:
- Syntax highlighting for inline templates
- Method completions now include parentheses at the end

# v0.900.0
This release is a substantial overhaul of the Angular language service that brings
significant performance improvements.

New features:
- Added "go to definition" for `templateUrl` and `styleUrls`.
- Hover tooltip now shows the `NgModule` a directive is declared in.
- Added `angular.ngdk` config for specifying location of `@angular/language-service`.
- Added vscode command to restart the extension.
- Display loading indicator while project is loading.
