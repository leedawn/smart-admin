import { build, defineConfig, InlineConfig, UserConfig } from "vite";
import { config } from "../vite.config";
import * as fs from "fs-extra";
import * as path from "path";

const buildAll = async () => {
  await build(defineConfig(config as UserConfig) as InlineConfig);

  const srcDir = path.resolve(__dirname, "../src/");
  fs.readdirSync(srcDir)
    .filter((name) => {
      const componentDir = path.resolve(srcDir, name);
      const isDir = fs.lstatSync(componentDir).includes("index.ts");
      return isDir && fs.readdirSync(componentDir).includes("index.ts");
    })
    .forEach(async (name) => {
      const outDir = path.resolve(config.build.outDir, name);
      const custom = {
        lib: {
          entry: path.resolve(srcDir, name),
          name,
          fileName: "index",
          formats: ["es", "umd"],
        },
        outDir,
      };
      Object.assign(config.build, custom);
      await build(defineConfig(config as UserConfig) as InlineConfig);
      fs.outputFile(
        path.resolve(outDir, "package.json"),
        `{
                "name":"smarty-ui-vite/${name}",
                "main":"index.umd.js",
                "module":'index.umd.js"
            }`,
        `utf-8`
      );
    });
};
buildAll();
