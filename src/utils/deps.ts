import { PackageParam } from "./package";

export const optionalModules = [
  { title: "router", value: "router" },
  { title: "eslint", value: "eslint" },
  { title: "css in js", value: "cssinjs" },
];

export const depsCharset: Record<string, Omit<PackageParam, "name">> = {
  router: {
    devDependencies: {
      "react-router-dom": "^6.6.1",
    },
  },

  eslint: {
    devDependencies: {
      "vite-plugin-eslint": "^1.8.1",
      eslint: "^8.31.0",
      "@mmc-cloud/eslint-config": "^1.0.4",
    },
    scripts: {
      fix: "eslint --ext .js,.jsx,.ts,.tsx --fix --quiet ./",
    },
  },

  cssinjs: {
    devDependencies: {
      "@emotion/react": "^11.10.5",
    },
  },
};

export const getDeps = (deps: string[]) =>
  deps.reduce<Omit<PackageParam, "name">>((pre, cur) => {
    const { dependencies, devDependencies, scripts } = depsCharset[cur] ?? {};

    pre.dependencies = { ...pre.dependencies, ...dependencies };
    pre.devDependencies = { ...pre.devDependencies, ...devDependencies };
    pre.scripts = { ...pre.scripts, ...scripts };

    return pre;
  }, {});
