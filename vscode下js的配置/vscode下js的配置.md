
## 这是要依赖的插件
- JavaScript and TypeScript Nightly
- Prettier - Code formatter



## 这是vscode的具体配置
``` json
{
  "files.exclude": {
    "**/*.meta": true,
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/__pycache__": true
  },
  "eslint.codeAction.showDocumentation": {
    "enable": true
  },
  // Enable per-language

  // "editor.formatOnSave": true,
  "[javascript]": {
    // "editor.defaultFormatter": "vscode.typescript-language-features",
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "Vue.volar"
  },
  "[html]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.formatOnSave": true,
    // "editor.formatOnPaste": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  /*  prettier的配置 */
  "prettier.printWidth": 120, // 超过最大值换行
  "prettier.tabWidth": 2, // 缩进字节数
  "prettier.useTabs": false, // 缩进不使用tab，使用空格
  "prettier.semi": false, // 句尾不添加分号
  // "prettier.semi": true, // 句尾添加分号
  "prettier.singleQuote": true, // 使用单引号代替双引号
  // "prettier.proseWrap": "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  // "prettier.arrowParens": "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  // "prettier.bracketSpacing": true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  // "prettier.disableLanguages": ["vue"], // 不格式化vue文件，vue文件的格式化单独设置
  // "prettier.endOfLine": "auto", // 结尾是 \n \r \n\r auto
  // "prettier.eslintIntegration": false, //不让prettier使用eslint的代码格式进行校验
  // "prettier.htmlWhitespaceSensitivity": "ignore",
  // "prettier.ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
  // "prettier.jsxBracketSameLine": false, // 在jsx中把'>' 是否单独放一行
  // "prettier.jsxSingleQuote": false, // 在jsx中使用单引号代替双引号
  // "prettier.parser": "babylon", // 格式化的解析器，默认是babylon
  // "prettier.requireConfig": false, // Require a 'prettierconfig' to format prettier
  // "prettier.stylelintIntegration": false, //不让prettier使用stylelint的代码格式进行校验
  // "prettier.trailingComma": "es5", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  // "prettier.tslintIntegration": false, // 不让prettier使用tslint的代码格式进行校验

  "workbench.iconTheme": "Monokai Pro (Filter Machine) Icons",
  "workbench.preferredLightColorTheme": "Community Material Theme Lighter",
  "material-icon-theme.activeIconPack": "vue_vuex",
  "editor.accessibilityPageSize": 13,
  "editor.tokenColorCustomizations": {
    "comments": {
      // 设置字体样式 加粗 下划线 斜体等
      "fontStyle": "",
      // 设置字体颜色
      "foreground": "#4CAEE2"
    }, // 注释
    "keywords": "#0a0", // 关键字
    "variables": "#f00", // 变量名
    "strings": "#e2d75dbd", // 字符串
    "functions": "#5b99fcc9", // 函数名
    "numbers": "#AE81FF" // 数字
  },
  "workbench.colorCustomizations": {
    "statusBar.background": "#e2d75dbd",
    "statusBar.noFolderBackground": "#0a0",
    "statusBar.debuggingBackground": "#0a0"
  },

  "go.testFlags": [
    "-v",
    "-count=1" // 增加用以禁用测试缓存
  ],

  "C_Cpp.vcFormat.indent.caseContents": false,
  "C_Cpp.vcFormat.indent.lambdaBracesWhenParameter": false,
  "C_Cpp.vcFormat.indent.namespaceContents": false,
  "C_Cpp.vcFormat.newLine.beforeCatch": false,
  "C_Cpp.vcFormat.newLine.beforeElse": false,
  "C_Cpp.vcFormat.space.afterComma": false,
  "C_Cpp.vcFormat.space.afterKeywordsInControlFlowStatements": false,
  "C_Cpp.vcFormat.space.withinInitializerListBraces": false,
  "C_Cpp.vcFormat.space.removeAroundUnaryOperator": false,
  "C_Cpp.vcFormat.space.removeBeforeSemicolon": false,
  "C_Cpp.vcFormat.space.removeAroundMemberOperators": false,
  "C_Cpp.vcFormat.space.preserveInInitializerList": false,
  "C_Cpp.vcFormat.space.groupSquareBrackets": false,
  "C_Cpp.vcFormat.space.beforeInheritanceColon": false,
  "C_Cpp.vcFormat.space.beforeConstructorColon": false,
  "C_Cpp.vcFormat.space.beforeBlockOpenBrace": false,
  "security.workspace.trust.untrustedFiles": "open",
  "go.toolsManagement.autoUpdate": true,
  "explorer.confirmDelete": false,
  "diffEditor.ignoreTrimWhitespace": false,
  "cmake.configureOnOpen": true,

  "editor.fontSize": 14,
  "terminal.integrated.fontSize": 14,
  "git.enableSmartCommit": true,
  "git.confirmSync": false,
  "Lua.telemetry.enable": true,
  // "workbench.colorTheme": "Visual Studio Light - C++"

  "editor.minimap.maxColumn": 40,
  "python.linting.enabled": false,
  "debug.console.fontSize": 14,
  "mssql.resultsFontSize": 14,
  "editor.wordWrap": "on",
  "[nginx]": {
    "editor.defaultFormatter": "ahmadalli.vscode-nginx-conf"
  },
  "liveServer.settings.donotShowInfoMsg": true,
  "editor.stickyScroll.enabled": true,
  "window.zoomLevel": -1
}

```


