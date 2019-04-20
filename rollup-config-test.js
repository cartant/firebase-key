export default {
  external: ["chai"],
  input: "build/index-spec.js",
  output: {
    file: "bundles/firebase-key-test.umd.js",
    format: "umd",
    globals: { chai: "chai" }
  }
};
