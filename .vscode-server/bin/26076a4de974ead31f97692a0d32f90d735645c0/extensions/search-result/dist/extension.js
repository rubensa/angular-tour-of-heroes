!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(1),i=n(2),o=/^(\S.*):$/,a=/^(\s+)(\d+)(:| )(\s+)(.*)$/,c={language:"search-result"},l=["# Query:","# Flags:","# Including:","# Excluding:","# ContextLines:"],s=["RegExp","CaseSensitive","IgnoreExcludeSettings","WordMatch"];let u;function f(e,t){if(i.isAbsolute(e))return r.Uri.file(e);if(0===e.indexOf("~/"))return r.Uri.file(i.join(process.env.HOME,e.slice(2)));if(r.workspace.workspaceFolders){const n=/^(.*) • (.*)$/.exec(e);if(n){const[,e,t]=n,o=r.workspace.workspaceFolders.filter(t=>t.name===e)[0];if(o)return r.Uri.file(i.join(o.uri.fsPath,t))}else{if(1===r.workspace.workspaceFolders.length)return r.Uri.file(i.join(r.workspace.workspaceFolders[0].uri.fsPath,e));if("untitled"!==t.scheme){const n=r.workspace.workspaceFolders.filter(e=>t.toString().startsWith(e.uri.toString()))[0];if(n)return r.Uri.file(i.join(n.uri.fsPath,e))}}}console.error(`Unable to resolve path ${e}`)}t.activate=function(e){e.subscriptions.push(r.commands.registerCommand("searchResult.rerunSearch",()=>r.commands.executeCommand("search.action.rerunEditorSearch")),r.commands.registerCommand("searchResult.rerunSearchWithContext",()=>r.commands.executeCommand("search.action.rerunEditorSearchWithContext")),r.languages.registerDocumentSymbolProvider(c,{provideDocumentSymbols:(e,t)=>d(e,t).filter(g).map(e=>new r.DocumentSymbol(e.path,"",r.SymbolKind.File,e.allLocations.map(({originSelectionRange:e})=>e).reduce((e,t)=>e.union(t),e.location.originSelectionRange),e.location.originSelectionRange))}),r.languages.registerCompletionItemProvider(c,{provideCompletionItems(e,t){const n=e.lineAt(t.line);if(t.line>3)return[];if(0===t.character||1===t.character&&"#"===n.text){const n=Array.from({length:l.length}).map((t,n)=>e.lineAt(n).text);return l.filter(e=>n.every(t=>-1===t.indexOf(e))).map(e=>({label:e,insertText:e.slice(t.character)+" "}))}return-1===n.text.indexOf("# Flags:")?[]:s.filter(e=>-1===n.text.indexOf(e)).map(e=>({label:e,insertText:e+" "}))}},"#"),r.languages.registerDefinitionProvider(c,{provideDefinition(e,t,n){const i=d(e,n)[t.line];return i?"file"===i.type?[]:[{...i.location,targetSelectionRange:((e,t)=>e.with({start:new r.Position(e.start.line,Math.max(0,t-e.start.character)),end:new r.Position(e.end.line,Math.max(0,t-e.end.character))}))(i.location.targetSelectionRange,t.character-1)}]:[]}}),r.languages.registerDocumentLinkProvider(c,{provideDocumentLinks:async(e,t)=>d(e,t).filter(({type:e})=>"file"===e).map(({location:e})=>({range:e.originSelectionRange,target:e.targetUri}))}),r.window.onDidChangeActiveTextEditor(e=>{var t;"search-result"===(null===(t=e)||void 0===t?void 0:t.document.languageId)&&(u=void 0)}),{dispose(){u=void 0}})};const g=e=>"file"===e.type;function d(e,t){var n;if(u&&u.version===e.version)return u.parse;const i=e.getText().split(/\r?\n/),c=[];let l=void 0,s=void 0;for(let u=0;u<i.length;u++){if(t.isCancellationRequested)return[];const g=i[u],d=o.exec(g);if(d){const[,t]=d;if(!(l=f(t,e.uri)))continue;s=[];const n={targetRange:new r.Range(0,0,0,1),targetUri:l,originSelectionRange:new r.Range(u,0,u,g.length)};c[u]={type:"file",location:n,allLocations:s,path:t}}if(!l)continue;const p=a.exec(g);if(p){const[,e,t,i,o]=p,a=+t-1,f=(e+t+i+o).length,d=(e+t+i).length,m={targetRange:new r.Range(Math.max(a-3,0),0,a+3,g.length),targetSelectionRange:new r.Range(a,d,a,d),targetUri:l,originSelectionRange:new r.Range(u,f,u,g.length)};null===(n=s)||void 0===n||n.push(m),c[u]={type:"result",location:m}}}return u={version:e.version,parse:c},c}},function(e,t){e.exports=require("vscode")},function(e,t){e.exports=require("path")}]));
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/26076a4de974ead31f97692a0d32f90d735645c0/extensions/search-result/dist/extension.js.map