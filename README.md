##### VsCode 插件

```
Vue VSCode Snippets
Vue Official
Eslint
Prettier
stylelint
```

##### Node 版本 18+，安装pnpm

注意：接下来所有安装都要通过pnpm 安装！！

```
pnpm create vue@latest
```

```
pnpm i eslint-config-airbnb-base -D
pnpm i eslint-import-resolver-typescript -D
```

##### .eslintrc.cjs

```json
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'airbnb-base',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.*.json'
      }
    }
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }
    ],
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off'
  }
}
```

##### .eslintignore

```
dist
node_modules
public
.husky
.vscode
.idea
*.sh
*.md

.eslintrc.cjs
.prettierrc.json
.stylelintrc.cjs
```

##### env.d.ts

```tsx
/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}
```

执行npm run lint 可以整体检查效果了

##### stylelint 配置

```
pnpm i stylelint stylelint-config-standard stylelint-config-recommended-scss stylelint-config-recommended-vue postcss postcss-html postcss-scss stylelint-config-recess-order stylelint-config-html -D
```

##### .vscode配置

```
{
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit"
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "stylelint.validate": ["css", "scss", "less", "vue"]
}
```

.stylelintignore

```
dist
node_modules
public
.husky
.vscode
.idea
*.sh
*.md

stats.html
```

.stylelintrc

```
module.exports = {
  // 继承推荐规范配置
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-html/vue',
    'stylelint-config-recess-order'
  ],
  // 指定不同文件对应的解析器
  overrides: [
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html'
    },
    {
      files: ['**/*.{css,scss}'],
      customSyntax: 'postcss-scss'
    }
  ],
  // 自定义规则
  rules: {
    // 允许 global 、export 、v-deep等伪类
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'export', 'v-deep', 'deep']
      }
    ],
    'selector-class-pattern': null,
    // 'selector-no-vendor-prefix': null,
    // 'value-no-vendor-prefix': null,
    // 'alpha-value-notation': null,
    'color-function-notation': null,
    // 'rule-empty-line-before': null,
    'no-descending-specificity': null,
    // 'number-leading-zero': null,
    // 'declaration-block-no-redundant-longhand-properties': null,
    'font-family-no-missing-generic-family-keyword': null
  }
}

```
