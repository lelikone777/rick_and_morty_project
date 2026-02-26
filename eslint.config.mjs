import nextVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier";

const config = [
  ...nextVitals,
  {
    rules: prettier.rules,
  },
];

export default config;
