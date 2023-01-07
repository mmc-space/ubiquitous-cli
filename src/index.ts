import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { red, reset } from "kolorist";
import prompts from "prompts";
import { resolve } from "node:path";
import { getDeps } from "./utils/deps";
import { generatePackage } from "./utils/package";

const defaultProjectName = "mmc-projcet";

const bootstrap = async () => {
  const result = await prompts(
    [
      // name
      {
        type: "text",
        name: "projectName",
        message: reset("Project name:"),
        initial: defaultProjectName,
      },
      // modules
      {
        type: "multiselect",
        name: "modules",
        message: "Select the required modules",
        instructions: false,
        choices: [
          { title: "router", value: "router" },
          { title: "eslint", value: "eslint" },
          { title: "css in js", value: "cssinjs" },
        ],
      },
    ],
    {
      onCancel: () => {
        throw new Error(red("✖") + " Operation cancelled");
      },
    }
  );

  const { modules, projectName } = result;

  if (existsSync(projectName)) {
    throw new Error(`${projectName} directory already exists`);
  }
  const projectDir = mkdirSync(projectName, { recursive: true })!;

  const deps = getDeps(modules as string[]);
  const packageJson = generatePackage({ name: projectName, ...deps });
  writeFileSync(
    resolve(projectDir, "package.json"),
    JSON.stringify(packageJson)
  );
};

bootstrap().catch((e) => {
  console.log("error", e);
});
