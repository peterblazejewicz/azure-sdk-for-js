import nodeResolve from "rollup-plugin-node-resolve";
/**
 * @type {import('rollup').RollupFileOptions}
 */
const config = {
  input: './esm/containerServiceClient.js',
  external: ["ms-rest-js", "ms-rest-azure-js"],
  output: {
    file: "./dist/arm-containerservice.js",
    format: "umd",
    name: "Azure.ArmContainerservice",
    sourcemap: true,
    globals: {
      "ms-rest-js": "msRest",
      "ms-rest-azure-js": "msRestAzure"
    },
    banner: `/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */`
  },
  plugins: [
    nodeResolve({ module: true })
  ]
};
export default config;
