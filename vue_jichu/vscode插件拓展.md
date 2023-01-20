1. Vue 3 Snippets
2. Vetur
3. Path Autocomplete（@路径自动提示）
>Path autocomplete
并且在`拓展配置 -> setting.json`添加配置：
```json
// 导入文件时是否携带文件的拓展名
"path-autocomplete.extensionOnImport": true,
// 配置@的路径提示
"path-autocomplete.pathMappings": {
    "@": "${folder}/src"
},
```