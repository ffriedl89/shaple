/* eslint-env commonjs */
module.exports = {
  "env": {
      "test": {
          "presets": [[
              "@babel/preset-typescript"
          ], [
              "@babel/preset-react", {
                  "runtime": "automatic"
              }
          ], [
              "@linaria"
          ]]
      }
  },
  presets: [[
      "@babel/preset-env", {
          "targets": {
              "node": "current"
          }
      }
  ]]
};