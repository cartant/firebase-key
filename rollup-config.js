export default {
    input: "dist/esm5/index.js",
    output: {
        banner: "/*MIT license https://github.com/cartant/firebase-key/blob/master/LICENSE*/",
        file: "bundles/firebase-key.umd.js",
        format: "umd",
        name: "firebaseKey"
    }
}
