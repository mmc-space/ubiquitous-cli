export type PackageParam = Partial<{
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  scripts: Record<string, string>;
}> & { name: string };

export const generatePackage = (param: PackageParam) => {
  const { name, dependencies, devDependencies, scripts } = param;
  const template: Record<string, unknown> = {
    name,
    private: true,
    version: "0.0.0",
    type: "module",
    scripts: {
      dev: "vite",
      build: "tsc && vite build",
      preview: "vite preview",
      ...scripts,
    },
    dependencies: {
      react: "^18.2.0",
      "react-dom": "^18.2.0",
      ...dependencies,
    },
    devDependencies: {
      "@types/node": "^18.11.18",
      "@types/react": "^18.0.26",
      "@types/react-dom": "^18.0.9",
      "@vitejs/plugin-react": "^3.0.0",
      typescript: "^4.9.3",
      vite: "^4.0.0",
      ...devDependencies,
    },
  };

  return template;
};