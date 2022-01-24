const path = require('path')

const nextEnv = require("@next/env");


nextEnv.loadEnvConfig(process.cwd());

// CAREFUL before adding more presets, next/babel already includes some
// see https://nextjs.org/docs/advanced-features/customizing-babel-config
module.exports = {
  ignore: [".yarn", ".pnp.js"],
  presets: ["next/babel"],
  plugins: [
    ["module-resolver", {
      alias: {
        public: path.resolve(__dirname, 'public'),
        project: process.env.PROJECT_PATH
      }
    }]
  ]
}
