export default {
    dest: "bundles/firebase-key-test.umd.js",
    entry: "build/index-spec.js",
    external: ["chai"],
    format: "umd",
    globals: { chai: "chai" }
}
