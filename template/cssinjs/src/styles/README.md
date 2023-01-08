## css in js  useing [@emotion/react](https://emotion.sh/docs/introduction)

Change the following configuration under


### vite.config.ts
```ts
import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
        compact: false,
      },
      include: ["**/*.tsx", "**/*.ts"],
    }),
  ],
})``;
```

### tsconfig.json

```json
  "compilerOptions": {
    "jsxImportSource": "@emotion/react",
  }
```

### If you need to configure eslint

```json
// .eslintrc
{
  "rules": {
    "react/no-unknown-property": ["error", { "ignore": ["css"] }]
  }
}
```