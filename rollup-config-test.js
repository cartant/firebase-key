export default {
    external: ["chai"],
    globals: { chai: "chai" },
    input: "build/index-spec.js",
    output: {
        file: "bundles/firebase-key-test.umd.js",
        format: "umd"
    }
}
