import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals", 
    "plugin:@typescript-eslint/recommended",
    "next/typescript"
  ),
  {
    files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
    rules: {
      // Add any custom rules or overrides here
    },
  },
];

export default eslintConfig;
