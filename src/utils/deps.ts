import { PackageParam } from "./package";

export const depsCharset: Record<string, Omit<PackageParam, "name">> = {
  router: {
    dependencies: {},
    devDependencies: {
      "react-router-dom": "^6.6.1",
    },
    scripts: {},
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
};

export const getDeps = (deps: string[]) =>
  deps.reduce<Omit<PackageParam, "name">>((pre, cur) => {
    const { dependencies, devDependencies, scripts } = depsCharset[cur] ?? {};

    pre.dependencies = { ...pre.dependencies, ...dependencies };
    pre.devDependencies = { ...pre.devDependencies, ...devDependencies };
    pre.scripts = { ...pre.scripts, ...scripts };

    return pre;
  }, {});
